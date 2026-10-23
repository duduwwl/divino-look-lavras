"use client";

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

export function CartDrawer() {
  const { items, isOpen, setOpen, remove, setQuantity, subtotal, count, clear } = useCart();

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
        <p className="mt-3 text-[0.875rem] text-muted">
          O pedido é finalizado pelo WhatsApp: a equipe confirma disponibilidade, pagamento e entrega com você.
          Nenhum pagamento é feito neste site.
        </p>
        <a
          href={whatsappLink(cartMessage(items, subtotal))}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-4 w-full"
        >
          Finalizar pedido pelo WhatsApp
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
                    Tam. {item.size} · {item.color}
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
