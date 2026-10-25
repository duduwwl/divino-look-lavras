"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Heart, Plus, X } from "lucide-react";
import type { Product, Size } from "@/types/product";
import { useCart } from "@/components/cart/cart-provider";
import { categoryLabel } from "@/data/products";
import { formatBRL, installments } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Swatch } from "./swatch";

export function ProductCard({
  product,
  priority = false,
  sizes = "(min-width: 1024px) 25vw, 50vw",
  className,
}: {
  product: Product;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const { add, favorites, toggleFavorite } = useCart();
  const [picking, setPicking] = useState(false);
  const [size, setSize] = useState<Size | null>(product.sizes.length === 1 ? product.sizes[0] : null);
  const [color, setColor] = useState<string | null>(product.colors.length === 1 ? product.colors[0] : null);
  const reduce = useReducedMotion();
  const fav = favorites.includes(product.id);
  const pickerId = useId();
  const href = `/produtos/${product.slug}`;
  const cropEmbeddedBorder = [
    "blusa-pessego",
    "calca-jeans-pantalona-clara",
    "conjunto-areia",
    "macaquinho-azul",
    "vestido-jeans-midi",
    "vestido-jeans-longo-com-botoes",
    "blusa-patchwork",
    "conjunto-preto-essencial",
  ].includes(product.slug)
    ? "scale-[1.02]"
    : "";
  const productImageFit = product.slug === "conjunto-verde-musgo" ? "object-contain" : "object-cover";
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

  const badge = !product.inStock
    ? "Esgotado"
    : product.isNew
      ? "Novidade"
      : discount
        ? `−${discount}%`
        : product.featured
          ? "Destaque"
          : null;

  const confirm = () => {
    if (!size || !color) return;
    add({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size,
      color,
      quantity: 1,
    });
    setPicking(false);
  };

  return (
    <article className={cn("group @container relative flex flex-col", className)}>
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        <Link href={href} className="absolute inset-0 block" tabIndex={-1} aria-hidden>
          <Image
            src={product.images[0]}
            alt=""
            fill
            sizes={sizes}
            priority={priority}
            className={cn("swap-img swap-img-base", productImageFit, cropEmbeddedBorder, !product.inStock && "grayscale-[35%]")}
          />
          {product.images[1] ? (
            <Image
              src={product.images[1]}
              alt=""
              fill
              sizes={sizes}
              className={cn("swap-img swap-img-alt opacity-0", productImageFit, cropEmbeddedBorder)}
            />
          ) : null}
        </Link>

        {badge ? (
          <span
            className={cn(
              "pointer-events-none absolute top-3 left-3 px-2.5 py-1 text-[0.875rem] font-semibold",
              badge === "Esgotado" ? "bg-ink text-paper" : "bg-paper text-ink",
            )}
          >
            {badge}
          </span>
        ) : null}

        <button
          type="button"
          onClick={() => toggleFavorite(product.id)}
          aria-pressed={fav}
          aria-label={fav ? `Remover ${product.name} dos favoritos` : `Favoritar ${product.name}`}
          className="press absolute top-2 right-2 inline-flex size-11 items-center justify-center"
        >
          <motion.span
            key={String(fav)}
            initial={reduce ? false : { scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.45 }}
            className="inline-flex size-9 items-center justify-center bg-paper/90"
          >
            <Heart className={cn("size-[18px]", fav ? "fill-brown text-brown" : "text-ink")} strokeWidth={1.5} />
          </motion.span>
        </button>

        <AnimatePresence>
          {picking ? (
            <motion.div
              id={pickerId}
              role="dialog"
              aria-label={`Escolher tamanho e cor de ${product.name}`}
              initial={reduce ? { opacity: 0 } : { transform: "translateY(100%)" }}
              animate={reduce ? { opacity: 1 } : { transform: "translateY(0%)" }}
              exit={reduce ? { opacity: 0 } : { transform: "translateY(100%)", transition: { duration: 0.2 } }}
              transition={{ duration: 0.34, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-x-0 bottom-0 z-10 bg-paper p-3 sm:p-4"
              onKeyDown={(e) => e.key === "Escape" && setPicking(false)}
            >
              <div className="flex items-center justify-between">
                <p className="text-[0.875rem] font-semibold">Tamanho</p>
                <button
                  type="button"
                  onClick={() => setPicking(false)}
                  className="press -mt-1 -mr-1 inline-flex size-9 items-center justify-center"
                  aria-label="Fechar seleção"
                >
                  <X className="size-4" />
                </button>
              </div>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    aria-pressed={size === s}
                    className={cn(
                      "press min-h-9 min-w-9 px-2 text-[0.875rem]",
                      size === s ? "bg-ink text-paper" : "bg-sand hover:bg-champagne",
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <p className="mt-2.5 text-[0.875rem] font-semibold">Cor</p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setColor(c)}
                    aria-pressed={color === c}
                    className={cn(
                      "press inline-flex min-h-9 items-center gap-1.5 px-2 text-[0.875rem]",
                      color === c ? "bg-ink text-paper" : "bg-sand hover:bg-champagne",
                    )}
                  >
                    <Swatch color={c} className="size-3" /> {c}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={confirm}
                disabled={!size || !color}
                className="btn btn-primary mt-3 min-h-11 w-full text-[0.875rem]"
              >
                {!size ? "Escolha o tamanho" : !color ? "Escolha a cor" : "Adicionar à sacola"}
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="flex flex-1 flex-col pt-3">
        <p className="text-[0.875rem] text-muted">{categoryLabel[product.category]}</p>
        <h3 className="mt-0.5 text-[1rem] leading-snug font-medium">
          <Link href={href} className="hover:underline hover:underline-offset-4">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 flex flex-wrap items-baseline gap-x-2">
          <span className="font-semibold tabular-nums">{formatBRL(product.price)}</span>
          {product.originalPrice ? (
            <span className="text-[0.875rem] text-muted line-through tabular-nums">
              <span className="sr-only">Preço anterior: </span>
              {formatBRL(product.originalPrice)}
            </span>
          ) : null}
        </p>
        <p className="text-[0.875rem] text-muted tabular-nums">{installments(product.price)}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.875rem] text-muted">
          <span className="inline-flex items-center gap-1">
            <span className="sr-only">Cores: {product.colors.join(", ")}.</span>
            {product.colors.map((c) => (
              <Swatch key={c} color={c} />
            ))}
          </span>
          <span>
            <span className="sr-only">Tamanhos: </span>
            {product.sizes.join(" · ")}
          </span>
        </div>
        <div className="mt-3 flex gap-2">
          <Link href={href} className="btn btn-sand min-h-11 min-w-0 flex-1 px-2 text-[0.875rem] whitespace-nowrap">
            Ver detalhes
          </Link>
          <button
            type="button"
            onClick={() => setPicking(true)}
            disabled={!product.inStock}
            aria-expanded={picking}
            aria-controls={pickerId}
            className="btn btn-dark min-h-11 w-11 shrink-0 px-0 text-[0.875rem] @[17rem]:w-auto @[17rem]:px-3"
            aria-label={product.inStock ? `Adicionar ${product.name} à sacola` : `${product.name} esgotado`}
          >
            <Plus className="size-4" aria-hidden />
            <span className="hidden @[17rem]:inline">{product.inStock ? "Sacola" : "Esgotado"}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
