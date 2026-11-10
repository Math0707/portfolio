import Link from "next/link";
import { ArrowDown, FileText, Github, Linkedin } from "lucide-react";
import { LightPillar } from "@/components/light-pillar";
import { getContent, site } from "@/lib/content";

const t = getContent();

/** `--i` controla o atraso escalonado da animação `.hero-in`. */
const step = (i: number) => ({ "--i": i }) as React.CSSProperties;

export function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-white/10">
      <LightPillar />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p
              className="hero-in inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 font-mono text-xs text-white/80"
              style={step(0)}
            >
              <span className="status-dot" aria-hidden />
              {t.hero.status}
            </p>

            <h1 className="hero-in mt-5 text-4xl font-semibold leading-[1.05] md:text-6xl" style={step(1)}>
              {site.name}
            </h1>

            <p className="hero-in mt-5 font-mono text-sm text-white md:text-base" style={step(2)}>
              {t.hero.role}
              <span className="mt-1 block text-white/60">{t.hero.learning}</span>
            </p>

            <p className="hero-in mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg" style={step(3)}>
              {t.hero.intro}
            </p>

            <div className="hero-in mt-8 flex flex-wrap items-center gap-3" style={step(4)}>
              <Link
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-mono text-sm text-black no-underline shadow-brutal transition hover:opacity-90"
              >
                {t.hero.ctaProjects} <ArrowDown className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={site.cv}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-5 py-3 font-mono text-sm no-underline transition hover:border-white/40 hover:bg-white/5"
              >
                {t.hero.ctaCv} <FileText className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.hero.githubAria}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 transition hover:border-white/40 hover:bg-white/5"
              >
                <Github className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.hero.linkedinAria}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 transition hover:border-white/40 hover:bg-white/5"
              >
                <Linkedin className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>

          {/* Card estilo terminal com fatos reais */}
          <div className="hero-in md:col-span-5 md:self-center" style={step(5)}>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/75 shadow-brutal">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" aria-hidden />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" aria-hidden />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" aria-hidden />
                <span className="ml-2 font-mono text-xs text-white/60">{t.hero.statusFile}</span>
              </div>
              <div className="px-4 py-4 font-mono text-[13px] leading-relaxed md:px-5 md:py-5">
                <span className="text-white/60" aria-hidden>
                  {"{"}
                </span>
                <dl>
                {t.hero.statusRows.map((row, i) => (
                  <div key={row.key} className="pl-4">
                    <dt className="inline text-[#c4b5fd]">
                      &quot;{row.key}&quot;
                      <span className="text-white/60" aria-hidden>
                        :{" "}
                      </span>
                    </dt>
                    <dd className="inline text-[#ffd6fe]">
                      &quot;{row.value}&quot;
                      {i < t.hero.statusRows.length - 1 ? (
                        <span className="text-white/60" aria-hidden>
                          ,
                        </span>
                      ) : null}
                    </dd>
                  </div>
                ))}
                </dl>
                <span className="text-white/60" aria-hidden>
                  {"}"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
