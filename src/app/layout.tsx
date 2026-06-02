import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://muhammad-zeeshan-dev.vercel.app";
const SITE_NAME = "Muhammad Zeeshan";
const SITE_TITLE =
  "Muhammad Zeeshan | Senior React Native Developer & Founder @ MZ Studios";
const SITE_DESCRIPTION =
  "Senior React Native Developer from Pakistan with 5+ years experience and 20+ apps delivered. Founder of MZ Studios. Available for mobile app development, web development, and startup MVPs.";

// Person schema for Google's Knowledge Graph. Keep in sync with the page copy.
const JSON_LD_PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Zeeshan",
  jobTitle: "Senior React Native Developer",
  url: SITE_URL,
  image: `${SITE_URL}/og.png`,
  email: "mailto:zeeshanofficial337@gmail.com",
  telephone: "+923461768288",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Multan",
    addressCountry: "PK",
  },
  worksFor: {
    "@type": "Organization",
    name: "MZ Studios",
    url: "https://facebook.com/MZStudiosPK",
  },
  knowsAbout: [
    "React Native",
    "Next.js",
    "TypeScript",
    "Mobile App Development",
    "Node.js",
    "AWS",
  ],
  sameAs: [
    "https://github.com/muhammad-zeeshan-dev-pk",
    "https://linkedin.com/in/muhammadzeeshan-dev",
    "https://facebook.com/MZStudiosPK",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Muhammad Zeeshan",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Muhammad Zeeshan", url: "https://github.com/muhammad-zeeshan-dev-pk" }],
  creator: "Muhammad Zeeshan",
  publisher: "MZ Studios",
  keywords: [
    "Muhammad Zeeshan",
    "React Native Developer",
    "Mobile App Developer Pakistan",
    "Senior Developer",
    "MZ Studios",
    "Next.js",
    "TypeScript",
    "Freelance Developer",
    "App Developer Multan",
  ],
  category: "technology",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Muhammad Zeeshan Portfolio",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    alternateLocale: ["en_PK"],
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Zeeshan - Senior React Native Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og.png"],
    creator: "@mzstudiospk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Muhammad Zeeshan",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // `dark` is applied permanently — the portfolio ships only a dark theme.
      className={`${inter.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {/* JSON-LD for rich results. Placed in the body per Next.js guidance. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_PERSON) }}
        />
        {children}
      </body>
    </html>
  );
}
