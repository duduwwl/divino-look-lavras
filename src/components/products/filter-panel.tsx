"use client";

import { useState } from "react";
import type { Filters, Availability } from "@/lib/catalog";
import type { Size } from "@/types/product";
import { ALL_SIZES, allColors, priceBounds } from "@/data/products";
import { RangeSlider, RollingNumber } from "@/components/watermelon/range-selection-slider";
import { Swatch } from "./swatch";
import { cn } from "@/lib/utils";

const availabilityOptions: { value: Availability; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "em-estoque", label: "Em estoque" },
  { value: "esgotados", label: "Esgotados" },
];

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="pb-7">
      <legend className="mb-3 text-[1rem] font-semibold">{title}</legend>
      {children}
    </fieldset>
  );
}

/** Shared filter controls: used in the desktop sidebar (live) and the mobile drawer (draft). */
export function FilterPanel({
  filters,
  onChange,
  idPrefix,
}: {
  filters: Filters;
  onChange: (next: Filters) => void;
  idPrefix: string;
}) {
  const [range, setRange] = useState<[number, number]>([
    filters.min ?? priceBounds.min,
    filters.max ?? priceBounds.max,
  ]);

  // keep the slider in sync when filters change from outside (chips, "Limpar")
  const external = `${filters.min}-${filters.max}`;
  const [synced, setSynced] = useState(external);
  if (synced !== external) {
    setSynced(external);
    setRange([filters.min ?? priceBounds.min, filters.max ?? priceBounds.max]);
  }

  const commitRange = (r: [number, number]) =>
    onChange({
      ...filters,
      min: r[0] <= priceBounds.min ? null : r[0],
      max: r[1] >= priceBounds.max ? null : r[1],
    });

  const toggle = <T,>(list: T[], v: T) => (list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const numberInput = (which: 0 | 1) => (
    <label className="flex flex-1 flex-col gap-1 bg-sand px-3 py-2">
      <span className="text-[0.875rem] text-muted">{which === 0 ? "Mínimo" : "Máximo"}</span>
      <span className="flex items-baseline gap-1">
        <span className="font-semibold">R$</span>
        <input
          id={`${idPrefix}-preco-${which}`}
          type="number"
          inputMode="numeric"
          min={priceBounds.min}
          max={priceBounds.max}
          step={10}
          value={range[which]}
          onChange={(e) => {
            const v = Number(e.target.value);
            const next: [number, number] = which === 0 ? [v, range[1]] : [range[0], v];
            setRange(next);
          }}
          onBlur={() => {
            const lo = Math.max(priceBounds.min, Math.min(range[0], range[1] - 10));
            const hi = Math.min(priceBounds.max, Math.max(range[1], lo + 10));
            setRange([lo, hi]);
            commitRange([lo, hi]);
          }}
          className="w-full min-w-0 bg-transparent font-semibold tabular-nums outline-none"
          aria-label={which === 0 ? "Preço mínimo em reais" : "Preço máximo em reais"}
        />
      </span>
    </label>
  );

  return (
    <div>
      <Group title="Faixa de preço">
        <div className="flex items-center justify-between text-[1.125rem]" aria-hidden>
          <RollingNumber value={range[0]} prefix="R$ " />
          <span className="text-muted">até</span>
          <RollingNumber value={range[1]} prefix="R$ " />
        </div>
        <RangeSlider
          min={priceBounds.min}
          max={priceBounds.max}
          step={10}
          value={range}
          onChange={setRange}
          onCommit={commitRange}
        />
        <div className="flex gap-2">
          {numberInput(0)}
          {numberInput(1)}
        </div>
      </Group>

      <Group title="Tamanho">
        <div className="flex flex-wrap gap-1.5">
          {ALL_SIZES.map((s: Size) => {
            const on = filters.sizes.includes(s);
            return (
              <button
                key={s}
                type="button"
                aria-pressed={on}
                onClick={() => onChange({ ...filters, sizes: toggle(filters.sizes, s) })}
                className={cn("press min-h-11 min-w-11 px-3 text-[0.875rem]", on ? "bg-ink text-paper" : "bg-sand hover:bg-champagne")}
              >
                {s === "Único" ? "Tamanho único" : s}
              </button>
            );
          })}
        </div>
      </Group>

      <Group title="Cor">
        <div className="flex flex-wrap gap-1.5">
          {allColors.map((c) => {
            const on = filters.colors.includes(c);
            return (
              <button
                key={c}
                type="button"
                aria-pressed={on}
                onClick={() => onChange({ ...filters, colors: toggle(filters.colors, c) })}
                className={cn(
                  "press inline-flex min-h-11 items-center gap-2 px-3 text-[0.875rem]",
                  on ? "bg-ink text-paper" : "bg-sand hover:bg-champagne",
                )}
              >
                <Swatch color={c} /> {c}
              </button>
            );
          })}
        </div>
      </Group>

      <Group title="Disponibilidade">
        <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="Disponibilidade">
          {availabilityOptions.map((o) => {
            const on = filters.availability === o.value;
            return (
              <button
                key={o.value}
                type="button"
                role="radio"
                aria-checked={on}
                onClick={() => onChange({ ...filters, availability: o.value })}
                className={cn("press min-h-11 px-4 text-[0.875rem]", on ? "bg-ink text-paper" : "bg-sand hover:bg-champagne")}
              >
                {o.label}
              </button>
            );
          })}
        </div>
      </Group>
    </div>
  );
}
