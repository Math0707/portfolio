"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const SHOW_AFTER = 0.05; // 5% da página

/**
 * O progresso é escrito direto no DOM (CSS variable) dentro de um
 * requestAnimationFrame. O React só re-renderiza quando o botão
 * cruza o limite de visibilidade.
 */
export function ScrollToTop({ label }: { label: string }) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    let lastVisible = false;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      btnRef.current?.style.setProperty("--progress", progress.toFixed(4));

      const nextVisible = progress > SHOW_AFTER;
      if (nextVisible !== lastVisible) {
        lastVisible = nextVisible;
        setVisible(nextVisible);
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={label}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        "fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/90 text-white shadow-brutal transition duration-300 hover:scale-105 md:bottom-8 md:right-8 md:h-14 md:w-14",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 56 56" aria-hidden>
        <circle cx="28" cy="28" r={RADIUS} stroke="currentColor" strokeWidth="3" fill="none" className="text-white/10" />
        <circle
          cx="28"
          cy="28"
          r={RADIUS}
          stroke="url(#stt-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={CIRCUMFERENCE}
          style={{ strokeDashoffset: `calc(${CIRCUMFERENCE} * (1 - var(--progress, 0)))` }}
        />
        <defs>
          <linearGradient id="stt-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5227FF" />
            <stop offset="1" stopColor="#FF9FFC" />
          </linearGradient>
        </defs>
      </svg>
      <ArrowUp className="relative h-4 w-4" aria-hidden />
    </button>
  );
}
