"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FeaturedProjects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredProjects = [
    {
      title: "EH – Canada's Social Network",
      description:
        "Full-stack contribution to Canada's social networking platform. Scalable social features, API development & integration, CI/CD & production deployments across mobile apps, web dashboards, and backend APIs.",
      techStack: ["React Native", "Next.js", "Node.js", "TypeScript", "REST APIs"],
      imageUrl:
        "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=EH+Social+Network",
      liveDemoUrl: "https://play.google.com/store/apps/details?id=com.ehnow.eh",
      githubUrl: "https://apps.apple.com/gb/app/eh-canadas-social-network/id6747136970",
      category: "Full-Stack",
      caseStudySlug: "eh-social-platform",
    },
    {
      title: "Muslim Kids TV – Streaming Platform",
      description:
        "Cross-platform React Native streaming app. Video content delivery optimization, performance & stability improvements, production release management for both Play Store and App Store.",
      techStack: ["React Native", "Expo", "TypeScript", "Video Streaming", "CI/CD"],
      imageUrl:
        "https://via.placeholder.com/400x300/10B981/FFFFFF?text=Muslim+Kids+TV",
      liveDemoUrl: "https://play.google.com/store/apps/details?id=com.mktv.steelkiwi.muslimkidstv",
      githubUrl: "https://apps.apple.com/gb/app/muslim-kids-tv/id1189900377",
      category: "Mobile",
      caseStudySlug: "muslim-kids-tv-mobile",
    },
    {
      title: "Muslim Kids TV – Web Platform",
      description:
        "Complete web application using Next.js – scalable, high-performance, production-ready with rich animations, SSR, API integration, and Sentry for error monitoring. Interactive book page experience, performance optimization, and production deployment.",
      techStack: ["Next.js", "TypeScript", "REST APIs", "Sentry", "SSR"],
      imageUrl:
        "https://via.placeholder.com/400x300/6366F1/FFFFFF?text=MKTV+Web",
      liveDemoUrl: "https://www.muslimkids.tv/",
      githubUrl: "https://www.muslimkids.tv/",
      category: "Frontend",
      caseStudySlug: "muslim-kids-tv-web-nextjs",
    },
    {
      title: "Web Dashboards & Admin Panels",
      description:
        "Scalable web dashboards and admin panels built with React and Next.js. Pixel-perfect responsive UI, REST API integration, and Agile delivery from development to production. (Private client project – case study only)",
      techStack: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
      ],
      imageUrl:
        "https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Web+Dashboards",
      liveDemoUrl: "#",
      githubUrl: "#",
      category: "Full-Stack",
      caseStudySlug: "web-dashboards-admin",
      isCaseStudy: true,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Enhanced Badge */}
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 text-blue-700 dark:text-blue-300 text-sm font-bold mb-8 border-2 border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg">
            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse shadow-lg"></div>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-extrabold">
              Featured Work
            </span>
            <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ml-3 animate-pulse shadow-lg"></div>
          </div>

          {/* Enhanced Main Title */}
          <div className="relative mb-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-4 bg-gradient-to-r from-slate-900 via-blue-800 via-purple-800 to-pink-800 dark:from-white dark:via-blue-200 dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block">
              Featured Projects
            </h2>
            {/* Decorative Underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
          </div>

          {/* Enhanced Description */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Showcasing my best work with cutting-edge technologies and
            innovative solutions
          </p>

          {/* Enhanced Decorative Elements */}
          <div className="flex justify-center items-center space-x-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce shadow-lg"></div>
              <div
                className="w-3 h-3 bg-purple-500 rounded-full animate-bounce shadow-lg"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-3 h-3 bg-pink-500 rounded-full animate-bounce shadow-lg"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.3s" }}
              ></div>
              <div
                className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.6s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative transition-all duration-1000 ease-out hover:scale-[1.02] hover:shadow-2xl"
              style={{ transitionDelay: `${500 + index * 200}ms` }}
            >
              <div className="relative glass-featured rounded-3xl shadow-glow hover:shadow-glow-hover transition-all duration-500 overflow-hidden group-hover:border-blue-300/50 dark:group-hover:border-blue-500/50 group">
                {/* Enhanced Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 float-gentle"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-400/30 to-orange-400/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 delay-200 float-gentle"
                  style={{ animationDelay: "1s" }}
                ></div>

                {/* Enhanced Header Section */}
                <div className="relative p-4 sm:p-5 pb-2">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="px-3 py-1.5 sm:px-4 sm:py-2 badge-gradient-category dark:badge-gradient-category-dark text-xs font-bold rounded-full backdrop-blur-sm shadow-lg">
                          {project.category}
                        </span>
                        <span className="px-3 py-1.5 sm:px-4 sm:py-2 badge-gradient-secondary text-xs font-bold rounded-full backdrop-blur-sm shadow-lg">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight mb-1.5">
                        {project.title}
                      </h3>

                      {/* Moved Technologies Badge Here */}
                      <div className="inline-block">
                        <div className="bg-gradient-to-r from-blue-500/90 to-purple-500/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold text-white border border-blue-400/50 shadow-lg">
                          {project.techStack.length} Technologies
                        </div>
                      </div>
                    </div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center ml-2 sm:ml-3 group-hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl flex-shrink-0">
                      <svg
                        className="w-6 h-6 sm:w-7 sm:h-7 text-white"
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
                    </div>
                  </div>
                </div>

                {/* Enhanced Content Section */}
                <div className="px-4 sm:px-5 pt-0 pb-4 relative z-10 flex flex-col">
                  <p className="text-slate-600 dark:text-slate-300 mb-3 leading-relaxed line-clamp-3 text-sm">
                    {project.description}
                  </p>

                  {/* Enhanced Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                    {project.techStack.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="tech-badge tech-badge-primary text-xs hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
                        style={{ transitionDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="tech-badge tech-badge-secondary text-xs hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex flex-col gap-2 mt-2">
                    {(project as { isCaseStudy?: boolean }).isCaseStudy &&
                    !(project as { caseStudySlug?: string }).caseStudySlug ? (
                      <div className="w-full text-center py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl font-bold text-sm bg-slate-200/50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-600">
                        Case Study
                      </div>
                    ) : (project as { isCaseStudy?: boolean }).isCaseStudy &&
                      (project as { caseStudySlug?: string }).caseStudySlug ? (
                      <Link
                        href={`/case-studies/${(project as { caseStudySlug: string }).caseStudySlug}`}
                        className="w-full group/btn relative badge-gradient-primary text-center py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden shadow-lg flex items-center justify-center"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          <span>Read case study</span>
                          <svg
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
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
                      </Link>
                    ) : (
                      <>
                        <Link
                          href={`/case-studies/${(project as { caseStudySlug: string }).caseStudySlug}`}
                          className="w-full group/btn relative badge-gradient-primary text-center py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden shadow-lg"
                        >
                          <span className="relative z-10 flex items-center justify-center">
                            <span>Read case study</span>
                            <svg
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
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
                        </Link>
                      </>
                    )}
                  </div>
                </div>

                {/* Enhanced Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400/50 group-hover:via-purple-400/50 group-hover:to-pink-400/50 transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center space-y-4 transition-all duration-1000 ease-out delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <a
              href="/projects"
              className="group inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center">
                View All Projects
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <Link
              href="/case-studies"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Browse case studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
