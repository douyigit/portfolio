import { Reveal } from "./reveal";

export function Section({
  id,
  index,
  kicker,
  title,
  children,
}: {
  id: string;
  index: number;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <Reveal>
        <p className="font-mono text-sm text-accent">
          <span className="text-fg-subtle">0{index}.</span> {"//"} {kicker}
        </p>
        <h2 id={`${id}-title`} className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      <div className="mt-10 md:mt-14">{children}</div>
    </section>
  );
}
