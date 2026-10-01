import { getProject, projects } from "@/content/projects";
import { defaultLocale, hasLocale, locales } from "@/lib/i18n";
import { ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Project preview";

export default async function Image({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const l = hasLocale(lang) ? lang : defaultLocale;
  const project = getProject(slug);
  if (!project) return renderOgImage({ kicker: "doguy.online", title: "Doğu Yiğit", subtitle: "" });
  return renderOgImage({
    kicker: project.category[l],
    title: project.name,
    subtitle: project.summary[l],
    colors: project.colors,
  });
}

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((p) => ({ lang, slug: p.slug })));
}
