import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { TechStrip } from "@/components/tech-strip";
import { Section } from "@/components/section";
import { Projects } from "@/components/projects";
import { Timeline } from "@/components/timeline";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { getContent } from "@/lib/content";

const t = getContent();

export default function HomePage() {
  return (
    <main id="top">
      <Hero />
      <TechStrip />

      <Section id="sobre" eyebrow={t.about.eyebrow} title={t.about.title}>
        <div data-reveal className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-brutal md:p-6">
          <p className="leading-relaxed text-white/80 md:text-lg">{t.about.text}</p>
          <Link
            href="/about"
            className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-white underline decoration-white/30 hover:decoration-white"
          >
            {t.about.more} <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Section>

      <Section id="projetos" eyebrow={t.projects.eyebrow} title={t.projects.title} subtitle={t.projects.subtitle} layout="stacked">
        <Projects />
      </Section>

      <Section id="experiencia" eyebrow={t.experience.eyebrow} title={t.experience.title} subtitle={t.experience.subtitle}>
        <Timeline />
      </Section>

      <Section id="habilidades" eyebrow={t.skills.eyebrow} title={t.skills.title} subtitle={t.skills.subtitle}>
        <Skills />
      </Section>

      <Section id="contato" eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle}>
        <Contact />
      </Section>
    </main>
  );
}
