import Image from "next/image";
import type { Project } from "@/content/projects";

/** Shows the project's cover image, or a generated gradient placeholder. */
export function ProjectCover({
  project,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className = "",
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const [from, to] = project.colors;
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {project.cover ? (
        <Image src={project.cover} alt={project.name} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div
          role="img"
          aria-label={project.name}
          className="absolute inset-0 grid place-items-center"
          style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-25 mix-blend-overlay"
            style={{
              backgroundImage:
                "linear-gradient(rgb(255 255 255 / .5) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / .5) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div aria-hidden="true" className="absolute -right-10 -top-10 size-40 rounded-full bg-white/20 blur-2xl" />
          <span className="relative px-6 text-center font-mono text-2xl font-bold tracking-tight text-white drop-shadow-sm sm:text-3xl">
            {project.name}
          </span>
        </div>
      )}
    </div>
  );
}
