import { getContent } from "@/lib/content";

export function Footer() {
  const t = getContent();
  return (
    <footer className="border-t border-white/10">
      <p className="mx-auto max-w-6xl px-4 py-8 text-center font-mono text-xs text-white/60">{t.footer}</p>
    </footer>
  );
}
