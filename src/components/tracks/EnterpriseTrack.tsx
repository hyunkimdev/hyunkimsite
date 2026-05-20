import {
  Briefcase,
  Headphones,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { enterprise } from "@/content/copy";
import { Button } from "@/components/ui/Button";
import { EnterpriseAccordion } from "./EnterpriseAccordion";

const realizeIcons = {
  services: Briefcase,
  partners: Sparkles,
  support: Headphones,
} as const;

export function EnterpriseTrack() {
  return (
    <section className="bg-white py-24">
      <div className="container-wide">
        <h2 className="text-h-section max-w-[760px]">
          <span className="text-[var(--color-ink-900)]">
            {enterprise.intro.lead}
          </span>{" "}
          <span className="text-[var(--color-ink-300)]">
            {enterprise.intro.rest}
          </span>
        </h2>

        {/* transform card */}
        <div className="mt-16 grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 lg:col-span-7">
            <h3 className="text-[24px] leading-[1.2] font-medium text-[var(--color-ink-900)] max-w-[480px]">
              {enterprise.transform.title}
            </h3>
            <div className="mt-6">
              <Button>{enterprise.transform.cta}</Button>
            </div>
          </div>
          <p className="col-span-12 lg:col-span-5 text-[15px] leading-[1.55] text-[var(--color-ink-500)] pt-1">
            {enterprise.transform.rest}
          </p>
        </div>

        {/* hertz case */}
        <div className="mt-16">
          <div className="flex items-center gap-3 pb-4">
            <span
              className="w-7 h-7 rounded-[6px] bg-[#ffd400] inline-flex items-center justify-center text-[14px] font-bold text-[var(--color-ink-900)]"
              aria-hidden
            >
              H
            </span>
            <span className="text-[15px] font-medium text-[var(--color-ink-900)]">
              {enterprise.case.badge}
            </span>
            <a
              href="#"
              className="ml-auto inline-flex items-center gap-1 px-3 h-8 rounded-full text-[13px] font-medium border border-[var(--color-border-strong)] text-[var(--color-ink-900)] hover:bg-[var(--color-surface-tint)]"
            >
              {enterprise.case.cta}
              <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
            </a>
          </div>

          {/* placeholder road image */}
          <div
            className="rounded-[14px] overflow-hidden aspect-[3.2/1] relative"
            style={{
              background:
                "linear-gradient(180deg, #5a6068 0%, #3c4148 100%), radial-gradient(40% 40% at 50% 50%, #6e7681 0%, transparent 70%)",
            }}
            aria-label="road photograph placeholder"
          >
            {/* fake road markings */}
            <div className="absolute inset-0">
              <svg viewBox="0 0 800 250" className="w-full h-full" aria-hidden>
                <rect x="0" y="120" width="800" height="14" fill="rgba(255,255,255,0.05)" />
                {Array.from({ length: 8 }).map((_, i) => (
                  <rect
                    key={i}
                    x={i * 100 + 20}
                    y={123}
                    width={40}
                    height={4}
                    fill="rgba(255,255,255,0.55)"
                  />
                ))}
                {/* car */}
                <g transform="translate(420, 100)">
                  <rect width={36} height={20} rx={3} fill="#facc15" />
                  <rect x={4} y={4} width={28} height={6} fill="#1a1f1f" opacity={0.5} />
                </g>
              </svg>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-8 pb-10 border-b border-[var(--color-border-subtle)]">
            {enterprise.case.stats.map((s) => (
              <div key={s.label} className="col-span-6 md:col-span-3">
                <div className="text-[28px] leading-none font-medium text-[var(--color-ink-900)]">
                  {s.value}
                </div>
                <div className="text-[13px] text-[var(--color-ink-500)] mt-1">
                  {s.label}
                </div>
              </div>
            ))}
            <div className="col-span-12 md:col-span-6 flex flex-col">
              <span className="text-[13px] text-[var(--color-ink-500)]">
                <span className="font-semibold text-[var(--color-ink-900)]">
                  {enterprise.case.productsLabel}
                </span>{" "}
                {enterprise.case.products}
              </span>
            </div>
          </div>
        </div>

        {/* accordion */}
        <div className="mt-2">
          <EnterpriseAccordion />
        </div>

        {/* realize value faster */}
        <div className="mt-20">
          <h3 className="text-[22px] leading-[1.2] font-medium text-[var(--color-ink-900)] mb-10">
            {enterprise.realize.title}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {enterprise.realize.cards.map((card) => {
              const Icon = realizeIcons[card.icon as keyof typeof realizeIcons];
              return (
                <div key={card.title} className="flex flex-col">
                  <span className="w-8 h-8 rounded-md bg-[var(--color-surface-tint-2)] inline-flex items-center justify-center text-[var(--color-ink-700)] mb-4">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="text-[14px] leading-[1.55] text-[var(--color-ink-500)]">
                    <span className="font-semibold text-[var(--color-ink-900)]">
                      {card.title}
                    </span>{" "}
                    {card.rest}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-[13px] font-medium text-[var(--color-accent-600)] mt-3 hover:underline"
                  >
                    {card.cta}
                    <span aria-hidden>›</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
