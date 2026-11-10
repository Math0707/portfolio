import type { Metadata } from "next";
import { getContent, site } from "@/lib/content";

/**
 * Monta OpenGraph/Twitter de uma página. No Next, o `openGraph` de uma
 * página substitui o do layout por inteiro, então cada página usa este helper.
 */
export function pageSocial({ path, title, description }: { path: string; title: string; description: string }): Pick<
  Metadata,
  "openGraph" | "twitter" | "alternates"
> {
  const t = getContent();
  const images = [{ url: site.ogImage, width: 1200, height: 630, alt: `${site.name} — ${t.hero.role}` }];
  return {
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: site.name,
      url: path,
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [site.ogImage],
    },
  };
}
