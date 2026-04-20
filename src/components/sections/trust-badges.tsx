"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";

const ITEMS = [
  { emoji: "🚀", text: "Y Combinator S21 Alumni" },
  { emoji: "📱", text: "Google Play Store" },
  { emoji: "🍎", text: "Apple App Store" },
  { emoji: "💼", text: "KK IT Solutions" },
  { emoji: "🇵🇰", text: "Made in Pakistan" },
] as const;

export function TrustBadges() {
  return (
    <motion.section
      aria-label="Trusted by and featured on"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="border-y border-white/[0.06] bg-surface/15 backdrop-blur-sm"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-8 md:py-10">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/45 sm:text-[11px]">
          Trusted by &amp; featured on
        </p>

        {/* On mobile the row scrolls horizontally; on desktop it wraps & centers. */}
        <div className="mt-5 -mx-6 overflow-x-auto px-6 md:mt-6 md:overflow-visible">
          <div className="flex items-center gap-6 whitespace-nowrap md:flex-wrap md:justify-center md:gap-8">
            {ITEMS.map((item, i) => (
              <Fragment key={item.text}>
                {i > 0 && (
                  <span
                    aria-hidden
                    className="hidden h-4 w-px shrink-0 self-center bg-white/10 md:block"
                  />
                )}
                <span className="flex shrink-0 items-center gap-2 font-mono text-xs text-foreground/65 opacity-70 transition-opacity duration-200 hover:opacity-100 sm:text-sm">
                  <span aria-hidden className="text-base sm:text-lg">
                    {item.emoji}
                  </span>
                  {item.text}
                </span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
