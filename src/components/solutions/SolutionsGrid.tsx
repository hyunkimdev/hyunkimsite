"use client";

import { useState } from "react";
import { LayoutGroup } from "framer-motion";
import { solutions } from "@/content/copy";
import { SolutionCard } from "./SolutionCard";
import { SolutionExpanded } from "./SolutionExpanded";
import type { IllustrationKey } from "./illustrationMap";

export function SolutionsGrid() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = solutions.cards.find((c) => c.id === openId);

  const spans: Record<string, "wide" | "narrow" | "full"> = {
    payments: "wide",
    billing: "narrow",
    agentic: "narrow",
    issuing: "narrow",
    borderless: "narrow",
    embed: "full",
  };

  return (
    <section className="bg-[var(--color-surface-tint)] pb-28">
      <div className="container-wide pt-20 pb-14">
        <h2 className="text-h-section max-w-[700px]">
          <span className="text-[var(--color-ink-900)]">
            {solutions.intro.lead}
          </span>{" "}
          <span className="text-[var(--color-ink-300)]">
            {solutions.intro.rest}
          </span>
        </h2>
      </div>

      <div className="container-wide">
        <LayoutGroup>
          <div className="grid grid-cols-12 gap-6">
            {solutions.cards.map((card) => (
              <SolutionCard
                key={card.id}
                id={card.id}
                title={card.title}
                illustration={card.illustration as IllustrationKey}
                span={spans[card.id]}
                onExpand={setOpenId}
              />
            ))}
          </div>

          {open && (
            <SolutionExpanded
              id={open.id}
              title={open.expandTitle}
              lead={open.expandLead}
              bullets={open.bullets}
              ctaPrimary={open.ctaPrimary}
              ctaSecondary={open.ctaSecondary}
              illustration={open.illustration as IllustrationKey}
              onClose={() => setOpenId(null)}
            />
          )}
        </LayoutGroup>
      </div>
    </section>
  );
}
