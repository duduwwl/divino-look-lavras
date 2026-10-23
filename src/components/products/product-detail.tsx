"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check, MessageCircle, Heart } from "lucide-react";
import type { Product, Size } from "@/types/product";
import { useCart, MAX_QTY } from "@/components/cart/cart-provider";
import PopStepper from "@/components/watermelon/pop-stepper";
import { TransitionPanel } from "@/components/motion-primitives/transition-panel";
import { categoryLabel } from "@/data/products";
import { formatBRL, installments } from "@/lib/format";
import { productMessage, whatsappLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Swatch } from "./swatch";

const tabs = ["Descrição", "Tamanhos", "Cuidados"] as const;

const sizeGuide: Record<Size, string> = {
  PP: "Busto 80–84 · Cintura 62–66 · Quadril 88–92",
  P: "Busto 85–89 · Cintura 67–71 · Quadril 93–97",
  M: "Busto 90–94 · Cintura 72–76 · Quadril 98–102",
  G: "Busto 95–100 · Cintura 77–82 · Quadril 103–108",
  GG: "Busto 101–106 · Cintura 83–88 · Quadril 109–114",
  Único: "Veste do 36 ao 42 (consulte pelo WhatsApp)",
};

export function ProductDetail({ product }: { product: Product }) {
  const { add, favorites, toggleFavorite } = useCart();
  const reduce = useReducedMotion();
  const [size, setSize] = useState<Size | null>(product.sizes.length === 1 ? product.sizes[0] : null);
  const [color, setColor] = useState<string | null>(product.colors.length === 1 ? product.colors[0] : null);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState(0);
  const [touched, setTouched] = useState(false);
  const [added, setAdded] = useState(false);
  const fav = favorites.includes(product.id);

  const missing = !size ? "Escolha um tamanho" : !color ? "Escolha uma cor" : null;
  const pageUrl = `${siteConfig.url}/produtos/${product.slug}/`;

  const onAdd = () => {
    setTouched(true);
    if (missing || !product.inStock) return;
    add({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: size!,
      color: color!,
      quantity: qty,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

  return (
    <div className="flex flex-col">
      <p className="text-[0.875rem] text-muted">
        {categoryLabel[product.category]}
        {product.isNew ? " · Novidade" : ""}
      </p>
      <h1 className="mt-2 font-display text-[2.6rem] leading-[1.02] tracking-[-0.025em] md:text-[2.6rem]">{product.name}</h1>

      <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <p className="text-[1.625rem] font-semibold tabular-nums">{formatBRL(product.price)}</p>
        {product.originalPrice ? (
          <p className="text-muted tabular-nums">
            <span className="sr-only">Preço anterior: </span>
            <span className="line-through">{formatBRL(product.originalPrice)}</span> · −{discount}%
          </p>
        ) : null}
      </div>
      <p className="text-[1rem] text-muted tabular-nums">{installments(product.price)} sem juros (demonstrativo)</p>

      <p className={cn("mt-4 inline-flex items-center gap-2 text-[1rem] font-semibold", product.inStock ? "text-[#3f6b3a]" : "text-[#8a2d22]")}>
        <span className={cn("size-2 rounded-full", product.inStock ? "bg-[#3f6b3a]" : "bg-[#8a2d22]")} aria-hidden />
        {product.inStock ? "Disponível" : "Esgotado no momento"}
      </p>

      <fieldset className="mt-7">
        <legend className="flex w-full items-baseline justify-between text-[1rem] font-semibold">
          <span>
            Tamanho{size ? <span className="font-normal text-muted"> · {size}</span> : null}
          </span>
          <button type="button" onClick={() => setTab(1)} className="text-[0.875rem] font-normal underline underline-offset-4">
            Guia de medidas
          </button>
        </legend>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {product.sizes.map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={size === s}
              onClick={() => setSize(s)}
              className={cn("press min-h-12 min-w-12 px-3", size === s ? "bg-ink text-paper" : "bg-sand hover:bg-champagne")}
            >
              {s === "Único" ? "Tamanho único" : s}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-[1rem] font-semibold">
          Cor{color ? <span className="font-normal text-muted"> · {color}</span> : null}
        </legend>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {product.colors.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={color === c}
              onClick={() => setColor(c)}
              className={cn(
                "press inline-flex min-h-12 items-center gap-2 px-3.5",
                color === c ? "bg-ink text-paper" : "bg-sand hover:bg-champagne",
              )}
            >
              <Swatch color={c} /> {c}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6">
        <p className="text-[1rem] font-semibold" id="qtd-label">
          Quantidade
        </p>
        <PopStepper value={qty} onChange={setQty} max={MAX_QTY} className="mt-2.5" label="Quantidade" />
      </div>

      <AnimatePresence>
        {touched && missing && product.inStock ? (
          <motion.p
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 text-[1rem] font-semibold text-[#8a2d22]"
          >
            {missing} para adicionar à sacola.
          </motion.p>
        ) : null}
      </AnimatePresence>

      <div className="mt-6 flex gap-2">
        <button type="button" onClick={onAdd} disabled={!product.inStock} className="btn btn-primary min-h-14 flex-1 overflow-hidden text-[1rem]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={added ? "ok" : "add"}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14, filter: "blur(2px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -14, filter: "blur(2px)" }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="inline-flex items-center gap-2"
            >
              {!product.inStock ? (
                "Esgotado"
              ) : added ? (
                <>
                  <Check className="size-5" aria-hidden /> Adicionado à sacola
                </>
              ) : (
                `Adicionar à sacola · ${formatBRL(product.price * qty)}`
              )}
            </motion.span>
          </AnimatePresence>
        </button>
        <button
          type="button"
          onClick={() => toggleFavorite(product.id)}
          aria-pressed={fav}
          aria-label={fav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          className="press inline-flex size-14 shrink-0 items-center justify-center bg-sand hover:bg-champagne"
        >
          <Heart className={cn("size-5", fav && "fill-brown text-brown")} strokeWidth={1.5} />
        </button>
      </div>
      <a
        href={whatsappLink(
          productMessage({
            name: product.name,
            size: size ?? "a definir",
            color: color ?? "a definir",
            quantity: qty,
            price: product.price,
            url: pageUrl,
          }),
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-dark mt-2 min-h-14"
      >
        <MessageCircle className="size-5" strokeWidth={1.5} aria-hidden />
        {product.inStock ? "Comprar pelo WhatsApp" : "Avise-me pelo WhatsApp"}
      </a>
      <p className="mt-3 text-[0.875rem] text-muted">
        A mensagem já vai com nome, tamanho, cor, quantidade e preço. Pagamento e entrega são combinados com a loja.
      </p>

      <div className="mt-10">
        <div role="tablist" aria-label="Informações do produto" className="flex gap-1.5">
          {tabs.map((t, i) => (
            <button
              key={t}
              role="tab"
              id={`tab-${i}`}
              aria-selected={tab === i}
              aria-controls={`painel-${i}`}
              onClick={() => setTab(i)}
              className={cn("press min-h-11 px-4 text-[1rem]", tab === i ? "bg-ink text-paper" : "bg-sand hover:bg-champagne")}
            >
              {t}
            </button>
          ))}
        </div>
        <TransitionPanel
          activeIndex={tab}
          className="mt-4 min-h-[9rem]"
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          variants={{
            enter: { opacity: 0, y: reduce ? 0 : 8, filter: "blur(2px)" },
            center: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: { opacity: 0, y: reduce ? 0 : -8, filter: "blur(2px)" },
          }}
        >
          {[
            <div key="d" role="tabpanel" id="painel-0" aria-labelledby="tab-0">
              <p className="max-w-[60ch]">{product.description}</p>
            </div>,
            <div key="t" role="tabpanel" id="painel-1" aria-labelledby="tab-1">
              <table className="w-full max-w-[560px] text-left text-[1rem]">
                <caption className="pb-2 text-left text-[0.875rem] text-muted">Medidas de referência em centímetros (tabela demonstrativa)</caption>
                <tbody>
                  {product.sizes.map((s) => (
                    <tr key={s} className="border-b border-ink/10" /* taste-skill-ignore: real table */>
                      <th scope="row" className="w-16 py-2 font-semibold">
                        {s}
                      </th>
                      <td className="py-2">{sizeGuide[s]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>,
            <div key="c" role="tabpanel" id="painel-2" aria-labelledby="tab-2">
              <ul className="max-w-[60ch] list-disc space-y-1 pl-5">
                <li>Siga sempre a etiqueta de composição da peça.</li>
                <li>Prefira lavar do avesso, com água fria e sabão neutro.</li>
                <li>Seque à sombra e evite secadora para manter o caimento.</li>
              </ul>
            </div>,
          ]}
        </TransitionPanel>
      </div>
    </div>
  );
}
