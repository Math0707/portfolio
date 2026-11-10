import { skillGroups } from "@/lib/data";
import { SkillBadge } from "@/components/badge";

export function Skills() {
  return (
    <div className="grid gap-6">
      {skillGroups.map((g) => (
        <div key={g.title} data-reveal className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-brutal md:p-6">
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <span className="inline-block h-2 w-2 rounded-full bg-[#FF9FFC]" aria-hidden />
              {g.title}
            </h3>
            <p className="font-mono text-xs text-white/60">{g.description}</p>
          </div>

          <ul className="flex flex-wrap gap-2">
            {g.items.map((s) => (
              <li key={s.name}>
                <SkillBadge name={s.name} icon={s.icon} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
