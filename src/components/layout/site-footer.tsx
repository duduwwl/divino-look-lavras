"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";
import { siteConfig } from "@/config/site";
import { categories } from "@/data/products";
import { navLinks } from "./nav-links";
import { generalMessage, whatsappLink } from "@/lib/whatsapp";
import VerticalCutReveal from "@/components/fancy/vertical-cut-reveal";

/**
 * Sticky footer — Fancy Components "Sticky Footer" block pattern:
 * the page content sits above (relative, z-10, opaque background) and this
 * footer is `sticky bottom-0` underneath, so the last section lifts off it.
 * The brand name returns at full width in the colours of the LD monogram.
 */
export function SiteFooter() {
  const ref = useRef<HTMLElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const taglineInView = useInView(taglineRef, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.94, 1]);

  return (
    <footer
      ref={ref}
      className="on-dark sticky bottom-0 z-0 flex min-h-[100svh] flex-col bg-brown text-on-brown lg:min-h-[92svh]"
      aria-labelledby="rodape-titulo"
    >
      <h2 id="rodape-titulo" className="sr-only">
        Informações da Divino Look
      </h2>
      <div className="frame grid grid-cols-2 gap-x-6 gap-y-10 pt-12 text-[1rem] md:grid-cols-4 lg:pt-16">
        <div>
          <p className="font-semibold">Visite a loja</p>
          <address className="mt-3 not-italic opacity-85">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.district} · {siteConfig.address.city}–{siteConfig.address.state}
          </address>
          <a href={siteConfig.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-underline mt-3 inline-block">
            Ver no mapa
          </a>
        </div>
        <nav aria-label="Navegação do rodapé">
          <p className="font-semibold">Navegação</p>
          <ul className="mt-3 space-y-1.5 opacity-85">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Categorias do rodapé">
          <p className="font-semibold">Categorias</p>
          <ul className="mt-3 space-y-1.5 opacity-85">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/produtos?categoria=${c.slug}`} className="link-underline">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-semibold">Fale com a gente</p>
          <ul className="mt-3 space-y-1.5 opacity-85">
            <li>
              <a href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="link-underline">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={siteConfig.whatsappGroup} target="_blank" rel="noopener noreferrer" className="link-underline">
                Grupo VIP no WhatsApp
              </a>
            </li>
            <li>
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="link-underline">
                Instagram {siteConfig.instagramHandle}
              </a>
            </li>
            <li>
              <Link href="/politicas" className="link-underline">
                Políticas da loja
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="frame mt-auto pt-16">
        <div ref={taglineRef} className="max-w-[34ch] text-[1.125rem] leading-snug">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.04}
            containerClassName="font-display"
            transition={{ type: "spring", stiffness: 190, damping: 26 }}
            autoStart={taglineInView || !!reduce}
          >
            Looks completos para se vestir bem.
          </VerticalCutReveal>
        </div>
        <motion.p
          aria-hidden
          style={{ scale, transformOrigin: "50% 100%" }}
          className="wordmark mt-4 -mb-[0.06em] text-center text-[16.4vw]"
        >
          Divino Look
        </motion.p>
      </div>
      <div className="frame flex flex-col gap-1 pt-4 pb-5 text-[0.875rem] opacity-80 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Divino Look · Lavras–MG. Todos os direitos reservados.</p>
        <p>Fotos ilustrativas (Unsplash) e preços demonstrativos.</p>
      </div>
    </footer>
  );
}
