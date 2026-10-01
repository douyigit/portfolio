import { existsSync } from "node:fs";
import path from "node:path";
import { profile } from "@/content/profile";

export type CvLink = { label: string; href: string };

const exists = (href: string) => existsSync(path.join(process.cwd(), "public", href));

/** CV download options whose PDF actually exists in /public/cv (main first). */
export function getCvLinks(labels: { main: string; ats: string }): CvLink[] {
  const options: CvLink[] = [
    { label: labels.main, href: profile.cv.main },
    { label: labels.ats, href: profile.cv.ats },
  ];
  return options.filter((o) => exists(o.href));
}
