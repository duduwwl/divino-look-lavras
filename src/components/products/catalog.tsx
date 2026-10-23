"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { categories, products, priceBounds } from "@/data/products";
import {
  activeFilterCount,
  applyFilters,
  emptyFilters,
  filtersFromParams,
  filtersToQuery,
  sortOptions,
  type Filters,
  type SortKey,
} from "@/lib/catalog";
import { ProductCard } from "./product-card";
import { FilterPanel } from "./filter-panel";
import { Sheet } from "@/components/ui/sheet";
import { formatBRL } from "@/lib/format";
import { cn } from "@/lib/utils";

const PAGE = 12;

export function Catalog() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const reduce = useReducedMotion();

  const filters = useMemo(() => filtersFromParams(new URLSearchParams(searchParams.toString())), [searchParams]);
  const [query, setQuery] = useState(filters.q);
  const [visible, setVisible] = useState(PAGE);
  const [drawer, setDrawer] = useState(false);
  const [draft, setDraft] = useState<Filters>(filters);

  const commit = useCallback(
    (next: Filters) => {
      const qs = filtersToQuery(next);
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
      setVisible(PAGE);
    },
    [router, pathname],
  );

  // keep the search box in step with the URL (e.g. global search, back button)
  const [syncedQ, setSyncedQ] = useState(filters.q);
  if (syncedQ !== filters.q) {
    setSyncedQ(filters.q);
    setQuery(filters.q);
  }

  // debounce typing into the URL
  useEffect(() => {
    if (query === filters.q) return;
    const t = window.setTimeout(() => commit({ ...filters, q: query.trim() }), 280);
    return () => window.clearTimeout(t);
  }, [query, filters, commit]);

  const results = useMemo(() => applyFilters(products, filters), [filters]);
  const shown = results.slice(0, visible);
  const activeCount = activeFilterCount(filters);
  const catLabel = categories.find((c) => c.slug === filters.category)?.label;

  const chips: { key: string; label: string; remove: Filters }[] = [
    ...(filters.q ? [{ key: "q", label: `Busca: “${filters.q}”`, remove: { ...filters, q: "" } }] : []),
    ...filters.sizes.map((s) => ({ key: `s-${s}`, label: `Tam. ${s}`, remove: { ...filters, sizes: filters.sizes.filter((x) => x !== s) } })),
    ...filters.colors.map((c) => ({ key: `c-${c}`, label: c, remove: { ...filters, colors: filters.colors.filter((x) => x !== c) } })),
    ...(filters.min != null || filters.max != null
      ? [
          {
            key: "price",
            label: `${formatBRL(filters.min ?? priceBounds.min)} – ${formatBRL(filters.max ?? priceBounds.max)}`,
            remove: { ...filters, min: null, max: null },
          },
        ]
      : []),
    ...(filters.availability !== "todos"
      ? [{ key: "av", label: filters.availability === "em-estoque" ? "Em estoque" : "Esgotados", remove: { ...filters, availability: "todos" as const } }]
      : []),
  ];

  const clearAll = () => {
    setQuery("");
    commit({ ...emptyFilters, sort: filters.sort });
  };

  return (
    <div className="frame">
      {/* Category row */}
      <nav aria-label="Categorias" className="-mx-[var(--gutter)] overflow-x-auto px-[var(--gutter)] no-scrollbar">
        <ul className="flex w-max gap-1.5 pb-1 lg:w-auto lg:flex-wrap">
          {[{ slug: "todos" as const, label: "Todos" }, ...categories].map((c) => {
            const on = filters.category === c.slug;
            return (
              <li key={c.slug}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => commit({ ...filters, category: c.slug })}
                  className={cn("press min-h-11 px-4 text-[0.95rem] whitespace-nowrap", on ? "bg-ink text-paper" : "bg-sand hover:bg-champagne")}
                >
                  {c.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Toolbar */}
      <div className="mt-6 grid grid-cols-12 gap-3">
        <form role="search" onSubmit={(e) => e.preventDefault()} className="col-span-12 md:col-span-6 lg:col-span-5">
          <label htmlFor="busca-catalogo" className="sr-only">
            Buscar produtos
          </label>
          <div className="flex h-12 items-center gap-3 bg-sand px-4">
            <Search className="size-[18px] shrink-0 text-muted" strokeWidth={1.5} aria-hidden />
            <input
              id="busca-catalogo"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por nome, cor ou categoria"
              className="h-full w-full min-w-0 bg-transparent outline-none placeholder:text-muted"
              autoComplete="off"
            />
            {query ? (
              <button type="button" onClick={() => setQuery("")} className="press -mr-2 inline-flex size-10 items-center justify-center" aria-label="Limpar busca">
                <X className="size-4" />
              </button>
            ) : null}
          </div>
        </form>

        <div className="col-span-12 flex items-center gap-2 md:col-span-6 md:justify-end lg:col-span-7">
          <button
            type="button"
            onClick={() => {
              setDraft(filters);
              setDrawer(true);
            }}
            className="btn btn-dark min-h-12 flex-1 md:flex-none lg:hidden"
          >
            <SlidersHorizontal className="size-[18px]" strokeWidth={1.5} aria-hidden />
            Filtrar{activeCount ? ` (${activeCount})` : ""}
          </button>
          <label className="flex h-12 flex-1 items-center gap-2 bg-sand pl-4 md:flex-none">
            <span className="text-[0.92rem] whitespace-nowrap text-muted">Ordenar</span>
            <select
              value={filters.sort}
              onChange={(e) => commit({ ...filters, sort: e.target.value as SortKey })}
              className="h-full min-w-0 flex-1 cursor-pointer bg-transparent pr-3 font-semibold outline-none"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-12 gap-x-8">
        {/* Desktop sidebar */}
        <aside aria-label="Filtros" className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-[calc(var(--header-h)+24px)] max-h-[calc(100svh-var(--header-h)-48px)] overflow-y-auto pr-2 pb-6 no-scrollbar">
            <div className="mb-5 flex items-baseline justify-between">
              <h2 className="font-display text-[1.6rem] leading-none">Filtros</h2>
              {activeCount || filters.q ? (
                <button type="button" onClick={clearAll} className="text-[0.92rem] underline underline-offset-4">
                  Limpar filtros
                </button>
              ) : null}
            </div>
            <FilterPanel filters={filters} onChange={commit} idPrefix="lateral" />
          </div>
        </aside>

        <div className="col-span-12 lg:col-span-9">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p aria-live="polite" className="text-[0.95rem]">
              <strong className="font-semibold tabular-nums">{results.length}</strong>{" "}
              {results.length === 1 ? "peça encontrada" : "peças encontradas"}
              {catLabel ? ` em ${catLabel}` : ""}
            </p>
            {chips.length ? (
              <ul className="flex flex-wrap gap-1.5">
                {chips.map((c) => (
                  <li key={c.key}>
                    <button
                      type="button"
                      onClick={() => {
                        if (c.key === "q") setQuery("");
                        commit(c.remove);
                      }}
                      className="press inline-flex min-h-9 items-center gap-1.5 bg-champagne/60 px-3 text-[0.88rem] hover:bg-champagne"
                      aria-label={`Remover filtro ${c.label}`}
                    >
                      {c.label} <X className="size-3.5" aria-hidden />
                    </button>
                  </li>
                ))}
                <li>
                  <button type="button" onClick={clearAll} className="min-h-9 px-2 text-[0.88rem] underline underline-offset-4">
                    Limpar filtros
                  </button>
                </li>
              </ul>
            ) : null}
          </div>

          {results.length === 0 ? (
            <div className="mt-10 bg-sand px-6 py-14 sm:px-10">
              <p className="font-display text-[2rem] leading-tight">Nenhuma peça com esses filtros.</p>
              <p className="mt-3 max-w-[48ch]">
                Tente remover um tamanho ou uma cor, ampliar a faixa de preço ou buscar por outra palavra. Se procura algo
                específico, a equipe pode verificar pelo WhatsApp.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <button type="button" onClick={clearAll} className="btn btn-dark">
                  Limpar filtros
                </button>
                <Link href="/produtos?categoria=lancamentos" className="btn btn-light">
                  Ver lançamentos
                </Link>
              </div>
            </div>
          ) : (
            <motion.ul layout={!reduce} className="mt-6 grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 md:grid-cols-3 lg:gap-x-6">
              <AnimatePresence mode="popLayout" initial={false}>
                {shown.map((p, i) => (
                  <motion.li
                    key={p.id}
                    layout={!reduce}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    transition={{ duration: 0.4, delay: Math.min(i % PAGE, 8) * 0.03, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <ProductCard product={p} priority={i < 3} sizes="(min-width: 1024px) 24vw, (min-width: 768px) 32vw, 50vw" />
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          )}

          {results.length > shown.length ? (
            <div className="mt-12 flex flex-col items-center gap-3">
              <p className="text-[0.95rem] text-muted tabular-nums">
                Mostrando {shown.length} de {results.length}
              </p>
              <button type="button" onClick={() => setVisible((v) => v + PAGE)} className="btn btn-dark">
                Carregar mais
              </button>
            </div>
          ) : results.length > PAGE ? (
            <p className="mt-12 text-center text-[0.95rem] text-muted">Você viu todas as {results.length} peças.</p>
          ) : null}
        </div>
      </div>

      {/* Mobile / tablet drawer */}
      <Sheet
        open={drawer}
        onOpenChange={setDrawer}
        side="bottom"
        title="Filtrar"
        footer={
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setDraft({ ...emptyFilters, q: filters.q, sort: filters.sort, category: filters.category })}
              className="btn btn-sand flex-1"
            >
              Limpar
            </button>
            <button
              type="button"
              onClick={() => {
                commit(draft);
                setDrawer(false);
              }}
              className="btn btn-primary flex-[2]"
            >
              Aplicar filtros ({applyFilters(products, draft).length})
            </button>
          </div>
        }
      >
        <FilterPanel filters={draft} onChange={setDraft} idPrefix="gaveta" />
      </Sheet>
    </div>
  );
}
