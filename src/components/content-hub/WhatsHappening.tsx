"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { whatsHappening } from "@/content/copy";
import { cn } from "@/lib/cn";

export function WhatsHappening() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    return () => el.removeEventListener("scroll", update);
  }, []);

  const scrollBy = (dir: -1 | 1) => {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-24 border-t border-[var(--color-border-subtle)]">
      <div className="container-wide">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-h-section text-[var(--color-ink-900)]">
              {whatsHappening.title}
            </h2>
            <p className="text-[18px] text-[var(--color-ink-300)] mt-2">
              {whatsHappening.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              aria-label="Previous"
              className={cn(
                "w-9 h-9 rounded-md border border-[var(--color-border-strong)] inline-flex items-center justify-center",
                !canPrev && "opacity-50 cursor-not-allowed",
              )}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              aria-label="Next"
              className={cn(
                "w-9 h-9 rounded-md border border-[var(--color-border-strong)] inline-flex items-center justify-center",
                !canNext && "opacity-50 cursor-not-allowed",
              )}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          <article className="snap-start shrink-0 w-[480px] rounded-[16px] overflow-hidden relative aspect-[1.4/1]"
            style={{
              background:
                "linear-gradient(135deg, #f6c5e3 0%, #b78cf2 40%, #6a4bdc 100%)",
            }}
          >
            <div className="absolute inset-0 p-8 flex flex-col text-white">
              <div className="text-[14px] font-semibold opacity-90">
                {whatsHappening.primary.badge}
              </div>
              <div className="text-[42px] font-medium leading-none tracking-tight mt-auto">
                {whatsHappening.primary.year}
              </div>
            </div>
            <span aria-hidden className="absolute bottom-6 right-6 w-6 h-3 bg-white rounded-sm rotate-[20deg]" />
          </article>

          {whatsHappening.thumbs.map((t, i) => (
            <article
              key={t.id}
              className="snap-start shrink-0 w-[160px] rounded-[16px] overflow-hidden relative aspect-[0.7/1]"
              style={{
                background:
                  i === 0
                    ? "linear-gradient(180deg, #2a4566 0%, #1a2c46 100%), radial-gradient(50% 50% at 50% 30%, #ffba6c 0%, transparent 60%)"
                    : i === 1
                    ? "radial-gradient(70% 70% at 50% 60%, #4d6f96 0%, #1c2e4a 70%, #0d1626 100%)"
                    : "linear-gradient(180deg, #ffd0c0 0%, #ffe8d5 100%)",
              }}
              aria-label={t.label}
            />
          ))}
        </div>

        <p className="text-[14px] leading-[1.55] text-[var(--color-ink-500)] mt-8 max-w-[640px]">
          {whatsHappening.primary.body}
        </p>
        <a
          href="#"
          className="mt-5 inline-flex items-center gap-1 px-3 h-8 rounded-full text-[13px] font-medium border border-[var(--color-border-strong)] text-[var(--color-ink-900)] hover:bg-[var(--color-surface-tint)]"
        >
          {whatsHappening.primary.cta}
          <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
        </a>
      </div>
    </section>
  );
}
