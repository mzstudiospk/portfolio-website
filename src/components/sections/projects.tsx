"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink, FolderOpen } from "lucide-react";

import { SectionHeading } from "@/src/components/sections/section-heading";
import { GithubIcon } from "@/src/components/icons";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  // Tailwind `from-X via-Y to-Z` gradient classes for the thumbnail.
  gradient: string;
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    title: "SwaasthGaurdian",
    description:
      "Healthcare mobile application with user authentication, OTP verification, appointment booking, and medical information management for Pakistani healthcare providers.",
    tech: ["React Native", "Firebase", "Redux", "REST API"],
    github: "https://github.com/mzstudiospk/SwaasthGaurdian",
    gradient: "from-sky-500 via-cyan-500 to-teal-500",
    featured: true,
  },
  {
    title: "E-Commerce Mobile App",
    description:
      "Multi-vendor e-commerce platform with cart management, payment integration, order tracking, and seller dashboard. Deployed on Google Play Store.",
    tech: ["React Native", "Node.js", "MongoDB", "Stripe"],
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
    featured: true,
  },
  {
    title: "Fintech Dashboard",
    description:
      "Financial services dashboard serving 100K+ users. Built as Principal Engineer at Abhi (YC S21). Handles salary advances and transactions.",
    tech: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    gradient: "from-green-500 via-emerald-500 to-teal-600",
    featured: true,
  },
  {
    title: "Food Delivery App",
    description:
      "On-demand food delivery platform with real-time order tracking, driver dashboard, restaurant management, and live chat support.",
    tech: ["React Native", "Firebase", "Google Maps API"],
    gradient: "from-orange-500 via-red-500 to-rose-500",
  },
  {
    title: "Social Networking App",
    description:
      "Social platform with real-time messaging, feeds, stories, and video calls. Scalable architecture for millions of users.",
    tech: ["React Native", "Node.js", "WebSocket", "MongoDB"],
    gradient: "from-indigo-500 via-violet-500 to-purple-500",
  },
  {
    title: "MZ Studios Portfolio",
    description:
      "This very website you're viewing! Built with Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, and deployed on Vercel.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/mzstudiospk/portfolio-website",
    external: "https://muhammad-zeeshan-dev.vercel.app",
    gradient: "from-[#2e86de] via-purple-500 to-[#f39c12]",
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

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div id="projects-heading">
          <SectionHeading number="04" title="Some Things I've Built" />
        </div>
        <p className="mb-12 max-w-2xl text-base text-foreground/60 sm:text-lg md:-mt-6">
          A selection of featured projects I&apos;ve worked on.
        </p>

        <motion.ul
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((p, i) => (
            <motion.li key={p.title} variants={card}>
              <article className="group/card flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_60px_-24px_rgba(46,134,222,0.45)]">
                {/* Gradient thumbnail */}
                <div className="relative h-40 overflow-hidden sm:h-44">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${p.gradient} transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-110`}
                  />
                  {/* Subtle grid pattern over the gradient */}
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-20 mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />
                  {/* Vignette into the card body for smooth blend */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"
                  />

                  <div className="absolute inset-x-4 top-4 flex items-start justify-between">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl border border-white/25 bg-black/30 text-white backdrop-blur">
                      <FolderOpen className="size-5" />
                    </span>
                    <span className="font-mono text-xs text-white/85">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  {p.featured && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-warm">
                      Featured Project
                    </span>
                  )}

                  <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover/card:text-brand">
                    {p.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-foreground/65">
                    {p.description}
                  </p>

                  <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                    {p.tech.map((t) => (
                      <li key={t}>
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-background/40 px-2.5 py-0.5 font-mono text-[11px] text-foreground/70">
                          {t}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {(p.github || p.external) && (
                    <div className="flex items-center gap-2 pt-2">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.title} source on GitHub`}
                          className="inline-flex size-9 items-center justify-center rounded-md text-foreground/60 transition-colors hover:bg-white/5 hover:text-foreground"
                        >
                          <GithubIcon className="size-[18px]" />
                        </a>
                      )}
                      {p.external && (
                        <a
                          href={p.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.title} live site`}
                          className="inline-flex size-9 items-center justify-center rounded-md text-foreground/60 transition-colors hover:bg-white/5 hover:text-foreground"
                        >
                          <ExternalLink className="size-[18px]" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
