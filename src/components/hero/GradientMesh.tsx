"use client";

import { motion } from "framer-motion";

/**
 * Decorative gradient mesh used in the hero. Pure CSS — multiple radial
 * gradients blended on a positioned canvas. No copyrighted assets.
 */
export function GradientMesh() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {/* base swirl */}
      <motion.div
        className="absolute -top-[5%] -right-[8%] w-[88%] h-[140%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: `
            radial-gradient(40% 70% at 80% 12%, rgba(255, 196, 96, 0.95) 0%, rgba(255, 196, 96, 0) 60%),
            radial-gradient(46% 70% at 88% 30%, rgba(255, 96, 56, 0.95) 0%, rgba(255, 96, 56, 0) 65%),
            radial-gradient(55% 75% at 56% 65%, rgba(255, 102, 196, 0.9) 0%, rgba(255, 102, 196, 0) 65%),
            radial-gradient(50% 70% at 30% 85%, rgba(155, 92, 255, 0.95) 0%, rgba(155, 92, 255, 0) 65%),
            radial-gradient(50% 70% at 90% 80%, rgba(86, 102, 255, 0.95) 0%, rgba(86, 102, 255, 0) 65%),
            radial-gradient(40% 60% at 40% 30%, rgba(255, 168, 200, 0.65) 0%, rgba(255, 168, 200, 0) 70%)
          `,
          filter: "blur(0.5px) saturate(118%)",
          willChange: "transform",
          animation: "meshDrift 24s ease-in-out infinite",
        }}
      />

      {/* curl ribbons — using clip-path on conic to mimic the curved sheet */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="absolute top-[-10%] right-[-12%] w-[72%] h-[120%]"
        style={{
          background: `
            conic-gradient(from 220deg at 60% 50%,
              transparent 0deg,
              rgba(255, 220, 120, 0.35) 30deg,
              rgba(255, 120, 60, 0.5) 60deg,
              rgba(255, 90, 140, 0.55) 110deg,
              rgba(160, 80, 255, 0.55) 160deg,
              rgba(70, 90, 255, 0.5) 210deg,
              transparent 280deg)
          `,
          maskImage:
            "radial-gradient(72% 90% at 80% 40%, #000 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(72% 90% at 80% 40%, #000 30%, transparent 75%)",
          mixBlendMode: "screen",
        }}
      />

      {/* highlight sheen */}
      <div
        className="absolute top-[10%] right-[10%] w-[40%] h-[60%]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(20px)",
          mixBlendMode: "soft-light",
        }}
      />
    </div>
  );
}
