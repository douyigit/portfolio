/** DY monogram. Paths use pathLength=1 so they can be "drawn" with CSS. */
export const logoPaths = {
  d: "M12 18V46H20C29 46 33 39.5 33 32S29 18 20 18Z",
  y: "M37 18L44.5 31L52 18M44.5 31V46",
};

export function Logo({ id = "logo", className = "", draw = false }: { id?: string; className?: string; draw?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={`${id}-g`} x1="8" y1="14" x2="56" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--accent)" />
          <stop offset="1" stopColor="var(--accent-2)" />
        </linearGradient>
      </defs>
      <g
        stroke={`url(#${id}-g)`}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={draw ? "logo-draw" : undefined}
      >
        <path d={logoPaths.d} pathLength={1} />
        <path d={logoPaths.y} pathLength={1} />
      </g>
    </svg>
  );
}
