const colors: string[] = ["var(--rosa)", "var(--marigold-deep)", "var(--turquesa)", "var(--violet)", "var(--marigold)"];

function Flag({ color, i }: { color: string; i: number }) {
  return (
    <div
      className="animate-sway grow-hover relative"
      style={{ animationDelay: `${(i % 6) * -0.4}s`, animationDuration: `${2.6 + (i % 3) * 0.5}s` }}
    >
      <svg viewBox="0 0 80 100" className="h-20 w-16 md:h-28 md:w-24" aria-hidden>
        <defs>
          <mask id={`cut-${i}`}>
            <rect width="80" height="100" fill="white" />
            {/* calaverita de conejo recortada */}
            <ellipse cx="30" cy="22" rx="5" ry="13" fill="black" />
            <ellipse cx="50" cy="22" rx="5" ry="13" fill="black" />
            <circle cx="40" cy="48" r="16" fill="black" />
            <circle cx="34" cy="46" r="4" fill="white" />
            <circle cx="46" cy="46" r="4" fill="white" />
            <path d="M37 55 L43 55 L40 58 Z" fill="white" />
            {[12, 28, 44, 60, 68].map((x) => (
              <circle key={x} cx={x} cy={78} r="3" fill="black" />
            ))}
            {[20, 36, 52].map((x) => (
              <path key={x} d={`M${x} 70 l4 6 l4 -6 l-4 -4 z`} fill="black" />
            ))}
          </mask>
        </defs>
        <path
          d="M0 0 H80 V88 L72 100 L64 88 L56 100 L48 88 L40 100 L32 88 L24 100 L16 88 L8 100 L0 88 Z"
          fill={color}
          mask={`url(#cut-${i})`}
        />
      </svg>
    </div>
  );
}

export function PapelPicado({ count = 14 }: { count?: number }) {
  return (
    <header className="relative z-30 w-full">
      <div className="absolute left-0 right-0 top-2 h-0.5 bg-foreground/60" />
      <div className="flex justify-center gap-1 overflow-hidden pt-2 md:gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <Flag key={i} i={i} color={colors[i % colors.length]} />
        ))}
      </div>
    </header>
  );
}
