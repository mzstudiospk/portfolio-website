"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function SplashScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), 1200);
    return () => window.clearTimeout(t);
  }, []);

  // Lock body scroll while the splash is up so the page doesn't scroll under it.
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
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-3 bg-[#0A0E1A]"
          role="status"
          aria-live="polite"
          aria-label="Loading"
        >
          <motion.span
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: [1, 1.06, 1], opacity: 1 }}
            transition={{
              opacity: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              scale: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
            className="bg-gradient-to-br from-brand via-brand to-accent-warm bg-clip-text font-mono text-6xl font-bold tracking-tight text-transparent sm:text-7xl"
          >
            MZ
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-xs uppercase tracking-[0.32em] text-foreground/55 sm:text-sm"
          >
            MZ Studios
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
