"use client";

import ProfileImage from "@/components/ProfileImage";
import { useEffect, useState } from "react";

export default function AboutPageClient() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "KKIT Solutions",
      period: "2020 – 2026",
      description:
        "Developed and deployed multiple production-grade mobile applications. Built scalable web dashboards and admin panels using React and Next.js. Implemented backend APIs using Node.js. Integrated REST APIs across mobile and web platforms. Set up CI/CD pipelines for automated build and release workflows. Wrote unit and integration test cases for application stability. Delivered complete features from development to production in Agile teams.",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Bahauddin Zakariya University",
      period: "2020",
      description: "Specialized in Software Engineering and Web Development",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      ),
      color: "from-orange-500 to-red-500",
    },
  ];

  const achievements = [
    "15+ production apps delivered",
    "Apps live on Play Store & App Store",
    "Full-stack development (Mobile + Web + Backend)",
    "CI/CD pipelines for automated builds & releases",
    "Automated testing implementation",
    "Agile team collaboration",
    "Performance optimization for production apps",
    "Working on a live social platform",
  ];

  const skills = [
    "React Native",
    "Expo",
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Redux Toolkit",
    "React Query",
    "REST APIs",
    "Firebase",
    "PostgreSQL",
    "Jest",
    "React Testing Library",
    "Git",
    "EAS",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Elements - same as other pages */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-4000"></div>
      </div>

      <div className="relative z-10 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div
            className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-8 border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
              About Me
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-8 leading-tight">
              Crafting Digital
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Experiences
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed px-4 font-light">
              Passionate about technology and committed to creating exceptional
              digital experiences that make a difference in people&apos;s lives.
            </p>
          </div>

          {/* Profile Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
            {/* Profile Image */}
            <div
              className={`lg:col-span-1 flex justify-center transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 scale-110 group-hover:scale-125"></div>
                <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white/30 dark:border-white/20 transform group-hover:scale-105 transition-transform duration-500">
                  <ProfileImage className="w-full h-full rounded-full object-cover" />
                </div>
                {/* Floating Elements around image */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full animate-bounce animation-delay-2000"></div>
              </div>
            </div>

            {/* Bio */}
            <div
              className={`lg:col-span-2 space-y-8 transition-all duration-1000 ease-out delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                  Who I Am
                </h2>
                <div className="space-y-6 text-slate-600 dark:text-slate-300">
                  <p className="text-lg sm:text-xl leading-relaxed font-light">
                    Senior React Native & Full-Stack JavaScript Engineer with 5+ years
                    of experience building and scaling production-grade mobile and
                    web applications. Currently contributing to EH – Canada&apos;s social
                    networking platform, working across mobile apps, web dashboards,
                    and backend APIs.
                  </p>
                  <p className="text-lg sm:text-xl leading-relaxed font-light">
                    Strong focus on performance optimization, scalable architecture,
                    CI/CD automation, and pixel-perfect UI implementation. Delivered
                    multiple live applications available on both Google Play Store
                    and Apple App Store.
                  </p>
                  <p className="text-lg sm:text-xl leading-relaxed font-light">
                    I offer React Native (CLI & Expo) development, full-stack feature
                    development, API integration, App Store & Play Store deployment,
                    and web dashboard & admin panel development. Open to Remote,
                    Contract, and Project-based work.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    15+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    15+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Production Apps Delivered
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                    5+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-20">
            <h2
              className={`text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent transition-all duration-1000 ease-out delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              Professional Journey
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`group bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/30 dark:border-white/10 transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-3xl hover:bg-white/60 dark:hover:bg-slate-800/60 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${800 + index * 200}ms` }}
                >
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                          {exp.title}
                        </h3>
                        <span className="text-slate-500 dark:text-slate-400 text-sm font-semibold bg-white/30 dark:bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 dark:border-white/10">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 font-semibold mb-4 text-xl">
                        {exp.company}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h2
              className={`text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent transition-all duration-1000 ease-out delay-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              Educational Background
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`group bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/30 dark:border-white/10 transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-3xl hover:bg-white/60 dark:hover:bg-slate-800/60 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${1200 + index * 200}ms` }}
                >
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-3">
                        {edu.degree}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 font-semibold mb-3 text-lg">
                        {edu.institution}
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 bg-white/30 dark:bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 dark:border-white/10 inline-block">
                        {edu.period}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h2
              className={`text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent transition-all duration-1000 ease-out delay-1400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              Technical Expertise
            </h2>
            <div
              className={`flex flex-wrap justify-center gap-3 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "1600ms" }}
            >
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm text-slate-700 dark:text-slate-300 font-medium rounded-xl border border-white/30 dark:border-white/10 hover:border-blue-300/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-20">
            <h2
              className={`text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent transition-all duration-1000 ease-out delay-1800 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              Key Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`group bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-400/10 dark:to-indigo-400/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/20 dark:border-white/10 transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl hover:from-blue-500/20 hover:to-indigo-500/20 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${2000 + index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed font-medium">
                      {achievement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`text-center transition-all duration-1000 ease-out delay-2200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="bg-gradient-to-r from-white/40 to-white/20 dark:from-slate-800/40 dark:to-slate-800/20 backdrop-blur-xl p-12 rounded-3xl border border-white/30 dark:border-white/10 shadow-2xl">
              <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent mb-6">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s collaborate on your next project and bring your ideas to
                life with cutting-edge technology and exceptional design.
              </p>
              <a
                href="/contact"
                className="group inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center">
                  Let&apos;s Connect
                  <svg
                    className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
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
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

