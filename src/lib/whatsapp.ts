import { siteConfig } from "@/config/site";
import type { CartItem } from "@/types/product";
import { formatBRL } from "./format";

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

export function productMessage(opts: {
  name: string;
  size?: string;
  color?: string;
  quantity: number;
  price: number;
  option?: string;
  url?: string;
}) {
  const lines = [
    "Olá, Divino Look! Tenho interesse nesta peça que vi no site:",
    "",
    `• ${opts.name}`,
    opts.option ? `Opção: ${opts.option}` : null,
    opts.size ? `Tamanho: ${opts.size}` : null,
    opts.color ? `Cor: ${opts.color}` : null,
    `Quantidade: ${opts.quantity}`,
    siteConfig.showPrices ? `Preço no site: ${formatBRL(opts.price)} (un.)` : null,
    opts.url ? `Link: ${opts.url}` : null,
    "",
    siteConfig.showPrices ? "Pode confirmar a disponibilidade?" : "Pode me passar o valor e confirmar a disponibilidade?",
  ];
  return lines.filter((l) => l !== null).join("\n");
}

export function cartMessage(items: CartItem[], subtotal: number) {
  const lines = [
    "Olá, Divino Look! Montei esta sacola no site e gostaria de finalizar pelo WhatsApp:",
    "",
    ...items.map(
      (i, n) =>
        `${n + 1}. ${i.name}${i.purchaseOption ? ` (${i.purchaseOption})` : ""} — Tam. ${i.size} · Cor ${i.color} · ${i.quantity}x${siteConfig.showPrices ? ` ${formatBRL(i.price)}` : ""}`,
    ),
    "",
    siteConfig.showPrices ? `Subtotal: ${formatBRL(subtotal)}` : null,
    siteConfig.showPrices ? "" : null,
    siteConfig.showPrices
      ? "Pode confirmar disponibilidade, formas de pagamento e entrega?"
      : "Pode me passar os valores e confirmar disponibilidade, formas de pagamento e entrega?",
  ];
  return lines.filter((l) => l !== null).join("\n");
}

export const generalMessage = "Olá, Divino Look! Vim pelo site e gostaria de atendimento.";
