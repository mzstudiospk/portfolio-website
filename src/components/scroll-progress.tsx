"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// Thin gradient bar at the very top that tracks reading progress.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  // Spring smooths out the jitter you'd get from raw scroll value.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      // z-[60] sits above the navbar (z-50) but below the splash (z-[100]).
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand via-brand to-accent-warm"
    />
  );
}
