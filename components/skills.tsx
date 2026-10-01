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

const ease = [0.22, 1, 0.36, 1] as const;

export function SkillsGrid({ lang, skills }: { lang: Locale; skills: SkillCategory[] }) {
  const visible = skills.filter((s) => s.items.length > 0);
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {visible.map((cat, i) => {
        const Icon = icons[cat.icon];
        return (
          <motion.li
            key={cat.id}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: { opacity: 0, y: 50, rotateX: 25 },
              show: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: { duration: 0.7, delay: (i % 3) * 0.12, ease, staggerChildren: 0.05, delayChildren: 0.25 },
              },
            }}
            whileHover={{ y: -6 }}
            style={{ transformPerspective: 900 }}
            className="group card-glow card-border relative rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-transparent"
          >
            <div className="flex items-center gap-3">
              <span
                className="float-icon grid size-10 place-items-center rounded-xl border border-border bg-bg text-accent transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125"
                style={{ "--d": `${i * 0.4}s` } as React.CSSProperties}
              >
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-semibold">{cat.title[lang]}</h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 12, scale: 0.8 },
                    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 400, damping: 20 } },
                  }}
                  whileHover={{ y: -3, scale: 1.08 }}
                  className="cursor-default rounded-lg border border-border bg-bg px-2.5 py-1 font-mono text-xs text-fg-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.li>
        );
      })}
    </ul>
  );
}
