"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { enterprise } from "@/content/copy";
import { cn } from "@/lib/cn";

const iconColors: Record<string, string> = {
  URBN: "#1a1a1a",
  IC: "#42b04b",
  LM: "#222222",
};

export function EnterpriseAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {enterprise.accordionItems.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={item.icon}
            className="border-t border-[var(--color-border-subtle)] last:border-b"
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full flex items-center gap-4 py-5 text-left hover:bg-[var(--color-surface-tint)]/50 transition-colors"
            >
              <span
                className="shrink-0 w-7 h-7 rounded-[6px] inline-flex items-center justify-center text-white text-[11px] font-bold tracking-tight"
                style={{ background: iconColors[item.icon] || "#1a1a1a" }}
                aria-hidden
              >
                {item.icon}
              </span>
              <span className="text-[15px] font-medium text-[var(--color-ink-900)]">
                {item.title}
              </span>
              <span
                className={cn(
                  "ml-auto shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-md border border-[var(--color-border-subtle)] text-[var(--color-ink-300)] transition-colors",
                  isOpen && "bg-[var(--color-accent-50)] border-[var(--color-accent-200)] text-[var(--color-accent-600)]",
                )}
              >
                {isOpen ? (
                  <Minus className="h-3.5 w-3.5" strokeWidth={2.5} />
                ) : (
                  <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
                )}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-5 pl-11 pr-12 text-[14px] leading-relaxed text-[var(--color-ink-500)] max-w-[640px]">
                    A shared payments backbone keeps regional teams in sync,
                    consolidates reporting, and lets the business roll out new
                    flows without rewiring its stack.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
