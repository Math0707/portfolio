"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Observa todos os elementos com `data-reveal` e adiciona `.is-visible`
 * uma única vez quando entram na tela (depois para de observar).
 * Um único observer para a página inteira — sem listeners por card.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"));

    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    targets.forEach((el) => io.observe(el));
    root.classList.add("reveal-ready");

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
