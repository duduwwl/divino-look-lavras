"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { photo } from "@/lib/photos";
import { cn } from "@/lib/utils";

const prints = [
  {
    href: "/produtos?categoria=conjuntos",
    img: photo("1613915617430-8ab0fd7c6baf", "3:4"),
    alt: "Look de alfaiataria em tons neutros",
    caption: "Alfaiataria do dia",
    rotate: -8,
  },
  {
    href: "/produtos?categoria=vestidos",
    img: photo("1752074211535-b1741213b0cb", "3:4"),
    alt: "Look claro e leve perto de uma janela",
    caption: "Leveza para o fim de tarde",
    rotate: 6,
  },
  {
    href: "/produtos?categoria=fitness",
    img: photo("1788463127375-423984537d89", "3:4"),
    alt: "Conjuntos fitness combinando",
    caption: "Treino com estilo",
    rotate: -3,
  },
];

/** Prints dropped on the headline: the lookbook as photographs laid on the words. */
export function Lookbook() {
  const [front, setFront] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="lookbook" aria-labelledby="lookbook-titulo" className="mt-[clamp(96px,12vw,200px)] bg-sand">
      <div className="frame flex min-h-[86svh] flex-col justify-between gap-6 py-10 md:min-h-[100svh] md:py-12">
        <h2 id="lookbook-titulo" className="font-display font-medium text-brown">
          <span className="block text-[21vw] leading-[0.85] tracking-[-0.05em] md:text-[15vw]">Looks</span>
          <span className="sr-only"> completos</span>
        </h2>

        {/* the prints are tucked between the two words */}
        <ul className="relative mx-auto flex w-full max-w-[1100px] items-center justify-center gap-[3vw] py-2">
          {prints.map((p, i) => (
            <motion.li
              key={p.href}
              className={cn("relative w-[42vw] md:w-[22vw] md:max-w-[300px]", i === 2 && "hidden md:block")}
              style={{ zIndex: front === i ? 5 : 1 }}
              initial={reduce ? false : { opacity: 0, y: 48, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: front === i ? 0 : p.rotate }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.23, 1, 0.32, 1] }}
              onMouseEnter={() => setFront(i)}
              onMouseLeave={() => setFront(null)}
            >
              <motion.div animate={{ rotate: front === i ? 0 : p.rotate }} transition={{ duration: 0.2 }}>
                <Link
                  href={p.href}
                  onFocus={() => setFront(i)}
                  onBlur={() => setFront(null)}
                  className="block bg-paper p-2"
                >
                  <span className="relative block aspect-[3/4] w-full overflow-hidden">
                    <Image src={p.img} alt={p.alt} fill sizes="(min-width: 768px) 22vw, 42vw" className="object-cover" />
                  </span>
                  <span className="block px-1 pt-2 pb-1 text-[0.875rem]">{p.caption}</span>
                </Link>
              </motion.div>
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[32ch] text-[1rem] md:order-1 md:pb-[2vw]">
            Na Divino Look a ideia é sair com a produção inteira resolvida. Toque em um look para ver as peças.
          </p>
          <p aria-hidden className="font-display text-[21vw] leading-[0.85] font-medium tracking-[-0.05em] text-brown md:order-2 md:text-right md:text-[15vw]">
            completos
          </p>
        </div>
      </div>
    </section>
  );
}
