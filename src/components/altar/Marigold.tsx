type Props = { size?: number; className?: string; style?: React.CSSProperties };

/** Flor de cempasúchil hecha con capas de pétalos. */
export function Marigold({ size = 48, className = "", style }: Props) {
  const layers = [
    { r: 44, n: 16, rx: 12, ry: 20, c: "var(--marigold-deep)" },
    { r: 32, n: 14, rx: 11, ry: 17, c: "var(--marigold)" },
    { r: 20, n: 10, rx: 9, ry: 13, c: "var(--marigold-deep)" },
    { r: 9, n: 8, rx: 7, ry: 9, c: "var(--marigold)" },
  ];
  return (
    <svg width={size} height={size} viewBox="-60 -60 120 120" className={className} style={style} aria-hidden>
      {layers.map((l, li) =>
        Array.from({ length: l.n }).map((_, i) => {
          const a = (360 / l.n) * i + li * 11;
          return (
            <ellipse
              key={`${li}-${i}`}
              cx={0}
              cy={-l.r + l.ry * 0.6}
              rx={l.rx}
              ry={l.ry}
              fill={l.c}
              stroke="var(--marigold-deep)"
              strokeWidth={1}
              transform={`rotate(${a})`}
            />
          );
        }),
      )}
      <circle r={6} fill="var(--marigold-deep)" />
    </svg>
  );
}
