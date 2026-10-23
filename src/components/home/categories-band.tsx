"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { categories } from "@/data/products";
import { InView } from "@/components/motion-primitives/in-view";
import { cn } from "@/lib/utils";

const grow = [5, 2, 3, 2, 3, 2, 3];

/** Band of unequal panels: seven categories side by side, the hovered one opens. */
export function CategoriesBand() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section aria-labelledby="categorias-titulo" className="pt-[clamp(96px,12vw,200px)]">
      <InView
        className="frame md:pl-[calc(var(--gutter)+(100%-2*var(--gutter))*2/12)]"
        variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        viewOptions={{ once: true, margin: "0px 0px -15% 0px" }}
      >
        <h2 id="categorias-titulo" className="font-display text-[2rem] leading-tight tracking-[-0.015em] md:text-[2.6rem]">
          Compre por categoria
        </h2>
        <p className="mt-2 max-w-[52ch] text-muted">
          Do vestido para a ocasião especial à legging do treino: escolha por onde começar o seu look.
        </p>
      </InView>

      {/* Desktop: one folded band */}
      <ul className="mt-12 hidden h-[68svh] min-h-[520px] md:flex" onMouseLeave={() => setActive(null)}>
        {categories.map((c, i) => (
          <li
            key={c.slug}
            className="relative min-w-0 overflow-hidden transition-[flex-grow] duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] motion-reduce:transition-none"
            style={{ flexGrow: active === i ? 6 : grow[i], flexBasis: 0 }}
            onMouseEnter={() => setActive(i)}
          >
            <Link
              href={`/produtos?categoria=${c.slug}`}
              onFocus={() => setActive(i)}
              className="group absolute inset-0 block focus-visible:-outline-offset-4"
            >
              <Image
                src={c.image}
                alt=""
                fill
                sizes="(min-width: 768px) 30vw, 50vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04] motion-reduce:transition-none"
              />
              <span
                className={cn(
                  "absolute bottom-0 left-0 max-w-full bg-ink/55 px-4 py-3 text-paper",
                  i === 0 && "px-6 py-5",
                )}
              >
                <span
                  className={cn(
                    "block font-display leading-[1.05] whitespace-nowrap",
                    i === 0 ? "text-[1.75rem]" : "text-[1.25rem]",
                  )}
                >
                  {c.label}
                </span>
                <span
                  className={cn(
                    "block overflow-hidden text-[0.9rem] whitespace-nowrap opacity-90 transition-opacity duration-300",
                    i === 0 || active === i ? "opacity-90" : "opacity-0",
                  )}
                >
                  {c.blurb}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Phone / small tablet: unequal two-column block */}
      <ul className="mt-8 grid grid-cols-12 gap-[3px] md:hidden">
        {categories.map((c, i) => {
          const span = i === 0 ? "col-span-12 h-[46svh]" : i % 4 === 1 || i % 4 === 0 ? "col-span-7 h-[34svh]" : "col-span-5 h-[34svh]";
          return (
            <li key={c.slug} className={cn("relative overflow-hidden", span)}>
              <Link href={`/produtos?categoria=${c.slug}`} className="absolute inset-0 block">
                <Image src={c.image} alt="" fill sizes="(max-width: 767px) 70vw, 30vw" className="object-cover" />
                <span className="absolute bottom-0 left-0 bg-ink/55 px-3 py-2 text-paper">
                  <span className="block font-display text-[1.2rem] leading-tight">{c.label}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="frame mt-4 text-[0.95rem] text-muted">Toque em uma categoria para ver as peças com o filtro já aplicado.</p>
    </section>
  );
}
