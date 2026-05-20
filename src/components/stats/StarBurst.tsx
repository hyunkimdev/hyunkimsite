export function StarBurst() {
  const rays = 96;
  const dots = 240;

  return (
    <div className="absolute inset-x-0 bottom-0 h-[60%] overflow-hidden pointer-events-none">
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-30%] w-[1400px] h-[1400px]">
        {/* spinning rays */}
        <div
          className="absolute inset-0"
          style={{
            animation: "starSpin 90s linear infinite",
            willChange: "transform",
          }}
        >
          <svg
            viewBox="-700 -700 1400 1400"
            className="w-full h-full"
            aria-hidden
          >
            <defs>
              <radialGradient id="rayFade" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
                <stop offset="40%" stopColor="rgba(170,200,255,0.35)" />
                <stop offset="100%" stopColor="rgba(170,200,255,0)" />
              </radialGradient>
            </defs>
            {Array.from({ length: rays }).map((_, i) => {
              const angle = (i / rays) * Math.PI * 2;
              const len = 380 + Math.random() * 280;
              const x2 = Math.cos(angle) * len;
              const y2 = Math.sin(angle) * len;
              return (
                <line
                  key={i}
                  x1={0}
                  y1={0}
                  x2={x2}
                  y2={y2}
                  stroke="rgba(180, 200, 255, 0.18)"
                  strokeWidth={0.5}
                />
              );
            })}
          </svg>
        </div>

        {/* shimmering dots */}
        <svg
          viewBox="-700 -700 1400 1400"
          className="absolute inset-0 w-full h-full"
          aria-hidden
        >
          {Array.from({ length: dots }).map((_, i) => {
            const angle = Math.random() * Math.PI * 2;
            const r = 200 + Math.random() * 480;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            const size = Math.random() * 1.6 + 0.4;
            const op = 0.3 + Math.random() * 0.5;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={size}
                fill="white"
                opacity={op}
              />
            );
          })}
        </svg>

        {/* center glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, rgba(180,200,255,0.5) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      </div>
    </div>
  );
}
