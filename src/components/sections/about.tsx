"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { SectionHeading } from "@/src/components/sections/section-heading";

const TECHS = [
  "React Native",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Firebase",
  "MongoDB",
  "AWS",
  "TailwindCSS",
] as const;

export function About() {
  // If /me.jpg is dropped into /public it replaces the gradient monogram.
  const [imgOk, setImgOk] = useState(true);

  return (
    <section
      id="about"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <div id="about-heading">
          <SectionHeading number="01" title="About Me" />
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-16">
          {/* Bio — 60% on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 text-base leading-relaxed text-foreground/70 sm:text-[17px] md:col-span-3"
          >
            <p>
              Hello! I&apos;m Zeeshan, a Senior React Native Developer from{" "}
              <span className="text-foreground">Multan, Pakistan</span>. With{" "}
              <span className="text-foreground">5+ years</span> of hands-on
              experience, I&apos;ve delivered{" "}
              <span className="text-foreground">20+ production apps</span> that
              live on the Google Play Store and Apple App Store — serving users
              across Pakistan and beyond.
            </p>
            <p>
              My journey started at{" "}
              <a
                href="https://kkitsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand hover:underline"
              >
                KK IT Solutions
              </a>{" "}
              where I quickly moved up to Senior Developer. Later, I had the
              privilege of joining{" "}
              <a
                href="https://abhi.com.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand hover:underline"
              >
                Abhi
              </a>{" "}
              — a Y Combinator{" "}
              <span className="font-mono text-xs text-accent-warm">S21</span>{" "}
              backed fintech — as Principal Software Engineer, where I led
              mobile architecture serving 100K+ users.
            </p>
            <p>
              Today, I&apos;m the founder of{" "}
              <a
                href="https://facebook.com/MZStudiosPK"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand hover:underline"
              >
                MZ Studios
              </a>
              , a mobile app development agency helping businesses worldwide
              transform their ideas into polished, scalable apps. When I&apos;m
              not coding, I&apos;m mentoring junior devs and exploring new tech.
            </p>

            <p className="pt-4 text-foreground/80">
              Here are a few technologies I&apos;ve been working with recently:
            </p>

            <ul className="grid max-w-md grid-cols-2 gap-x-6 gap-y-2 pt-1 font-mono text-sm text-foreground/70">
              {TECHS.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span aria-hidden className="text-brand">
                    ▹
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Portrait — 40% on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2"
          >
            <div className="group relative mx-auto w-full max-w-[300px]">
              {/* Decorative accent-warm offset box behind the image. */}
              <span
                aria-hidden
                className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-accent-warm transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
              />

              {/* Portrait frame */}
              <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-brand bg-gradient-to-br from-brand/25 via-surface to-accent-warm/20 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                {imgOk ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/me.jpeg"
                    alt="Muhammad Zeeshan"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                    onError={() => setImgOk(false)}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="bg-gradient-to-br from-brand via-brand to-accent-warm bg-clip-text font-mono text-7xl font-bold tracking-tight text-transparent">
                      MZ
                    </span>
                  </div>
                )}

                {/* Subtle tint overlay — lifts on hover. */}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-brand/10 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-0"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
