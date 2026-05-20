import { ArrowRight } from "lucide-react";
import { testimonial } from "@/content/copy";
import { LogoPlaceholder } from "@/components/logos/LogoPlaceholder";

export function Testimonial() {
  return (
    <section className="bg-white py-20 border-t border-[var(--color-border-subtle)]">
      <div className="container-wide flex flex-col items-center text-center">
        <span
          aria-hidden
          className="w-9 h-9 rounded-full bg-[var(--color-surface-tint-2)] mb-5"
        />

        <blockquote className="max-w-[860px] text-[20px] leading-[1.4] text-[var(--color-ink-900)]">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        <div className="mt-6 text-[13px] text-[var(--color-ink-500)]">
          <span className="font-semibold text-[var(--color-ink-900)]">
            {testimonial.author}
          </span>
          , {testimonial.role}
        </div>

        <a
          href="#"
          className="mt-6 inline-flex items-center gap-1 text-[13px] font-medium text-[var(--color-accent-600)] hover:underline"
        >
          {testimonial.storyCta}
          <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
        </a>

        <div className="mt-12 w-12 h-px bg-[var(--color-accent-600)]" />

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 max-w-[800px] w-full">
          {testimonial.logos.map((l) => (
            <div key={l} className="flex items-center justify-center">
              <LogoPlaceholder label={l} tone="muted" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
