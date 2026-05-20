import { Pause, Volume2 } from "lucide-react";
import { statsHero } from "@/content/copy";
import { StarBurst } from "./StarBurst";

export function StatsHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(80% 100% at 50% 0%, #1b2c70 0%, transparent 60%), linear-gradient(180deg, #0a1a52 0%, #0a1850 50%, #1b2c84 100%)",
        minHeight: 720,
      }}
    >
      <StarBurst />

      <div className="container-wide relative z-10 pt-24 pb-16">
        <h2 className="text-center font-medium text-white tracking-[-0.02em] leading-[1.06]"
          style={{ fontSize: "clamp(36px, 4.4vw, 60px)" }}
        >
          {statsHero.title[0]}
          <br />
          {statsHero.title[1]}
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 mt-20 max-w-[1000px] mx-auto">
          {statsHero.stats.map((s) => (
            <div key={s.label} className="flex flex-col items-start lg:items-center text-center px-4">
              <div className="text-white font-medium tracking-[-0.02em]" style={{ fontSize: "clamp(36px, 3.8vw, 54px)", lineHeight: 1 }}>
                {s.value}
              </div>
              <div className="text-[13px] text-[#9aa6dc] mt-3 max-w-[180px] lg:text-center">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* media controls bottom right */}
      <div className="absolute right-6 bottom-6 z-20 flex gap-1.5">
        <button
          aria-label="Pause animation"
          className="w-7 h-7 rounded-md bg-white/10 backdrop-blur border border-white/20 text-white/80 hover:bg-white/20 inline-flex items-center justify-center"
        >
          <Pause className="h-3 w-3" />
        </button>
        <button
          aria-label="Toggle audio"
          className="w-7 h-7 rounded-md bg-white/10 backdrop-blur border border-white/20 text-white/80 hover:bg-white/20 inline-flex items-center justify-center"
        >
          <Volume2 className="h-3 w-3" />
        </button>
      </div>
    </section>
  );
}
