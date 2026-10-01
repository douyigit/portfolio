import { MapPin, Sparkles } from "lucide-react";
import { profile } from "@/content/profile";
import type { Dictionary } from "@/content/ui";
import type { Locale } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { Section } from "./section";

export function About({ lang, dict }: { lang: Locale; dict: Dictionary["about"] }) {
  const current = profile.education[0];
  return (
    <Section id="about" index={1} kicker={dict.kicker} title={dict.title}>
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14">
        <Reveal className="space-y-5 text-base leading-relaxed text-fg-muted sm:text-lg">
          {profile.about[lang].map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-border bg-surface font-mono text-sm">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-xs text-fg-subtle">profile.json</span>
            </div>
            <dl className="space-y-4 p-5">
              <div>
                <dt className="flex items-center gap-1.5 text-xs text-fg-subtle">
                  <MapPin className="size-3.5" aria-hidden="true" /> {dict.location}
                </dt>
                <dd className="mt-1 text-fg">{profile.location[lang]}</dd>
              </div>
              <div>
                <dt className="text-xs text-fg-subtle">education</dt>
                <dd className="mt-1 text-fg">
                  {current.degree[lang]}
                  <span className="block text-fg-muted">{current.school}</span>
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 text-xs text-fg-subtle">
                  <Sparkles className="size-3.5" aria-hidden="true" /> {dict.interests}
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {profile.interests[lang].map((i) => (
                    <span key={i} className="rounded-md border border-border bg-bg px-2 py-1 text-xs text-fg-muted">
                      {i}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
