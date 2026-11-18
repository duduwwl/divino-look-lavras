import "server-only";
import { eq, sql } from "drizzle-orm";
import type { getDb } from "@/db/client";
import { auditLogs, orders } from "@/db/schema";
import { orderStatusFor, type PricedLine } from "@/lib/checkout";

type Db = NonNullable<ReturnType<typeof getDb>>;

const API = "https://api.mercadopago.com";
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function mercadoPagoToken() {
  const token = process.env.MERCADOPAGO_ACCESS_TOKEN;
  return token && token.length > 20 ? token : null;
}

async function mpFetch(path: string, init: RequestInit = {}) {
  const token = mercadoPagoToken();
  if (!token) throw new Error("MERCADOPAGO_ACCESS_TOKEN não foi definida.");
  const headers = new Headers(init.headers);
  headers.set("Authorization", `Bearer ${token}`);
  headers.set("Content-Type", "application/json");
  const response = await fetch(`${API}${path}`, { ...init, headers, cache: "no-store", signal: AbortSignal.timeout(10_000) });
  if (!response.ok) throw new Error(`Mercado Pago respondeu ${response.status} em ${path.split("?")[0]}`);
  return response.json() as Promise<Record<string, unknown>>;
}

export async function createPreference(opts: { orderId: string; origin: string; lines: PricedLine[] }) {
  const absolute = (src?: string) => {
    if (!src) return undefined;
    try { return new URL(src, opts.origin).toString(); } catch { return undefined; }
  };
  // Mercado Pago só aceita retorno automático e notificações em endereço público https.
  const isPublic = opts.origin.startsWith("https://") && !/localhost|127\.0\.0\.1/.test(opts.origin);
  const back = `${opts.origin}/pedido/`;
  const preference = await mpFetch("/checkout/preferences", {
    method: "POST",
    headers: { "X-Idempotency-Key": opts.orderId },
    body: JSON.stringify({
      items: opts.lines.map((line) => ({
        id: line.productId,
        title: line.title,
        picture_url: absolute(line.image),
        category_id: "fashion",
        quantity: line.quantity,
        currency_id: "BRL",
        unit_price: line.unitPriceCents / 100,
      })),
      external_reference: opts.orderId,
      back_urls: { success: back, pending: back, failure: back },
      ...(isPublic ? { auto_return: "approved", notification_url: `${opts.origin}/api/mercadopago/webhook/?source_news=webhooks` } : {}),
      statement_descriptor: "DIVINOLOOK",
    }),
  });
  const initPoint = preference.init_point;
  if (typeof initPoint !== "string" || !initPoint.startsWith("https://")) throw new Error("Preferência sem init_point.");
  return { id: String(preference.id), initPoint };
}

/**
 * Lê o pagamento direto na API (fonte confiável) e atualiza o pedido.
 * Usado pelo webhook e pela página de retorno; é idempotente.
 */
export async function syncPayment(db: Db, paymentId: string) {
  if (!/^\d{1,20}$/.test(paymentId)) return null;
  const payment = await mpFetch(`/v1/payments/${paymentId}`);
  const orderId = String(payment.external_reference ?? "");
  if (!UUID.test(orderId)) return null;

  const [order] = await db.select().from(orders).where(eq(orders.id, orderId)).limit(1);
  if (!order) return null;

  const paymentStatus = String(payment.status ?? "");
  let status = orderStatusFor(paymentStatus);
  const amountCents = Math.round(Number(payment.transaction_amount) * 100);
  if (status === "paid" && (amountCents !== order.totalCents || payment.currency_id !== "BRL")) status = "review";

  // Uma tentativa recusada antiga não pode desfazer um pedido já pago; só o estorno do próprio pagamento muda isso.
  const paidWith = (order.metadata as Record<string, unknown>).paymentId;
  if (order.status === "paid" && !(status === "refunded" && paidWith === paymentId)) return { order, status: order.status };
  if (order.status === status && paidWith === paymentId) return { order, status };

  await db.update(orders).set({
    status,
    updatedAt: new Date(),
    metadata: sql`${orders.metadata} || ${JSON.stringify({ paymentId, paymentStatus, paymentMethod: payment.payment_type_id ?? null })}::jsonb`,
  }).where(eq(orders.id, orderId));
  await db.insert(auditLogs).values({ actor: "mercadopago", action: `payment_${paymentStatus || "unknown"}`, entityType: "order", entityId: orderId, payload: { paymentId, status } });
  return { order, status };
}
