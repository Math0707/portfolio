"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { getContent, site } from "@/lib/content";

const t = getContent();

const navItems = [
  { label: t.nav.home, href: "/#top" },
  { label: t.nav.projects, href: "/#projetos" },
  { label: t.nav.about, href: "/about" },
  { label: t.nav.contact, href: "/#contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Fecha com Esc e trava o scroll do body enquanto o menu está aberto.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/#top" className="group flex items-center gap-2 no-underline" title={t.nav.homeAria}>
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 shadow-brutal"
            aria-hidden
          >
            <span className="font-mono text-[11px] tracking-widest">{site.shortName}</span>
          </span>
          {/* No mobile o nome fica só para leitores de tela (nome acessível do link). */}
          <span className="sr-only font-mono text-xs text-white/70 transition group-hover:text-white sm:not-sr-only">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label={t.nav.navigation}>
          {navItems.map((it) => (
            <Link key={it.href} href={it.href} className="font-mono text-sm text-white/70 no-underline transition hover:text-white">
              {it.label}
            </Link>
          ))}
          <a
            href={site.cv}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-sm no-underline transition hover:border-white/30 hover:bg-white/5"
          >
            <FileText className="h-4 w-4" aria-hidden /> {t.nav.cv}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-sm transition hover:border-white/30 hover:bg-white/5 md:hidden"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu className="h-4 w-4" aria-hidden />
          {t.nav.menu}
        </button>
      </div>

      {/* Menu mobile: só transições CSS de opacity/transform. */}
      <div
        id="mobile-menu"
        // `invisible` (visibility: hidden) tira os links do foco quando fechado;
        // a transição de visibility espera o fade-out terminar.
        className={cn(
          "fixed inset-0 z-50 transition-[visibility] duration-200 md:hidden",
          open ? "visible" : "invisible",
        )}
      >
        <div
          className={cn("absolute inset-0 bg-black/80 transition-opacity duration-200", open ? "opacity-100" : "opacity-0")}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute left-3 right-3 top-3 rounded-3xl border border-white/15 bg-black p-5 shadow-brutal transition duration-200 ease-out",
            open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
          )}
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-xs text-white/60">{t.nav.navigation}</span>
            <button
              type="button"
              className="rounded-full border border-white/15 p-2 hover:bg-white/5"
              onClick={() => setOpen(false)}
              aria-label={t.nav.close}
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          </div>

          <nav className="flex flex-col gap-3" aria-label={t.nav.navigation}>
            {navItems.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 px-4 py-3 font-mono text-sm no-underline transition hover:border-white/25 hover:bg-white/5"
              >
                {it.label}
              </Link>
            ))}
            <a
              href={site.cv}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-4 py-3 font-mono text-sm no-underline transition hover:border-white/30 hover:bg-white/10"
            >
              {t.nav.cv} <FileText className="h-4 w-4" aria-hidden />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
