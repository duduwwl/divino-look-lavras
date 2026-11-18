import { eq, sql } from "drizzle-orm";
import { getCatalogData } from "@/db/catalog";
import { getDb } from "@/db/client";
import { orderItems, orders } from "@/db/schema";
import { hashIp, hitRateLimit, json, permittedOrigin } from "@/lib/api-guard";
import { checkoutSchema, priceCart } from "@/lib/checkout";
import { createPreference, mercadoPagoToken } from "@/lib/mercadopago";
import { readLimitedJson, RequestBodyError } from "@/lib/request-security";

export const runtime = "nodejs";

const unavailable = () => json({ ok: false, message: "Pagamento online indisponível agora. Finalize pelo WhatsApp." }, { status: 503 });

export async function POST(request: Request) {
  if (!permittedOrigin(request)) return json({ ok: false, message: "Origem não autorizada." }, { status: 403 });

  let input: unknown;
  try {
    input = await readLimitedJson(request, 16_384);
  } catch (error) {
    const status = error instanceof RequestBodyError ? error.status : 400;
    return json({ ok: false, message: "Sacola inválida." }, { status });
  }
  const parsed = checkoutSchema.safeParse(input);
  if (!parsed.success) return json({ ok: false, message: "Sacola inválida. Atualize a página e tente de novo." }, { status: 400 });

  const db = getDb();
  if (!db || !mercadoPagoToken()) return unavailable();

  const ipHash = hashIp(request, "checkout:");
  if (!ipHash && process.env.NODE_ENV === "production") {
    console.error("DATA_HASH_SECRET ausente ou curto; checkout bloqueado por segurança.");
    return unavailable();
  }

  let orderId: string | null = null;
  try {
    if (ipHash && (await hitRateLimit(db, ipHash)) > 10) {
      return json({ ok: false, message: "Muitas tentativas. Aguarde alguns minutos." }, { status: 429, headers: { "Retry-After": "900" } });
    }

    const { products } = await getCatalogData();
    const priced = priceCart(products, parsed.data.items);
    if ("error" in priced) return json({ ok: false, message: priced.error }, { status: 409 });

    const [order] = await db.insert(orders).values({
      status: "pending_payment",
      totalCents: priced.totalCents,
      channel: "mercadopago",
      metadata: { delivery: parsed.data.delivery },
    }).returning({ id: orders.id });
    orderId = order.id;

    await db.insert(orderItems).values(priced.lines.map((line) => ({
      orderId: order.id,
      productId: line.productId,
      productName: line.title,
      size: line.size,
      color: line.color,
      unitPriceCents: line.unitPriceCents,
      quantity: line.quantity,
    })));

    const origin = request.headers.get("origin")!;
    const preference = await createPreference({ orderId: order.id, origin, lines: priced.lines });
    await db.update(orders).set({
      updatedAt: new Date(),
      metadata: sql`${orders.metadata} || ${JSON.stringify({ preferenceId: preference.id })}::jsonb`,
    }).where(eq(orders.id, order.id));

    return json({ ok: true, url: preference.initPoint }, { status: 201 });
  } catch (error) {
    console.error("Falha ao iniciar o checkout.", error instanceof Error ? error.message : "Erro desconhecido");
    if (orderId) await db.update(orders).set({ status: "checkout_failed", updatedAt: new Date() }).where(eq(orders.id, orderId)).catch(() => {});
    return unavailable();
  }
}
