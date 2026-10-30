type Props = { photo?: string; height?: number; delay?: number };

export function Candle({ photo, height = 120, delay = 0 }: Props) {
  return (
    <div className="grow-hover flex flex-col items-center">
      <div className="relative mb-[-2px] h-8 w-5">
        <div
          className="animate-flicker shadow-glow absolute inset-0 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-flama"
          style={{ animationDelay: `${delay}s` }}
        />
        <div className="absolute bottom-1 left-1/2 h-3 w-2 -translate-x-1/2 rounded-full bg-cera/90" />
      </div>
      <div className="mb-[-1px] h-2 w-0.5 bg-foreground" />
      <div
        className="flex w-16 flex-col items-center justify-center rounded-t-md border-2 border-violet/30 bg-cera md:w-20"
        style={{ height }}
      >
        {photo && (
          <div className="overflow-hidden rounded-full border-4 border-marigold">
            <img src={photo} alt="Zeus en la veladora" className="h-10 w-10 object-cover md:h-14 md:w-14" />
          </div>
        )}
        {photo && <span className="mt-1 font-display text-xs text-primary">Zeus</span>}
      </div>
    </div>
  );
}
