import { profile } from "@/content/profile";
import { defaultLocale, hasLocale, locales } from "@/lib/i18n";
import { ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.title.en}`;

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = hasLocale(lang) ? lang : defaultLocale;
  return renderOgImage({
    kicker: profile.title[l],
    title: profile.name,
    subtitle: profile.subtitle[l],
  });
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}
