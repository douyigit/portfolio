import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...projects.map((p) => `/projects/${p.slug}`)];
  return paths.flatMap((p) =>
    locales.map((lang) => ({
      url: `${siteUrl}/${lang}${p}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.7,
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}${p}`])) },
    })),
  );
}
