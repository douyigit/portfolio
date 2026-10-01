import { Reveal } from "./reveal";
import { GrowLine } from "./grow-line";

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <Reveal>
        <h2 id={`${id}-title`} className="flex items-baseline gap-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          <span aria-hidden="true" className="font-mono text-base font-normal text-accent sm:text-lg">
            0{index}
          </span>
          {title}
        </h2>
        <GrowLine />
      </Reveal>
      <div className="mt-10 md:mt-14">{children}</div>
    </section>
  );
}
