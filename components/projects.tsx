"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import type { Dictionary } from "@/content/ui";
import type { Locale } from "@/lib/i18n";
import { ProjectCover } from "./project-cover";

type Props = {
  lang: Locale;
  dict: Dictionary["projects"];
  projects: Project[];
};

export function ProjectsGrid({ lang, dict, projects }: Props) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <motion.li
          key={p.slug}
          initial={{ opacity: 0, y: 60, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProjectCard lang={lang} project={p} detailsLabel={dict.details} />
        </motion.li>
      ))}
    </ul>
  );
}

function ProjectCard({ lang, project, detailsLabel }: { lang: Locale; project: Project; detailsLabel: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    if (!reduce) setTilt({ x: (0.5 - py) * 14, y: (px - 0.5) * 14 });
  };

  return (
    <Link
      ref={ref}
      href={`/${lang}/projects/${project.slug}`}
      onPointerMove={onMove}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => {
        setHover(false);
        setTilt({ x: 0, y: 0 });
      }}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${hover && !reduce ? -6 : 0}px)`,
      }}
      className="card-glow card-border group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-black/40 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:border-transparent hover:shadow-2xl"
    >
      <div className="overflow-hidden border-b border-border">
        <ProjectCover
          project={project}
          className="aspect-[16/10] transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>
      <div className="relative flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-fg-subtle">{project.category[lang]}</span>
          {project.status && (
            <span
              className="rounded-full px-2 py-0.5 text-[11px] font-semibold text-white"
              style={{ background: `linear-gradient(90deg, ${project.colors[0]}, ${project.colors[1]})` }}
            >
              {project.status[lang]}
            </span>
          )}
        </div>
        <h3 className="mt-2 text-lg font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">{project.summary[lang]}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((t) => (
            <li key={t} className="rounded-md bg-bg px-2 py-0.5 font-mono text-[11px] text-fg-muted">
              {t}
            </li>
          ))}
          {project.tech.length > 5 && (
            <li className="rounded-md bg-bg px-2 py-0.5 font-mono text-[11px] text-fg-subtle">+{project.tech.length - 5}</li>
          )}
        </ul>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
          {detailsLabel}
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
