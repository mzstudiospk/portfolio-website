"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * One-shot splash: brand monogram fades in on mount, then the entire overlay
 * fades out after ~1.5s. Runs once per page load.
 */
export function SplashScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), 1500);
    return () => window.clearTimeout(t);
  }, []);

  // Lock body scroll while the splash is up so users don't see half the page
  // scrolling under the overlay.
  useEffect(() => {
    if (done) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          role="status"
          aria-live="polite"
          aria-label="Loading"
        >
          <motion.span
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-br from-brand via-brand to-accent-warm bg-clip-text font-mono text-6xl font-bold tracking-tight text-transparent sm:text-7xl"
          >
            MZ
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
