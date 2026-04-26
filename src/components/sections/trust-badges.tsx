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

type Item = (typeof ITEMS)[number];

function Badge({
  item,
  textSizeClass,
}: {
  item: Item;
  textSizeClass: string;
}) {
  return (
    <span
      className={`flex shrink-0 items-center gap-2 font-mono ${textSizeClass} text-foreground/65 opacity-70 transition-opacity duration-200 hover:opacity-100`}
    >
      <span aria-hidden className="text-base sm:text-lg">
        {item.emoji}
      </span>
      {item.text}
    </span>
  );
}

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

        {/* Mobile: continuous marquee with edge fade. Pauses on hover/touch.
            Items duplicated for a seamless -50% loop. */}
        <div
          className="group/marquee relative mt-5 -mx-6 overflow-hidden md:hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div
            className="flex w-max items-center gap-6 whitespace-nowrap pl-6 animate-[marquee_28s_linear_infinite] motion-reduce:animate-none group-hover/marquee:[animation-play-state:paused] group-active/marquee:[animation-play-state:paused]"
          >
            {[...ITEMS, ...ITEMS].map((item, i) => (
              <span
                key={`${item.text}-${i}`}
                aria-hidden={i >= ITEMS.length || undefined}
              >
                <Badge item={item} textSizeClass="text-xs" />
              </span>
            ))}
          </div>
        </div>

        {/* Desktop: original wrap & centered layout — unchanged. */}
        <div className="mt-6 hidden md:block">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {ITEMS.map((item, i) => (
              <Fragment key={item.text}>
                {i > 0 && (
                  <span
                    aria-hidden
                    className="h-4 w-px shrink-0 self-center bg-white/10"
                  />
                )}
                <Badge item={item} textSizeClass="text-sm" />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
