"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { startup } from "@/content/copy";
import { StartupCard } from "./StartupCard";
import { cn } from "@/lib/cn";

export function StartupCarousel() {
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
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-end gap-1 pb-4">
        <button
          onClick={() => scrollBy(-1)}
          disabled={!canPrev}
          aria-label="Previous"
          className={cn(
            "w-9 h-9 rounded-md border border-[var(--color-border-strong)] inline-flex items-center justify-center transition-opacity",
            canPrev
              ? "text-[var(--color-ink-900)] hover:bg-[var(--color-surface-tint)]"
              : "text-[var(--color-ink-200)] opacity-50 cursor-not-allowed",
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => scrollBy(1)}
          disabled={!canNext}
          aria-label="Next"
          className={cn(
            "w-9 h-9 rounded-md border border-[var(--color-border-strong)] inline-flex items-center justify-center transition-opacity",
            canNext
              ? "text-[var(--color-ink-900)] hover:bg-[var(--color-surface-tint)]"
              : "text-[var(--color-ink-200)] opacity-50 cursor-not-allowed",
          )}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {startup.cases.map((c) => (
          <div key={c.id} className="snap-start">
            <StartupCard
              brand={c.brand}
              story={c.story}
              cta={c.cta}
              visual={c.visual as "lovable" | "runway" | "supabase" | "linear"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
