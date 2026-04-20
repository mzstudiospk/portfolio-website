"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import {
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
} from "@/src/components/icons";

const QUICK_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/mzstudiospk", Icon: GithubIcon },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/muhammadzeeshan-dev",
    Icon: LinkedInIcon,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/MZStudiosPK",
    Icon: FacebookIcon,
  },
  {
    label: "Email",
    href: "mailto:zeeshanofficial337@gmail.com",
    Icon: Mail,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      // Slightly darker than the page to seat the footer visually.
      className="relative border-t border-white/[0.06] bg-[#05080f]"
    >
      <div className="mx-auto w-full max-w-6xl px-6 pt-16 pb-12 md:pt-20 md:pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {/* Brand */}
          <div>
            <a
              href="#top"
              aria-label="Back to top"
              className="inline-flex items-center"
            >
              <span className="bg-gradient-to-br from-brand via-brand to-accent-warm bg-clip-text font-mono text-3xl font-bold tracking-tight text-transparent">
                MZ
              </span>
              <span className="ml-2 text-sm font-semibold text-foreground/80">
                Studios
              </span>
            </a>
            <p className="mt-5 text-sm font-medium text-foreground/80">
              Apps That Work. Businesses That Grow.
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground/55">
              Senior React Native Developer &amp; Founder of MZ Studios.
              Building mobile and web products from Pakistan 🇵🇰
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/55">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-foreground/70 transition-colors hover:text-brand"
                  >
                    <span aria-hidden className="text-brand/60">▹</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/55">
              Connect
            </h3>
            <ul className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    aria-label={label}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-surface/40 text-foreground/65 transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:bg-brand/10 hover:text-brand"
                  >
                    <Icon className="size-[16px]" />
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/55">
              Stay Updated
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex items-center gap-2"
              aria-label="Newsletter signup — placeholder"
            >
              <input
                type="email"
                placeholder="you@company.com"
                aria-label="Email for newsletter"
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-background/70 px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/35 outline-none transition-all focus:border-brand/60 focus:ring-2 focus:ring-brand/25"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center gap-3 border-t border-white/[0.06] pt-6 text-center text-xs text-foreground/45 md:flex-row md:items-center md:justify-between md:text-left">
          <p>© {year} Muhammad Zeeshan. All rights reserved.</p>
          <p className="font-mono md:text-center">
            Built with Next.js 16, Tailwind CSS, Framer Motion
          </p>
          <p className="md:text-right">
            Designed &amp; Developed with{" "}
            <span className="text-red-400">❤️</span> in Pakistan 🇵🇰
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
