"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LetterDisplay } from "./LetterDisplay";

// hero 첫 화면에 보이는 메인 헤드라인. 마지막 줄은 "김현" 강조를 위해 세 토막으로.
const PRIMARY_LINE_1 = "웹개발과";
const PRIMARY_LINE_2 = "마케팅 둘 다";
const PRIMARY_LINE_3_PARTS = ["하는 ", "김현", "입니다."] as const; // 가운데 토막만 accent
// 화면 밖에서 시작 — 마운트 시점에 viewport 전체에 random 분포됨.
// 글자 수가 많을수록 viewport 가 더 풍부하게 채워짐.
const SECONDARY_LINES = [
  "글을 쓰고",
  "코드를 짓고",
  "디자인을 다듬으며",
  "사람을 만나고",
  "고민을 정리합니다",
  "오늘도 만들고",
  "내일도 배웁니다",
] as const;

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
      // (A) Pin only — hero 가 0.75 vh 동안만 viewport 에 머무름.
      ScrollTrigger.create({
        trigger: heroSection,
        start: "top top",
        end: "+=75%",
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
      });

      // (B) Letter motion — pin 보다 훨씬 긴 range. unpin 후에도 letter 는
      // 다음 섹션이 완전히 진입할 때까지 계속 움직임. trigger 를
      // document.documentElement 로 잡아야 pin-spacer 가 만든 measurement
      // shift 의 영향을 받지 않고 scroll 0 부터 정확하게 매핑된다.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: () => window.innerHeight * 2.2,
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
          // viewport 전체로 random 분포. y 의 minimum 을 키워서 처음엔
          // viewport 아래로 충분히 빠져 있게 한다 (첫 화면 미노출).
          const offsetX = (Math.random() - 0.5) * vw * 0.95;
          const offsetY = vh * 0.25 + Math.random() * vh * 0.95;
          tl.fromTo(
            letter,
            {
              x: offsetX,
              y: offsetY,
              rotation: randomRotation() * 0.4,
            },
            {
              x: offsetX,
              y: offsetY + (1 - speed) * vh * driftBase * 1.6,
              rotation,
              ease: "power1.in",
            },
            0,
          );
        } else {
          tl.to(
            letter,
            {
              y: () => (1 - speed) * vh * driftBase * 1.6,
              rotation,
              ease: "power1.in",
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

  const ariaLabel = [
    PRIMARY_LINE_1,
    PRIMARY_LINE_2,
    PRIMARY_LINE_3_PARTS.join(""),
    ...SECONDARY_LINES,
  ].join(" ");

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
      <h1 aria-label={ariaLabel} className="m-0 p-0 font-inherit">
        <span aria-hidden className="flex flex-wrap items-baseline justify-start">
          <LetterDisplay word={PRIMARY_LINE_1} />
        </span>
        <span aria-hidden className="flex flex-wrap items-baseline justify-start">
          <LetterDisplay word={PRIMARY_LINE_2} />
        </span>
        <span aria-hidden className="flex flex-wrap items-baseline justify-start">
          <LetterDisplay word={PRIMARY_LINE_3_PARTS[0]} />
          <LetterDisplay word={PRIMARY_LINE_3_PARTS[1]} highlight />
          <LetterDisplay word={PRIMARY_LINE_3_PARTS[2]} />
        </span>
      </h1>

      {/*
        Secondary container — hero 아래에 깔려 있으나, 각 letter 가 마운트 시점에
        viewport 전체로 random 하게 흩어진다. top 을 더 아래로 깔아두어 첫
        화면에 secondary letter 가 새어 들어오지 않게 한다.
      */}
      <div
        aria-hidden
        className="absolute left-0 right-0 pointer-events-none"
        style={{ top: "calc(100% + 25vh)" }}
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
