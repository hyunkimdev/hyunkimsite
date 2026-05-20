import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface StartupCardProps {
  brand: string;
  story: string;
  cta: string;
  visual: "lovable" | "runway" | "supabase" | "linear";
}

export function StartupCard({ brand, story, cta, visual }: StartupCardProps) {
  return (
    <div className="flex flex-col gap-4 w-[320px] shrink-0">
      <div
        className={cn(
          "relative aspect-[1/1.05] rounded-[14px] overflow-hidden",
          visualClass(visual),
        )}
      >
        <VisualMark visual={visual} />
        <div className="absolute left-4 bottom-4 inline-flex items-center gap-1.5 text-white text-[14px] font-medium">
          <span
            aria-hidden
            className="w-3 h-3 rounded-sm bg-white/90 inline-block"
          />
          {brand}
        </div>
      </div>
      <p className="text-[14px] leading-[1.5] text-[var(--color-ink-700)]">
        {story}
      </p>
      <a
        href="#"
        className="inline-flex items-center gap-1 text-[13px] font-medium text-[var(--color-accent-600)] hover:underline"
      >
        {cta}
        <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
      </a>
    </div>
  );
}

function visualClass(v: StartupCardProps["visual"]) {
  switch (v) {
    case "lovable":
      return "gradient-lovable-card";
    case "runway":
      return "gradient-runway-card";
    case "supabase":
      return "gradient-supabase-card";
    case "linear":
      return "gradient-linear-card";
  }
}

function VisualMark({ visual }: { visual: StartupCardProps["visual"] }) {
  if (visual === "lovable") {
    // heart cluster
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-44 h-44" aria-hidden>
          {[
            { x: 100, y: 76 },
            { x: 64, y: 100 },
            { x: 136, y: 100 },
            { x: 84, y: 132 },
            { x: 116, y: 132 },
          ].map((p, i) => (
            <path
              key={i}
              transform={`translate(${p.x - 20}, ${p.y - 20})`}
              d="M20 32 C0 16, 4 4, 14 4 C19 4, 20 8, 20 8 C20 8, 21 4, 26 4 C36 4, 40 16, 20 32 Z"
              fill={`url(#heartG${i})`}
              opacity={0.9}
            />
          ))}
          <defs>
            {[0, 1, 2, 3, 4].map((i) => (
              <radialGradient
                key={i}
                id={`heartG${i}`}
                cx="0.5"
                cy="0.4"
                r="0.6"
              >
                <stop offset="0%" stopColor="#ffd166" />
                <stop offset="40%" stopColor="#ff5e1f" />
                <stop offset="100%" stopColor="#ff2c64" />
              </radialGradient>
            ))}
          </defs>
        </svg>
      </div>
    );
  }
  if (visual === "runway") {
    return (
      <>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 35%, rgba(0,0,0,0.7) 100%), radial-gradient(60% 70% at 50% 40%, #b9b6a8 0%, #4a4d52 60%, #1a1c1f 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-[80px] font-black tracking-tight italic">
            R
          </span>
        </div>
      </>
    );
  }
  if (visual === "supabase") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-32 h-32" aria-hidden>
          <path
            d="M110 30 L120 90 L170 100 L80 170 L100 110 L40 100 Z"
            fill="#3ecf8e"
          />
        </svg>
      </div>
    );
  }
  // linear
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="w-32 h-32" aria-hidden>
        <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="3" fill="none" opacity="0.85" />
        <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="3" fill="none" opacity="0.5" />
        <circle cx="100" cy="100" r="42" stroke="white" strokeWidth="3" fill="none" opacity="0.25" />
      </svg>
    </div>
  );
}
