export function IssuingIllustration() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[16px]"
      style={{
        height: 360,
        background:
          "linear-gradient(180deg, #fff4ee 0%, #ffe7f1 100%), radial-gradient(50% 70% at 70% 30%, #ffb5a8 0%, transparent 60%)",
      }}
    >
      {/* radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(40% 50% at 50% 50%, rgba(255,180,255,0.4) 0%, transparent 70%)",
        }}
      />

      {/* card */}
      <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 aspect-[1.6/1] rounded-[14px] overflow-hidden shadow-[0_30px_80px_-30px_rgba(180,80,140,0.6)]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, #ffb0c8 0%, #c277f0 40%, #7e54e0 100%)",
          }}
        />
        {/* shine */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.4) 45%, transparent 60%)",
          }}
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-7 rounded-[4px] bg-gradient-to-br from-[#f5e0a1] to-[#c69b3d] flex items-center justify-center">
          <div className="grid grid-cols-3 gap-[1px] w-5 h-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="bg-[#8d6a23]/40 rounded-[1px]" />
            ))}
          </div>
        </div>
        <div className="absolute left-16 top-1/2 -translate-y-1/2 text-white">
          <div className="flex gap-0.5">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="w-1 h-2 rounded-[1px] border border-white/70"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
