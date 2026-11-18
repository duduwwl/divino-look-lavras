import "server-only";
import { createHmac } from "node:crypto";
import { lte, sql } from "drizzle-orm";
import type { getDb } from "@/db/client";
import { rateLimits } from "@/db/schema";

type Db = NonNullable<ReturnType<typeof getDb>>;

export function permittedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  const allowed = new Set<string>();
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    try { allowed.add(new URL(process.env.NEXT_PUBLIC_SITE_URL).origin); } catch { /* configuração inválida não amplia acesso */ }
  }
  if (process.env.VERCEL_URL) allowed.add(`https://${process.env.VERCEL_URL}`);
  allowed.add("https://divinolooklavras.com.br");
  allowed.add("https://www.divinolooklavras.com.br");
  if (process.env.NODE_ENV !== "production") allowed.add(new URL(request.url).origin);
  return allowed.has(origin);
}

export function json(body: Record<string, unknown>, init?: ResponseInit) {
  const headers = new Headers(init?.headers);
  headers.set("Cache-Control", "no-store");
  return Response.json(body, { ...init, headers });
}

/** scope separa os contadores por rota; a newsletter usa "" para manter as chaves antigas. */
export function hashIp(request: Request, scope = "") {
  const secret = process.env.DATA_HASH_SECRET;
  if (!secret || secret.length < 32) return null;
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  return createHmac("sha256", secret).update(scope + ip).digest("hex");
}

/** Conta uma tentativa na janela de 15 minutos e devolve o total atual. */
export async function hitRateLimit(db: Db, keyHash: string) {
  const now = new Date();
  const expiresAt = new Date(now.getTime() + 15 * 60 * 1000);
  await db.delete(rateLimits).where(lte(rateLimits.expiresAt, now));
  const [limit] = await db.insert(rateLimits).values({ keyHash, hits: 1, windowStartedAt: now, expiresAt }).onConflictDoUpdate({
    target: rateLimits.keyHash,
    set: {
      hits: sql`case when ${rateLimits.expiresAt} <= ${now} then 1 else ${rateLimits.hits} + 1 end`,
      windowStartedAt: sql`case when ${rateLimits.expiresAt} <= ${now} then ${now} else ${rateLimits.windowStartedAt} end`,
      expiresAt: sql`case when ${rateLimits.expiresAt} <= ${now} then ${expiresAt} else ${rateLimits.expiresAt} end`,
    },
  }).returning({ hits: rateLimits.hits });
  return limit.hits;
}
