"use client";

import type { ComponentType, SVGProps } from "react";
import { motion, type Variants } from "framer-motion";
import { Code, FileText, MessageCircle, Rocket } from "lucide-react";

type Step = {
  num: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Discovery Call",
    description:
      "Free 15-minute consultation to understand your vision, goals, and technical requirements.",
  },
  {
    num: "02",
    icon: FileText,
    title: "Proposal & Design",
    description:
      "Detailed project plan with timeline, pricing, and wireframes. No surprises, full transparency.",
  },
  {
    num: "03",
    icon: Code,
    title: "Development",
    description:
      "Weekly progress updates, live demos, and iterative feedback loops. Built with best practices.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "App Store deployment, post-launch support, and maintenance. We're with you beyond launch.",
  },
];

const gridContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-2xl text-center md:mb-16"
        >
          <h2
            id="process-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            How We Work
          </h2>
          <p className="mt-4 text-base text-foreground/60 sm:text-lg">
            A proven process that delivers results every time.
          </p>
        </motion.div>

        <motion.ol
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-5"
        >
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === STEPS.length - 1;
            return (
              <motion.li key={step.num} variants={card} className="relative">
                {/* Desktop connector: sits in the gap between cards. */}
                {!isLast && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute top-14 left-full hidden h-px w-5 bg-gradient-to-r from-brand/60 to-accent-warm/30 md:block"
                  />
                )}
                {/* Mobile connector: vertical line below each card. */}
                {!isLast && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-10 top-full h-10 w-px bg-gradient-to-b from-brand/60 to-accent-warm/30 md:hidden"
                  />
                )}

                <article className="group/step flex h-full flex-col rounded-2xl border border-white/10 bg-surface/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_22px_60px_-24px_rgba(46,134,222,0.45)] sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="bg-gradient-to-br from-brand to-accent-warm bg-clip-text font-mono text-4xl font-bold leading-none text-transparent sm:text-5xl">
                      {step.num}
                    </span>
                    <span className="inline-flex size-10 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-brand transition-transform duration-300 group-hover/step:-translate-y-0.5">
                      <Icon className="size-5" />
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                    {step.description}
                  </p>
                </article>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
