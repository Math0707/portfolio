import { cn } from "@/lib/utils";

/**
 * `split`: título à esquerda, conteúdo à direita (desktop).
 * `stacked`: título em cima, conteúdo na largura toda.
 */
export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  layout = "split",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  layout?: "split" | "stacked";
}) {
  const stacked = layout === "stacked";
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-4 py-14 md:py-20", className)}>
      <div className={cn("grid gap-6", stacked ? "md:gap-10" : "md:grid-cols-12")}>
        <div className={cn(stacked ? "max-w-2xl" : "md:col-span-4")} data-reveal>
          {eyebrow ? (
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-white/60">{eyebrow}</p>
          ) : null}
          <h2 className="text-2xl font-semibold leading-tight md:text-4xl">{title}</h2>
          {subtitle ? <p className="mt-4 leading-relaxed text-white/70">{subtitle}</p> : null}
        </div>
        <div className={cn(!stacked && "md:col-span-8")}>{children}</div>
      </div>
    </section>
  );
}
