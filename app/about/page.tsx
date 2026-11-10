import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Timeline } from "@/components/timeline";
import { getContent, site } from "@/lib/content";
import { pageSocial } from "@/lib/seo";

const t = getContent();

export const metadata: Metadata = {
  title: t.meta.aboutTitle,
  description: t.meta.aboutDescription,
  ...pageSocial({
    path: "/about",
    title: `${t.meta.aboutTitle} · ${site.name}`,
    description: t.meta.aboutDescription,
  }),
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-20">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-24">
            <p className="hero-in font-mono text-xs uppercase tracking-widest text-white/60">{t.aboutPage.eyebrow}</p>
            <h1 className="hero-in mt-3 text-3xl font-semibold md:text-5xl" style={{ "--i": 1 } as React.CSSProperties}>
              {t.aboutPage.title}
            </h1>
            <p className="hero-in mt-4 font-mono text-sm text-white" style={{ "--i": 2 } as React.CSSProperties}>
              {t.hero.role}
              <span className="mt-1 block text-white/60">{t.hero.learning}</span>
            </p>

            <div className="hero-in mt-6 grid gap-4 leading-relaxed text-white/75" style={{ "--i": 3 } as React.CSSProperties}>
              {t.aboutPage.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="hero-in mt-8 flex flex-wrap gap-3" style={{ "--i": 4 } as React.CSSProperties}>
              <a
                href={site.cv}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-mono text-sm text-black no-underline shadow-brutal transition hover:opacity-90"
              >
                {t.aboutPage.ctaCv} <FileText className="h-4 w-4" aria-hidden />
              </a>
              <Link
                href="/#projetos"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-mono text-sm no-underline transition hover:border-white/40 hover:bg-white/5"
              >
                {t.aboutPage.ctaProjects} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid content-start gap-6 md:col-span-7">
          <section
            aria-labelledby="busco"
            className="hero-in rounded-3xl border border-white/10 bg-white/5 p-5 shadow-brutal md:p-6"
            style={{ "--i": 5 } as React.CSSProperties}
          >
            <h2 id="busco" className="font-mono text-xs uppercase tracking-widest text-white/60">
              {t.aboutPage.focusTitle}
            </h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-3">
              {t.aboutPage.focus.map((f) => (
                <div key={f.label} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                  <dt className="font-mono text-xs text-white/60">{f.label}</dt>
                  <dd className="mt-1 text-sm text-white/85">{f.text}</dd>
                </div>
              ))}
            </dl>
          </section>

          <Timeline headingLevel="h2" />
        </div>
      </div>
    </main>
  );
}
