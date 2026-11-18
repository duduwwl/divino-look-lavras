"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ShoppingBag, Trash2 } from "lucide-react";
import { useCart, MAX_QTY } from "./cart-provider";
import { Sheet } from "@/components/ui/sheet";
import PopStepper from "@/components/watermelon/pop-stepper";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";
import { formatBRL } from "@/lib/format";
import { cartMessage, whatsappLink } from "@/lib/whatsapp";
import { deliveryOptions, type Delivery } from "@/lib/delivery";

export function CartDrawer() {
  const { items, isOpen, setOpen, remove, setQuantity, subtotal, count, clear } = useCart();
  const [delivery, setDelivery] = useState<Delivery>("retirada");
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState("");

  const pay = async () => {
    setPaying(true);
    setError("");
    try {
      const response = await fetch("/api/checkout/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          delivery,
          items: items.map(({ productId, size, color, quantity, purchaseOption }) => ({ productId, size, color, quantity, purchaseOption })),
        }),
      });
      const result = (await response.json()) as { ok?: boolean; url?: string; message?: string };
      if (!response.ok || !result.ok || !result.url) throw new Error(result.message || "Não foi possível abrir o pagamento.");
      window.location.assign(result.url);
    } catch (payError) {
      setError(payError instanceof Error ? payError.message : "Não foi possível abrir o pagamento.");
      setPaying(false);
    }
  };

  const footer =
    items.length > 0 ? (
      <div>
        <div className="flex items-baseline justify-between bg-sand px-4 py-4">
          <span className="text-[1rem]">Subtotal · {count} {count === 1 ? "peça" : "peças"}</span>
          <span className="text-xl font-semibold tabular-nums">
            R${" "}
            <AnimatedNumber
              value={subtotal}
              springOptions={{ bounce: 0, duration: 600 }}
              format={(v: number) => v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            />
          </span>
        </div>
        <fieldset className="mt-4">
          <legend className="text-[0.875rem] font-medium">Entrega</legend>
          <div className="mt-2 flex flex-col gap-2">
            {(Object.keys(deliveryOptions) as Delivery[]).map((key) => (
              <label key={key} className="flex cursor-pointer items-start gap-3 text-[0.875rem]">
                <input
                  type="radio"
                  name="entrega"
                  value={key}
                  checked={delivery === key}
                  onChange={() => setDelivery(key)}
                  className="mt-1 accent-[var(--color-ink,#1a1a1a)]"
                />
                <span>{deliveryOptions[key]}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <p className="mt-3 text-[0.875rem] text-muted">
          Pagamento seguro pelo Mercado Pago: Pix, cartão ou boleto.
          {delivery === "envio" ? " O valor cobrado agora é só das peças; o frete é combinado pelo WhatsApp." : ""}
        </p>
        <button type="button" onClick={pay} disabled={paying} aria-busy={paying} className="btn btn-primary mt-4 w-full disabled:opacity-60">
          {paying ? "Abrindo pagamento…" : "Pagar com Mercado Pago"}
        </button>
        {error ? (
          <p role="alert" className="mt-2 text-[0.875rem] text-red-700">
            {error}
          </p>
        ) : null}
        <a
          href={whatsappLink(cartMessage(items, subtotal))}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sand mt-2 w-full"
        >
          Finalizar pelo WhatsApp
        </a>
        <button type="button" onClick={clear} className="mt-2 w-full py-3 text-[0.875rem] text-muted underline-offset-4 hover:underline">
          Esvaziar sacola
        </button>
      </div>
    ) : null;

  return (
    <Sheet open={isOpen} onOpenChange={setOpen} title="Sua sacola" footer={footer}>
      {items.length === 0 ? (
        <div className="flex h-full flex-col items-start justify-center gap-5 pb-16">
          <ShoppingBag className="size-10 text-brown" strokeWidth={1.25} aria-hidden />
          <p className="font-display text-3xl leading-tight">Sua sacola está vazia.</p>
          <p className="max-w-[32ch] text-muted">Escolha suas peças no catálogo e monte o look do seu jeito.</p>
          <Link href="/produtos" onClick={() => setOpen(false)} className="btn btn-dark">
            Ver produtos
          </Link>
        </div>
      ) : (
        <ul className="flex flex-col gap-5 pb-4">
          <AnimatePresence initial={false}>
            {items.map((item) => (
              <motion.li
                key={item.key}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 24, transition: { duration: 0.18 } }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="grid grid-cols-[88px_1fr] gap-4"
              >
                <Link
                  href={`/produtos/${item.slug}`}
                  onClick={() => setOpen(false)}
                  className="relative block aspect-[4/5] w-[88px] overflow-hidden bg-sand"
                >
                  <Image src={item.image} alt={item.name} fill sizes="88px" className="object-cover" />
                </Link>
                <div className="flex min-w-0 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <Link
                      href={`/produtos/${item.slug}`}
                      onClick={() => setOpen(false)}
                      className="font-medium leading-snug hover:underline"
                    >
                      {item.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => remove(item.key)}
                      className="press -mt-2 -mr-2 inline-flex size-10 shrink-0 items-center justify-center text-muted hover:text-ink"
                      aria-label={`Remover ${item.name} da sacola`}
                    >
                      <Trash2 className="size-[18px]" strokeWidth={1.5} />
                    </button>
                  </div>
                  <p className="text-[0.875rem] text-muted">
                    {item.purchaseOption ? `${item.purchaseOption} · ` : ""}Tam. {item.size} · {item.color}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                    <PopStepper
                      size="sm"
                      value={item.quantity}
                      max={MAX_QTY}
                      onChange={(q) => setQuantity(item.key, q)}
                      label={`Quantidade de ${item.name}`}
                    />
                    <span className="font-semibold tabular-nums">{formatBRL(item.price * item.quantity)}</span>
                  </div>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </Sheet>
  );
}
