import { Metadata } from "next";
import ProjectsPageClient from "@/components/ProjectsPageClient";
import { OG_IMAGE_ABSOLUTE, SITE_URL_FINAL, sanitizeDescription } from "@/lib/seo";

const CANONICAL = "/projects";
const DESC = "Live apps on Play Store & App Store: EH Canada Social Network, Muslim Kids TV. React Native, Next.js, Node.js projects.";

export const metadata: Metadata = {
  title: "Projects",
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

export default function Projects() {
  return <ProjectsPageClient />;
}
