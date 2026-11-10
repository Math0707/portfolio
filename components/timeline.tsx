import { Briefcase, GraduationCap, Languages } from "lucide-react";
import type { TimelineItem } from "@/lib/content";
import { getContent } from "@/lib/content";
import { cn } from "@/lib/utils";

const t = getContent();

function Group({
  label,
  items,
  icon: Icon,
  headingLevel = "h3",
}: {
  label: string;
  items: TimelineItem[];
  icon: typeof Briefcase;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const ItemHeading = headingLevel === "h2" ? "h3" : "h4";
  return (
    <div data-reveal className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-brutal md:p-6">
      <Heading className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/60">
        <Icon className="h-4 w-4" aria-hidden /> {label}
      </Heading>
      <ol className="mt-5 grid gap-6 border-l border-white/10 pl-5">
        {items.map((it) => (
          <li key={`${it.title}-${it.org}`} className="relative">
            <span
              className="absolute -left-[25px] top-1.5 h-2 w-2 rounded-full bg-[#FF9FFC] ring-4 ring-black"
              aria-hidden
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <ItemHeading className="font-semibold">
                {it.title} <span className="font-normal text-white/70">— {it.org}</span>
              </ItemHeading>
              <p className="font-mono text-xs text-white/60">{it.period}</p>
            </div>
            {it.context ? <p className="mt-1 text-sm text-white/60">{it.context}</p> : null}
            {it.bullets?.length ? (
              <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-white/75">
                {it.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/50" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function LanguagesCard({ className, headingLevel = "h3" }: { className?: string; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <div data-reveal className={cn("rounded-3xl border border-white/10 bg-white/5 p-5 shadow-brutal md:p-6", className)}>
      <Heading className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/60">
        <Languages className="h-4 w-4" aria-hidden /> {t.experience.languagesLabel}
      </Heading>
      <ul className="mt-4 flex flex-wrap gap-2">
        {t.experience.languages.map((l) => (
          <li key={l.name} className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-sm">
            {l.name} <span className="text-white/60">· {l.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Timeline({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  return (
    <div className="grid gap-6">
      <Group label={t.experience.workLabel} items={t.experience.work} icon={Briefcase} headingLevel={headingLevel} />
      <Group label={t.experience.educationLabel} items={t.experience.education} icon={GraduationCap} headingLevel={headingLevel} />
      <LanguagesCard headingLevel={headingLevel} />
    </div>
  );
}
