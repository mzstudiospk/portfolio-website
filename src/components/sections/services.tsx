"use client";

import type { ComponentType, SVGProps } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Globe,
  Layers,
  MessageCircle,
  Rocket,
  Smartphone,
  Upload,
} from "lucide-react";

import { SectionHeading } from "@/src/components/sections/section-heading";

type Service = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  features: string[];
  timeline: string;
  tone: "brand" | "accent";
};

const SERVICES: Service[] = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform iOS & Android apps built with React Native for maximum reach.",
    features: ["Native performance", "App Store deployment", "Post-launch support"],
    timeline: "4-12 weeks",
    tone: "brand",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Modern, fast web apps using Next.js, React, and TypeScript with premium UI.",
    features: ["SEO optimized", "Lightning fast", "Scalable architecture"],
    timeline: "2-8 weeks",
    tone: "accent",
  },
  {
    icon: Rocket,
    title: "Startup MVP Development",
    description:
      "0 → 1 product development for founders ready to validate their ideas quickly.",
    features: ["Rapid prototyping", "Market-ready in weeks", "Iterative development"],
    timeline: "4-8 weeks",
    tone: "accent",
  },
  {
    icon: Layers,
    title: "Full-Stack Solutions",
    description:
      "End-to-end applications with backend, database, and modern frontend integration.",
    features: ["Complete ownership", "API development", "Cloud deployment"],
    timeline: "4-16 weeks",
    tone: "brand",
  },
  {
    icon: Upload,
    title: "App Store Deployment",
    description:
      "Complete publishing support for Google Play Store and Apple App Store.",
    features: ["Listing optimization", "Approval guidance", "Version management"],
    timeline: "1-2 weeks",
    tone: "brand",
  },
  {
    icon: MessageCircle,
    title: "Technical Consultation",
    description:
      "Free 15-minute consultation to discuss your project and technical roadmap.",
    features: ["Architecture review", "Tech stack advice", "Project estimation"],
    timeline: "Free",
    tone: "accent",
  },
];

const gridContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
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

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div id="services-heading">
          <SectionHeading number="05" title="Services @ MZ Studios" />
        </div>
        <p className="mb-12 max-w-2xl text-base text-foreground/60 sm:text-lg md:-mt-6">
          Let&apos;s build something great together.
        </p>

        <motion.ul
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6"
        >
          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            const toneIconBg =
              svc.tone === "brand"
                ? "bg-brand/10 text-brand border-brand/30"
                : "bg-accent-warm/10 text-accent-warm border-accent-warm/30";
            const toneHover =
              svc.tone === "brand"
                ? "hover:border-brand/40 hover:shadow-[0_20px_60px_-20px_rgba(46,134,222,0.45)]"
                : "hover:border-accent-warm/40 hover:shadow-[0_20px_60px_-20px_rgba(243,156,18,0.45)]";
            const toneTimeline =
              svc.timeline.toLowerCase() === "free"
                ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                : "border-white/10 bg-background/40 text-foreground/70";

            return (
              <motion.li key={svc.title} variants={card}>
                <div
                  className={`group/svc flex h-full flex-col gap-5 rounded-2xl border border-white/10 bg-surface/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-surface/60 sm:p-7 ${toneHover}`}
                >
                  <span
                    className={`inline-flex size-12 items-center justify-center rounded-xl border transition-transform duration-300 group-hover/svc:-translate-y-0.5 ${toneIconBg}`}
                  >
                    <Icon className="size-6" />
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                      {svc.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                      {svc.description}
                    </p>
                  </div>

                  <ul className="space-y-2 text-sm text-foreground/70">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span
                          aria-hidden
                          className="mt-[0.35em] shrink-0 text-brand"
                        >
                          ▹
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${toneTimeline}`}
                    >
                      {svc.timeline}
                    </span>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
