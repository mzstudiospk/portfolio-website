"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = {
  value: number;
  /** Rendered after the animated number. */
  suffix: string;
  label: string;
  /** Optional custom formatter for the animated value (e.g. 100 → "100K"). */
  format?: (n: number) => string;
};

const STATS: Stat[] = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Apps Delivered" },
  { value: 100, suffix: "K+", label: "Users Reached" },
  { value: 10, suffix: "+", label: "Happy Clients" },
];

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  // Fire once when the stats row scrolls into view.
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="stats"
      ref={ref}
      className="scroll-mt-24 py-16 md:py-20"
      aria-label="Career highlights"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-surface/40 p-8 backdrop-blur-xl md:p-12"
        >
          <ul className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-6">
            {STATS.map((s, i) => (
              <li
                key={s.label}
                className={
                  // Vertical dividers between cells on desktop only.
                  "flex flex-col items-center text-center md:px-4" +
                  (i < STATS.length - 1
                    ? " md:border-r md:border-white/[0.08]"
                    : "")
                }
              >
                <AnimatedNumber
                  target={s.value}
                  suffix={s.suffix}
                  format={s.format}
                  start={inView}
                />
                <span className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/55 sm:text-xs">
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

// Counts from 0 → target with an ease-out cubic curve once `start` flips true.
function AnimatedNumber({
  target,
  suffix,
  format,
  start,
  duration = 1800,
}: {
  target: number;
  suffix: string;
  format?: (n: number) => string;
  start: boolean;
  duration?: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let rafId = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [start, target, duration]);

  const rendered = format ? format(value) : Math.floor(value).toString();

  return (
    <span className="bg-gradient-to-r from-brand via-brand to-accent-warm bg-clip-text font-sans text-5xl font-bold leading-none tracking-tight text-transparent sm:text-6xl md:text-5xl lg:text-6xl">
      {rendered}
      {suffix}
    </span>
  );
}
