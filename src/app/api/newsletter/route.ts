import { createHmac } from "node:crypto";
import { and, eq, gt } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "@/db/client";
import { auditLogs, newsletterSubscribers, rateLimits } from "@/db/schema";

export const runtime = "nodejs";

const bodySchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
  consent: z.literal(true),
  company: z.string().max(200).optional().default(""),
});

function permittedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  const allowed = new Set([new URL(request.url).origin]);
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    try { allowed.add(new URL(process.env.NEXT_PUBLIC_SITE_URL).origin); } catch { /* configuração inválida não amplia acesso */ }
  }
  if (process.env.VERCEL_URL) allowed.add(`https://${process.env.VERCEL_URL}`);
  return allowed.has(origin);
}

function hashIp(request: Request) {
  const secret = process.env.DATA_HASH_SECRET;
  if (!secret || secret.length < 32) return null;
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  return createHmac("sha256", secret).update(ip).digest("hex");
}

export async function POST(request: Request) {
  if (!permittedOrigin(request)) return Response.json({ ok: false, message: "Origem não autorizada." }, { status: 403 });
  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > 4096) return Response.json({ ok: false, message: "Requisição inválida." }, { status: 413 });

  let input: unknown;
  try { input = await request.json(); } catch { return Response.json({ ok: false, message: "Dados inválidos." }, { status: 400 }); }
  const parsed = bodySchema.safeParse(input);
  if (!parsed.success) return Response.json({ ok: false, message: "Confira o e-mail e o consentimento." }, { status: 400 });
  if (parsed.data.company) return Response.json({ ok: true });

  const db = getDb();
  if (!db) return Response.json({ ok: false, message: "Cadastro temporariamente indisponível." }, { status: 503 });

  const ipHash = hashIp(request);
  if (!ipHash && process.env.NODE_ENV === "production") {
    console.error("DATA_HASH_SECRET ausente ou curto; cadastro bloqueado por segurança.");
    return Response.json({ ok: false, message: "Cadastro temporariamente indisponível." }, { status: 503 });
  }

  if (ipHash) {
    const now = new Date();
    const [current] = await db.select().from(rateLimits).where(and(eq(rateLimits.keyHash, ipHash), gt(rateLimits.expiresAt, now))).limit(1);
    if (current?.hits && current.hits >= 5) {
      return Response.json({ ok: false, message: "Muitas tentativas. Aguarde alguns minutos." }, { status: 429, headers: { "Retry-After": "900" } });
    }
    const expiresAt = new Date(now.getTime() + 15 * 60 * 1000);
    await db.insert(rateLimits).values({ keyHash: ipHash, hits: 1, windowStartedAt: now, expiresAt }).onConflictDoUpdate({
      target: rateLimits.keyHash,
      set: current ? { hits: current.hits + 1 } : { hits: 1, windowStartedAt: now, expiresAt },
    });
  }

  const now = new Date();
  const [subscriber] = await db.insert(newsletterSubscribers).values({
    email: parsed.data.email,
    status: "active",
    source: "site",
    consentedAt: now,
    ipHash,
    userAgent: request.headers.get("user-agent")?.slice(0, 500) ?? null,
    updatedAt: now,
  }).onConflictDoUpdate({
    target: newsletterSubscribers.email,
    set: { status: "active", consentedAt: now, unsubscribedAt: null, ipHash, updatedAt: now },
  }).returning({ id: newsletterSubscribers.id });

  await db.insert(auditLogs).values({ actor: "public-newsletter", action: "subscribe", entityType: "newsletter_subscriber", entityId: subscriber.id });
  return Response.json({ ok: true, message: "Cadastro realizado com sucesso." }, { status: 201, headers: { "Cache-Control": "no-store" } });
}
