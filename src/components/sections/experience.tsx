"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { SectionHeading } from "@/src/components/sections/section-heading";
import { cn } from "@/lib/utils";

type Job = {
  company: string;
  url: string;
  role: string;
  duration: string;
  bullets: string[];
};

const JOBS: Job[] = [
  {
    company: "MZ Studios",
    url: "https://facebook.com/MZStudiosPK",
    role: "Founder & Lead Developer",
    duration: "April 2026 — Present",
    bullets: [
      "Founded mobile app development agency serving global clients from Pakistan.",
      "Led development of 5+ MVP projects for startups across the USA, UK, and UAE.",
      "Built a strong brand presence across GitHub, LinkedIn, and Facebook.",
      "Established agency processes, pricing structure, and client acquisition pipelines.",
    ],
  },
  {
    company: "KK IT Solutions",
    url: "https://kkitsolutions.com",
    role: "Senior React Native Developer",
    duration: "January 2021 — Present",
    bullets: [
      "Leading mobile app development for enterprise clients across multiple industries.",
      "Delivered 15+ production apps live on the Google Play Store and Apple App Store.",
      "Mentored junior developers on React Native best practices and app architecture.",
      "Implemented CI/CD pipelines reducing deployment time by 60%.",
      "Architected reusable component libraries used across multiple projects.",
    ],
  },
  {
    company: "Abhi (YC S21)",
    url: "https://abhi.com.pk",
    role: "Principal Software Engineer",
    duration: "2023 — 2024",
    bullets: [
      "Principal engineer at a Y Combinator S21-backed fintech startup.",
      "Led mobile app architecture for salary-advance financial products.",
      "Scaled the app to serve 100K+ users across Pakistan.",
      "Collaborated with an international team on rapid product iterations.",
      "Implemented critical security features for financial transactions.",
    ],
  },
];

export function Experience() {
  const [active, setActive] = useState(0);
  const job = JOBS[active];

  return (
    <section
      id="experience"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto w-full max-w-4xl px-6">
        <div id="experience-heading">
          <SectionHeading number="02" title="Where I've Worked" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8 md:flex-row md:gap-10"
        >
          {/* Tab list — horizontal scroll on mobile, vertical column on desktop */}
          <ul
            role="tablist"
            aria-label="Companies"
            className={cn(
              "relative flex overflow-x-auto md:w-52 md:shrink-0 md:flex-col md:overflow-visible",
              // Horizontal underline on mobile / left border rail on desktop
              "border-white/10 md:border-l",
            )}
          >
            {JOBS.map((j, i) => {
              const isActive = i === active;
              return (
                <li key={j.company} role="presentation" className="md:w-full">
                  <button
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`job-panel-${i}`}
                    id={`job-tab-${i}`}
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "relative whitespace-nowrap px-4 py-3 font-mono text-sm transition-colors md:w-full md:px-5 md:text-left",
                      isActive
                        ? "text-brand"
                        : "text-foreground/55 hover:bg-white/[0.03] hover:text-foreground",
                    )}
                  >
                    {j.company}
                    {isActive && (
                      <motion.span
                        layoutId="exp-indicator"
                        aria-hidden
                        className={cn(
                          "absolute bg-brand",
                          // Mobile: bottom underline.
                          "bottom-0 left-2 right-2 h-0.5",
                          // Desktop: left rail. `md:right-auto` resets the
                          // mobile right anchor so the rail is width-driven.
                          "md:bottom-0 md:left-[-1px] md:right-auto md:top-0 md:h-auto md:w-0.5",
                        )}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Panel */}
          <div className="min-h-[340px] flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={job.company}
                role="tabpanel"
                id={`job-panel-${active}`}
                aria-labelledby={`job-tab-${active}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                  {job.role}{" "}
                  <span className="text-brand">
                    @{" "}
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      {job.company}
                      <ExternalLink className="size-3.5" />
                    </a>
                  </span>
                </h3>
                <p className="mt-1 font-mono text-xs text-foreground/55 sm:text-sm">
                  {job.duration}
                </p>

                <ul className="mt-6 space-y-3 text-foreground/70">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-sm leading-relaxed sm:text-base"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.4em] shrink-0 text-brand"
                      >
                        ▹
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
