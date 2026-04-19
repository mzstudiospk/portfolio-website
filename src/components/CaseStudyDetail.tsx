import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";

function Section({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
            <span className="text-blue-500 mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface CaseStudyDetailProps {
  study: CaseStudy;
  animate?: boolean;
  showViewMore?: boolean;
}

export default function CaseStudyDetail({ study, animate = true, showViewMore = false }: CaseStudyDetailProps) {
  return (
    <article
      className={`bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/30 dark:border-white/10 shadow-xl transition-all duration-700 ${
        animate ? "opacity-100 translate-y-0" : ""
      }`}
    >
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1">
          {study.title}
        </h2>
        <p className="text-blue-600 dark:text-blue-400 font-medium">{study.subtitle}</p>
      </div>

      <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">{study.overview}</p>

      <Section title="My Role" items={study.role} />
      <Section title="Key Features" items={study.features} />
      <Section title="Technical Challenges" items={study.challenges} />

      {!showViewMore && (
        <>
      <Section title="Solutions" items={study.solutions} />

      {study.techStack.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {study.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-xl text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      <Section title="Impact" items={study.impact} />

      {study.links && (study.links.playStore || study.links.appStore || study.links.web) && (
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Live Application</h3>
          <div className="flex flex-wrap gap-4">
            {study.links.playStore && (
              <a
                href={study.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors"
              >
                Play Store
              </a>
            )}
            {study.links.appStore && (
              <a
                href={study.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-xl font-medium transition-colors"
              >
                App Store
              </a>
            )}
            {study.links.web && (
              <a
                href={study.links.web}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
              >
                View Website
              </a>
            )}
          </div>
        </div>
      )}

      {study.visibility && (
        <p className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400 italic">
          {study.visibility}
        </p>
      )}
        </>
      )}

      {showViewMore && (
        <div className="mt-6">
          <Link
            href={`/case-studies/${study.slug}`}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            View full case study
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </article>
  );
}
