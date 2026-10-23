"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, MessageCircle, Search, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart/cart-provider";
import { Sheet } from "@/components/ui/sheet";
import { SearchDialog } from "./search-dialog";
import { navLinks } from "./nav-links";
import { siteConfig } from "@/config/site";
import { generalMessage, whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { count, setOpen: setCartOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolledPast, setScrolledPast] = useState(false);
  const pastHero = !isHome || scrolledPast;
  const reduce = useReducedMotion();

  // On the home page the giant wordmark is the logo; the small one appears once it has scrolled away.
  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolledPast(window.scrollY > window.innerHeight * 0.75);
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isHome]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href));

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
      >
        Pular para o conteúdo
      </a>
      <header className="sticky top-0 z-50 bg-paper/100">
        <div className="frame flex h-[var(--header-h)] items-center gap-4">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="press -ml-2 inline-flex size-11 items-center justify-center lg:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="size-[22px]" strokeWidth={1.5} />
          </button>

          <Link href="/" className="relative flex h-11 items-center" aria-label="Divino Look — início">
            <AnimatePresence initial={false}>
              {pastHero ? (
                <motion.span
                  key="wm"
                  initial={reduce ? { opacity: 0 } : { opacity: 0, transform: "translateY(8px)" }}
                  animate={{ opacity: 1, transform: "translateY(0px)" }}
                  exit={{ opacity: 0, transform: reduce ? "none" : "translateY(-6px)" }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="font-display text-[1.45rem] leading-none tracking-[-0.02em] whitespace-nowrap"
                >
                  Divino Look
                </motion.span>
              ) : (
                <motion.span
                  key="mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="font-display text-[1.45rem] leading-none tracking-[-0.04em]"
                  aria-hidden
                >
                  LD
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          <nav aria-label="Principal" className="mx-auto hidden lg:block">
            <ul className="flex items-center gap-8 text-[0.95rem]">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-underline py-2"
                    aria-current={isActive(l.href) ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-1 lg:ml-0">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="press inline-flex size-11 items-center justify-center"
              aria-label="Buscar produtos"
            >
              <Search className="size-[20px]" strokeWidth={1.5} />
            </button>
            <a
              href={whatsappLink(generalMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="press hidden h-11 items-center gap-2 px-3 text-[0.95rem] sm:inline-flex"
            >
              <MessageCircle className="size-[19px]" strokeWidth={1.5} aria-hidden />
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="press relative inline-flex h-11 items-center gap-2 pr-1 pl-2 -mr-1"
              aria-label={`Abrir sacola, ${count} ${count === 1 ? "item" : "itens"}`}
            >
              <ShoppingBag className="size-[20px]" strokeWidth={1.5} />
              <span className="hidden text-[0.95rem] md:inline">Sacola</span>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={count}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, transform: "translateY(-8px) scale(0.9)" }}
                  animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
                  exit={{ opacity: 0, transform: reduce ? "none" : "translateY(8px) scale(0.9)" }}
                  transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                  className={cn(
                    "inline-flex h-6 min-w-6 items-center justify-center px-1.5 text-[0.8rem] font-semibold tabular-nums",
                    count > 0 ? "bg-brown text-on-brown" : "bg-sand text-ink",
                  )}
                  aria-hidden
                >
                  {count}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen} side="left" title="Menu" tone="brown">
        <nav aria-label="Menu móvel" className="flex h-full flex-col pb-8">
          <ul className="mt-4 flex flex-col">
            {navLinks.map((l, i) => (
              <motion.li
                key={l.href}
                initial={reduce ? false : { opacity: 0, transform: "translateX(-16px)" }}
                animate={{ opacity: 1, transform: "translateX(0px)" }}
                transition={{ delay: 0.08 + i * 0.05, duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              >
                <Link
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 font-display text-[2.4rem] leading-[1.05] tracking-[-0.02em]"
                >
                  {l.label}
                </Link>
              </motion.li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-10">
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setSearchOpen(true);
              }}
              className="btn btn-light justify-start"
            >
              <Search className="size-5" strokeWidth={1.5} aria-hidden /> Buscar no catálogo
            </button>
            <a href={whatsappLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-light justify-start">
              <MessageCircle className="size-5" strokeWidth={1.5} aria-hidden /> Falar no WhatsApp
            </a>
            <p className="mt-4 text-[0.95rem] opacity-85">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.district} · {siteConfig.address.city}–{siteConfig.address.state}
            </p>
          </div>
        </nav>
      </Sheet>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
