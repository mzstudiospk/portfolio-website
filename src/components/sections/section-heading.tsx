"use client";

import { motion } from "framer-motion";

type Props = {
  number: string;
  title: string;
};

// Shared section header: "01. About Me ──────" with a subtle gradient divider.
export function SectionHeading({ number, title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10 flex items-center gap-4 md:mb-14"
    >
      <h2 className="flex items-baseline gap-3 whitespace-nowrap text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
        <span className="font-mono text-xl text-accent-warm sm:text-2xl md:text-3xl">
          {number}.
        </span>
        <span className="text-foreground">{title}</span>
      </h2>
      <span
        aria-hidden
        className="h-px flex-1 bg-gradient-to-r from-white/20 via-white/10 to-transparent"
      />
    </motion.div>
  );
}
