"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LetterDisplay } from "./LetterDisplay";

const LINES = ["웹개발과", "마케팅 둘 다", "하는 김현입니다."] as const;

const ROTATION_RANGE = 60; // ±30°
const SPEED_MIN = 0.8;
const SPEED_RANGE = 0.7;

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

    // dev-only: expose for debugging via preview_eval
    if (process.env.NODE_ENV !== "production") {
      (window as unknown as { __gsap: typeof gsap; __ST: typeof ScrollTrigger }).__gsap = gsap;
      (window as unknown as { __gsap: typeof gsap; __ST: typeof ScrollTrigger }).__ST = ScrollTrigger;
    }

    const letters = root.querySelectorAll<HTMLElement>(".letter");
    const isMobile = window.innerWidth < 768;
    // drift 거리를 viewport 기준으로 — 한 화면 스크롤 동안 letter 가 자연스럽게
    // 흩어지는 정도. maxScroll 기반은 페이지가 길면 폭주.
    const driftBase = isMobile ? 0.55 : 0.85;

    const tweens = Array.from(letters).map((letter) => {
      // data-speed는 mount 시점에서 부여 — SSR/CSR HTML 일치 유지
      const speed = randomSpeed();
      letter.dataset.speed = speed.toFixed(3);
      const rotation = randomRotation() * (isMobile ? 0.5 : 1);
      return gsap.to(letter, {
        // y는 함수로 — invalidateOnRefresh 시 viewport 변화 반영
        y: () => (1 - speed) * window.innerHeight * driftBase,
        rotation,
        ease: "power2.out",
        duration: 0.8,
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: () => window.innerHeight,
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });
    });

    // layout 완료 후 ScrollTrigger가 정확한 값을 잡도록 한 번 refresh
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      tweens.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
    };
  }, []);

  return (
    <h1
      ref={rootRef}
      aria-label={LINES.join(" ")}
      className="select-none font-semibold tracking-[-0.02em] text-[var(--color-ink-900)]"
      style={{
        fontFamily: "var(--font-pretendard), var(--font-sans)",
        fontSize: "clamp(48px, 9vw, 116px)",
        lineHeight: 1.02,
      }}
    >
      {LINES.map((line, idx) => (
        <span
          key={idx}
          aria-hidden
          className="flex flex-wrap items-baseline"
        >
          <LetterDisplay word={line} />
        </span>
      ))}
    </h1>
  );
}
