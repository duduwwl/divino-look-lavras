"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products, categoryLabel } from "@/data/products";
import { formatBRL } from "@/lib/format";
import { InView } from "@/components/motion-primitives/in-view";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { cn } from "@/lib/utils";

const pieces = products
  .filter((p) => p.isNew)
  .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  .slice(0, 7);

/** Big names, fixed preview: the new pieces are the index; the frame shows the one in focus. */
export function NewCollection() {
  const [active, setActive] = useState(0);

  return (
    <section id="colecao" aria-labelledby="colecao-titulo" className="frame pt-[clamp(96px,12vw,200px)]">
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-8">
          <InView
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            viewOptions={{ once: true, margin: "0px 0px -15% 0px" }}
          >
            <h2 id="colecao-titulo" className="font-display text-[2rem] leading-tight tracking-[-0.015em] md:text-[2.6rem]">
              Nova coleção
            </h2>
            <p className="mt-2 max-w-[54ch] text-muted">
              As peças que acabaram de chegar à arara: cores de estação, alfaiataria leve e vestidos para os dias longos.
            </p>
          </InView>

          <AnimatedGroup
            as="ol"
            asChild="li"
            childClassName="mb-10 lg:mb-0"
            className="mt-10 lg:mt-12"
            variants={{
              container: { visible: { transition: { staggerChildren: 0.07 } } },
              item: {
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
              },
            }}
          >
            {pieces.map((p, i) => (
              <div key={p.id}>
                {/* phone: picture before each name */}
                <Link href={`/produtos/${p.slug}`} className="relative mb-3 block aspect-[16/10] overflow-hidden bg-sand lg:hidden" tabIndex={-1} aria-hidden>
                  <Image src={p.images[0]} alt="" fill sizes="100vw" className="object-cover object-[50%_25%]" />
                </Link>
                <Link
                  href={`/produtos/${p.slug}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex flex-col gap-1 py-[6px] lg:flex-row lg:items-baseline lg:gap-5"
                >
                  <span
                    className={cn(
                      "font-display text-[9.5vw] leading-[1.02] tracking-[-0.03em] transition-colors duration-200 sm:text-[2.8rem] lg:text-[clamp(44px,4.6vw,72px)]",
                      active === i ? "text-ink" : "lg:text-muted",
                    )}
                  >
                    {p.name}
                  </span>
                  <span className="text-[0.9rem] text-muted tabular-nums lg:whitespace-nowrap">
                    {categoryLabel[p.category]} · {formatBRL(p.price)}
                  </span>
                </Link>
              </div>
            ))}
          </AnimatedGroup>

          <Link href="/produtos?categoria=lancamentos" className="btn btn-dark mt-10">
            Ver toda a coleção
          </Link>
        </div>

        <div className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-[15vh] aspect-[4/5] w-full overflow-hidden bg-sand">
            {pieces.map((p, i) => (
              <Image
                key={p.id}
                src={p.images[0]}
                alt={i === active ? p.name : ""}
                fill
                sizes="30vw"
                className={cn(
                  "object-cover transition-opacity duration-200",
                  i === active ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
