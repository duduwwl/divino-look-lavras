"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import type { Product, Size } from "@/types/product";
import { useCart } from "@/components/cart/cart-provider";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";
import { formatBRL } from "@/lib/format";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Swatch } from "@/components/products/swatch";

const tops = products.filter((p) => p.category === "blusas" && p.inStock);
const bottoms = products.filter((p) => (p.category === "calcas" || p.category === "saias") && p.inStock);

type Pick = { index: number; size: Size | null; color: string };

function Slot({
  label,
  list,
  pick,
  onChange,
}: {
  label: string;
  list: Product[];
  pick: Pick;
  onChange: (p: Pick) => void;
}) {
  const reduce = useReducedMotion();
  const [dir, setDir] = useState(1);
  const product = list[pick.index];
  const move = (d: number) => {
    setDir(d);
    const index = (pick.index + d + list.length) % list.length;
    const next = list[index];
    onChange({
      index,
      size: pick.size && next.sizes.includes(pick.size) ? pick.size : null,
      color: next.colors[0],
    });
  };

  return (
    <div className="grid grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-4 sm:gap-6">
      <div className="relative aspect-[4/5] overflow-hidden bg-paper">
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.div
            key={product.id}
            custom={dir}
            initial={reduce ? { opacity: 0 } : { opacity: 0, transform: `translateX(${dir * 30}%)` }}
            animate={{ opacity: 1, transform: "translateX(0%)" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, transform: `translateX(${dir * -30}%)` }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0"
          >
            <Image src={product.images[0]} alt={product.name} fill sizes="(min-width: 1024px) 18vw, 40vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex min-w-0 flex-col">
        <p className="text-[0.875rem] text-muted">{label}</p>
        <p className="mt-1 font-display text-[1.125rem] leading-tight sm:text-[1.625rem]" aria-live="polite">
          <Link href={`/produtos/${product.slug}`} className="hover:underline hover:underline-offset-4">
            {product.name}
          </Link>
        </p>
        <p className="mt-1 font-semibold tabular-nums">{formatBRL(product.price)}</p>

        <fieldset className="mt-3">
          <legend className="text-[0.875rem] font-semibold">Tamanho</legend>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                aria-pressed={pick.size === s}
                onClick={() => onChange({ ...pick, size: s })}
                className={cn("press min-h-10 min-w-10 px-2 text-[0.875rem]", pick.size === s ? "bg-ink text-paper" : "bg-paper hover:bg-champagne")}
              >
                {s}
              </button>
            ))}
          </div>
        </fieldset>
        {product.colors.length > 1 ? (
          <fieldset className="mt-3">
            <legend className="text-[0.875rem] font-semibold">Cor</legend>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {product.colors.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={pick.color === c}
                  onClick={() => onChange({ ...pick, color: c })}
                  className={cn(
                    "press inline-flex min-h-10 items-center gap-1.5 px-2.5 text-[0.875rem]",
                    pick.color === c ? "bg-ink text-paper" : "bg-paper hover:bg-champagne",
                  )}
                >
                  <Swatch color={c} className="size-3" />
                  {c}
                </button>
              ))}
            </div>
          </fieldset>
        ) : (
          <p className="mt-3 inline-flex items-center gap-2 text-[0.875rem]">
            <Swatch color={product.colors[0]} /> {product.colors[0]}
          </p>
        )}

        <div className="mt-auto flex gap-2 pt-4">
          <button type="button" onClick={() => move(-1)} className="press inline-flex size-11 items-center justify-center bg-paper hover:bg-champagne" aria-label={`${label}: peça anterior`}>
            <ArrowLeft className="size-[18px]" strokeWidth={1.5} />
          </button>
          <button type="button" onClick={() => move(1)} className="press inline-flex size-11 items-center justify-center bg-paper hover:bg-champagne" aria-label={`${label}: próxima peça`}>
            <ArrowRight className="size-[18px]" strokeWidth={1.5} />
          </button>
          <span className="self-center pl-1 text-[0.875rem] text-muted tabular-nums">
            {pick.index + 1} de {list.length}
          </span>
        </div>
      </div>
    </div>
  );
}

/** The live thing: "looks completos" made literal — combine two pieces, see the total, send the look. */
export function LookBuilder() {
  const { addMany } = useCart();
  const [top, setTop] = useState<Pick>({ index: 0, size: null, color: tops[0].colors[0] });
  const [bottom, setBottom] = useState<Pick>({ index: 0, size: null, color: bottoms[0].colors[0] });
  const t = tops[top.index];
  const b = bottoms[bottom.index];
  const total = t.price + b.price;
  const ready = Boolean(top.size && bottom.size);

  const message = useMemo(
    () =>
      [
        "Olá, Divino Look! Montei este look no site:",
        "",
        `• ${t.name} — Tam. ${top.size ?? "a definir"} · Cor ${top.color} · ${formatBRL(t.price)}`,
        `• ${b.name} — Tam. ${bottom.size ?? "a definir"} · Cor ${bottom.color} · ${formatBRL(b.price)}`,
        "",
        `Total do look: ${formatBRL(total)}`,
        "Pode confirmar a disponibilidade?",
      ].join("\n"),
    [t, b, top, bottom, total],
  );

  const addLook = () => {
    if (!ready) return;
    addMany([
      { productId: t.id, slug: t.slug, name: t.name, price: t.price, image: t.images[0], size: top.size!, color: top.color, quantity: 1 },
      { productId: b.id, slug: b.slug, name: b.name, price: b.price, image: b.images[0], size: bottom.size!, color: bottom.color, quantity: 1 },
    ]);
  };

  return (
    <section aria-labelledby="monte-titulo" className="bg-sand pb-[clamp(72px,9vw,140px)]">
      <div className="frame grid grid-cols-12 gap-x-6 gap-y-10 pt-[clamp(56px,7vw,110px)]">
        <div className="col-span-12 lg:col-span-4">
          <h2 id="monte-titulo" className="font-display text-[2rem] leading-tight tracking-[-0.015em] md:text-[2.6rem]">
            Monte seu look
          </h2>
          <p className="mt-3 max-w-[40ch]">
            Combine uma parte de cima com uma parte de baixo, escolha os tamanhos e veja o valor do look completo. Depois é só
            levar para a sacola ou pedir direto pelo WhatsApp.
          </p>
          <div className="mt-8 bg-paper p-5">
            <p className="font-display text-[2.6rem] leading-none tabular-nums" aria-label={`Total do look: ${formatBRL(total)}`}>
              R${" "}
              <AnimatedNumber
                value={total}
                springOptions={{ bounce: 0, duration: 700 }}
                format={(v: number) => v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              />
            </p>
            <p className="mt-2 text-[0.875rem] text-muted tabular-nums">Total do look, ou 3x de {formatBRL(total / 3)}. Valores demonstrativos.</p>
            <button type="button" onClick={addLook} disabled={!ready} className="btn btn-primary mt-5 w-full">
              {ready ? "Levar o look para a sacola" : "Escolha os dois tamanhos"}
            </button>
            <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="btn btn-sand mt-2 w-full">
              Pedir este look pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="col-span-12 flex flex-col gap-8 lg:col-span-8 lg:gap-10">
          <Slot label="Parte de cima" list={tops} pick={top} onChange={setTop} />
          <Slot label="Parte de baixo" list={bottoms} pick={bottom} onChange={setBottom} />
        </div>
      </div>
    </section>
  );
}
