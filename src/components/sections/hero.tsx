"use client";

import type { ComponentType, SVGProps } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
} from "@/src/components/icons";

type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const SOCIALS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/muhammad-zeeshan-dev-pk", icon: GithubIcon },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/muhammadzeeshan-dev",
    icon: LinkedInIcon,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/MZStudiosPK",
    icon: FacebookIcon,
  },
  { label: "Email", href: "mailto:zeeshanofficial337@gmail.com", icon: Mail },
];

// Stagger the hero's content on first paint for a polished entrance.
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden"
    >
      {/* Ambient aurora: two soft blurred orbs + grid + center vignette. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute left-1/2 top-1/4 size-[720px] -translate-x-1/2 rounded-full bg-brand/20 blur-[140px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          className="absolute right-[10%] top-2/3 size-[420px] rounded-full bg-accent-warm/12 blur-[140px]"
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--background)_100%)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-5xl px-6 pt-32 pb-24 sm:pt-40"
      >
        {/* Availability pill */}
        <motion.div variants={item} className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/50 px-3 py-1 font-mono text-xs tracking-wide text-foreground/70 backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Available for select client work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-sans text-4xl font-bold leading-[1.04] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block text-foreground/80">Hi, I&apos;m</span>
          <span className="mt-2 flex flex-wrap items-end gap-x-4 gap-y-2">
            <span className="bg-gradient-to-r from-brand via-brand to-accent-warm bg-clip-text text-transparent">
              Muhammad Zeeshan
            </span>
            <span
              role="img"
              aria-label="waving hand"
              className="inline-block origin-[70%_70%] [animation:wave_2.4s_ease_0.8s_2]"
            >
              👋
            </span>
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg text-foreground/70 sm:text-xl md:text-2xl"
        >
          Senior React Native Developer &amp; Founder{" "}
          <span className="text-foreground">@ MZ Studios</span>
        </motion.p>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/60 sm:text-lg"
        >
          I build fast, polished mobile and web products at scale — five years in,
          with 20+ apps shipped to the App Store &amp; Google Play. Currently
          senior engineer at KK IT Solutions, previously Principal Software
          Engineer at Abhi <span className="font-mono text-xs text-accent-warm">(YC&nbsp;S21)</span>.
          Based in Multan, Pakistan.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <Button
            asChild
            size="lg"
            className="h-11 gap-2 bg-brand px-6 text-base font-semibold text-brand-foreground shadow-[0_12px_28px_-12px_rgba(46,134,222,0.55)] transition-all hover:bg-brand/90 hover:shadow-[0_16px_36px_-12px_rgba(46,134,222,0.7)]"
          >
            <a href="#projects">
              View my work
              <ArrowRight />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-11 border-white/15 bg-transparent px-6 text-base font-semibold text-foreground hover:border-white/25 hover:bg-white/5 hover:text-foreground dark:bg-transparent dark:hover:bg-white/5"
          >
            <a href="#contact">Get in touch</a>
          </Button>
        </motion.div>

        {/* Socials */}
        <motion.ul
          variants={item}
          className="mt-12 flex flex-wrap items-center gap-3"
          aria-label="Social links"
        >
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  s.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={s.label}
                className="group/social inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-surface/40 text-foreground/70 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:bg-brand/10 hover:text-brand"
              >
                <s.icon className="size-[18px]" />
              </a>
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to next section"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-foreground/40 transition-colors hover:text-foreground/80 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex size-8 items-center justify-center rounded-full border border-white/10"
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}

// Small chevron that nudges forward on hover — used inside the primary CTA.
function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4 transition-transform group-hover/button:translate-x-0.5"
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
