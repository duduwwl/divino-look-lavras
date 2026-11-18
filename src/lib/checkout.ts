import { createHmac, timingSafeEqual } from "node:crypto";
import { z } from "zod";
import type { Product } from "@/types/product";

export const MAX_CHECKOUT_LINES = 30;

export const checkoutSchema = z.object({
  delivery: z.enum(["retirada", "envio"]),
  items: z.array(z.object({
    productId: z.string().min(1).max(120),
    size: z.string().min(1).max(20),
    color: z.string().min(1).max(60),
    quantity: z.number().int().min(1).max(10),
    purchaseOption: z.string().max(120).optional(),
  }).strip()).min(1).max(MAX_CHECKOUT_LINES),
}).strict();
export type CheckoutInput = z.infer<typeof checkoutSchema>;

export type PricedLine = {
  productId: string;
  title: string;
  image?: string;
  size: string;
  color: string;
  quantity: number;
  unitPriceCents: number;
};

/** Recalcula a sacola com os preços do servidor; nunca confia no preço vindo do navegador. */
export function priceCart(catalog: Product[], items: CheckoutInput["items"]): { lines: PricedLine[]; totalCents: number } | { error: string } {
  const byId = new Map(catalog.map((p) => [p.id, p]));
  const lines: PricedLine[] = [];
  for (const item of items) {
    const product = byId.get(item.productId);
    if (!product) return { error: "Uma das peças não está mais disponível. Atualize a sacola." };
    if (!product.inStock) return { error: `${product.name} está esgotada no momento.` };
    if (!product.sizes.includes(item.size as Product["sizes"][number])) return { error: `Tamanho indisponível para ${product.name}.` };
    if (!product.colors.includes(item.color)) return { error: `Cor indisponível para ${product.name}.` };
    let price = product.price;
    if (product.purchaseOptions?.length) {
      const option = product.purchaseOptions.find((o) => o.label === item.purchaseOption);
      if (!option) return { error: `Escolha novamente a opção de ${product.name}.` };
      price = option.price;
    } else if (item.purchaseOption) {
      return { error: `Opção inválida para ${product.name}.` };
    }
    lines.push({
      productId: product.id,
      title: `${product.name}${item.purchaseOption ? ` (${item.purchaseOption})` : ""} · Tam. ${item.size} · ${item.color}`.slice(0, 250),
      image: product.images[0],
      size: item.size,
      color: item.color,
      quantity: item.quantity,
      unitPriceCents: Math.round(price * 100),
    });
  }
  return { lines, totalCents: lines.reduce((s, l) => s + l.unitPriceCents * l.quantity, 0) };
}

/**
 * Valida o cabeçalho x-signature dos webhooks do Mercado Pago.
 * Manifesto oficial: "id:<data.id>;request-id:<x-request-id>;ts:<ts>;" com HMAC-SHA256 da chave secreta.
 */
// Sem janela de tempo: replay é inofensivo porque o webhook sempre relê o pagamento na API do Mercado Pago.
export function verifyMercadoPagoSignature(opts: { signature: string | null; requestId: string | null; dataId: string; secret: string }) {
  if (!opts.signature) return false;
  const parts = Object.fromEntries(opts.signature.split(",").map((p) => p.trim().split("=", 2) as [string, string]));
  const ts = parts.ts;
  const v1 = parts.v1;
  if (!ts || !/^\d+$/.test(ts) || !v1 || !/^[0-9a-f]{64}$/i.test(v1)) return false;
  const dataId = /^[a-z0-9]+$/i.test(opts.dataId) ? opts.dataId.toLowerCase() : opts.dataId;
  let manifest = `id:${dataId};`;
  if (opts.requestId) manifest += `request-id:${opts.requestId};`;
  manifest += `ts:${ts};`;
  const expected = createHmac("sha256", opts.secret).update(manifest).digest();
  const received = Buffer.from(v1, "hex");
  return received.length === expected.length && timingSafeEqual(received, expected);
}

/** Converte o status do pagamento no status do pedido. */
export function orderStatusFor(paymentStatus: string) {
  switch (paymentStatus) {
    case "approved":
      return "paid";
    case "pending":
    case "in_process":
    case "authorized":
      return "pending_payment";
    case "rejected":
    case "cancelled":
      return "payment_failed";
    case "refunded":
    case "charged_back":
      return "refunded";
    default:
      return "pending_payment";
  }
}

export const orderCode = (orderId: string) => orderId.slice(0, 8).toUpperCase();
