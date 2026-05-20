import { Link2, Code2 } from "lucide-react";
import { readyToStart } from "@/content/copy";
import { Button } from "@/components/ui/Button";

const icons = [Link2, Code2];

export function ReadyToStart() {
  return (
    <section className="bg-[var(--color-surface-tint)] py-20">
      <div className="container-wide">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="text-h-section text-[var(--color-ink-900)]">
              {readyToStart.lead}
            </h2>
            <p className="text-[15px] leading-[1.55] text-[var(--color-ink-500)] mt-4 max-w-[460px]">
              {readyToStart.rest}
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Button>{readyToStart.ctaPrimary}</Button>
              <Button variant="secondary" withArrow={false}>
                {readyToStart.ctaSecondary}
              </Button>
            </div>
          </div>

          {readyToStart.columns.map((col, i) => {
            const Icon = icons[i];
            return (
              <div
                key={col.title}
                className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col"
              >
                <Icon className="h-4 w-4 text-[var(--color-ink-500)] mb-3" />
                <h3 className="text-[15px] font-semibold text-[var(--color-ink-900)]">
                  {col.title}
                </h3>
                <p className="text-[13px] leading-[1.55] text-[var(--color-ink-500)] mt-1.5">
                  {col.rest}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-[13px] font-medium text-[var(--color-accent-600)] mt-3 hover:underline"
                >
                  {col.cta}
                  <span aria-hidden>›</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
