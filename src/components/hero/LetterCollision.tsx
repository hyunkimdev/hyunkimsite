"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LetterDisplay } from "./LetterDisplay";

// hero 첫 화면에 보이는 메인 헤드라인 (좌하단 anchor)
const PRIMARY_LINES = ["웹개발과", "마케팅 둘 다", "하는 김현입니다."] as const;
// 화면 밖에서 시작 — 마운트 시점에 viewport 전체에 random 분포됨
const SECONDARY_LINES = ["글을 쓰고", "코드를 짓습니다"] as const;

const ROTATION_RANGE = 120; // ±60°
// 모든 speed > 1 → (1 - speed) 항상 음수 → letter 무조건 위로
const SPEED_MIN = 1.3;
const SPEED_RANGE = 0.6; // → 1.3 ~ 1.9

function randomRotation() {
  return Math.random() * ROTATION_RANGE - ROTATION_RANGE / 2;
}

function randomSpeed() {
  return SPEED_MIN + Math.random() * SPEED_RANGE;
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function LetterCollision() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    if (process.env.NODE_ENV !== "production") {
      (window as unknown as { __gsap: typeof gsap; __ST: typeof ScrollTrigger }).__gsap = gsap;
      (window as unknown as { __gsap: typeof gsap; __ST: typeof ScrollTrigger }).__ST = ScrollTrigger;
    }

    const heroSection = root.closest<HTMLElement>("[data-hero]");
    if (!heroSection) return;

    const letters = root.querySelectorAll<HTMLElement>(".letter");
    const isMobile = window.innerWidth < 768;
    // 조금 약하게 — letter 가 viewport 에서 자연스럽게 빠지는 속도
    const driftBase = isMobile ? 1.6 : 2.3;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSection,
          start: "top top",
          // hero 짧게 — letter 흩어짐이 너무 길게 느껴지지 않도록
          end: "+=75%",
          pin: true,
          pinSpacing: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      const vh = window.innerHeight;
      const vw = window.innerWidth;

      letters.forEach((letter) => {
        const speed = randomSpeed();
        letter.dataset.speed = speed.toFixed(3);
        const rotation = randomRotation() * (isMobile ? 0.6 : 1);
        const isSecondary = letter.dataset.secondary === "true";

        if (isSecondary) {
          // hero 아래에 normal flow 로 깔려 있는 위치에서, viewport 전체로
          // random 하게 흩어 둠. (-45vw ~ +45vw, 0 ~ +60vh)
          const offsetX = (Math.random() - 0.5) * vw * 0.9;
          const offsetY = Math.random() * vh * 0.6;
          tl.fromTo(
            letter,
            {
              x: offsetX,
              y: offsetY,
              rotation: randomRotation() * 0.4,
            },
            {
              x: offsetX,
              y: offsetY + (1 - speed) * vh * driftBase,
              rotation,
              ease: "power2.out",
            },
            0,
          );
        } else {
          tl.to(
            letter,
            {
              y: () => (1 - speed) * vh * driftBase,
              rotation,
              ease: "power2.out",
            },
            0,
          );
        }
      });

      // layout/font 안정화 후 ScrollTrigger 가 정확한 값을 잡도록 다단계 refresh
      const refreshNow = () => ScrollTrigger.refresh();
      requestAnimationFrame(() => {
        requestAnimationFrame(refreshNow);
      });
      if (document.readyState === "complete") {
        setTimeout(refreshNow, 200);
      } else {
        window.addEventListener("load", refreshNow, { once: true });
      }
      if (document.fonts?.ready) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
      }
    }, root);

    return () => ctx.revert();
  }, []);

  const allLines = [...PRIMARY_LINES, ...SECONDARY_LINES];

  return (
    <div
      ref={rootRef}
      className="relative select-none font-semibold tracking-[-0.02em] text-[var(--color-ink-900)]"
      style={{
        fontFamily: "var(--font-pretendard), var(--font-sans)",
        fontSize: "clamp(64px, 13vw, 188px)",
        lineHeight: 0.96,
      }}
    >
      <h1
        aria-label={allLines.join(" ")}
        className="m-0 p-0 font-inherit"
      >
        {PRIMARY_LINES.map((line, idx) => (
          <span
            key={idx}
            aria-hidden
            className="flex flex-wrap items-baseline justify-start"
          >
            <LetterDisplay word={line} />
          </span>
        ))}
      </h1>

      {/*
        Secondary container — hero 아래에 깔려 있으나, 각 letter 가 마운트 시점에
        viewport 전체로 random 하게 흩어진다.
      */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-full pointer-events-none"
      >
        {SECONDARY_LINES.map((line, idx) => (
          <span
            key={idx}
            className="flex flex-wrap items-baseline justify-start"
          >
            <LetterDisplay word={line} secondary />
          </span>
        ))}
      </div>
    </div>
  );
}
