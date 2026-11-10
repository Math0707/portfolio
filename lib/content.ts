/**
 * Todos os textos do site ficam aqui.
 *
 * Estrutura pronta para i18n: cada idioma é um `Dictionary` completo.
 * Para adicionar inglês, crie `en: { ... }` em `dictionaries` com as mesmas
 * chaves (o TypeScript acusa o que estiver faltando) e passe o locale para
 * `getContent()`.
 */

export type Locale = "pt";

export const defaultLocale: Locale = "pt";

/** Dados que não mudam com o idioma. */
export const site = {
  name: "Matheus Teixeira Francelino",
  shortName: "MTF",
  url: "https://portifolio-eight-zeta-32.vercel.app",
  email: "mtfrancelino@gmail.com",
  cv: "/Matheus-Teixeira-Francelino-CV.pdf",
  /** Imagem de compartilhamento (1200×630). */
  ogImage: "/og.png",
  links: {
    github: "https://github.com/Math0707",
    linkedin: "https://www.linkedin.com/in/matheus-teixeira-francellino-799796242/",
    whatsapp: "https://wa.me/5511998313015",
  },
} as const;

export type TimelineItem = {
  title: string;
  org: string;
  context?: string;
  period: string;
  bullets?: string[];
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    aboutTitle: string;
    aboutDescription: string;
    jobTitle: string;
    keywords: string[];
  };
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
    cv: string;
    menu: string;
    close: string;
    navigation: string;
    homeAria: string;
  };
  hero: {
    status: string;
    role: string;
    learning: string;
    intro: string;
    ctaProjects: string;
    ctaCv: string;
    githubAria: string;
    linkedinAria: string;
    statusFile: string;
    statusRows: { key: string; value: string }[];
  };
  techStrip: { label: string; items: string[] };
  about: {
    eyebrow: string;
    title: string;
    text: string;
    more: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    soonBadge: string;
    liveBadge: string;
    plannedStack: string;
    stack: string;
    highlights: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    subtitle: string;
    workLabel: string;
    educationLabel: string;
    work: TimelineItem[];
    education: TimelineItem[];
    languagesLabel: string;
    languages: { name: string; level: string }[];
  };
  skills: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    email: string;
    linkedin: string;
    github: string;
    whatsapp: string;
    cv: string;
    cvHint: string;
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    ctaCv: string;
    ctaProjects: string;
    experienceTitle: string;
    educationTitle: string;
    languagesTitle: string;
    focusTitle: string;
    focus: { label: string; text: string }[];
  };
  scrollTop: string;
  footer: string;
};

const pt: Dictionary = {
  meta: {
    title: "Matheus Teixeira Francelino — Desenvolvedor Web (React, Next.js e TypeScript)",
    description:
      "Portfólio de Matheus Teixeira Francelino, desenvolvedor web com React, Next.js e TypeScript e back-end Java e Spring Boot em formação. Projetos, experiência e currículo.",
    aboutTitle: "Sobre",
    aboutDescription:
      "Experiência, formação e idiomas de Matheus Teixeira Francelino, desenvolvedor web (React, Next.js e TypeScript) em Guarulhos/SP.",
    jobTitle: "Desenvolvedor Web",
    keywords: [
      "Matheus Teixeira Francelino",
      "desenvolvedor web",
      "desenvolvedor júnior",
      "React",
      "Next.js",
      "TypeScript",
      "Java",
      "Spring Boot",
      "portfólio",
      "Guarulhos",
    ],
  },
  nav: {
    home: "Início",
    projects: "Projetos",
    about: "Sobre",
    contact: "Contato",
    cv: "Currículo",
    menu: "Menu",
    close: "Fechar menu",
    navigation: "Navegação",
    homeAria: "Ir para o início",
  },
  hero: {
    status: "Aberto a oportunidades",
    role: "Desenvolvedor Web · React, Next.js & TypeScript",
    learning: "back-end Java & Spring Boot em formação",
    intro:
      "Construo e mantenho sites em produção com React, Next.js e TypeScript e estou direcionando minha evolução para o back-end com Java e Spring Boot.",
    ctaProjects: "Ver projetos",
    ctaCv: "Ver currículo",
    githubAria: "GitHub (abre em nova aba)",
    linkedinAria: "LinkedIn (abre em nova aba)",
    statusFile: "status.json",
    statusRows: [
      { key: "atualmente", value: "Desenvolvedor Web (CLT) @ YASLIP (desde mai/2025)" },
      { key: "construindo", value: "Queue Manager — API de filas em Java/Spring Boot" },
      { key: "buscando", value: "vaga júnior back-end ou full-stack" },
      { key: "formação", value: "ADS — Cruzeiro do Sul (conclusão dez/2026)" },
      { key: "local", value: "Guarulhos/SP · remoto ou híbrido" },
    ],
  },
  techStrip: {
    label: "Tecnologias",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SCSS", "Java", "Spring Boot", "PostgreSQL", "Docker", "Git"],
  },
  about: {
    eyebrow: "Sobre",
    title: "Front-end em produção, back-end em formação.",
    text:
      "Tenho 1 ano e meio de experiência CLT construindo e mantendo sites em produção para clientes de uma agência de marketing. Hoje direciono minha evolução para o back-end, com projetos próprios de APIs REST em Java e Spring Boot, PostgreSQL e Docker.",
    more: "Mais sobre mim",
  },
  projects: {
    eyebrow: "Projetos",
    title: "Projetos",
    subtitle: "Um projeto publicado e os próximos que estou construindo.",
    soonBadge: "em breve",
    liveBadge: "Publicado",
    plannedStack: "Stack planejada",
    stack: "Stack",
    highlights: "Destaques",
  },
  experience: {
    eyebrow: "Trajetória",
    title: "Experiência & Formação",
    subtitle: "Onde trabalho hoje e o que estudei até aqui.",
    workLabel: "Experiência",
    educationLabel: "Formação",
    work: [
      {
        title: "Desenvolvedor Web (CLT)",
        org: "YASLIP",
        context: "Agência de marketing · Guarulhos/SP",
        period: "mai/2025 – atual",
        bullets: [
          "Desenvolvo e publico landing pages e sites para clientes da agência com React, Next.js e TypeScript.",
          "Otimizo páginas em produção com foco em desempenho e SEO, chegando a 91 de desempenho e 100 de SEO no Lighthouse.",
          "Ajudei a construir o novo projeto base da agência para landing pages, com componentes reutilizáveis que tornaram a criação de novas páginas mais rápida.",
          "Trabalho com Git e GitHub no fluxo do time: branches, pull requests e revisão de código.",
        ],
      },
    ],
    education: [
      {
        title: "Tecnologia em Análise e Desenvolvimento de Sistemas",
        org: "Universidade Cruzeiro do Sul",
        period: "conclusão dez/2026",
      },
      { title: "Claude Code 101", org: "Anthropic", period: "out/2026" },
      { title: "Curso de Python (básico)", org: "SENAI", period: "concluído" },
    ],
    languagesLabel: "Idiomas",
    languages: [
      { name: "Inglês", level: "intermediário (leitura técnica fluente, conversação em desenvolvimento)" },
      { name: "Espanhol", level: "básico" },
    ],
  },
  skills: {
    eyebrow: "Stack",
    title: "Habilidades",
    subtitle: "Front-end que uso no trabalho e o back-end que pratico em projetos próprios.",
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos conversar",
    subtitle: "Estou aberto a vagas de desenvolvedor júnior back-end ou full-stack. Escolha o canal que preferir.",
    email: "E-mail",
    linkedin: "LinkedIn",
    github: "GitHub",
    whatsapp: "WhatsApp",
    cv: "Currículo",
    cvHint: "PDF · abre em nova aba",
  },
  aboutPage: {
    eyebrow: "Sobre",
    title: "Sobre mim",
    paragraphs: [
      "Sou Matheus, desenvolvedor web em Guarulhos/SP. Desde maio de 2025 trabalho como CLT na YASLIP, uma agência de marketing, desenvolvendo e publicando landing pages e sites para clientes com React, Next.js e TypeScript, com foco em desempenho e SEO.",
      "Hoje direciono minha evolução para o back-end. Meu principal projeto é o Queue Manager, uma API REST de filas em Java 21 e Spring Boot com PostgreSQL, Swagger e Docker. Curso Tecnologia em Análise e Desenvolvimento de Sistemas na Cruzeiro do Sul, com conclusão em dezembro de 2026.",
    ],
    ctaCv: "Ver currículo",
    ctaProjects: "Ver projetos",
    experienceTitle: "Experiência",
    educationTitle: "Formação",
    languagesTitle: "Idiomas",
    focusTitle: "O que busco",
    focus: [
      { label: "Vaga", text: "Desenvolvedor júnior back-end ou full-stack" },
      { label: "Modelo", text: "Remoto ou híbrido · Guarulhos/SP" },
      { label: "Bagagem", text: "1 ano e meio CLT com React, Next.js e TypeScript" },
    ],
  },
  scrollTop: "Voltar ao topo",
  footer: "© 2026 Matheus Teixeira Francelino · Feito com Next.js e Tailwind",
};

export const dictionaries: Record<Locale, Dictionary> = { pt };

export function getContent(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale];
}
