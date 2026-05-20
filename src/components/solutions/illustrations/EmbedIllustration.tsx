export function EmbedIllustration() {
  const rows = [
    { name: "Vital Flow", country: "Canada", balance: "$8,348.00", volume: "$71,062.99", color: "#7a6df8" },
    { name: "Daybreak Yoga", country: "United States", balance: "$1,552.00", volume: "$7,820.00", color: "#ff8a3d" },
    { name: "Sacred Space", country: "UK", balance: "$1,247.00", volume: "$24,769.03", color: "#22c55e" },
    { name: "Jackson Hot Yoga", country: "Australia", balance: "$3,918.00", volume: "$22,043.30", color: "#ff5a8a" },
    { name: "Harmony Flow", country: "United States", balance: "$30,033.00", volume: "$244,069.10", color: "#3aa3ff" },
    { name: "Balance al Branch", country: "Canada", balance: "$235.00", volume: "$3,850.36", color: "#a48cff" },
    { name: "Breathline Studio", country: "United States", balance: "$2,243.00", volume: "$8,936.06", color: "#ff6cae" },
    { name: "Quiet Fire Yoga", country: "UK", balance: "$306.00", volume: "$1,956.87", color: "#7adba0" },
    { name: "Zenith Zen", country: "Australia", balance: "$960.00", volume: "$3,402.30", color: "#94a0b5" },
    { name: "M.E. Yoga", country: "Canada", balance: "$4,424.00", volume: "$6,706.48", color: "#0a2540" },
  ];

  return (
    <div
      className="relative w-full overflow-hidden rounded-[16px]"
      style={{
        height: 460,
        background:
          "linear-gradient(180deg, #fff0e9 0%, #fde2db 100%), radial-gradient(60% 80% at 0% 100%, #ffc7b6 0%, transparent 60%)",
      }}
    >
      {/* card modal */}
      <div className="absolute left-[5%] top-[5%] w-[36%] rounded-[14px] bg-white p-3 shadow-[0_30px_60px_-30px_rgba(220,80,40,0.4)]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[var(--color-accent-100)] flex items-center justify-center text-[10px] font-bold text-[var(--color-accent-600)]">
            D
          </div>
          <div className="text-[11px] font-semibold text-[var(--color-ink-900)]">
            Daybreak Yoga
          </div>
        </div>
        <div className="mt-2 text-[9px] text-[#5b687e]">
          Order Summary
          <br />
          Unlimited yoga subscription
        </div>
        <div className="mt-2 grid grid-cols-2 gap-y-1 text-[9px]">
          <span className="text-[#5b687e]">Yearly · save 35%</span>
          <span className="text-right text-[var(--color-ink-900)]">
            $999.00 /year
          </span>
          <span className="text-[#5b687e]">Billed now</span>
          <span className="text-right font-semibold text-[var(--color-ink-900)]">
            $999.00
          </span>
        </div>
        <div className="mt-2 h-6 rounded border border-[#dce4ed] flex items-center px-2 text-[9px] gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[var(--color-accent-600)]" />
          Card
          <span className="ml-auto inline-block w-7 h-3 rounded-sm bg-gradient-to-r from-[#ff5a8a] to-[#ff8a3d]" />
        </div>
        <div className="mt-2 h-7 rounded-full bg-[var(--color-accent-600)] text-white text-[10px] flex items-center justify-center font-medium">
          Pay $999.00
        </div>
      </div>

      {/* table panel */}
      <div className="absolute right-[5%] top-[5%] w-[56%] rounded-[12px] bg-white overflow-hidden shadow-[0_30px_60px_-30px_rgba(220,80,40,0.3)] border border-white">
        <div className="h-7 bg-[#f3f5f8] flex items-center px-3 gap-1.5 border-b border-[#e7ebf1]">
          <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <span className="w-2 h-2 rounded-full bg-[#28c840]" />
          <span className="mx-auto text-[9px] text-[#94a0b5]">
            dashboard.zenflow.com
          </span>
        </div>
        <div className="p-3">
          <div className="text-[11px] font-semibold text-[var(--color-ink-900)] mb-1.5">
            Connected Accounts
          </div>
          <div className="grid grid-cols-[1fr_70px_70px_80px] text-[8px] text-[#94a0b5] uppercase tracking-wide pb-1 border-b border-[#eef0f4]">
            <span>Accounts</span>
            <span>Country</span>
            <span>Balance (USD)</span>
            <span className="text-right">Volume (USD)</span>
          </div>
          {rows.map((r) => (
            <div
              key={r.name}
              className="grid grid-cols-[1fr_70px_70px_80px] items-center text-[9px] py-1 border-b border-[#f4f6f9]"
            >
              <span className="flex items-center gap-1.5 text-[var(--color-ink-900)]">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: r.color }}
                />
                {r.name}
              </span>
              <span className="text-[#5b687e]">{r.country}</span>
              <span className="text-[var(--color-ink-900)]">{r.balance}</span>
              <span className="text-right text-[var(--color-ink-900)]">
                {r.volume}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
