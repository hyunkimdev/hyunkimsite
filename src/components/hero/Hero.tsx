import { hero } from "@/content/copy";
import { Button } from "@/components/ui/Button";
import { GradientMesh } from "./GradientMesh";
import { LetterCollision } from "./LetterCollision";

export function Hero() {
  return (
    <section
      data-hero
      className="relative min-h-screen flex flex-col overflow-hidden pt-[60px]"
    >
      {/* Mesh constrained to the right portion so text stays readable. */}
      <div className="absolute top-0 right-0 w-full md:w-[58%] h-full pointer-events-none opacity-60 md:opacity-100">
        <GradientMesh />
      </div>

      <div className="container-wide relative flex-1 flex flex-col">
        {/* badge — top */}
        <div className="flex flex-wrap items-center gap-1.5 text-[13px] font-medium pt-12 md:pt-16 max-w-[760px]">
          <span className="text-[var(--color-ink-700)]">
            {hero.badgeLabel}
          </span>
          <span className="shimmer-text font-semibold">{hero.badgeValue}</span>
        </div>

        {/* spacer pushes letters + CTA toward the bottom-left */}
        <div className="flex-1" />

        {/* letters + CTA — bottom-left */}
        <div className="pb-10 md:pb-16">
          <LetterCollision />

          <div className="flex flex-wrap items-center gap-3 mt-8 md:mt-10">
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
