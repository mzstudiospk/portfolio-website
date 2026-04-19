import { Metadata } from "next";
import ContactPageClient from "@/components/ContactPageClient";
import { OG_IMAGE_ABSOLUTE, SITE_URL_FINAL, sanitizeDescription } from "@/lib/seo";

const CANONICAL = "/contact";
const DESC = "Available for Remote, Contract & Project-based work. Freelance projects, contract roles, and full-time remote opportunities. React Native • Full-Stack development.";

export const metadata: Metadata = {
  title: "Contact",
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

export default function Contact() {
  return <ContactPageClient />;
}
