import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveDemoUrl: string;
  githubUrl: string;
  isCaseStudy?: boolean;
  caseStudySlug?: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  liveDemoUrl,
  isCaseStudy = false,
  caseStudySlug,
}: Omit<ProjectCardProps, "githubUrl">) {
  return (
    <div className="group relative bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 dark:border-white/10 hover:scale-[1.02] hover:border-blue-300/50 dark:hover:border-blue-500/50">
      {/* Enhanced Floating Elements */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 float-gentle"></div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 delay-200 float-gentle"></div>

      {/* Project Content */}
      <div className="p-8 relative z-10">
        {/* Enhanced Header Section */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-3">
              <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500/90 to-purple-500/90 backdrop-blur-sm text-xs font-bold text-white rounded-full border border-blue-400/50 shadow-lg">
                {techStack.length} Tech
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
              {title}
            </h3>
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Enhanced Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-xl border border-blue-200/50 dark:border-blue-700/50 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-all duration-200 hover:scale-110 shadow-md hover:shadow-lg backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
          {techStack.length > 4 && (
            <span className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-xl border border-purple-200/50 dark:border-purple-700/50 hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-all duration-200 hover:scale-110 shadow-md hover:shadow-lg backdrop-blur-sm">
              +{techStack.length - 4} more
            </span>
          )}
        </div>

        {/* Enhanced Action Button */}
        <div className="flex">
          {caseStudySlug ? (
            <Link
              href={`/case-studies/${caseStudySlug}`}
              className="w-full group/btn relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-center py-3 px-4 rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden shadow-lg flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center justify-center">
                <span>Read case study</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </Link>
          ) : isCaseStudy ? (
            <div className="w-full text-center py-3 px-4 rounded-xl font-bold bg-slate-200/50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-600">
              Case Study
            </div>
          ) : (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group/btn relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-center py-3 px-4 rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden shadow-lg flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center justify-center">
                <span>View App</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </a>
          )}
        </div>
      </div>

      {/* Enhanced Hover Border Effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400/50 group-hover:via-purple-400/50 group-hover:to-pink-400/50 transition-all duration-500 pointer-events-none"></div>
    </div>
  );
}
