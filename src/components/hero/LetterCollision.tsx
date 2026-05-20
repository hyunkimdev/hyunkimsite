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
    // pin end 시점에 letter 가 viewport 밖으로 거의 빠져나가도록 큰 drift.
    // 그래야 unpin 으로 hero 가 위로 밀려나는 순간 letter 가 멈춘 듯이 보이지 않음.
    const driftBase = isMobile ? 1.1 : 1.8;

    // 단일 ScrollTrigger 로 hero 를 pin 하고, 그 안에서 모든 letter 를 tween.
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSection,
          start: "top top",
          // pin 동안 추가 100vh 만큼 스크롤이 letter 흩어짐에 소모됨
          end: "+=100%",
          pin: true,
          pinSpacing: true,
          // scrub: true — scroll 진행과 letter 진행을 1:1 즉시 동기화
          // (지연이 있으면 unpin 직전에 letter 가 '완료된' 상태로 멈추는
          // 듯한 어색함이 보임)
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      letters.forEach((letter) => {
        // SSR/CSR HTML 일치 유지 — speed 는 mount 시점에 부여
        const speed = randomSpeed();
        letter.dataset.speed = speed.toFixed(3);
        const rotation = randomRotation() * (isMobile ? 0.6 : 1);

        tl.to(
          letter,
          {
            y: () => (1 - speed) * window.innerHeight * driftBase,
            rotation,
            // 끝에서 가속 — unpin 직전까지 letter 가 계속 빠르게 움직이는
            // 인상을 줌 (정지하는 듯 보이지 않게)
            ease: "power1.in",
          },
          0, // 모든 letter 가 동시에 시작
        );
      });

      // layout 완료 후 ScrollTrigger 가 정확한 값을 잡도록 refresh.
      // font 로딩 / image decode 까지 기다리려면 2단계 refresh + load 이벤트.
      const refreshNow = () => ScrollTrigger.refresh();
      requestAnimationFrame(() => {
        requestAnimationFrame(refreshNow);
      });
      if (document.readyState === "complete") {
        setTimeout(refreshNow, 200);
      } else {
        window.addEventListener("load", refreshNow, { once: true });
      }
      // Pretendard 변동 폰트 로딩 완료 시점에 다시
      if (document.fonts?.ready) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <h1
      ref={rootRef}
      aria-label={LINES.join(" ")}
      className="select-none font-semibold tracking-[-0.02em] text-[var(--color-ink-900)]"
      style={{
        fontFamily: "var(--font-pretendard), var(--font-sans)",
        fontSize: "clamp(64px, 13vw, 188px)",
        lineHeight: 0.96,
      }}
    >
      {LINES.map((line, idx) => (
        <span
          key={idx}
          aria-hidden
          className="flex flex-wrap items-baseline justify-start"
        >
          <LetterDisplay word={line} />
        </span>
      ))}
    </h1>
  );
}
