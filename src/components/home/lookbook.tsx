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
    className: "left-[14%] top-[16%] w-[52vw] md:left-[27%] md:top-[12%] md:w-[24vw]",
  },
  {
    href: "/produtos?categoria=vestidos",
    img: photo("1752074211535-b1741213b0cb", "3:4"),
    alt: "Look de vestido leve perto de uma janela",
    caption: "Vestido para o fim de tarde",
    rotate: 6,
    className: "right-[8%] top-[30%] w-[50vw] md:right-[25%] md:top-[18%] md:w-[24vw]",
  },
  {
    href: "/produtos?categoria=fitness",
    img: photo("1788463127375-423984537d89", "3:4"),
    alt: "Conjuntos fitness combinando",
    caption: "Treino com estilo",
    rotate: -3,
    className: "hidden md:block right-[5%] -bottom-[10%] w-[15vw]",
  },
];

/** Prints dropped on the headline: the lookbook as photographs laid on the words. */
export function Lookbook() {
  const [front, setFront] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="lookbook" aria-labelledby="lookbook-titulo" className="mt-[clamp(96px,12vw,200px)]">
      <div className="relative h-[86svh] min-h-[560px] overflow-hidden bg-sand md:h-[100svh] md:min-h-[680px]">
        <h2 id="lookbook-titulo" className="sr-only">
          Lookbook — looks completos
        </h2>
        <p
          aria-hidden
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-display text-[25vw] leading-[0.85] font-medium tracking-[-0.05em] text-brown select-none md:text-[14vw]"
        >
          Looks
          <br />
          completos
        </p>

        {prints.map((p, i) => (
          <motion.div
            key={p.href}
            className={cn("absolute", p.className)}
            style={{ zIndex: front === i ? 5 : 2 + i }}
            initial={reduce ? false : { opacity: 0, y: 60, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: front === i ? 0 : p.rotate }}
            animate={front === i ? { rotate: 0 } : undefined}
            viewport={{ once: true, margin: "0px 0px -20% 0px" }}
            transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.23, 1, 0.32, 1] }}
            onMouseEnter={() => setFront(i)}
            onMouseLeave={() => setFront(null)}
          >
            <Link
              href={p.href}
              onFocus={() => setFront(i)}
              onBlur={() => setFront(null)}
              className="block bg-paper p-2 transition-transform duration-200"
            >
              <span className="relative block aspect-[3/4] w-full overflow-hidden">
                <Image src={p.img} alt={p.alt} fill sizes="(min-width: 768px) 24vw, 52vw" className="object-cover" />
              </span>
              <span className="block px-1 pt-2 pb-1 text-[0.9rem]">{p.caption}</span>
            </Link>
          </motion.div>
        ))}

        <p className="absolute bottom-5 left-[var(--gutter)] z-10 max-w-[30ch] bg-sand pr-3 text-[0.95rem] md:bottom-6">
          Na Divino Look a ideia é sair com a produção inteira resolvida. Toque em um look para ver as peças.
        </p>
      </div>
    </section>
  );
}
