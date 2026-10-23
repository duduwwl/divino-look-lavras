"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Sheet } from "@/components/ui/sheet";
import { products, categoryLabel } from "@/data/products";
import { searchProducts } from "@/lib/catalog";
import { formatBRL } from "@/lib/format";

const suggestions = ["Vestido", "Alfaiataria", "Preto", "Legging", "Linho", "Saia midi"];

export function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const results = useMemo(() => (query.trim() ? searchProducts(products, query).slice(0, 6) : []), [query]);

  const go = (q: string) => {
    onOpenChange(false);
    router.push(`/produtos?busca=${encodeURIComponent(q.trim())}`);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange} side="top" title="Buscar no catálogo" className="max-h-[92dvh]">
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          if (query.trim()) go(query);
        }}
        className="mx-auto w-full max-w-3xl pb-8"
      >
        <label htmlFor="busca-global" className="sr-only">
          O que você procura?
        </label>
        <div className="flex items-center gap-3 bg-sand px-4">
          <Search className="size-5 shrink-0 text-muted" strokeWidth={1.5} aria-hidden />
          <input
            id="busca-global"
            autoFocus
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Vestido, conjunto, cor…"
            className="h-14 w-full bg-transparent text-lg outline-none placeholder:text-muted"
            autoComplete="off"
          />
        </div>

        {!query.trim() ? (
          <div className="mt-5">
            <p className="text-[0.95rem] text-muted">Sugestões</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button key={s} type="button" onClick={() => go(s)} className="press bg-sand px-4 py-2.5 text-[0.95rem] hover:bg-champagne">
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : results.length === 0 ? (
          <p className="mt-6 text-muted">
            Nenhuma peça encontrada para “{query}”. Tente outra palavra, como uma cor ou categoria.
          </p>
        ) : (
          <>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {results.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/produtos/${p.slug}`}
                    onClick={() => onOpenChange(false)}
                    className="press flex items-center gap-4 p-1 hover:bg-sand"
                  >
                    <span className="relative block aspect-[4/5] w-14 shrink-0 overflow-hidden bg-sand">
                      <Image src={p.images[0]} alt="" fill sizes="56px" className="object-cover" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-medium">{p.name}</span>
                      <span className="block text-[0.9rem] text-muted">
                        {categoryLabel[p.category]} · {formatBRL(p.price)}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <button type="submit" className="btn btn-dark mt-5">
              Ver todos os resultados
            </button>
          </>
        )}
      </form>
    </Sheet>
  );
}
