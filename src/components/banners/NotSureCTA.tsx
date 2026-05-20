import { notSureCTA } from "@/content/copy";
import { Button } from "@/components/ui/Button";

export function NotSureCTA() {
  return (
    <section className="bg-[var(--color-surface-tint)] pb-20">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-[18px] bg-white border border-[var(--color-border-subtle)] py-7 px-8 flex items-center gap-6">
          <div
            aria-hidden
            className="absolute inset-y-0 right-0 w-[42%] pointer-events-none gradient-mesh-cta opacity-90"
            style={{ maskImage: "linear-gradient(to left, black 30%, transparent)" }}
          />

          <div className="relative max-w-[640px]">
            <h3 className="text-[18px] leading-snug font-medium">
              <span className="text-[var(--color-ink-900)]">
                {notSureCTA.lead}
              </span>{" "}
              <span className="text-[var(--color-ink-300)]">
                {notSureCTA.rest}
              </span>
            </h3>
          </div>

          <div className="relative ml-auto">
            <Button>{notSureCTA.cta}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
