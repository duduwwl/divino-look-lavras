import type { Metadata } from "next";
import Link from "next/link";
import { eq } from "drizzle-orm";
import { getDb } from "@/db/client";
import { orderItems, orders } from "@/db/schema";
import { ClearCart } from "@/components/cart/clear-cart";
import { orderCode } from "@/lib/checkout";
import { deliveryOptions, type Delivery } from "@/lib/delivery";
import { formatBRL } from "@/lib/format";
import { mercadoPagoToken, syncPayment } from "@/lib/mercadopago";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Seu pedido",
  robots: { index: false, follow: false },
};

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const copy: Record<string, { title: string; text: string }> = {
  paid: { title: "Pagamento aprovado!", text: "Recebemos seu pagamento. Envie o número do pedido pelo WhatsApp para combinarmos a retirada ou o envio." },
  pending_payment: { title: "Pagamento em análise", text: "Assim que o Mercado Pago confirmar (Pix e boleto podem levar alguns minutos), seu pedido segue para separação." },
  payment_failed: { title: "Pagamento não concluído", text: "Nada foi cobrado. Suas peças continuam na sacola para tentar de novo ou finalizar pelo WhatsApp." },
  review: { title: "Pedido em conferência", text: "Recebemos o pagamento e a equipe vai conferir os dados do pedido com você pelo WhatsApp." },
  refunded: { title: "Pagamento estornado", text: "Este pedido foi estornado. Fale com a loja pelo WhatsApp se tiver dúvidas." },
};

type Search = Promise<Record<string, string | string[] | undefined>>;

export default async function OrderPage({ searchParams }: { searchParams: Search }) {
  const sp = await searchParams;
  const one = (k: string) => (typeof sp[k] === "string" ? (sp[k] as string) : "");
  const orderId = one("external_reference");
  const paymentId = one("payment_id") || one("collection_id");
  const db = getDb();

  let order: typeof orders.$inferSelect | undefined;
  let lines: (typeof orderItems.$inferSelect)[] = [];
  if (db && UUID.test(orderId)) {
    // Confirma o pagamento direto na API: a página não confia no status da URL.
    if (paymentId && mercadoPagoToken()) {
      await syncPayment(db, paymentId).catch((error) =>
        console.error("Falha ao confirmar pagamento no retorno.", error instanceof Error ? error.message : "Erro desconhecido"),
      );
    }
    [order] = await db.select().from(orders).where(eq(orders.id, orderId)).limit(1);
    if (order) lines = await db.select().from(orderItems).where(eq(orderItems.orderId, order.id));
  }

  if (!order) {
    return (
      <div className="frame flex min-h-[70svh] flex-col justify-center py-20">
        <h1 className="font-display text-[2.6rem] leading-tight">Pedido não encontrado.</h1>
        <p className="mt-2 max-w-[46ch] text-muted">Se você pagou, o comprovante está no e-mail do Mercado Pago. Fale com a loja pelo WhatsApp.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <a href={whatsappLink("Olá, Divino Look! Fiz um pagamento pelo site e preciso de ajuda com o pedido.")} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
            Falar no WhatsApp
          </a>
          <Link href="/produtos" className="btn btn-sand">Ver produtos</Link>
        </div>
      </div>
    );
  }

  const code = orderCode(order.id);
  const delivery = (order.metadata as { delivery?: Delivery }).delivery ?? "retirada";
  const status = copy[order.status] ? order.status : "pending_payment";
  // Pedido pago ou aguardando Pix/boleto já foi criado: a sacola pode ser esvaziada.
  const clearCart = status === "paid" || status === "review" || (status === "pending_payment" && Boolean(paymentId));
  const message = [
    `Olá, Divino Look! Fiz o pedido #${code} pelo site (${copy[status].title.toLowerCase()}).`,
    "",
    ...lines.map((l) => `• ${l.quantity}x ${l.productName}`),
    "",
    `Total pago no site: ${formatBRL(order.totalCents / 100)}`,
    `Entrega: ${deliveryOptions[delivery]}`,
  ].join("\n");

  return (
    <div className="frame flex min-h-[70svh] flex-col justify-center py-20">
      {clearCart ? <ClearCart /> : null}
      <p className="text-[0.875rem] text-muted">Pedido #{code}</p>
      <h1 className="mt-2 font-display text-[2.6rem] leading-tight">{copy[status].title}</h1>
      <p className="mt-2 max-w-[52ch] text-muted">{copy[status].text}</p>
      <ul className="mt-6 flex max-w-[52ch] flex-col gap-1">
        {lines.map((l) => (
          <li key={l.id} className="flex justify-between gap-4">
            <span>{l.quantity}x {l.productName}</span>
            <span className="tabular-nums">{formatBRL((l.unitPriceCents * l.quantity) / 100)}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 max-w-[52ch] font-semibold">Total: {formatBRL(order.totalCents / 100)}</p>
      <p className="mt-1 max-w-[52ch] text-[0.875rem] text-muted">Entrega: {deliveryOptions[delivery]}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
          Enviar pedido pelo WhatsApp
        </a>
        <Link href="/produtos" className="btn btn-sand">Continuar comprando</Link>
      </div>
    </div>
  );
}
