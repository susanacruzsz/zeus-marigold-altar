import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import zeus from "@/assets/zeus.jpg.asset.json";
import { BunnyIntro } from "@/components/altar/BunnyIntro";
import { FallingPetals } from "@/components/altar/FallingPetals";
import { PapelPicado } from "@/components/altar/PapelPicado";
import { Marigold } from "@/components/altar/Marigold";
import { Candle } from "@/components/altar/Candle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Altar digital para Zeus · Día de Muertos" },
      { name: "description", content: "Un altar de Día de Muertos con cempasúchil, papel picado y veladoras en memoria de Zeus, mi conejito." },
      { property: "og:title", content: "Altar digital para Zeus" },
      { property: "og:description", content: "Cempasúchil, papel picado y veladoras para recordar a Zeus." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/** Puntos de un arco en forma de U (lados rectos + medio círculo arriba), en %. */
function archPoints() {
  const pts: { x: number; y: number }[] = [];
  const steps = 22;
  for (let i = 0; i <= steps; i++) {
    const a = Math.PI + (Math.PI * i) / steps;
    pts.push({ x: 50 + 42 * Math.cos(a), y: 34 + 30 * Math.sin(a) });
  }
  for (let y = 38; y <= 96; y += 6) {
    pts.push({ x: 8, y });
    pts.push({ x: 92, y });
  }
  return pts;
}
const ARCH = archPoints();

const offerings = [
  { e: "🥕", label: "Zanahorias" },
  { e: "🥬", label: "Lechuga fresca" },
  { e: "🍎", label: "Manzanita" },
  { e: "🍞", label: "Pan de muerto" },
  { e: "🌾", label: "Heno" },
  { e: "💧", label: "Agua" },
  { e: "🍓", label: "Fresas" },
  { e: "💀", label: "Calaverita" },
];

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {!open && <BunnyIntro onOpen={() => setOpen(true)} />}
      {open && <FallingPetals />}

      <PapelPicado />

      {open && (
        <div className="animate-rise mx-auto max-w-5xl px-4 pb-0">
          {/* Arco de cempasúchil */}
          <section className="relative mx-auto mt-4 aspect-[4/5] w-full max-w-3xl md:aspect-[5/5]">
            <div className="bg-night absolute left-[9%] right-[9%] top-[5%] bottom-0 rounded-t-full" />
            {ARCH.map((p, i) => (
              <div
                key={i}
                className="grow-hover absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <Marigold size={i % 3 === 0 ? 64 : 52} />
              </div>
            ))}

            <div className="absolute inset-x-[14%] top-[12%] bottom-0 flex flex-col items-center">
              <p className="font-serif text-lg italic text-marigold md:text-2xl">Día de Muertos</p>
              <h1 className="grow-hover font-display text-6xl text-cera md:text-8xl">Zeus</h1>
              <p className="mt-1 font-serif text-sm text-cera/80 md:text-base">Mi conejito, siempre en mi corazón</p>

              {/* Retrato */}
              <div className="grow-hover relative mt-4 rounded-lg border-8 border-marigold bg-rosa p-1 shadow-glow">
                <img src={zeus.url} alt="Zeus, mi conejo gris" className="h-40 w-32 rounded object-cover md:h-60 md:w-48" />
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-violet px-3 py-0.5 font-display text-sm text-cera">
                  🐰 Zeus
                </span>
              </div>

              {/* Niveles del altar */}
              <div className="mt-auto w-full">
                <div className="mx-auto flex w-[70%] items-end justify-around rounded-t-md border-t-8 border-turquesa bg-cera/95 px-2 pt-2">
                  {offerings.slice(0, 4).map((o) => (
                    <span key={o.label} title={o.label} className="grow-hover text-3xl md:text-5xl">{o.e}</span>
                  ))}
                </div>
                <div className="mx-auto flex w-[85%] items-end justify-around border-t-8 border-rosa bg-cera px-2 pt-2">
                  <Candle photo={zeus.url} height={80} />
                  {offerings.slice(4).map((o) => (
                    <span key={o.label} title={o.label} className="grow-hover text-3xl md:text-5xl">{o.e}</span>
                  ))}
                  <Candle photo={zeus.url} height={80} delay={0.4} />
                </div>
                <div className="flex w-full items-center justify-around border-t-8 border-marigold-deep bg-violet py-2">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <Marigold key={i} size={36} className="grow-hover" />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Veladoras */}
          <section className="relative flex flex-wrap items-end justify-center gap-4 py-10 md:gap-8">
            {[140, 110, 160, 110, 140].map((h, i) => (
              <Candle key={i} photo={zeus.url} height={h} delay={i * 0.3} />
            ))}
          </section>

          {/* Mensaje */}
          <section className="mx-auto max-w-xl pb-10 text-center">
            <h2 className="grow-hover font-display text-4xl text-primary md:text-5xl">Para ti, Zeus</h2>
            <p className="mt-4 font-serif text-lg leading-relaxed text-muted-foreground">
              Que el camino de cempasúchil te traiga de vuelta esta noche. Aquí te esperan tus zanahorias,
              tu lechuga y todo el cariño que dejaste en casa.
            </p>
          </section>

          {/* Camino de pétalos */}
          <section className="flex flex-wrap justify-center gap-1 pb-12">
            {Array.from({ length: 24 }).map((_, i) => (
              <Marigold key={i} size={40} className="grow-hover" />
            ))}
          </section>
        </div>
      )}
    </main>
  );
}
