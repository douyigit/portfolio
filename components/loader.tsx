import { Logo } from "./logo";

/**
 * Intro screen: the DY logo draws itself, then the overlay fades away.
 * Pure CSS (see .loader in globals.css). Shown once per browser session —
 * the inline script in the layout adds `html.intro` only on the first visit.
 */
export function Loader({ name }: { name: string }) {
  return (
    <div className="loader" aria-hidden="true">
      <div className="flex flex-col items-center gap-5">
        <Logo id="loader-logo" draw className="size-24" />
        <p className="loader-name font-mono text-sm tracking-[0.3em] text-fg-muted uppercase">{name}</p>
        <span className="loader-bar block h-[2px] w-40 overflow-hidden rounded-full bg-border">
          <span className="block h-full w-full origin-left bg-gradient-accent" />
        </span>
      </div>
    </div>
  );
}
