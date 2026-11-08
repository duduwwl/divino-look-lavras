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
import { BrandMark } from "./brand-mark";
import { siteConfig } from "@/config/site";
import { generalMessage, whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347M12.05 21.965h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26C2.167 6.624 6.6 2.19 12.05 2.19a9.82 9.82 0 0 1 6.99 2.897 9.82 9.82 0 0 1 2.896 6.991c-.003 5.45-4.437 9.887-9.886 9.887M20.46 3.66A11.82 11.82 0 0 0 12.057.18C5.495.18.155 5.52.152 12.083c0 2.096.547 4.142 1.588 5.945L.05 24l6.11-1.603a11.89 11.89 0 0 0 5.892 1.5h.005c6.56 0 11.9-5.34 11.903-11.903a11.82 11.82 0 0 0-3.5-8.334" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
    </svg>
  );
}

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
      <header className="sticky top-0 z-50 bg-brand-rose">
        <div className="frame flex h-[var(--header-h)] items-center gap-4">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="press -ml-2 inline-flex size-11 items-center justify-center lg:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="size-[22px]" strokeWidth={1.5} />
          </button>

          <Link href="/" className="relative flex h-11 items-center gap-3">
            <span className="sr-only">Divino Look, página inicial</span>
            <BrandMark className="h-[30px] w-auto text-on-brown" />
            <AnimatePresence initial={false}>
              {pastHero ? (
                <motion.span
                  key="wm"
                  initial={reduce ? { opacity: 0 } : { opacity: 0, transform: "translateX(-6px)" }}
                  animate={{ opacity: 1, transform: "translateX(0px)" }}
                  exit={{ opacity: 0, transform: reduce ? "none" : "translateX(-6px)" }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="hidden font-display text-[1.625rem] leading-none tracking-[-0.02em] whitespace-nowrap xs:inline"
                  aria-hidden
                >
                  Divino Look
                </motion.span>
              ) : null}
            </AnimatePresence>
          </Link>

          <nav aria-label="Principal" className="mx-auto hidden lg:block">
            <ul className="flex items-center gap-8 text-[1rem]">
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
              className="press hidden h-11 items-center gap-2 px-3 text-[1rem] sm:inline-flex"
            >
              <WhatsAppIcon className="size-[19px]" />
              WhatsApp
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="press hidden size-11 items-center justify-center sm:inline-flex"
              aria-label={`Instagram ${siteConfig.instagramHandle}`}
            >
              <InstagramIcon className="size-[20px]" />
            </a>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="press relative inline-flex h-11 items-center gap-2 pr-1 pl-2 -mr-1"
              aria-label={`Sacola, ${count} ${count === 1 ? "item" : "itens"}`}
            >
              <ShoppingBag className="size-[20px]" strokeWidth={1.5} />
              <span className="hidden text-[1rem] md:inline">Sacola</span>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={count}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, transform: "translateY(-8px) scale(0.9)" }}
                  animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
                  exit={{ opacity: 0, transform: reduce ? "none" : "translateY(8px) scale(0.9)" }}
                  transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                  className={cn(
                    "inline-flex h-6 min-w-6 items-center justify-center px-1.5 text-[0.875rem] font-semibold tabular-nums",
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
                  className="block py-2.5 font-display text-[2.6rem] leading-[1.05] tracking-[-0.02em]"
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
            <p className="mt-4 text-[1rem] opacity-85">
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
