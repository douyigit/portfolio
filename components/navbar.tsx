"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import type { Dictionary } from "@/content/ui";
import { LOCALE_COOKIE, otherLocale, type Locale } from "@/lib/i18n";

const sections = ["about", "skills", "projects", "education", "contact"] as const;

export function Navbar({ lang, dict }: { lang: Locale; dict: Dictionary["nav"] }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const toggleTheme = () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  const target = otherLocale(lang);
  const switchHref = pathname.replace(new RegExp(`^/${lang}(?=/|$)`), `/${target}`) || `/${target}`;
  const rememberLocale = () => {
    document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-border bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={`/${lang}`} className="font-mono text-sm font-semibold tracking-tight" onClick={() => setOpen(false)}>
          <span className="text-accent">~/</span>doguy<span className="text-fg-subtle">.online</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((id) => (
            <li key={id}>
              <Link
                href={`/${lang}#${id}`}
                className="rounded-lg px-3 py-2 text-sm text-fg-muted transition hover:bg-surface-hover hover:text-fg"
              >
                {dict[id]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <Link
            href={switchHref}
            onClick={rememberLocale}
            hrefLang={target}
            title={dict.switchLang}
            className="grid h-9 place-items-center rounded-lg px-2.5 font-mono text-xs font-medium uppercase text-fg-muted transition hover:bg-surface-hover hover:text-fg"
          >
            <span className="sr-only">{dict.switchLang}</span>
            <span aria-hidden="true">
              <span className="text-fg">{lang}</span>
              <span className="text-fg-subtle"> / {target}</span>
            </span>
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dict.toggleTheme}
            title={dict.toggleTheme}
            className="grid size-9 place-items-center rounded-lg text-fg-muted transition hover:bg-surface-hover hover:text-fg"
          >
            <Sun className="size-4 light:hidden" aria-hidden="true" />
            <Moon className="hidden size-4 light:block" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dict.close : dict.menu}
            className="grid size-9 place-items-center rounded-lg text-fg-muted transition hover:bg-surface-hover hover:text-fg md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden px-4 md:hidden"
          >
            {sections.map((id, i) => (
              <li key={id} className="border-t border-border first:border-t-0">
                <Link
                  href={`/${lang}#${id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 py-3.5 text-fg-muted hover:text-fg"
                >
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  {dict[id]}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
