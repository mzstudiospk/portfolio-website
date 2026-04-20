"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: "What's your typical project timeline?",
    a: "Most mobile apps take 4-12 weeks depending on complexity. Web projects 2-8 weeks. For MVPs, I can deliver in as little as 4 weeks. I'll give you an accurate estimate after our discovery call.",
  },
  {
    q: "Do you work with startups or only established companies?",
    a: "I work with both! I love helping startups bring their ideas to life (0 to 1), and I also partner with established businesses on scaling and modernization projects. Flexible to your stage.",
  },
  {
    q: "What's your pricing structure?",
    a: "I offer both fixed-price projects and hourly consulting. Typical mobile app projects range from $5K-25K depending on scope. Local Pakistani clients get special rates. Free 15-minute consultation to discuss.",
  },
  {
    q: "Do you handle App Store deployment?",
    a: "Absolutely. I've published 20+ apps on both Google Play Store and Apple App Store. Deployment, listing optimization, and approval guidance are all included in app development projects.",
  },
  {
    q: "Can you work with my existing team?",
    a: "Yes! I regularly collaborate with existing teams as a senior developer or technical consultant. I can lead, mentor junior developers, or work alongside your current developers.",
  },
  {
    q: "What tech stack do you specialize in?",
    a: "My primary stack is React Native for mobile, and Next.js + Node.js for web. I also work with Firebase, MongoDB, PostgreSQL, AWS, and more. Always choosing the right tool for your specific needs.",
  },
];

export function FAQ() {
  // Accordion: single open at a time. First one open by default for discoverability.
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto w-full max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center md:mb-14"
        >
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-foreground/60 sm:text-lg">
            Common questions about working with me.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-3"
        >
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <li
                key={faq.q}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-surface/40 backdrop-blur-xl transition-colors duration-300",
                  isOpen
                    ? "border-brand/40 shadow-[0_18px_48px_-24px_rgba(46,134,222,0.35)]"
                    : "border-white/10 hover:border-white/20",
                )}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6 sm:py-6"
                  >
                    <span className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                      {faq.q}
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        "inline-flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                        isOpen
                          ? "rotate-45 border-brand/50 bg-brand/15 text-brand"
                          : "border-white/15 bg-background/40 text-foreground/70",
                      )}
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-foreground/70 sm:px-6 sm:pb-6 sm:text-base">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
