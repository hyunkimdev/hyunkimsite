"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LetterDisplay } from "./LetterDisplay";

// hero 첫 화면에 보이는 메인 헤드라인 (좌하단 anchor)
const PRIMARY_LINES = ["웹개발과", "마케팅 둘 다", "하는 김현입니다."] as const;
// hero 아래에 숨겨져 있다가 스크롤 시 letter explosion 으로 위로 떠올라 보임
const SECONDARY_LINES = ["글을 쓰고", "코드를 짓습니다"] as const;

// ±60° 회전 — 글자가 강하게 흩어지는 느낌
const ROTATION_RANGE = 120;
// 대칭 speed range — (1 - speed) 가 음수/양수 모두 큰 값을 가져서 위/아래로
// 동등하게 흩어짐. 1.0 을 중심으로 ±0.8.
const SPEED_MIN = 0.2;
const SPEED_RANGE = 1.6;

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
  const rootRef = useRef<HTMLHeadingElement>(null);

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

    // Hero <section>을 trigger로 — pin 효과를 위해
    const heroSection = root.closest<HTMLElement>("[data-hero]");
    if (!heroSection) return;

    const letters = root.querySelectorAll<HTMLElement>(".letter");
    const isMobile = window.innerWidth < 768;
    // viewport 3.6 배 거리. 살짝만 스크롤해도 letter 가 화면 전체에 흩뿌려지고,
    // pin 이 끝나는 시점엔 이미 viewport 한참 밖이라 멈춤이 안 보임.
    const driftBase = isMobile ? 2.2 : 3.6;

    const ctx = gsap.context(() => {
      // 단일 ScrollTrigger 에 pin + scrub timeline 통합.
      // (분리하면 두 번째 trigger 가 pin-spacer 뒤부터 측정되는 quirk 발생)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSection,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      letters.forEach((letter) => {
        const speed = randomSpeed();
        letter.dataset.speed = speed.toFixed(3);
        const rotation = randomRotation() * (isMobile ? 0.6 : 1);

        tl.to(
          letter,
          {
            y: () => (1 - speed) * window.innerHeight * driftBase,
            rotation,
            // power2.out — 처음에 강한 폭발, 후반은 감속 (멈추지는 않음).
            // drift 가 매우 커서 progress 0.5 만 되어도 letter 들은 거의
            // viewport 밖.
            ease: "power2.out",
          },
          0,
        );
      });

      // layout 완료 후 ScrollTrigger 가 정확한 값을 잡도록 다단계 refresh
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
        Secondary 라인 — hero 첫 화면 아래에 깔려 있어 처음엔 안 보임.
        스크롤 시 모든 .letter 가 위로 떠오르면서 함께 viewport 로 진입.
      */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-full mt-[0.4em]"
      >
        {SECONDARY_LINES.map((line, idx) => (
          <span
            key={idx}
            className="flex flex-wrap items-baseline justify-start"
          >
            <LetterDisplay word={line} />
          </span>
        ))}
      </div>
    </div>
  );
}
