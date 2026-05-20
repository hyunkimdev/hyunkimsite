import { developer } from "@/content/copy";

export function ScaleStats() {
  return (
    <div className="relative mt-12 pb-12 border-b border-[rgba(255,255,255,0.08)]">
      <h3 className="text-[18px] leading-[1.4] text-white max-w-[640px]">
        <span className="font-medium">{developer.scale.title}</span>{" "}
        <span className="text-[#aab1d4]">{developer.scale.rest}</span>
      </h3>

      {/* wave illustration */}
      <div className="relative h-[260px] mt-10 mb-10 overflow-hidden rounded-md">
        <svg
          viewBox="0 0 1200 320"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          aria-hidden
        >
          {Array.from({ length: 60 }).map((_, i) => {
            const t = i / 60;
            const hue = 248 + t * 20;
            const sat = 80 - t * 20;
            const light = 50 + t * 20;
            return (
              <path
                key={i}
                d={`M -50 ${260 - i * 2} Q ${300 + i * 6} ${100 - i * 3} ${600 + i * 4} ${180 - i * 2} T 1250 ${220 - i * 2}`}
                fill="none"
                stroke={`hsla(${hue}, ${sat}%, ${light}%, ${0.12 + (i % 8) * 0.04})`}
                strokeWidth={0.8}
              />
            );
          })}
        </svg>
        <div
          className="absolute inset-0 opacity-90 pointer-events-none"
          style={{
            background:
              "radial-gradient(40% 60% at 50% 70%, rgba(255,80,180,0.25), transparent 70%), radial-gradient(40% 60% at 80% 40%, rgba(110,80,255,0.25), transparent 70%)",
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {developer.scale.stats.map((s) => (
          <div key={s.label}>
            <div
              className="font-medium tracking-[-0.02em] leading-none"
              style={{
                fontSize: "clamp(36px, 3.8vw, 56px)",
                background:
                  "linear-gradient(90deg, #ff8a3d 0%, #ff5a8a 50%, #a86fff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {s.value}
            </div>
            <div className="text-[14px] text-[#aab1d4] mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
