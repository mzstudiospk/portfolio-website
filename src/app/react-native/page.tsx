import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { OG_IMAGE_ABSOLUTE, SITE_URL_FINAL, sanitizeDescription } from "@/lib/seo";

const CANONICAL = "/react-native";
const DESC = "Senior React Native & Full-Stack JavaScript Engineer open to remote, contract, and full-time roles. Production apps + case studies.";
const TW_DESC = "Senior React Native & Full-Stack JavaScript Engineer open to remote, contract, and full-time roles.";

export const metadata: Metadata = {
  title: "React Native Developer (Senior) — Remote & Contract",
  description: sanitizeDescription(DESC),
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "website",
    url: `${SITE_URL_FINAL}${CANONICAL}`,
    title: "React Native Developer (Senior) — Remote & Contract | Muhammad Zeeshan",
    description: sanitizeDescription(DESC),
    images: [OG_IMAGE_ABSOLUTE],
  },
  twitter: {
    card: "summary_large_image",
    title: "React Native Developer (Senior) — Remote & Contract | Muhammad Zeeshan",
    description: sanitizeDescription(TW_DESC),
    images: [OG_IMAGE_ABSOLUTE],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL_FINAL },
    { "@type": "ListItem", position: 2, name: "React Native", item: `${SITE_URL_FINAL}/react-native` },
  ],
};

export default function ReactNativePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Script
        id="breadcrumb-react-native"
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
          <Link
            href="/"
            className="inline-flex items-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <article className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/30 dark:border-white/10 shadow-xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              React Native Developer (Senior) — Open to Remote & Contract Work
            </h1>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">What I Do</h2>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 list-disc list-inside">
                <li>Build and maintain production mobile apps with React Native (CLI & Expo)</li>
                <li>Deliver full-stack features across mobile, web, and backend</li>
                <li>Optimize performance, fix bugs, and ship features to Play Store & App Store</li>
                <li>Integrate REST APIs, state management, and CI/CD pipelines</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Tech Stack</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                React Native CLI • Expo • TypeScript • Next.js • Node.js • REST APIs • CI/CD • Jest
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Proof</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Production apps live on Play Store & App Store. Detailed case studies and full
                resume available:
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View case studies →
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View resume →
                </Link>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">How I Can Help</h2>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 list-disc list-inside">
                <li>Performance optimization for mobile and web</li>
                <li>Bug fixing and production stability</li>
                <li>Feature delivery from design to deployment</li>
                <li>Play Store & App Store deployments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all hover:scale-105"
                >
                  Contact
                </Link>
                <a
                  href="https://www.linkedin.com/in/muhammadzeeshan-725224276"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 text-slate-700 dark:text-slate-300 rounded-xl font-semibold transition-all hover:scale-105"
                >
                  LinkedIn
                </a>
              </div>
            </section>
          </article>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/resume"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all hover:scale-105"
            >
              View Resume
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-6 py-3 border-2 border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 text-slate-700 dark:text-slate-300 rounded-xl font-semibold transition-all hover:scale-105"
            >
              Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
