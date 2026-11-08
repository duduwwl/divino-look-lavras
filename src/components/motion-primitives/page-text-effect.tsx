"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

const excluded = "script, style, noscript, svg, option, .sr-only, [aria-hidden='true'], [data-no-page-text-effect], .text-effect-native";

export function PageTextEffect() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = Array.from(document.body.querySelectorAll<HTMLElement>("*"))
      .filter((element) => !element.matches(excluded) && !element.closest(excluded))
      .filter((element) => Array.from(element.childNodes).some((node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim()));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("page-text-slide-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element) => {
      element.classList.add("page-text-slide");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
