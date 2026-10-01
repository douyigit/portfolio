"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { ArrowDown, ChevronDown, Download, FileText, MapPin, Send } from "lucide-react";
import type { Dictionary } from "@/content/ui";
import type { Locale } from "@/lib/i18n";
import { Particles } from "./particles";
import { SocialLinks } from "./social-links";

export type CvLink = { label: string; href: string };

type Props = {
  lang: Locale;
  dict: Dictionary["hero"];
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  location: string;
  cvLinks: CvLink[];
};

/** Types `text` out one character at a time. Remount (via `key`) to restart. */
function Typed({ text, speed = 55 }: { text: string; speed?: number }) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setCount((c) => {
        if (c >= text.length) {
          clearInterval(id);
          return c;
        }
        return c + 1;
      });
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, reduce]);
  return <>{reduce ? text : text.slice(0, count)}</>;
}

export function Hero({ lang, dict, name, title, subtitle, tagline, location, cvLinks }: Props) {
  // CSS-driven so the hero is visible on first paint, before JS loads.
  const fade = (delay: number) => ({ style: { animationDelay: `calc(var(--intro) + ${delay}s)` } as React.CSSProperties });

  return (
    <section className="relative isolate flex min-h-dvh items-center overflow-hidden pt-16">
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <div className="hero-grid absolute inset-0" />
        <div className="hero-blob hero-blob-1 left-[-10%] top-[10%] size-[min(520px,80vw)]" />
        <div className="hero-blob hero-blob-2 bottom-[0%] right-[-10%] size-[min(480px,75vw)]" />
        <div className="hero-blob hero-blob-3 left-[40%] top-[55%] size-[min(360px,60vw)]" />
      </div>
      <div aria-hidden="true" className="hero-spotlight pointer-events-none absolute inset-0 -z-10" />
      <Particles />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-bg" />

      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <p
          {...fade(0)} className="fade-up inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-fg-muted backdrop-blur"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-success" />
          </span>
          {dict.available}
        </p>

        <p {...fade(0.1)} className="fade-up mt-8 font-mono text-sm text-accent sm:text-base">
          <span className="text-fg-subtle">$</span> whoami
        </p>

        <h1
          {...fade(0.2)} className="fade-up mt-3 text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="block text-lg font-normal text-fg-muted sm:text-xl">{dict.greeting}</span>
          <span className="sr-only">{name}</span>
          <span aria-hidden="true" className="flex flex-wrap gap-x-[0.28em]">
            {name.split(" ").map((word, wi, words) => (
              <span key={word} className="inline-flex">
                {[...word].map((ch, ci) => {
                  const i = words.slice(0, wi).join("").length + ci;
                  return (
                    <span key={ci} className="letter text-gradient-animated" style={{ "--i": i } as React.CSSProperties}>
                      {ch}
                    </span>
                  );
                })}
              </span>
            ))}
          </span>
        </h1>

        <div {...fade(0.35)} className="fade-up mt-5">
          <p className="font-mono text-xl text-fg sm:text-2xl">
            <span className="sr-only">{title}</span>
            <span aria-hidden="true">
              <Typed key={title} text={title} />
              <span className="caret" />
            </span>
          </p>
          <p className="mt-2 text-sm text-fg-muted sm:text-base">{subtitle}</p>
        </div>

        <p {...fade(0.5)} className="fade-up mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
          {tagline}
        </p>

        <p {...fade(0.55)} className="fade-up mt-4 inline-flex items-center gap-1.5 text-sm text-fg-subtle">
          <MapPin className="size-4" aria-hidden="true" />
          {location}
        </p>

        <div {...fade(0.65)} className="fade-up mt-9 flex flex-wrap items-center gap-3">
          {cvLinks.length > 0 && <CvButton label={dict.downloadCv} links={cvLinks} />}
          <Link
            href={`/${lang}#projects`}
            className="inline-flex h-11 items-center gap-2 rounded-xl border border-border-strong bg-surface/60 px-5 text-sm font-medium backdrop-blur transition hover:border-accent hover:text-accent"
          >
            {dict.viewProjects}
            <ArrowDown className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href={`/${lang}#contact`}
            className={`inline-flex h-11 items-center gap-2 rounded-xl px-5 text-sm font-medium transition ${
              cvLinks.length > 0
                ? "text-fg-muted hover:text-fg"
                : "btn-shine bg-gradient-accent text-accent-fg shadow-lg shadow-[var(--glow)] hover:brightness-110"
            }`}
          >
            <Send className="size-4" aria-hidden="true" />
            {dict.contact}
          </Link>
        </div>

        <div {...fade(0.8)} className="fade-up mt-10">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}

function CvButton({ label, links }: { label: string; links: CvLink[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  const cls =
    "btn-shine inline-flex h-11 items-center gap-2 rounded-xl bg-gradient-accent px-5 text-sm font-semibold text-accent-fg shadow-lg shadow-[var(--glow)] transition hover:brightness-110";

  if (links.length === 1) {
    return (
      <a href={links[0].href} download className={cls}>
        <Download className="size-4" aria-hidden="true" />
        {label}
      </a>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-haspopup="true" className={cls}>
        <Download className="size-4" aria-hidden="true" />
        {label}
        <ChevronDown className={`size-4 transition ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open && (
        <ul className="absolute left-0 top-full z-20 mt-2 min-w-full overflow-hidden rounded-xl border border-border bg-bg-elevated p-1 shadow-2xl">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                download
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2.5 text-sm text-fg-muted hover:bg-surface-hover hover:text-fg"
              >
                <FileText className="size-4 text-accent" aria-hidden="true" />
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
