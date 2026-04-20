"use client";

import { motion } from "framer-motion";

import { WhatsAppIcon } from "@/src/components/icons";

// Prefilled WhatsApp deep link — same text is used in the Contact CTA.
const WHATSAPP_HREF =
  "https://wa.me/923461768288?text=Hi%20Zeeshan%2C%20I%27m%20interested%20in%20your%20services";

// Brand green is used for this button only — everywhere else we use
// the portfolio's blue/orange palette. That contrast is intentional:
// it makes WhatsApp read as the primary action.
const WA_GREEN = "#25D366";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="group/wa fixed bottom-4 right-4 z-50 inline-flex size-14 items-center justify-center rounded-full text-white shadow-lg shadow-[#25D366]/30 transition-colors duration-200 hover:bg-[#1EBE5D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:bottom-6 md:right-6"
      style={{ backgroundColor: WA_GREEN }}
    >
      {/* Subtle pulse ring — pointer-events off so it never steals clicks. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 animate-ping rounded-full opacity-40"
        style={{ backgroundColor: WA_GREEN }}
      />
      <WhatsAppIcon className="relative size-7" />

      {/* Tooltip — slides in from the right on hover, with a small arrow. */}
      <span
        role="tooltip"
        className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-md bg-[#0f1626] px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg ring-1 ring-white/10 transition-all duration-200 group-hover/wa:translate-x-0 group-hover/wa:opacity-100"
      >
        Chat on WhatsApp
        <span
          aria-hidden
          className="absolute left-full top-1/2 -ml-1 size-2 -translate-y-1/2 rotate-45 bg-[#0f1626] ring-1 ring-white/10"
        />
      </span>
    </motion.a>
  );
}
