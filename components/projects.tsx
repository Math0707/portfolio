import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

/** Projetos publicados primeiro (em destaque), depois os "Em breve". */
export function Projects() {
  const live = projects.filter((p) => p.status === "live");
  const soon = projects.filter((p) => p.status === "soon");

  return (
    <div className="grid gap-6">
      {live.length ? (
        <div className="grid gap-6 md:grid-cols-2">
          {live.map((p, i) => (
            <ProjectCard key={p.slug} p={p} featured={i === 0 || live.length === 1} />
          ))}
        </div>
      ) : null}
      {soon.length ? (
        <div className="grid gap-6 md:grid-cols-3">
          {soon.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
