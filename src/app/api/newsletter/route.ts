import { createHmac } from "node:crypto";
import { lte, sql } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "@/db/client";
import { auditLogs, newsletterSubscribers, rateLimits } from "@/db/schema";
import { encryptPersonalData, normalizeEmail, personalDataIndex } from "@/lib/personal-data";
import { readLimitedJson, RequestBodyError } from "@/lib/request-security";

export const runtime = "nodejs";

const bodySchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
  consent: z.literal(true),
  company: z.string().max(200).optional().default(""),
}).strict();

function permittedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  const allowed = new Set<string>();
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    try { allowed.add(new URL(process.env.NEXT_PUBLIC_SITE_URL).origin); } catch { /* configuração inválida não amplia acesso */ }
  }
  if (process.env.VERCEL_URL) allowed.add(`https://${process.env.VERCEL_URL}`);
  if (process.env.NODE_ENV !== "production") allowed.add(new URL(request.url).origin);
  return allowed.has(origin);
}

function json(body: Record<string, unknown>, init?: ResponseInit) {
  const headers = new Headers(init?.headers);
  headers.set("Cache-Control", "no-store");
  return Response.json(body, { ...init, headers });
}

function hashIp(request: Request) {
  const secret = process.env.DATA_HASH_SECRET;
  if (!secret || secret.length < 32) return null;
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  return createHmac("sha256", secret).update(ip).digest("hex");
}

export async function POST(request: Request) {
  if (!permittedOrigin(request)) return json({ ok: false, message: "Origem não autorizada." }, { status: 403 });

  let input: unknown;
  try {
    input = await readLimitedJson(request);
  } catch (error) {
    const status = error instanceof RequestBodyError ? error.status : 400;
    return json({ ok: false, message: status === 413 ? "Requisição inválida." : "Dados inválidos." }, { status });
  }
  const parsed = bodySchema.safeParse(input);
  if (!parsed.success) return json({ ok: false, message: "Confira o e-mail e o consentimento." }, { status: 400 });
  if (parsed.data.company) return json({ ok: true });

  const db = getDb();
  if (!db) return json({ ok: false, message: "Cadastro temporariamente indisponível." }, { status: 503 });

  const ipHash = hashIp(request);
  if (!ipHash && process.env.NODE_ENV === "production") {
    console.error("DATA_HASH_SECRET ausente ou curto; cadastro bloqueado por segurança.");
    return json({ ok: false, message: "Cadastro temporariamente indisponível." }, { status: 503 });
  }

  try {
    if (ipHash) {
      const now = new Date();
      const expiresAt = new Date(now.getTime() + 15 * 60 * 1000);
      await db.delete(rateLimits).where(lte(rateLimits.expiresAt, now));
      const [limit] = await db.insert(rateLimits).values({ keyHash: ipHash, hits: 1, windowStartedAt: now, expiresAt }).onConflictDoUpdate({
        target: rateLimits.keyHash,
        set: {
          hits: sql`case when ${rateLimits.expiresAt} <= ${now} then 1 else ${rateLimits.hits} + 1 end`,
          windowStartedAt: sql`case when ${rateLimits.expiresAt} <= ${now} then ${now} else ${rateLimits.windowStartedAt} end`,
          expiresAt: sql`case when ${rateLimits.expiresAt} <= ${now} then ${expiresAt} else ${rateLimits.expiresAt} end`,
        },
      }).returning({ hits: rateLimits.hits });
      if (limit.hits > 5) return json({ ok: false, message: "Muitas tentativas. Aguarde alguns minutos." }, { status: 429, headers: { "Retry-After": "900" } });
    }

    const now = new Date();
    const email = normalizeEmail(parsed.data.email);
    const emailHash = personalDataIndex(email);
    const [subscriber] = await db.insert(newsletterSubscribers).values({
      emailEncrypted: encryptPersonalData(email),
      emailHash,
      status: "active",
      source: "site",
      consentedAt: now,
      ipHash: null,
      userAgent: null,
      updatedAt: now,
    }).onConflictDoUpdate({
      target: newsletterSubscribers.emailHash,
      set: { status: "active", consentedAt: now, unsubscribedAt: null, ipHash: null, userAgent: null, updatedAt: now },
    }).returning({ id: newsletterSubscribers.id });

    await db.insert(auditLogs).values({ actor: "public-newsletter", action: "subscribe", entityType: "newsletter_subscriber", entityId: subscriber.id });
    return json({ ok: true, message: "Cadastro realizado com sucesso." }, { status: 201 });
  } catch (error) {
    console.error("Falha no cadastro da newsletter.", error instanceof Error ? error.message : "Erro desconhecido");
    return json({ ok: false, message: "Cadastro temporariamente indisponível." }, { status: 503 });
  }
}
