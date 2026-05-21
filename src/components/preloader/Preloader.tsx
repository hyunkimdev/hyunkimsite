"use client";

/**
 * 첫 로딩 시 검은 커튼을 덮었다가, 페이지가 준비되면 곡선 형태로
 * 위로 슥 벗겨내는 preloader. 레퍼런스(bettinasosa.com)의 연출 참고.
 *
 * 커튼 = 검은 패널(100vh) + 아래쪽 곡선 tongue(TONGUE_VH). 전체 높이의
 * 100% 만큼 위로 밀어 올리면 곡선 trailing edge 가 화면을 쓸고 지나간다.
 */

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CURTAIN_COLOR = "#0b0b0c";
const TONGUE_VH = 16; // 곡선 tongue 높이 — peel 의 부드러운 trailing edge
const MIN_DURATION_MS = 700; // 최소 노출 — 로딩이 빨라도 깜빡임 방지
const EXIT_EASE = [0.76, 0, 0.24, 1] as const;

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [reduced, setReduced] = useState(false);

  // 페이지 load 완료 + 최소 노출 시간을 모두 만족하면 커튼을 걷는다.
  useEffect(() => {
    setReduced(prefersReducedMotion());

    const start = performance.now();
    const finish = () => {
      const remaining = Math.max(
        0,
        MIN_DURATION_MS - (performance.now() - start),
      );
      window.setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finish();
      return;
    }
    window.addEventListener("load", finish, { once: true });
    return () => window.removeEventListener("load", finish);
  }, []);

  const exitTransition = reduced
    ? { duration: 0.4, ease: "easeOut" as const }
    : { duration: 0.9, ease: EXIT_EASE, delay: 0.15 };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          data-preloader
          aria-hidden
          className="fixed inset-x-0 top-0 z-[100] flex flex-col"
          initial={false}
          exit={
            reduced
              ? { opacity: 0, transition: exitTransition }
              : { y: "-100%", transition: exitTransition }
          }
        >
          {/* 검은 패널 — viewport 전체를 덮음 */}
          <div
            className="h-screen w-screen"
            style={{ backgroundColor: CURTAIN_COLOR }}
          />

          {/* 아래쪽 곡선 tongue — peel 의 trailing edge */}
          <svg
            className="block w-screen"
            style={{ height: `${TONGUE_VH}vh`, marginTop: "-1px" }}
            viewBox="0 0 100 24"
            preserveAspectRatio="none"
            focusable="false"
          >
            <path d="M0 0 L100 0 Q50 48 0 0 Z" fill={CURTAIN_COLOR} />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
