"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ILLUSTRATIONS, type IllustrationKey } from "./illustrationMap";

interface ExpandedCardProps {
  id: string;
  title: string;
  lead: string;
  bullets: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  illustration: IllustrationKey;
  onClose: () => void;
}

export function SolutionExpanded({
  id,
  title,
  lead,
  bullets,
  ctaPrimary,
  ctaSecondary,
  illustration,
  onClose,
}: ExpandedCardProps) {
  const Illustration = ILLUSTRATIONS[illustration];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-[rgba(10,37,64,0.5)] backdrop-blur-sm flex items-start justify-center overflow-y-auto py-12 px-4"
        onClick={onClose}
      >
        <motion.div
          layoutId={`card-${id}`}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-[1080px] bg-white rounded-[24px] p-8 lg:p-12 shadow-[0_40px_120px_-20px_rgba(10,37,64,0.4)]"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 inline-flex items-center justify-center w-9 h-9 rounded-md border border-[var(--color-border-subtle)] text-[var(--color-ink-700)] hover:bg-[var(--color-surface-tint)] transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <motion.div
              layoutId={`card-title-${id}`}
              className="lg:col-span-7 flex flex-col"
            >
              <h2 className="text-[36px] leading-[1.12] tracking-[-0.02em] font-medium max-w-[520px]">
                {title}
              </h2>
              <p className="text-[18px] leading-[1.45] text-[var(--color-ink-500)] mt-5 max-w-[520px]">
                {lead}
              </p>
              <div className="flex flex-wrap gap-3 mt-7">
                <Button>{ctaPrimary}</Button>
                <Button variant="ghost">{ctaSecondary}</Button>
              </div>
            </motion.div>

            <ul className="lg:col-span-5 flex flex-col gap-3 lg:pt-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full text-[var(--color-flame-500)]">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] text-[var(--color-ink-900)]">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            layoutId={`card-illustration-${id}`}
            className="mt-10 lg:mt-12"
          >
            <Illustration large />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
