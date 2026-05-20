import { hero } from "@/content/copy";
import { Button } from "@/components/ui/Button";
import { GradientMesh } from "./GradientMesh";

export function Hero() {
  return (
    <section className="relative pt-[60px] overflow-hidden">
      {/* Mesh constrained to the right portion so text stays readable. */}
      <div className="absolute top-0 right-0 w-full md:w-[58%] h-[560px] md:h-[660px] pointer-events-none opacity-60 md:opacity-100">
        <GradientMesh />
      </div>

      <div className="container-wide relative">
        <div className="pt-20 md:pt-24 pb-12 max-w-[760px]">
          <div className="flex flex-wrap items-center gap-1.5 text-[13px] font-medium pt-10 md:pt-12 pb-6 md:pb-8">
            <span className="text-[var(--color-ink-700)]">
              {hero.badgeLabel}
            </span>
            <span className="shimmer-text font-semibold">
              {hero.badgeValue}
            </span>
          </div>

          <h1
            className="leading-[1.06] tracking-[-0.025em] font-medium"
            style={{ fontSize: "clamp(34px, 5.6vw, 58px)" }}
          >
            <span className="text-[var(--color-ink-900)]">
              {hero.headline.lead}
            </span>{" "}
            <span className="text-[var(--color-ink-300)]">
              {hero.headline.rest}
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-3 mt-7 md:mt-9">
            <Button size="md">{hero.ctaPrimary}</Button>
            <Button
              variant="secondary"
              withArrow={false}
              leading={
                <span
                  aria-hidden
                  className="w-4 h-4 rounded-full inline-flex items-center justify-center text-[9px] font-bold"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #4285f4, #ea4335, #fbbc04, #34a853, #4285f4)",
                    color: "white",
                  }}
                >
                  G
                </span>
              }
            >
              {hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
