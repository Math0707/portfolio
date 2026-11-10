import { ArrowUpRight, FileText, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { getContent, site } from "@/lib/content";

const t = getContent();

type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: typeof Mail;
  external?: boolean;
  wide?: boolean;
};

const links: ContactLink[] = [
  { label: t.contact.email, value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: t.contact.linkedin, value: "in/matheus-teixeira-francellino", href: site.links.linkedin, icon: Linkedin, external: true },
  { label: t.contact.github, value: "github.com/Math0707", href: site.links.github, icon: Github, external: true },
  { label: t.contact.whatsapp, value: "+55 11 99831-3015", href: site.links.whatsapp, icon: MessageCircle, external: true },
  { label: t.contact.cv, value: t.contact.cvHint, href: site.cv, icon: FileText, external: true, wide: true },
];

export function Contact() {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {links.map((l) => {
        const Icon = l.icon;
        const Trailing = ArrowUpRight;
        return (
          <li key={l.label} data-reveal className={l.wide ? "sm:col-span-2" : undefined}>
            <a
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 no-underline shadow-brutal transition hover:border-white/30 hover:bg-white/[0.08]"
            >
              <span className="flex min-w-0 items-center gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/40">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-sm">{l.label}</span>
                  <span className="block truncate text-sm text-white/60">{l.value}</span>
                </span>
              </span>
              <Trailing className="h-4 w-4 shrink-0 text-white/60 transition group-hover:text-white" aria-hidden />
              {l.external ? <span className="sr-only">(abre em nova aba)</span> : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
