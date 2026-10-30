import { useEffect, useState } from "react";

type Petal = { left: number; delay: number; dur: number; size: number; drift: number; hue: number };

export function FallingPetals({ count = 40 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);
  useEffect(() => {
    setPetals(
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * -14,
        dur: 8 + Math.random() * 8,
        size: 10 + Math.random() * 14,
        drift: -80 + Math.random() * 160,
        hue: Math.random(),
      })),
    );
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden>
      {petals.map((p, i) => (
        <svg
          key={i}
          viewBox="0 0 20 30"
          width={p.size}
          height={p.size * 1.4}
          className="animate-petal absolute top-0"
          style={
            {
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
              "--drift": `${p.drift}px`,
            } as React.CSSProperties
          }
        >
          <path
            d="M10 0 C18 8 20 18 10 30 C0 18 2 8 10 0 Z"
            fill={p.hue > 0.5 ? "var(--marigold)" : "var(--marigold-deep)"}
          />
        </svg>
      ))}
    </div>
  );
}
