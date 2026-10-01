import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { getProject, projects } from "@/content/projects";
import { getDictionary } from "@/content/ui";
import { hasLocale, locales } from "@/lib/i18n";
import { ProjectCover } from "@/components/project-cover";
import { Reveal } from "@/components/reveal";
import { GitHubIcon } from "@/components/brand-icons";

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((p) => ({ lang, slug: p.slug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/[lang]/projects/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!project || !hasLocale(lang)) return {};
  return {
    title: project.name,
    description: project.summary[lang],
    alternates: {
      canonical: `/${lang}/projects/${slug}`,
      languages: { en: `/en/projects/${slug}`, tr: `/tr/projects/${slug}`, "x-default": `/en/projects/${slug}` },
    },
    openGraph: { title: project.name, description: project.summary[lang], url: `/${lang}/projects/${slug}` },
  };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <section>
        <h2 className="font-mono text-sm text-accent">
          <span className="text-fg-subtle">{"//"}</span> {title}
        </h2>
        <div className="mt-3">{children}</div>
      </section>
    </Reveal>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-fg-muted">
          <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: PageProps<"/[lang]/projects/[slug]">) {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!project || !hasLocale(lang)) notFound();
  const dict = getDictionary(lang).project;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const hasLinks = Boolean(project.liveUrl || project.githubUrl);

  return (
    <article className="mx-auto max-w-4xl px-4 pb-24 pt-28 sm:px-6">
      <Link
        href={`/${lang}#projects`}
        className="inline-flex items-center gap-2 font-mono text-sm text-fg-muted transition hover:text-accent"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        {dict.back}
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-mono text-sm text-fg-subtle">{project.category[lang]}</p>
          {project.status && (
            <span
              className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
              style={{ background: `linear-gradient(90deg, ${project.colors[0]}, ${project.colors[1]})` }}
            >
              {project.status[lang]}
            </span>
          )}
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{project.name}</h1>
        <p className="mt-4 text-lg leading-relaxed text-fg-muted">{project.summary[lang]}</p>
      </header>

      <ProjectCover
        project={project}
        priority
        sizes="(min-width: 896px) 896px, 100vw"
        className="mt-10 aspect-[16/8] rounded-2xl border border-border"
      />

      <div className="mt-14 grid gap-12 md:grid-cols-[1fr_240px]">
        <div className="space-y-12">
          <Block title={dict.problem}>
            <p className="leading-relaxed text-fg-muted">{project.problem[lang]}</p>
          </Block>
          <Block title={dict.solution}>
            <p className="leading-relaxed text-fg-muted">{project.solution[lang]}</p>
          </Block>
          <Block title={dict.architecture}>
            <List items={project.architecture[lang]} />
          </Block>
          <Block title={dict.features}>
            <List items={project.features[lang]} />
          </Block>
          {project.screenshots && project.screenshots.length > 0 && (
            <Block title={dict.screenshots}>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.screenshots.map((s) => (
                  <div key={s.src} className="relative aspect-video overflow-hidden rounded-xl border border-border">
                    <Image src={s.src} alt={s.alt[lang]} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </Block>
          )}
          <Block title={dict.learnings}>
            <List items={project.learnings[lang]} />
          </Block>
        </div>

        <aside className="space-y-8 md:sticky md:top-24 md:self-start">
          <div>
            <h2 className="font-mono text-sm text-fg-subtle">{dict.tech}</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t} className="rounded-lg border border-border bg-surface px-2.5 py-1 font-mono text-xs text-fg-muted">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-mono text-sm text-fg-subtle">{dict.links}</h2>
            {hasLinks ? (
              <div className="mt-3 flex flex-col gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-accent px-4 py-2.5 text-sm font-semibold text-accent-fg hover:brightness-110"
                  >
                    <ExternalLink className="size-4" aria-hidden="true" /> {dict.live}
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium hover:border-accent hover:text-accent"
                  >
                    <GitHubIcon className="size-4" /> {dict.source}
                  </a>
                )}
              </div>
            ) : (
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{dict.noLinks}</p>
            )}
          </div>
        </aside>
      </div>

      <Link
        href={`/${lang}/projects/${next.slug}`}
        className="group mt-20 flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-6 transition hover:border-accent"
      >
        <span>
          <span className="block font-mono text-xs text-fg-subtle">{dict.next}</span>
          <span className="mt-1 block text-xl font-semibold">{next.name}</span>
        </span>
        <ArrowRight className="size-5 text-accent transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}
