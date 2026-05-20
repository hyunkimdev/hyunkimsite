export function BillingIllustration() {
  const bars = [
    24, 38, 30, 52, 44, 62, 70, 58, 76, 84, 68, 92, 72, 88, 60, 78, 90, 100, 86,
    76, 64, 50, 42, 30, 22, 28, 36, 46, 38, 50,
  ];
  return (
    <div
      className="relative w-full overflow-hidden rounded-[16px]"
      style={{
        height: 360,
        background:
          "radial-gradient(60% 80% at 50% 50%, #d6c5f5 0%, #9d7ee8 60%, #6b48d8 100%)",
      }}
    >
      <div className="absolute inset-[20px_24px] flex flex-col gap-3">
        <div className="bg-white rounded-[10px] p-3 shadow-[0_8px_30px_-10px_rgba(80,40,180,0.4)]">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-[#f6f3fb] inline-flex items-center justify-center text-[10px] text-[#7a6df8]">
              Q
            </span>
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold text-[var(--color-ink-900)]">
                Pro Plan
              </span>
              <span className="text-[9px] text-[#94a0b5]">Billed monthly</span>
            </div>
          </div>
          <div className="mt-2 text-[10px] font-medium text-[var(--color-ink-900)]">
            Tokens
          </div>
          <div className="text-[9px] text-[#94a0b5]">$0.01 per 1,000 units</div>
          <div className="mt-2 text-[9px] text-[var(--color-ink-700)]">
            Usage meter
          </div>
          <div className="mt-1 h-1.5 rounded-full bg-[#eef0f4] overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: "72%",
                background:
                  "linear-gradient(90deg, #7a6df8 0%, #ff6cae 70%, #ff8a3d 100%)",
              }}
            />
          </div>
        </div>

        <div className="bg-white rounded-[10px] p-3 flex-1 shadow-[0_8px_30px_-10px_rgba(80,40,180,0.4)] flex flex-col">
          <div className="text-[10px] text-[#5b687e]">
            Tokens used in the last 30 days
          </div>
          <div className="text-[15px] font-semibold text-[var(--color-ink-900)] mt-0.5">
            1,999,835,224
          </div>
          <div className="mt-auto flex items-end gap-[3px] h-[120px]">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-[2px] bg-gradient-to-t from-[#7a6df8] to-[#a48cff]"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
