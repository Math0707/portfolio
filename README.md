# Portfólio — Matheus Teixeira Francelino

Portfólio pessoal: desenvolvedor front-end (React & Next.js) estudando back-end com Java & Spring Boot.

**Site:** https://portifolio-eight-zeta-32.vercel.app

## Stack

- Next.js 14 (App Router, páginas estáticas, Server Components)
- React 18 + TypeScript
- Tailwind CSS
- `next/font` (Inter + JetBrains Mono) e `lucide-react` para ícones
- Sem bibliotecas de animação: tudo em CSS (`app/globals.css`), respeitando `prefers-reduced-motion`

## Rodar localmente

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção (inclui lint e checagem de tipos)
npm run start    # serve o build
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Textos do site (hero, sobre, experiência, formação, idiomas, contato, rodapé, SEO) | `lib/content.ts` |
| E-mail, links (GitHub, LinkedIn, WhatsApp), URL do site, caminho do currículo | `site` em `lib/content.ts` |
| Projetos | `projects` em `lib/data.ts` |
| Habilidades (e ícones em `public/skills/`) | `skillGroups` em `lib/data.ts` |
| Currículo em PDF | `public/Matheus-Teixeira-Francelino-CV.pdf` |
| Imagem de compartilhamento (1200×630) | `public/og.png` |

### Projetos

Cada projeto tem `status: "live" | "soon"`:

- `"soon"`: card discreto com borda tracejada, badge **Em breve**, "Stack planejada" e sem links.
- `"live"`: card completo. O primeiro projeto publicado aparece em destaque (largura total).

Para publicar um projeto, troque `status` para `"live"` e adicione `links` (e, se quiser, `image` em `public/projects/`). Campos opcionais: `highlights` (tópicos de funcionalidades) e `preview` (linhas mostradas no "terminal" quando não há imagem).

### Idiomas (próxima etapa)

Os textos estão em `dictionaries.pt` (`lib/content.ts`), tipados por `Dictionary`. Para adicionar inglês, crie `en` com as mesmas chaves e passe o locale para `getContent()`.

## Páginas

- `/`: Hero, Sobre, Projetos, Experiência & Formação, Habilidades, Contato
- `/about`: versão completa (quem sou, o que busco, experiência, formação, idiomas)
- `/builds`: redireciona (308) para `/#projetos`
- `/sitemap.xml` e `/robots.txt` são gerados por `app/sitemap.ts` e `app/robots.ts`
