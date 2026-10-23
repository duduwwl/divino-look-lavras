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
  url?: string;
}) {
  const lines = [
    "Olá, Divino Look! Tenho interesse nesta peça que vi no site:",
    "",
    `• ${opts.name}`,
    opts.size ? `Tamanho: ${opts.size}` : null,
    opts.color ? `Cor: ${opts.color}` : null,
    `Quantidade: ${opts.quantity}`,
    `Preço no site: ${formatBRL(opts.price)} (un.)`,
    opts.url ? `Link: ${opts.url}` : null,
    "",
    "Pode confirmar a disponibilidade?",
  ];
  return lines.filter((l) => l !== null).join("\n");
}

export function cartMessage(items: CartItem[], subtotal: number) {
  const lines = [
    "Olá, Divino Look! Montei esta sacola no site e gostaria de finalizar pelo WhatsApp:",
    "",
    ...items.map(
      (i, n) =>
        `${n + 1}. ${i.name} — Tam. ${i.size} · Cor ${i.color} · ${i.quantity}x ${formatBRL(i.price)}`,
    ),
    "",
    `Subtotal: ${formatBRL(subtotal)}`,
    "",
    "Pode confirmar disponibilidade, formas de pagamento e entrega?",
  ];
  return lines.join("\n");
}

export const generalMessage = "Olá, Divino Look! Vim pelo site e gostaria de atendimento.";
