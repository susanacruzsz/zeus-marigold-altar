import { useState } from "react";

export function BunnyIntro({ onOpen }: { onOpen: () => void }) {
  const [boop, setBoop] = useState(false);
  const press = () => {
    setBoop(true);
    setTimeout(onOpen, 700);
  };
  return (
    <div
      className={`bg-night fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 px-4 transition-opacity duration-700 ${boop ? "opacity-0" : "opacity-100"}`}
    >
      <p className="font-display text-4xl text-marigold md:text-6xl">Para Zeus</p>
      <svg viewBox="0 0 200 240" className="w-64 md:w-80" role="img" aria-label="Conejito gris">
        <g className="animate-ear" style={{ transformOrigin: "75px 110px" }}>
          <ellipse cx="72" cy="55" rx="20" ry="55" fill="var(--bunny)" />
          <ellipse cx="72" cy="58" rx="10" ry="42" fill="var(--nose)" opacity="0.6" />
        </g>
        <ellipse cx="128" cy="55" rx="20" ry="55" fill="var(--bunny)" />
        <ellipse cx="128" cy="58" rx="10" ry="42" fill="var(--nose)" opacity="0.6" />
        <ellipse cx="100" cy="200" rx="70" ry="40" fill="var(--bunny-dark)" />
        <circle cx="100" cy="145" r="62" fill="var(--bunny)" />
        <circle cx="75" cy="135" r="8" fill="var(--violet-deep)" />
        <circle cx="125" cy="135" r="8" fill="var(--violet-deep)" />
        <circle cx="78" cy="132" r="2.5" fill="var(--cera)" />
        <circle cx="128" cy="132" r="2.5" fill="var(--cera)" />
        <ellipse cx="62" cy="160" rx="10" ry="6" fill="var(--rosa)" opacity="0.35" />
        <ellipse cx="138" cy="160" rx="10" ry="6" fill="var(--rosa)" opacity="0.35" />
        <path d="M100 172 Q92 182 84 176 M100 172 Q108 182 116 176" stroke="var(--violet-deep)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {[-1, 1].map((s) => (
          <g key={s} stroke="var(--cera)" strokeWidth="1.5">
            <line x1={100 + s * 18} y1="162" x2={100 + s * 60} y2="152" />
            <line x1={100 + s * 18} y1="166" x2={100 + s * 62} y2="168" />
          </g>
        ))}
        <foreignObject x="80" y="148" width="40" height="30">
          <button
            onClick={press}
            aria-label="Presiona la nariz para entrar"
            className="animate-nose block h-full w-full"
          >
            <svg viewBox="0 0 40 30" className="h-full w-full">
              <path d="M20 26 C6 18 4 6 12 4 C16 3 20 6 20 6 C20 6 24 3 28 4 C36 6 34 18 20 26 Z" fill="var(--nose)" stroke="var(--rosa)" strokeWidth="1.5" />
            </svg>
          </button>
        </foreignObject>
      </svg>
      <p className="font-serif text-lg italic text-primary-foreground/90">Toca su naricita para entrar al altar</p>
    </div>
  );
}
