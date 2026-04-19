import { Metadata } from "next";
import Script from "next/script";
import CaseStudiesPageClient from "@/components/CaseStudiesPageClient";
import { getAllCaseStudies } from "@/lib/case-studies";
import { OG_IMAGE_ABSOLUTE, SITE_URL_FINAL, sanitizeDescription } from "@/lib/seo";

const TITLE = "Case Studies";
const CANONICAL = "/case-studies";
const DESCRIPTION = sanitizeDescription(
  "Detailed case studies: EH Social Platform, Muslim Kids TV Mobile & Web. Full-stack, React Native, Next.js projects."
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL_FINAL },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE_URL_FINAL}/case-studies` },
  ],
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    url: `${SITE_URL_FINAL}${CANONICAL}`,
    images: [OG_IMAGE_ABSOLUTE],
    title: `${TITLE} | Muhammad Zeeshan`,
    description: DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE_ABSOLUTE],
    title: `${TITLE} | Muhammad Zeeshan`,
    description: DESCRIPTION,
  },
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();
  return (
    <>
      <Script
        id="breadcrumb-case-studies"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      <CaseStudiesPageClient caseStudies={caseStudies} />
    </>
  );
}
