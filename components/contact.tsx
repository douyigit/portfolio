"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { profile } from "@/content/profile";
import type { Dictionary } from "@/content/ui";
import { GitHubIcon, LinkedInIcon } from "./brand-icons";

type Status = "idle" | "sending" | "success" | "error" | "invalid";

export function ContactForm({ dict }: { dict: Dictionary["contact"] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (!data.name?.trim() || !data.message?.trim() || !/^\S+@\S+\.\S+$/.test(data.email ?? "")) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const input =
    "mt-1.5 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg placeholder:text-fg-subtle transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-[var(--glow)]";

  const direct = [
    { href: `mailto:${profile.email}`, label: profile.email, Icon: Mail },
    { href: profile.socials.linkedin, label: "linkedin.com/in/doguyigit", Icon: LinkedInIcon },
    { href: profile.socials.github, label: "github.com/douyigit", Icon: GitHubIcon },
  ];

  return (
    <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] md:gap-14">
      <div>
        <p className="text-lg leading-relaxed text-fg-muted">{dict.intro}</p>
        <ul className="mt-8 space-y-3">
          {direct.map(({ href, label, Icon }) => (
            <li key={href}>
              <a
                href={href}
                {...(!href.startsWith("mailto:") && { target: "_blank", rel: "noopener noreferrer" })}
                className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm transition hover:border-accent"
              >
                <Icon className="size-[18px] shrink-0 text-accent" aria-hidden="true" />
                <span className="truncate font-mono text-fg-muted group-hover:text-fg">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-surface p-5 sm:p-7">
        {/* Honeypot: hidden from people, irresistible to bots. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-medium">
            {dict.name}
            <input name="name" required autoComplete="name" maxLength={100} className={input} />
          </label>
          <label className="block text-sm font-medium">
            {dict.email}
            <input name="email" type="email" required autoComplete="email" maxLength={200} className={input} />
          </label>
        </div>
        <label className="mt-5 block text-sm font-medium">
          {dict.message}
          <textarea name="message" required rows={5} maxLength={5000} className={`${input} resize-y`} />
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-accent px-6 text-sm font-semibold text-accent-fg transition hover:brightness-110 disabled:opacity-70 sm:w-auto"
        >
          {status === "sending" ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="size-4" aria-hidden="true" />
          )}
          {status === "sending" ? dict.sending : dict.send}
        </button>

        <div role="status" aria-live="polite" className="mt-4 text-sm">
          {status === "success" && (
            <p className="flex items-center gap-2 text-success">
              <CheckCircle2 className="size-4" aria-hidden="true" /> {dict.success}
            </p>
          )}
          {status === "invalid" && <p className="text-danger">{dict.invalid}</p>}
          {status === "error" && (
            <p className="text-danger">
              {dict.error}{" "}
              <a href={`mailto:${profile.email}`} className="underline underline-offset-2">
                {profile.email}
              </a>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
