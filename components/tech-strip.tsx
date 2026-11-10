import { getContent } from "@/lib/content";

/** Faixa estática com as tecnologias reais (substitui o Marquee "FULL STACK"). */
export function TechStrip() {
  const t = getContent();
  return (
    <div className="border-b border-white/10 bg-white/[0.03]">
      <div className="mx-auto max-w-6xl px-4 py-5">
        <p className="sr-only">{t.techStrip.label}</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-white/60 md:justify-between">
          {t.techStrip.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
