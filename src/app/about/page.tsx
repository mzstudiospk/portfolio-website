import { Metadata } from "next";
import AboutPageClient from "@/components/AboutPageClient";
import { OG_IMAGE_ABSOLUTE, SITE_URL_FINAL, sanitizeDescription } from "@/lib/seo";

const CANONICAL = "/about";
const DESC = "Senior React Native & Full-Stack Engineer with 5+ years. Apps on Play Store & App Store. React Native • Expo • Next.js • Node.js. Open to Remote & Freelance.";

export const metadata: Metadata = {
  title: "About",
  alternates: { canonical: CANONICAL },
  description: sanitizeDescription(DESC),
  openGraph: {
    url: `${SITE_URL_FINAL}${CANONICAL}`,
    images: [OG_IMAGE_ABSOLUTE],
    description: sanitizeDescription(DESC),
  },
  twitter: {
    images: [OG_IMAGE_ABSOLUTE],
    description: sanitizeDescription(DESC),
  },
};

export default function About() {
  return <AboutPageClient />;
}
