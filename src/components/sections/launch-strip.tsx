"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function LaunchStrip() {
  return (
    <motion.section
      aria-label="Latest launch"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative border-y border-white/[0.06] bg-surface/15 backdrop-blur-sm"
    >
      {/* Hairline brand glow along the bottom edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-3 px-6 py-3.5 text-center sm:flex-row sm:gap-4 sm:py-3 sm:text-left">
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-foreground/75 sm:text-[15px]">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-warm/25 bg-accent-warm/[0.08] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-warm">
            <span aria-hidden>🚀</span>
            Just launched
          </span>
          <span className="font-semibold text-foreground">PostPilot</span>
          <span className="hidden text-foreground/40 sm:inline">—</span>
          <span className="text-foreground/70">
            an AI SaaS that writes social media posts in seconds.
          </span>
        </p>

        <a
          href="https://postpilot-io.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Try PostPilot live (opens in a new tab)"
          className="group/launch inline-flex shrink-0 items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-brand transition-all hover:border-brand/60 hover:bg-brand/15 hover:text-brand"
        >
          Try it Live
          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/launch:-translate-y-0.5 group-hover/launch:translate-x-0.5" />
        </a>
      </div>
    </motion.section>
  );
}
