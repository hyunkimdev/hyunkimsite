export function AgenticIllustration() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[16px]"
      style={{
        height: 360,
        background:
          "linear-gradient(180deg, #fbf5ff 0%, #fff5f0 100%), radial-gradient(40% 60% at 80% 20%, #ffd0db 0%, transparent 60%)",
      }}
    >
      {/* subtle dot mist */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 60%, rgba(255,100,140,0.25) 0px, transparent 2px), radial-gradient(circle at 70% 30%, rgba(180,120,255,0.25) 0px, transparent 2px), radial-gradient(circle at 50% 80%, rgba(255,160,80,0.2) 0px, transparent 2px)",
          backgroundSize: "32px 32px, 28px 28px, 36px 36px",
        }}
      />

      <div className="absolute top-4 left-4 right-4">
        <div className="bg-white/95 backdrop-blur rounded-[10px] p-2.5 text-[10px] text-[var(--color-ink-700)] shadow-sm border border-white">
          I'm refreshing my wardrobe. Can you recommend some cozy comfy basics
          in size MT
        </div>
      </div>

      <div className="absolute top-[88px] left-4 right-4">
        <div className="rounded-[10px] p-2.5 text-[10px] text-[var(--color-ink-700)] bg-transparent">
          Absolutely. Here are a few comfy essentials that pair well and could
          be a good starting point:
        </div>
      </div>

      <div className="absolute bottom-3 left-4 right-4 grid grid-cols-2 gap-3">
        <ProductTile
          label="Deluxe Shirt"
          sub="Blue · Medium"
          color="#3b6bd6"
          shape="shirt"
        />
        <ProductTile
          label="Essential Hoodie"
          sub="Ivory · Medium"
          color="#0a2540"
          shape="hoodie"
        />
      </div>
    </div>
  );
}

function ProductTile({
  label,
  sub,
  color,
  shape,
}: {
  label: string;
  sub: string;
  color: string;
  shape: "shirt" | "hoodie";
}) {
  return (
    <div className="rounded-[10px] bg-white p-2 shadow-[0_4px_16px_-6px_rgba(80,80,140,0.3)]">
      <div className="h-16 rounded bg-[#f6f9fc] flex items-center justify-center mb-1.5">
        {shape === "shirt" ? (
          <svg viewBox="0 0 60 60" className="w-12 h-12" aria-hidden>
            <path
              d="M15 18l8-6h14l8 6-6 6v22a3 3 0 01-3 3H24a3 3 0 01-3-3V24l-6-6z"
              fill={color}
            />
          </svg>
        ) : (
          <svg viewBox="0 0 60 60" className="w-12 h-12" aria-hidden>
            <path
              d="M14 22l8-8h6v6h4v-6h6l8 8v6l-4 2v18a3 3 0 01-3 3H21a3 3 0 01-3-3V30l-4-2z"
              fill={color}
            />
          </svg>
        )}
      </div>
      <div className="text-[9px] font-semibold text-[var(--color-ink-900)]">
        {label}
      </div>
      <div className="text-[8px] text-[#94a0b5]">{sub}</div>
    </div>
  );
}
