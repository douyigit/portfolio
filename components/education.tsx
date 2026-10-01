import { Award, GraduationCap } from "lucide-react";
import { profile } from "@/content/profile";
import type { Dictionary } from "@/content/ui";
import type { Locale } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function Education({ lang, dict }: { lang: Locale; dict: Dictionary["education"] }) {
  return (
    <Section id="education" index={4} kicker={dict.kicker} title={dict.title}>
      <ol className="relative ml-3 border-l border-border">
        {profile.education.map((e, i) => (
          <li key={e.school} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
            <span
              aria-hidden="true"
              className={`absolute -left-[13px] top-0 grid size-[25px] place-items-center rounded-full border ${
                e.current ? "border-accent bg-accent text-accent-fg" : "border-border-strong bg-bg text-fg-muted"
              }`}
            >
              <GraduationCap className="size-3.5" />
            </span>
            <Reveal delay={i * 0.1}>
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-mono text-xs text-fg-subtle">{e.period[lang]}</p>
                {e.current && (
                  <span className="rounded-full border border-accent/40 px-2 py-0.5 text-[11px] font-medium text-accent">
                    {dict.current}
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">{e.degree[lang]}</h3>
              <p className="mt-1 text-fg-muted">{e.school}</p>
              {e.gpa && (
                <p
                  className={`mt-4 inline-flex items-center gap-2 rounded-xl px-3 py-1.5 font-mono text-sm ${
                    e.highlight
                      ? "bg-gradient-accent font-semibold text-accent-fg shadow-lg shadow-[var(--glow)]"
                      : "border border-border text-fg-muted"
                  }`}
                >
                  {e.highlight && <Award className="size-4" aria-hidden="true" />}
                  {dict.gpa} {e.gpa}
                </p>
              )}
              {e.description && <p className="mt-3 text-sm text-fg-muted">{e.description[lang]}</p>}
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
