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
  "그리고 또 만들고",
  "다시 처음부터",
] as const;

const ROTATION_RANGE = 120; // ±60°
// 모든 speed > 1 → (1 - speed) 항상 음수 → letter 무조건 위로
const SPEED_MIN = 1.3;
const SPEED_RANGE = 0.6; // primary → 1.3 ~ 1.9
const SECONDARY_SPEED_BANDS = [1.5, 1.78, 2.06, 2.36, 2.68] as const;
const PRIORITY_NAME_SPEEDS = [1.28, 1.24] as const; // 김이 현보다 아주 살짝 빠르게
const PRIORITY_ROTATION_RANGE = 34;

function randomRotation() {
  return Math.random() * ROTATION_RANGE - ROTATION_RANGE / 2;
}

function speedFromBand(bands: readonly number[], index: number, jitter = 0.08) {
  const band = bands[index % bands.length];
  return band + (Math.random() - 0.5) * jitter;
}

function randomSpeed() {
  return SPEED_MIN + Math.random() * SPEED_RANGE;
}

function priorityNameSpeed(index: number) {
  return (
    PRIORITY_NAME_SPEEDS[index] ??
    PRIORITY_NAME_SPEEDS[PRIORITY_NAME_SPEEDS.length - 1]
  );
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

    // secondary letter 를 미리 모아 두면 viewport 폭에 균등 분포 + jitter 로
    // 흩어 둘 수 있다 (random 만 쓰면 letter 수가 적어 한쪽으로 쏠리는 경우 있음).
    const secondaryArray = Array.from(letters).filter(
      (l) => l.dataset.secondary === "true",
    );

    const ctx = gsap.context(() => {
      // (A) Pin only — hero 가 0.44 vh 동안만 viewport 에 머무름.
      ScrollTrigger.create({
        trigger: heroSection,
        start: "top top",
        end: "+=44%",
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
          // 원본 레퍼런스 방식 — 즉시 동기화(true) 대신 0.5s 스무딩.
          // 휠을 굴리면 letter 가 부드럽게 lerp 으로 따라옴.
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      const vh = window.innerHeight;
      const vw = window.innerWidth;

      letters.forEach((letter) => {
        const isSecondary = letter.dataset.secondary === "true";
        const priorityLetterIndex = letter.dataset.priorityLetter;
        const isPriority = priorityLetterIndex !== undefined;
        const isPeriod = letter.textContent === ".";
        const secondaryIndex = secondaryArray.indexOf(letter);
        let speed = isSecondary
          ? speedFromBand(SECONDARY_SPEED_BANDS, secondaryIndex, 0.12)
          : randomSpeed();
        if (isPriority) {
          speed = priorityNameSpeed(Number(priorityLetterIndex));
        }
        // 마침표는 항상 빠른 그룹에 — primary 끝에서 한 발 먼저 치고 빠짐
        if (isPeriod && !isSecondary && !isPriority) {
          speed = 2.2 + Math.random() * 0.5;
        }
        letter.dataset.speed = speed.toFixed(3);
        const rotation = isPriority
          ? Math.random() * PRIORITY_ROTATION_RANGE - PRIORITY_ROTATION_RANGE / 2
          : randomRotation() * (isMobile ? 0.6 : 1);

        if (isSecondary) {
          const columns = isMobile ? 4 : 7;
          const rowCount = Math.ceil(secondaryArray.length / columns);
          const column = secondaryIndex % columns;
          const row = Math.floor(secondaryIndex / columns);
          const rowProgress = rowCount > 1 ? row / (rowCount - 1) : 0.5;
          const rowOffset = row % 2 === 0 ? 0 : 0.48;
          const baseX =
            ((column + 0.5 + rowOffset) / columns - 0.5) * vw * 1.18;
          const jitterX = (Math.random() - 0.5) * vw * 0.06;
          const offsetX = baseX + jitterX;
          const offsetY =
            vh * (0.08 + rowProgress * 0.78) +
            (Math.random() - 0.5) * vh * 0.12;
          const driftMultiplier = 1.45 + (column % 4) * 0.16;
          tl.fromTo(
            letter,
            {
              x: offsetX,
              y: offsetY,
              rotation: randomRotation() * 0.4,
            },
            {
              x: offsetX,
              y: offsetY + (1 - speed) * vh * driftBase * driftMultiplier,
              rotation,
              ease: "power2.out",
            },
            0,
          );
        } else {
          tl.to(
            letter,
            {
              y: () => (1 - speed) * vh * driftBase * 1.6,
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

  const ariaLabel = [
    PRIMARY_LINE_1,
    PRIMARY_LINE_2,
    PRIMARY_LINE_3_PARTS.join(""),
    ...SECONDARY_LINES,
  ].join(" ");

  return (
    <div
      ref={rootRef}
      className="relative isolate select-none font-semibold tracking-[-0.02em] text-[var(--color-ink-900)]"
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
          <LetterDisplay word={PRIMARY_LINE_3_PARTS[1]} priority />
          <LetterDisplay word={PRIMARY_LINE_3_PARTS[2]} />
        </span>
      </h1>

      {/*
        Secondary container — hero 바로 아래에 대기. 스크롤 시작 즉시
        letter 들이 위로 치고 올라옴.
      */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-full z-0 pointer-events-none"
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
