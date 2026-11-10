import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ScrollToTop } from "@/components/scroll-to-top";
import { RevealObserver } from "@/components/reveal-observer";
import { Footer } from "@/components/footer";
import { getContent, site } from "@/lib/content";
import { pageSocial } from "@/lib/seo";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const t = getContent();

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: t.meta.title,
    template: `%s · ${site.name}`,
  },
  description: t.meta.description,
  keywords: t.meta.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  ...pageSocial({ path: "/", title: t.meta.title, description: t.meta.description }),
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: t.meta.jobTitle,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Guarulhos", addressRegion: "SP", addressCountry: "BR" },
  sameAs: [site.links.github, site.links.linkedin],
  knowsAbout: ["React", "Next.js", "TypeScript", "Java", "Spring Boot", "PostgreSQL"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-black"
        >
          Pular para o conteúdo
        </a>
        <Navbar />
        <div id="conteudo">{children}</div>
        <Footer />
        <ScrollToTop label={t.scrollTop} />
        <RevealObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
