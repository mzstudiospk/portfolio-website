import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/case-studies";
import CaseStudyDetail from "@/components/CaseStudyDetail";
import { OG_IMAGE_ABSOLUTE, SITE_URL_FINAL, humanizeSlug, sanitizeDescription, sanitizeTitle } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  const safeTitle = sanitizeTitle(study?.title ?? humanizeSlug(slug));
  const canonical = `/case-studies/${slug}`;
  const canonicalAbsolute = `${SITE_URL_FINAL}${canonical}`;
  if (!study) {
    return {
      title: "Case Study Not Found",
      alternates: { canonical },
      openGraph: { url: canonicalAbsolute },
    };
  }
  const description = sanitizeDescription(study.metaDescription || study.overview);
  const fullTitle = `${safeTitle} | Muhammad Zeeshan`;
  return {
    title: safeTitle,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalAbsolute,
      type: "article",
      images: [OG_IMAGE_ABSOLUTE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE_ABSOLUTE],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL_FINAL },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE_URL_FINAL}/case-studies` },
      { "@type": "ListItem", position: 3, name: study.title, item: `${SITE_URL_FINAL}/case-studies/${slug}` },
    ],
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Script
        id="breadcrumb-case-study"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-4000"></div>
      </div>

      <div className="relative z-10 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>

          <CaseStudyDetail study={study} animate={false} />

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/case-studies"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all hover:scale-105"
            >
              All Case Studies
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center px-6 py-3 border-2 border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 text-slate-700 dark:text-slate-300 rounded-xl font-semibold transition-all hover:scale-105"
            >
              View Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
