import Link from "next/link";

export default function ResumeContent() {
  return (
    <article className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/30 dark:border-white/10 shadow-xl">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
          Muhammad Zeeshan
        </h1>
        <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
          Senior React Native & Full-Stack JavaScript Engineer
        </p>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          React Native • Expo • Next.js • Node.js • TypeScript
        </p>
        <p className="text-slate-600 dark:text-slate-400">
          Based in Pakistan — Available for Worldwide Remote Opportunities
        </p>
        <div className="flex flex-wrap gap-4 mt-4 text-sm">
          <a
            href="mailto:zeeshanofficial337@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            zeeshanofficial337@gmail.com
          </a>
          <a
            href="tel:+923077068288"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            +92 3077068288
          </a>
        </div>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Professional Summary
        </h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          Senior React Native & Full-Stack JavaScript Engineer with 5+ years of experience building
          and scaling production-grade mobile and web applications. Currently contributing to{" "}
          <strong>EH – Canada&apos;s social networking platform</strong>, working across mobile
          apps, web dashboards, and backend APIs. Strong focus on performance optimization,
          scalable architecture, CI/CD automation, and pixel-perfect UI implementation. Delivered
          multiple live applications available on both Google Play Store and Apple App Store.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Professional Experience
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Senior Software Engineer — KKIT Solutions
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">2020 – 2026</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
              <li>Developed and deployed multiple production-grade mobile applications</li>
              <li>Built scalable web dashboards and admin panels using React / Next.js</li>
              <li>Implemented backend APIs using Node.js</li>
              <li>Integrated REST APIs across mobile and web platforms</li>
              <li>Set up CI/CD pipelines for automated build & release workflows</li>
              <li>Wrote unit and integration test cases for application stability</li>
              <li>Delivered complete features from development to production in Agile teams</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Live Applications
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              EH – Canada&apos;s Social Network
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-2">
              Full-stack contribution (Mobile + Web + Backend). Scalable social features, API
              development & integration, CI/CD & production deployments.
            </p>
            <Link
              href="/case-studies/eh-social-platform"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Read case study →
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              Muslim Kids TV – Streaming Platform
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-2">
              Cross-platform React Native development. Video content delivery optimization,
              performance & stability improvements, production release management.
            </p>
            <Link
              href="/case-studies/muslim-kids-tv-mobile"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Read case study →
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              Muslim Kids TV – Web Platform (Next.js)
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-2">
              Complete web platform using Next.js. High-performance, SEO-friendly, animation-rich
              user experience. SSR-based architecture, Sentry integration.
            </p>
            <Link
              href="/case-studies/muslim-kids-tv-web-nextjs"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Read case study →
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600 dark:text-slate-300">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Languages</h4>
            <p>TypeScript • JavaScript</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Mobile</h4>
            <p>React Native • Expo</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Frontend</h4>
            <p>React.js • Next.js</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Backend</h4>
            <p>Node.js • REST APIs</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">State & Data</h4>
            <p>Redux Toolkit • React Query</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Database & Tools</h4>
            <p>Firebase • PostgreSQL • Git • EAS • App Store Connect • Play Console</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Work Preference
        </h2>
        <p className="text-slate-600 dark:text-slate-300">
          Open to Remote React Native Roles • Available for Contract Opportunities • Open for Full-Time Positions • Project-based • Long-term collaboration
        </p>
      </section>
    </article>
  );
}
