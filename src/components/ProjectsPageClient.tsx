"use client";

import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectsPageClient() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "EH – Canada's Social Network",
      description:
        "Full-stack contribution to Canada's social networking platform. Scalable social features, API development & integration, CI/CD & production deployments across mobile apps, web dashboards, and backend APIs.",
      techStack: [
        "React Native",
        "Next.js",
        "Node.js",
        "TypeScript",
        "REST APIs",
      ],
      imageUrl:
        "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=EH+Social+Network",
      liveDemoUrl: "https://play.google.com/store/apps/details?id=com.ehnow.eh",
      githubUrl: "https://apps.apple.com/gb/app/eh-canadas-social-network/id6747136970",
      category: "Full-Stack",
      featured: true,
      caseStudySlug: "eh-social-platform",
    },
    {
      title: "Muslim Kids TV – Streaming Platform",
      description:
        "Cross-platform React Native streaming app. Video content delivery optimization, performance & stability improvements, production release management for both Play Store and App Store.",
      techStack: [
        "React Native",
        "Expo",
        "TypeScript",
        "Video Streaming",
        "CI/CD",
      ],
      imageUrl:
        "https://via.placeholder.com/400x300/10B981/FFFFFF?text=Muslim+Kids+TV",
      liveDemoUrl: "https://play.google.com/store/apps/details?id=com.mktv.steelkiwi.muslimkidstv",
      githubUrl: "https://apps.apple.com/gb/app/muslim-kids-tv/id1189900377",
      category: "Mobile",
      featured: true,
      caseStudySlug: "muslim-kids-tv-mobile",
    },
    {
      title: "Muslim Kids TV – Web Platform",
      description:
        "Complete web application using Next.js – scalable, high-performance, production-ready with rich animations, SSR & API integration. Interactive book page experience, code splitting, lazy loading, Sentry for error monitoring.",
      techStack: ["Next.js", "TypeScript", "REST APIs", "Sentry", "SSR"],
      imageUrl:
        "https://via.placeholder.com/400x300/6366F1/FFFFFF?text=MKTV+Web",
      liveDemoUrl: "https://www.muslimkids.tv/",
      githubUrl: "https://www.muslimkids.tv/",
      category: "Frontend",
      featured: true,
      caseStudySlug: "muslim-kids-tv-web-nextjs",
    },
    {
      title: "Web Dashboards & Admin Panels",
      description:
        "Scalable web dashboards and admin panels built with React and Next.js. Pixel-perfect responsive UI, REST API integration, and Agile delivery. Private client project – case study only.",
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
      featured: false,
      isCaseStudy: true,
      caseStudySlug: "web-dashboards-admin",
    },
  ];

  const categories = ["All", "Full-Stack", "Frontend", "Mobile"]; // "Backend" commented out
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-4000"></div>
      </div>

      <div className="relative z-10 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium mb-6 border border-blue-200 dark:border-blue-800 animate-pulse">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Portfolio
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              My Projects
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
              A collection of my recent work showcasing web and mobile
              applications built with modern technologies and best practices.
            </p>
          </div>

          {/* Category Filter */}
          <div
            className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                    : "bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm text-slate-700 dark:text-slate-300 border border-white/20 dark:border-white/10 hover:bg-white/50 dark:hover:bg-slate-800/50"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Projects Section */}
          {selectedCategory === "All" && (
            <div
              className={`mb-20 transition-all duration-1000 ease-out delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* Enhanced Header */}
              <div className="text-center mb-12">
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
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 bg-gradient-to-r from-slate-900 via-blue-800 via-purple-800 to-pink-800 dark:from-white dark:via-blue-200 dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block">
                    Featured Projects
                  </h2>
                  {/* Decorative Underline */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
                </div>

                {/* Enhanced Description */}
                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                {projects
                  .filter((p) => p.featured)
                  .map((project, index) => (
                    <div
                      key={index}
                      className="group relative transition-all duration-1000 ease-out hover:scale-[1.02] hover:shadow-2xl"
                      style={{ transitionDelay: `${800 + index * 200}ms` }}
                    >
                      {/* Enhanced Project Card */}
                      <div className="relative glass-featured rounded-3xl shadow-glow hover:shadow-glow-hover transition-all duration-500 overflow-hidden group-hover:border-blue-300/50 dark:group-hover:border-blue-500/50 group">
                        {/* Enhanced Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 float-gentle"></div>
                        <div
                          className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-pink-400/30 to-orange-400/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 delay-200 float-gentle"
                          style={{ animationDelay: "1s" }}
                        ></div>

                        {/* Enhanced Header Section */}
                        <div className="relative p-8 pb-6">
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-3">
                                <span className="px-4 py-2 badge-gradient-category dark:badge-gradient-category-dark text-sm font-bold rounded-full backdrop-blur-sm shadow-lg">
                                  {project.category}
                                </span>
                                <span className="px-4 py-2 badge-gradient-secondary text-sm font-bold rounded-full backdrop-blur-sm shadow-lg">
                                  Featured
                                </span>
                              </div>
                              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight mb-3">
                                {project.title}
                              </h3>

                              {/* Moved Technologies Badge Here */}
                              <div className="inline-block">
                                <div className="bg-gradient-to-r from-blue-500/90 to-purple-500/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-white border border-blue-400/50 shadow-lg">
                                  {project.techStack.length} Technologies
                                </div>
                              </div>
                            </div>
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center ml-4 group-hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl">
                              <svg
                                className="w-8 h-8 text-white"
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

                        {/* Enhanced Project Content */}
                        <div className="px-8 pb-8 relative z-10">
                          <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed line-clamp-3 text-base">
                            {project.description}
                          </p>

                          {/* Enhanced Tech Stack */}
                          <div className="flex flex-wrap gap-3 mb-8">
                            {project.techStack
                              .slice(0, 6)
                              .map((tech, techIndex) => (
                                <span
                                  key={tech}
                                  className="tech-badge tech-badge-primary hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
                                  style={{
                                    transitionDelay: `${techIndex * 50}ms`,
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                            {project.techStack.length > 6 && (
                              <span className="tech-badge tech-badge-secondary hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg">
                                +{project.techStack.length - 6} more
                              </span>
                            )}
                          </div>

                          {/* Enhanced Action Button */}
                          <div className="flex">
                            {(project as { caseStudySlug?: string }).caseStudySlug && (
                              <Link
                                href={`/case-studies/${(project as { caseStudySlug: string }).caseStudySlug}`}
                                className="w-full group/btn relative badge-gradient-primary text-center py-3 px-4 rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden shadow-lg flex items-center justify-center"
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
                              </Link>
                            )}
                          </div>
                        </div>

                        {/* Enhanced Hover Border Effect */}
                        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400/50 group-hover:via-purple-400/50 group-hover:to-pink-400/50 transition-all duration-500 pointer-events-none"></div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Featured Projects Stats */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-6 bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/20 dark:border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      {projects.filter((p) => p.featured).length} Featured
                      Projects
                    </span>
                  </div>
                  <div className="w-px h-6 bg-slate-300 dark:bg-slate-600"></div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      {
                        Array.from(
                          new Set(
                            projects
                              .filter((p) => p.featured)
                              .flatMap((p) => p.techStack)
                          )
                        ).length
                      }{" "}
                      Technologies
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All Projects Grid */}
          <div
            className={`mb-16 transition-all duration-1000 ease-out delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {selectedCategory !== "All" && (
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                {selectedCategory} Projects
              </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="transition-all duration-1000 ease-out hover:scale-[1.02] hover:shadow-2xl"
                  style={{ transitionDelay: `${1000 + index * 150}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div
            className={`mb-16 transition-all duration-1000 ease-out delay-1200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/20 dark:border-white/10 shadow-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {projects.length}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Projects Completed
                </p>
              </div>

              <div className="bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/20 dark:border-white/10 shadow-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {projects.filter((p) => p.featured).length}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Featured Projects
                </p>
              </div>

              <div className="bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/20 dark:border-white/10 shadow-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v.01"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {
                    Array.from(new Set(projects.flatMap((p) => p.techStack)))
                      .length
                  }
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Technologies Used
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`text-center transition-all duration-1000 ease-out delay-1400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-6">
              Interested in working together on your next project?
            </p>
            <a
              href="/contact"
              className="group inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center">
                Let&apos;s Connect
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
          </div>
        </div>
      </div>
    </div>
  );
}
