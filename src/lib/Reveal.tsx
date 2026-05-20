"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}

/**
 * Lightweight scroll-reveal. Adds `revealed` once the element enters the
 * viewport. CSS handles the transition (see globals.css `.reveal`).
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("revealed");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("revealed"), delay);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const Tag = as;
  return (
    // @ts-expect-error - dynamic tag typing
    <Tag ref={ref} className={cn("reveal", className)}>
      {children}
    </Tag>
  );
}
