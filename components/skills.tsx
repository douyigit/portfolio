"use client";

import { motion } from "motion/react";
import { Brain, Code2, Database, LayoutTemplate, Server, ShieldCheck, Wrench } from "lucide-react";
import type { SkillCategory } from "@/content/profile";
import type { Locale } from "@/lib/i18n";

const icons = {
  code: Code2,
  server: Server,
  layout: LayoutTemplate,
  brain: Brain,
  database: Database,
  shield: ShieldCheck,
  wrench: Wrench,
} satisfies Record<SkillCategory["icon"], unknown>;

export function SkillsGrid({ lang, skills }: { lang: Locale; skills: SkillCategory[] }) {
  const visible = skills.filter((s) => s.items.length > 0);
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {visible.map((cat, i) => {
        const Icon = icons[cat.icon];
        return (
          <motion.li
            key={cat.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-border-strong"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl border border-border bg-bg text-accent transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-semibold">{cat.title[lang]}</h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-bg px-2.5 py-1 font-mono text-xs text-fg-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.li>
        );
      })}
    </ul>
  );
}
