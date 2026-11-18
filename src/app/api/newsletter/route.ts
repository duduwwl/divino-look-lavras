import { z } from "zod";
import { getDb } from "@/db/client";
import { auditLogs, newsletterSubscribers } from "@/db/schema";
import { hashIp, hitRateLimit, json, permittedOrigin } from "@/lib/api-guard";
import { encryptPersonalData, normalizeEmail, personalDataIndex } from "@/lib/personal-data";
import { readLimitedJson, RequestBodyError } from "@/lib/request-security";

export const runtime = "nodejs";

const bodySchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
  consent: z.literal(true),
  company: z.string().max(200).optional().default(""),
}).strict();

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
      if ((await hitRateLimit(db, ipHash)) > 5) return json({ ok: false, message: "Muitas tentativas. Aguarde alguns minutos." }, { status: 429, headers: { "Retry-After": "900" } });
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
