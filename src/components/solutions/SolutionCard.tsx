"use client";

import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { ILLUSTRATIONS, type IllustrationKey } from "./illustrationMap";

interface SolutionCardProps {
  id: string;
  title: string;
  illustration: IllustrationKey;
  span?: "wide" | "narrow" | "full";
  onExpand: (id: string) => void;
}

export function SolutionCard({
  id,
  title,
  illustration,
  span = "narrow",
  onExpand,
}: SolutionCardProps) {
  const Illustration = ILLUSTRATIONS[illustration];

  const spanClasses = {
    wide: "col-span-12 lg:col-span-8",
    narrow: "col-span-12 sm:col-span-6 lg:col-span-4",
    full: "col-span-12",
  };

  return (
    <motion.button
      layoutId={`card-${id}`}
      onClick={() => onExpand(id)}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "group relative text-left bg-white rounded-[20px] p-7 pb-0 overflow-hidden border border-[var(--color-border-subtle)] hover:shadow-[var(--shadow-card-hover)] transition-shadow",
        spanClasses[span],
      )}
    >
      <motion.div
        layoutId={`card-title-${id}`}
        className="flex items-start justify-between gap-4 mb-5"
      >
        <h3 className="text-h-card max-w-[420px]">{title}</h3>
        <span
          className={cn(
            "shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-md border transition-colors",
            "border-[var(--color-border-subtle)] text-[var(--color-ink-300)]",
            "group-hover:border-[var(--color-accent-300)] group-hover:bg-[var(--color-accent-50)] group-hover:text-[var(--color-accent-600)]",
          )}
        >
          <Maximize2 className="h-3.5 w-3.5" strokeWidth={2.5} />
        </span>
      </motion.div>

      <motion.div layoutId={`card-illustration-${id}`}>
        <Illustration />
      </motion.div>
    </motion.button>
  );
}
