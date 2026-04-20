"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/src/components/icons";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
] as const;

const GITHUB_URL = "https://github.com/mzstudiospk";
const EMAIL = "zeeshanofficial337@gmail.com";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Glassmorphism kicks in after the user scrolls away from the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile sheet on viewport resize to avoid stale state.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || mobileOpen
          ? "border-b border-white/[0.06] bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6"
      >
        {/* Logo */}
        <a
          href="#top"
          aria-label="Muhammad Zeeshan — back to top"
          className="group relative inline-flex items-center"
        >
          <span className="bg-gradient-to-br from-brand via-brand to-accent-warm bg-clip-text font-mono text-2xl font-bold tracking-tight text-transparent transition-all group-hover:from-accent-warm group-hover:to-brand">
            MZ
          </span>
          <span className="sr-only">Muhammad Zeeshan</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
            >
              <a
                href={link.href}
                className="relative rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                <span className="relative">
                  <span className="font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}.</span>{" "}
                  {link.label}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Right-side actions (desktop) */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex size-9 items-center justify-center rounded-md text-foreground/70 transition-colors hover:bg-white/5 hover:text-foreground"
          >
            <GithubIcon className="size-[18px]" />
          </a>
          <Button
            asChild
            size="sm"
            className="h-9 gap-1.5 bg-brand px-3.5 text-brand-foreground shadow-[0_8px_20px_-8px_rgba(46,134,222,0.6)] hover:bg-brand/90"
          >
            <a href={`mailto:${EMAIL}`}>
              <Mail className="size-4" />
              Email
            </a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-md text-foreground/80 transition-colors hover:bg-white/5 md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <X className="size-5" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <Menu className="size-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/[0.06] md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    <span className="font-mono text-xs text-brand">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  asChild
                  className="w-full gap-1.5 bg-brand text-brand-foreground hover:bg-brand/90"
                  onClick={() => setMobileOpen(false)}
                >
                  <a href={`mailto:${EMAIL}`}>
                    <Mail className="size-4" />
                    Email me
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
