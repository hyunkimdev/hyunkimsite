export function BorderlessIllustration() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[16px]"
      style={{
        height: 360,
        background:
          "radial-gradient(60% 80% at 50% 50%, #ffe9da 0%, #fff 60%)",
      }}
    >
      {/* dot globe */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 320 320"
          className="w-[88%] h-[88%]"
          aria-hidden
          style={{ filter: "drop-shadow(0 20px 30px rgba(200,80,80,0.15))" }}
        >
          <defs>
            <radialGradient id="g1" cx="0.4" cy="0.4" r="0.6">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
              <stop offset="80%" stopColor="#ffeede" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="160" cy="160" r="155" fill="url(#g1)" />
          {/* lat-long dots */}
          {Array.from({ length: 20 }).map((_, row) => {
            const y = 16 + row * 14;
            const dx = Math.max(8, 26 - Math.abs(row - 10) * 2);
            const dots = [];
            for (let x = 12; x < 308; x += dx) {
              const fromCenter = Math.hypot(x - 160, y - 160);
              if (fromCenter > 150) continue;
              const intensity = 1 - fromCenter / 160;
              dots.push(
                <circle
                  key={`${row}-${x}`}
                  cx={x}
                  cy={y}
                  r={1.4}
                  fill={`rgba(255, 90, 60, ${intensity * 0.7})`}
                />,
              );
            }
            return dots;
          })}
          {/* arc */}
          <path
            d="M40 230 Q160 60 280 200"
            fill="none"
            stroke="#ff5a3c"
            strokeWidth="1.5"
            strokeDasharray="3,4"
          />
          <circle cx="280" cy="200" r="4" fill="#ff5a3c" />
        </svg>
      </div>

      {/* VISA card overlay */}
      <div className="absolute left-[18%] top-[42%] w-[36%] aspect-[1.6/1] rounded-[10px] bg-white shadow-[0_18px_40px_-10px_rgba(0,0,0,0.18)] border border-[#eef0f4] flex flex-col p-2.5">
        <div className="ml-auto text-[14px] font-bold italic tracking-tight text-[#1a1f71]">
          VISA
        </div>
        <div className="mt-auto text-[10px] text-[var(--color-ink-700)]">
          •••• 4242
        </div>
      </div>

      <div className="absolute right-4 bottom-4 text-[11px] font-medium text-[var(--color-ink-700)]">
        $0 USDC
      </div>
    </div>
  );
}
