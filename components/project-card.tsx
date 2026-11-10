import Image from "next/image";
import { ArrowUpRight, FileSearch, Link2, ListOrdered, Wallet } from "lucide-react";
import type { Project, ProjectIcon } from "@/lib/data";
import { getContent } from "@/lib/content";
import { cn } from "@/lib/utils";

const t = getContent();

const icons: Record<ProjectIcon, typeof Wallet> = {
  queue: ListOrdered,
  finance: Wallet,
  link: Link2,
  resume: FileSearch,
};

function Tags({ tags, label }: { tags: string[]; label: string }) {
  return (
    <div className="mt-5">
      <p className="font-mono text-[11px] uppercase tracking-widest text-white/60">{label}</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li key={tag} className="rounded-full border border-white/10 bg-black/30 px-3 py-1 font-mono text-xs text-white/75">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Visual do topo do card: imagem, "terminal" com `preview` ou placeholder CSS. */
function Visual({ p, featured }: { p: Project; featured: boolean }) {
  const Icon = icons[p.icon ?? "queue"];
  const soon = p.status === "soon";

  if (p.image && !soon) {
    return (
      <div className={cn("relative", featured ? "aspect-[16/10] md:aspect-auto md:h-full" : "aspect-[16/9]")}>
        <Image
          src={p.image}
          alt={`Captura de tela do projeto ${p.title}`}
          fill
          className="object-cover"
          sizes={featured ? "(min-width: 1024px) 380px, (min-width: 768px) 40vw, 100vw" : "(min-width: 768px) 380px, 100vw"}
        />
      </div>
    );
  }

  if (p.preview?.length && !soon) {
    return (
      <div className="grid-placeholder flex h-full min-h-[200px] flex-col justify-center gap-1 p-5 font-mono text-xs md:p-6 md:text-[13px]">
        <div className="mb-3 flex items-center gap-2 text-white/60">
          <Icon className="h-4 w-4" aria-hidden />
          <span>api</span>
        </div>
        {p.preview.map((line) => {
          const [method, ...rest] = line.split(/\s+/);
          return (
            <code key={line} className="block whitespace-pre text-white/80">
              <span className={method === "GET" ? "text-[#86efac]" : "text-[#c4b5fd]"}>{method.padEnd(5, " ")}</span>
              {rest.join(" ")}
            </code>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        soon ? "grid-placeholder--muted h-28" : "grid-placeholder h-40",
      )}
      aria-hidden
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/60 text-white/60">
        <Icon className="h-5 w-5" />
      </span>
    </div>
  );
}

export function ProjectCard({ p, featured = false }: { p: Project; featured?: boolean }) {
  const soon = p.status === "soon";
  const links = soon ? [] : (p.links ?? []);

  return (
    <article
      data-reveal
      className={cn(
        "relative flex flex-col overflow-hidden rounded-3xl transition",
        soon
          ? "border border-dashed border-white/15 bg-white/[0.02]"
          : "border border-white/15 bg-white/5 shadow-brutal hover:border-white/30",
        featured && "md:col-span-2 md:grid md:grid-cols-5",
      )}
    >
      <div
        className={cn(
          "border-b border-white/10",
          featured && "md:order-2 md:col-span-2 md:border-b-0 md:border-l",
        )}
      >
        <Visual p={p} featured={featured} />
      </div>

      <div className={cn("flex flex-1 flex-col p-5 md:p-6", featured && "md:col-span-3")}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className={cn("font-semibold", featured ? "text-xl md:text-2xl" : "text-lg", soon && "text-white/85")}>
              {p.title}
              {/* Some sozinho quando o status vira "live". */}
              {soon ? <span className="font-mono text-sm font-normal text-white/60"> ({t.projects.soonBadge})</span> : null}
            </h3>
            <p className="mt-1 text-white/70">{p.subtitle}</p>
          </div>
          <span className="shrink-0 font-mono text-xs text-white/60">{p.year}</span>
        </div>

        <p className={cn("mt-4 leading-relaxed", soon ? "text-sm text-white/65" : "text-white/75")}>{p.blurb}</p>

        {!soon && p.highlights?.length ? (
          <ul className="mt-4 grid gap-1.5 text-sm text-white/75">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#FF9FFC]" aria-hidden />
                {h}
              </li>
            ))}
          </ul>
        ) : null}

        <Tags tags={p.tags} label={soon ? t.projects.plannedStack : t.projects.stack} />

        {links.length ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {links.map((l) => {
              const external = l.href.startsWith("http");
              return (
                <a
                  key={l.href}
                  href={l.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-mono text-xs text-black no-underline transition hover:opacity-90"
                >
                  {l.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                  {external ? <span className="sr-only">(abre em nova aba)</span> : null}
                </a>
              );
            })}
          </div>
        ) : null}
      </div>
    </article>
  );
}
