"use client";

import { motion, type Variants } from "framer-motion";

import { SectionHeading } from "@/src/components/sections/section-heading";

type Category = {
  emoji: string;
  title: string;
  // Hover glow + title tint — alternated across the grid for variety.
  tone: "brand" | "accent";
  items: string[];
};

const CATEGORIES: Category[] = [
  {
    emoji: "📱",
    title: "Mobile Development",
    tone: "brand",
    items: ["React Native", "Expo", "iOS", "Android", "Swift", "Kotlin"],
  },
  {
    emoji: "🌐",
    title: "Frontend Development",
    tone: "accent",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "Redux",
    ],
  },
  {
    emoji: "⚙️",
    title: "Backend & Database",
    tone: "accent",
    items: [
      "Node.js",
      "Express",
      "Firebase",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
    ],
  },
  {
    emoji: "☁️",
    title: "Tools & Cloud",
    tone: "brand",
    items: ["AWS", "Vercel", "Docker", "Git", "GitHub", "Figma", "Postman", "Jira"],
  },
];

const gridContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 py-24 md:py-32"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <div id="skills-heading">
          <SectionHeading number="03" title="Tech Arsenal" />
        </div>

        <motion.ul
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"
        >
          {CATEGORIES.map((cat) => {
            const toneText = cat.tone === "brand" ? "text-brand" : "text-accent-warm";
            const toneRing =
              cat.tone === "brand"
                ? "hover:border-brand/50 hover:shadow-[0_20px_60px_-20px_rgba(46,134,222,0.45)]"
                : "hover:border-accent-warm/50 hover:shadow-[0_20px_60px_-20px_rgba(243,156,18,0.45)]";
            const toneChip =
              cat.tone === "brand"
                ? "group-hover/card:bg-brand/10 group-hover/card:text-brand group-hover/card:border-brand/30"
                : "group-hover/card:bg-accent-warm/10 group-hover/card:text-accent-warm group-hover/card:border-accent-warm/30";

            return (
              <motion.li key={cat.title} variants={card}>
                <div
                  className={`group/card h-full rounded-2xl border border-white/10 bg-surface/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-surface/60 sm:p-7 ${toneRing}`}
                >
                  <div className="mb-5 flex items-center gap-4">
                    <span
                      role="img"
                      aria-label={`${cat.title} icon`}
                      className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-background/40 text-2xl"
                    >
                      {cat.emoji}
                    </span>
                    <h3 className={`text-lg font-semibold sm:text-xl ${toneText}`}>
                      {cat.title}
                    </h3>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <li key={item}>
                        <span
                          className={`inline-flex items-center rounded-full border border-white/10 bg-background/40 px-3 py-1 font-mono text-xs text-foreground/70 transition-colors ${toneChip}`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
