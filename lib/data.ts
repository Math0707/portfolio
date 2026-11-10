/**
 * Projetos e habilidades.
 *
 * Para publicar um projeto "Em breve": troque `status` para "live" e adicione
 * `links` (e, se quiser, `image` em /public/projects). O card se adapta sozinho.
 */

export type ProjectIcon = "queue" | "finance" | "link" | "resume";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  blurb: string;
  tags: string[]; // stack usada (ou planejada, se status = "soon")
  status: "live" | "soon";
  year: string;
  image?: string; // só para projetos "live"
  links?: { label: string; href: string }[];
  /** Ícone mostrado no placeholder quando não há imagem. */
  icon?: ProjectIcon;
  /** Funcionalidades reais, em tópicos (opcional, para projetos "live"). */
  highlights?: string[];
  /** Linhas exibidas no "terminal" do card quando não há imagem (opcional). */
  preview?: string[];
};

export const projects: Project[] = [
  {
    slug: "queue",
    title: "Queue Manager — Fila Inteligente",
    subtitle: "API REST de gerenciamento de filas em Java/Spring Boot",
    blurb:
      "API REST para filas com prioridade, status e agendamento, com painel web, documentação Swagger/OpenAPI, perfis H2 (dev) e PostgreSQL (prod), Docker e CI no GitHub Actions.",
    tags: [
      "Java 21",
      "Spring Boot 3.5",
      "Spring Data JPA",
      "Bean Validation",
      "PostgreSQL",
      "H2",
      "Swagger/OpenAPI",
      "JUnit 5",
      "Docker",
      "GitHub Actions",
    ],
    status: "live",
    year: "2026",
    icon: "queue",
    highlights: [
      "Ordem por prioridade (HIGH > MEDIUM > LOW) com desempate por chegada (FIFO).",
      "Agendamento: solicitações futuras só entram na fila no horário marcado.",
      "Ciclo de vida PENDING → PROCESSING → DONE, com 409 em transições inválidas.",
      "Testes unitários (Mockito) e de integração (MockMvc + H2) rodando no CI.",
    ],
    preview: [
      "POST /tasks",
      "GET  /queue",
      "GET  /queue/next",
      "POST /queue/claim",
      "POST /tasks/{id}/complete",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Math0707/queue" }],
  },
  {
    slug: "controle-financeiro",
    title: "Controle Financeiro",
    subtitle: "Dashboard + CRUD de receitas e despesas",
    blurb:
      "App para registrar receitas e despesas, categorizar gastos e visualizar o mês em um dashboard com gráficos.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Next.js"],
    status: "soon",
    year: "2026",
    icon: "finance",
  },
  {
    slug: "encurtador-url",
    title: "Encurtador de URL + Analytics",
    subtitle: "Links curtos com métricas de acesso",
    blurb:
      "Gera links curtos e registra cliques, origem e período, exibindo as métricas em um painel.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    status: "soon",
    year: "2026",
    icon: "link",
  },
  {
    slug: "analisador-curriculo",
    title: "Analisador de Currículo com IA",
    subtitle: "Feedback automático sobre currículos",
    blurb:
      "Recebe um currículo em PDF, extrai o conteúdo e usa um modelo de IA para apontar pontos fortes, lacunas e aderência a uma vaga.",
    tags: ["Java", "Spring Boot", "API de IA", "Next.js"],
    status: "soon",
    year: "2026",
    icon: "resume",
  },
];

export type Skill = {
  name: string;
  icon: string; // caminho em /public
};

export type SkillGroup = {
  title: string;
  description: string;
  items: Skill[];
};

/** Mesmos grupos do currículo (seção "Competências"). */
export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    description: "Uso no trabalho (YASLIP).",
    items: [
      { name: "React", icon: "/skills/react.svg" },
      { name: "Next.js", icon: "/skills/next.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "JavaScript", icon: "/skills/js.svg" },
      { name: "HTML", icon: "/skills/html.svg" },
      { name: "CSS", icon: "/skills/css.svg" },
      { name: "SCSS", icon: "/skills/scss.svg" },
      { name: "Tailwind CSS", icon: "/skills/tailwind.svg" },
    ],
  },
  {
    title: "Back-end",
    description: "Projetos próprios.",
    items: [
      { name: "Java", icon: "/skills/java.svg" },
      { name: "Spring Boot (Web, Data JPA, Validation)", icon: "/skills/spring.svg" },
      { name: "APIs REST", icon: "/skills/rest.svg" },
      { name: "Maven", icon: "/skills/maven.svg" },
    ],
  },
  {
    title: "Banco de dados",
    description: "Projetos próprios.",
    items: [
      { name: "SQL", icon: "/skills/sql.svg" },
      { name: "PostgreSQL", icon: "/skills/postgres.svg" },
    ],
  },
  {
    title: "Ferramentas",
    description: "Git no fluxo do time; Docker e Linux em nível básico.",
    items: [
      { name: "Git", icon: "/skills/git.svg" },
      { name: "GitHub", icon: "/skills/github.svg" },
      { name: "Docker (básico)", icon: "/skills/docker.svg" },
      { name: "Linux (básico)", icon: "/skills/linux.svg" },
    ],
  },
];
