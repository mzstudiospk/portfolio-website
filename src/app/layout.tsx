import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import SeoDevCheck from "@/components/SeoDevCheck";
import { OG_IMAGE_ABSOLUTE, SITE_URL_FINAL, sanitizeDescription } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

const DEFAULT_DESC =
  "Senior React Native & Full-Stack JavaScript Engineer with 5+ years experience building production mobile and web apps. Open to remote, contract and full-time opportunities.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL_FINAL),
  title: {
    default: "Senior React Native Engineer | Muhammad Zeeshan",
    template: "%s | Muhammad Zeeshan",
  },
  description: sanitizeDescription(DEFAULT_DESC),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL_FINAL,
    title: "Senior React Native Engineer | Muhammad Zeeshan",
    description: sanitizeDescription(DEFAULT_DESC),
    siteName: "Muhammad Zeeshan Portfolio",
    images: [{ url: OG_IMAGE_ABSOLUTE, width: 1200, height: 630, alt: "Muhammad Zeeshan - Senior React Native Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE_ABSOLUTE],
    title: "Senior React Native Engineer | Muhammad Zeeshan",
    description: sanitizeDescription(DEFAULT_DESC),
  },
  keywords: [
    "Senior React Native Engineer",
    "React Native developer remote",
    "Full-Stack JavaScript developer",
    "React Native developer Pakistan",
    "Principal Software Engineer",
    "mobile app developer",
    "iOS developer",
    "Android developer",
    "React developer",
    "Next.js developer",
    "JavaScript developer",
    "TypeScript developer",
  ],
  authors: [{ name: "Muhammad Zeeshan" }],
  creator: "Muhammad Zeeshan",
  icons: {
    icon: "/profile.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-white dark:bg-slate-900 text-slate-900 dark:text-white`}
      >
        <NextTopLoader
          color="rgb(59 130 246)"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 15px rgb(59 130 246), 0 0 8px rgb(37 99 235)"
          zIndex={1600}
          showAtBottom={false}
        />
        {/* Main Website Background */}
        <div className="fixed inset-0 -z-10">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900"></div>

          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-float"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 animate-float"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 animate-float"></div>
        </div>

        <SeoDevCheck />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
