"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { SectionHeading } from "@/src/components/sections/section-heading";
import { GithubIcon } from "@/src/components/icons";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    title: "PostPilot",
    description:
      "AI Co-Pilot for Social Media Posts. A production-ready SaaS that generates engaging posts for LinkedIn, Twitter, Instagram, and Facebook in seconds — with ChatGPT-style streaming, tone control, URL-to-post, and a credit-based system. Built solo in 8 days.",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "Google Gemini AI",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/muhammad-zeeshan-dev-pk/PostPilot-showcase",
    external: "https://postpilot-io.vercel.app",
    // TODO: drop the real PostPilot screenshot at public/projects/postpilot.png
    image: "/projects/postpilot.png",
    imageAlt: "PostPilot AI Social Media Post Generator Mockup",
    featured: true,
  },
  {
    title: "SwaasthGaurdian",
    description:
      "Healthcare mobile application with user authentication, OTP verification, appointment booking, and medical information management for Pakistani healthcare providers.",
    tech: ["React Native", "Firebase", "Redux", "REST API"],
    github: "https://github.com/muhammad-zeeshan-dev-pk/SwaasthGaurdian",
    image: "/projects/swaasthgaurdian.png",
    imageAlt: "SwaasthGaurdian Healthcare Mobile App Mockup",
    featured: true,
  },
  {
    title: "E-Commerce Mobile App",
    description:
      "Multi-vendor e-commerce platform with cart management, payment integration, order tracking, and seller dashboard. Deployed on Google Play Store.",
    tech: ["React Native", "Node.js", "MongoDB", "Stripe"],
    image: "/projects/ecommerce-app.png",
    imageAlt: "E-Commerce Mobile App Mockup",
    featured: true,
  },
  {
    title: "Fintech Dashboard",
    description:
      "Financial services dashboard serving 100K+ users. Built as Principal Engineer at Abhi (YC S21). Handles salary advances and transactions.",
    tech: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    image: "/projects/fintech-dashboard.png",
    imageAlt: "Fintech Dashboard Web App Mockup",
    featured: true,
  },
  {
    title: "Food Delivery App",
    description:
      "On-demand food delivery platform with real-time order tracking, driver dashboard, restaurant management, and live chat support.",
    tech: ["React Native", "Firebase", "Google Maps API"],
    image: "/projects/food-delivery.png",
    imageAlt: "Food Delivery Mobile App Mockup",
  },
  {
    title: "Social Networking App",
    description:
      "Social platform with real-time messaging, feeds, stories, and video calls. Scalable architecture for millions of users.",
    tech: ["React Native", "Node.js", "WebSocket", "MongoDB"],
    image: "/projects/social-app.png",
    imageAlt: "Social Networking Mobile App Mockup",
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
                {/* Project mockup thumbnail */}
                <div className="relative h-52 overflow-hidden bg-[#0A0E1A] sm:h-56">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    loading="lazy"
                    className="object-cover object-top brightness-95 transition-[transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-105 group-hover/card:brightness-110"
                  />
                  {/* Subtle dark gradient overlay for badge legibility & smooth blend into card body */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"
                  />

                  <div className="absolute inset-x-4 top-4 flex items-start justify-end">
                    <span className="font-mono text-xs text-white/85 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
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
