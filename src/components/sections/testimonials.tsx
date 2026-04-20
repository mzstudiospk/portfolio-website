"use client";

import { motion, type Variants } from "framer-motion";
import { Quote, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Muhammad delivered our mobile app ahead of schedule with exceptional attention to detail. His expertise in React Native and ability to architect scalable solutions made him invaluable to our team. Highly recommend for any serious mobile project.",
    name: "Sarah Chen",
    role: "Product Manager @ TechVenture",
  },
  {
    quote:
      "Working with Zeeshan transformed our startup's technical foundation. From MVP to launch, he guided us through every step with professionalism and technical excellence. Our app now serves thousands of users smoothly.",
    name: "Ahmed Raza",
    role: "Founder @ SparkHub",
  },
  {
    quote:
      "Top-tier developer with business sense. Zeeshan built our fintech platform that now handles 100K+ users. His code is clean, his communication is clear, and he truly cares about the product he's building.",
    name: "David Martinez",
    role: "CTO @ FinFlow",
  },
];

const gridContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

function initials(name: string) {
  return name
    .split(" ")
    .map((s) => s[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
        >
          <h2
            id="testimonials-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            What People Say
          </h2>
          <p className="mt-4 text-base text-foreground/60 sm:text-lg">
            Trusted by founders, teams, and businesses.
          </p>
        </motion.div>

        <motion.ul
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.li key={t.name} variants={card}>
              <article className="group/card relative flex h-full flex-col rounded-2xl border border-white/10 bg-surface/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_22px_60px_-24px_rgba(46,134,222,0.45)] sm:p-7">
                <Quote
                  aria-hidden
                  className="size-7 text-accent-warm"
                  strokeWidth={1.5}
                />

                <p className="mt-4 text-sm italic leading-relaxed text-foreground/80 sm:text-base">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <span
                  aria-hidden
                  className="my-6 block h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
                />

                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent-warm font-mono text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgba(46,134,222,0.55)]"
                  >
                    {initials(t.name)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground sm:text-base">
                      {t.name}
                    </p>
                    <p className="truncate text-xs text-foreground/55 sm:text-sm">
                      {t.role}
                    </p>
                  </div>
                </div>

                <ul
                  aria-label="5 out of 5 stars"
                  className="mt-4 flex gap-0.5"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <li key={i}>
                      <Star
                        aria-hidden
                        className="size-4 fill-accent-warm text-accent-warm"
                      />
                    </li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center text-sm text-foreground/50"
        >
          <span aria-hidden>* </span>
          Ready to be among the first real testimonials?{" "}
          <a
            href="#contact"
            className="font-medium text-brand underline-offset-4 transition-colors hover:text-accent-warm hover:underline"
          >
            Let&apos;s work together →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
