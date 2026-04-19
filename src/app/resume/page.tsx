import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import ResumeContent from "@/components/ResumeContent";
import { OG_IMAGE_ABSOLUTE, SITE_URL_FINAL, sanitizeDescription } from "@/lib/seo";

const CANONICAL = "/resume";
const DESC = "Muhammad Zeeshan — Senior React Native & Full-Stack JavaScript Engineer. 5+ years experience. Apps on Play Store & App Store. Open to remote React Native roles, contract and full-time opportunities.";
const OG_DESC = "5+ years experience building production mobile and web apps. React Native, Next.js, Node.js. Open to remote, contract and full-time opportunities.";
const TW_DESC = "5+ years experience. React Native, Next.js, Node.js. Open to remote opportunities.";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL_FINAL },
    { "@type": "ListItem", position: 2, name: "Resume", item: `${SITE_URL_FINAL}/resume` },
  ],
};

export const metadata: Metadata = {
  title: "Senior React Native Engineer Resume",
  description: sanitizeDescription(DESC),
  alternates: { canonical: CANONICAL },
  openGraph: {
    url: `${SITE_URL_FINAL}${CANONICAL}`,
    images: [OG_IMAGE_ABSOLUTE],
    title: "Senior React Native Engineer Resume | Muhammad Zeeshan",
    description: sanitizeDescription(OG_DESC),
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE_ABSOLUTE],
    title: "Senior React Native Engineer Resume | Muhammad Zeeshan",
    description: sanitizeDescription(TW_DESC),
  },
};

export default function ResumePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Script
        id="breadcrumb-resume"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-4000" />
      </div>

      <div className="relative z-10 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResumeContent />

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/react-native"
              className="inline-flex items-center px-6 py-3 border-2 border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 text-slate-700 dark:text-slate-300 rounded-xl font-semibold transition-all hover:scale-105"
            >
              React Native
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all hover:scale-105"
            >
              View Case Studies
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 text-slate-700 dark:text-slate-300 rounded-xl font-semibold transition-all hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
