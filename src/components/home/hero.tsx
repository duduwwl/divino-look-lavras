"use client";

import Link from "next/link";
import { getImageProps } from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { photo } from "@/lib/photos";

const HERO_ID = "1618244965061-1d27b208d6e8";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Signature move: the monument feels heavy — it settles a few percent as the first screen leaves.
  const wordScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 0.93]);
  const photoY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "12%"]);

  const common = { alt: "Mulher de casaco marrom diante de uma porta escura, em clima de campanha de moda", sizes: "100vw", priority: true };
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: photo(HERO_ID, "16:9"), width: 1920, height: 1080 });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({ ...common, src: photo(HERO_ID, "4:5"), width: 1080, height: 1350 });

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative flex min-h-[calc(100svh-var(--header-h))] flex-col">
      <div className="relative h-[36svh] overflow-hidden bg-sand md:h-[42svh] lg:h-[43svh]">
        <motion.div style={{ y: photoY }} className="absolute inset-0 -top-[6%] h-[112%]">
          <picture>
            <source media="(min-width: 768px)" srcSet={desktop} />
            <source media="(max-width: 767px)" srcSet={mobile} />
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img {...rest} className="h-full w-full object-cover object-[50%_30%]" fetchPriority="high" />
          </picture>
        </motion.div>
      </div>

      <div className="frame flex flex-1 flex-col pt-5">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[46rem]">
            <TextEffect
              as="p"
              per="word"
              preset="fade-in-blur"
              speedReveal={1.1}
              className="font-display text-[1.625rem] leading-[1.1] tracking-[-0.015em] md:text-[2.6rem]"
            >
              Seu estilo. Sua essência. Seu momento.
            </TextEffect>
            <motion.p
              initial={reduce ? false : { opacity: 0, transform: "translateY(12px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ delay: 0.55, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="mt-2 text-[1rem]"
            >
              Boutique de moda feminina no centro de Lavras–MG, com looks completos para se vestir bem.
            </motion.p>
          </div>
          <motion.div
            initial={reduce ? false : { opacity: 0, transform: "translateY(12px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ delay: 0.7, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-wrap gap-2"
          >
            <Link href="/#colecao" className="btn btn-primary">
              Explorar coleção
            </Link>
            <Link href="/produtos" className="btn btn-sand">
              Ver produtos
            </Link>
          </motion.div>
        </div>

        <motion.h1
          id="hero-title"
          style={{ scale: wordScale, transformOrigin: "50% 100%" }}
          initial={reduce ? false : { y: "10%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          className="wordmark mt-auto pt-5 pb-[0.06em] text-[32vw] md:text-[clamp(120px,18.7vw,380px)]"
        >
          <span className="block md:inline">Divino</span> <span className="block md:inline">Look</span>
          <span className="sr-only">, moda feminina em Lavras–MG</span>
        </motion.h1>
      </div>
    </section>
  );
}
