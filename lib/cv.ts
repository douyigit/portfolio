import { existsSync } from "node:fs";
import path from "node:path";
import { profile } from "@/content/profile";
import type { Locale } from "./i18n";

export type CvLink = { label: string; href: string };

const exists = (href: string) => existsSync(path.join(process.cwd(), "public", href));

/**
 * CVs that actually exist in /public/cv, best match for the language first.
 * Drop a PDF in and the buttons appear on the next deploy.
 */
export function getCvLinks(lang: Locale, labels: { ats: string; photo: string; default: string }): CvLink[] {
  const options: CvLink[] = [
    { label: labels.photo, href: profile.cv.photo[lang] },
    { label: labels.ats, href: profile.cv.ats[lang] },
    { label: labels.default, href: profile.cv.default },
  ];
  return options.filter((o) => exists(o.href));
}
