import type { Product } from "@/types/product";
import { categoryLabel } from "@/data/products";
import { formatBRL, installments } from "@/lib/format";
import { cn } from "@/lib/utils";

export function ProductHeading({ product }: { product: Product }) {
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
  return (
    <div>
      <h1 className="font-display text-[2.6rem] leading-[1.02] tracking-[-0.025em]">{product.name}</h1>
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
      <p
        className={cn(
          "mt-4 inline-flex flex-wrap items-center gap-2 text-[1rem] font-semibold",
          product.inStock ? "text-[#3f6b3a]" : "text-[#8a2d22]",
        )}
      >
        <span className={cn("size-2 rounded-full", product.inStock ? "bg-[#3f6b3a]" : "bg-[#8a2d22]")} aria-hidden />
        {product.inStock ? "Disponível" : "Esgotado no momento"}
        <span className="font-normal text-ink">
          · {categoryLabel[product.category]}
          {product.isNew ? ", novidade da coleção" : ""}
        </span>
      </p>
    </div>
  );
}
