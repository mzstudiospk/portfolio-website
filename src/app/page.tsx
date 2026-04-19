import { Metadata } from "next";
import Script from "next/script";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import { OG_IMAGE_ABSOLUTE, SITE_URL_FINAL, sanitizeDescription } from "@/lib/seo";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Zeeshan",
  url: SITE_URL_FINAL,
  jobTitle: "Senior React Native Engineer",
  sameAs: ["https://www.linkedin.com/in/muhammadzeeshan-725224276"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "Pakistan",
  },
  knowsAbout: [
    "React Native",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Full-Stack JavaScript",
    "Mobile App Development",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Muhammad Zeeshan",
  url: SITE_URL_FINAL,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Muhammad Zeeshan",
  url: SITE_URL_FINAL,
  logo: OG_IMAGE_ABSOLUTE,
  sameAs: ["https://www.linkedin.com/in/muhammadzeeshan-725224276"],
};

const HOME_DESC =
  "Senior React Native & Full-Stack JavaScript Engineer with 5+ years experience building production mobile and web apps. Open to remote, contract and full-time opportunities.";

export const metadata: Metadata = {
  title: "Senior React Native Engineer",
  description: sanitizeDescription(HOME_DESC),
  alternates: { canonical: "/" },
  openGraph: {
    url: SITE_URL_FINAL,
    images: [OG_IMAGE_ABSOLUTE],
    description: sanitizeDescription(HOME_DESC),
  },
  twitter: {
    images: [OG_IMAGE_ABSOLUTE],
    description: sanitizeDescription(HOME_DESC),
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />
      <Hero />
      <Skills />
      <FeaturedProjects />
    </>
  );
}
