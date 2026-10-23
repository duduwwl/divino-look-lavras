"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { photo } from "@/lib/photos";
import { InView } from "@/components/motion-primitives/in-view";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { cn } from "@/lib/utils";

/**
 * Editorial only — no products on the landing page.
 * The themes of the season are the index; each one opens the catalogue
 * (/produtos) with the matching filter. The frame shows the theme in focus.
 */
const themes = [
  { title: "Alfaiataria leve", note: "Blazers e calças para o dia todo", href: "/produtos?categoria=conjuntos", img: photo("1613915617430-8ab0fd7c6baf", "4:5") },
  { title: "Vestidos fluidos", note: "Midi, longos e chemises", href: "/produtos?categoria=vestidos", img: photo("1747396206869-75ea57b325ce", "4:5") },
  { title: "Cores de estação", note: "Vermelho, verde e rosé", href: "/produtos?cores=Vermelho,Verde,Rosa", img: photo("1662532577856-e8ee8b138a8b", "4:5") },
  { title: "Saias com movimento", note: "Evasê, midi e estampas", href: "/produtos?categoria=saias", img: photo("1590852669429-d1cd8775ea59", "4:5") },
  { title: "Treino com estilo", note: "Conjuntos e leggings", href: "/produtos?categoria=fitness", img: photo("1606902965551-dce093cda6e7", "4:5") },
  { title: "Recém-chegados", note: "Tudo o que acabou de chegar", href: "/produtos?categoria=lancamentos", img: photo("1750064773510-bbbf549db4d2", "4:5") },
];

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
            <p className="mt-2 max-w-[54ch]">
              Os temas da estação na arara da Divino Look: alfaiataria leve, vestidos fluidos e cores para os dias longos.
              Escolha um tema e veja as peças no catálogo.
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
            {themes.map((t, i) => (
              <div key={t.title}>
                {/* phone: picture before each theme */}
                <Link href={t.href} className="relative mb-3 block aspect-[16/10] overflow-hidden bg-sand lg:hidden" tabIndex={-1} aria-hidden>
                  <Image src={t.img} alt="" fill sizes="100vw" className="object-cover object-[50%_25%]" />
                </Link>
                <Link
                  href={t.href}
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
                    {t.title}
                  </span>
                  <span className="text-[0.875rem] text-muted lg:whitespace-nowrap">{t.note}</span>
                </Link>
              </div>
            ))}
          </AnimatedGroup>

          <Link href="/produtos?categoria=lancamentos" className="btn btn-dark mt-10">
            Ver a coleção no catálogo
          </Link>
        </div>

        <div className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-[15vh] aspect-[4/5] w-full overflow-hidden bg-sand">
            {themes.map((t, i) => (
              <Image
                key={t.title}
                src={t.img}
                alt={i === active ? t.title : ""}
                fill
                sizes="30vw"
                className={cn("object-cover transition-opacity duration-200", i === active ? "opacity-100" : "opacity-0")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
