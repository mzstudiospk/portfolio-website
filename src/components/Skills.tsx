"use client";

import { useEffect, useState } from "react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#skills-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skills = [
    { name: "React Native", category: "mobile", icon: "📱" },
    { name: "Expo", category: "mobile", icon: "📲" },
    { name: "React.js", category: "frontend", icon: "⚛️" },
    { name: "Next.js", category: "frontend", icon: "🚀" },
    { name: "Node.js", category: "backend", icon: "🟢" },
    { name: "TypeScript", category: "frontend", icon: "📘" },
    { name: "JavaScript", category: "frontend", icon: "⚡" },
    { name: "Redux Toolkit", category: "frontend", icon: "🔄" },
    { name: "React Query", category: "frontend", icon: "🔍" },
    { name: "REST APIs", category: "backend", icon: "🔌" },
    { name: "Firebase", category: "backend", icon: "🔥" },
    { name: "PostgreSQL", category: "database", icon: "🐘" },
    { name: "Jest", category: "tools", icon: "🧪" },
    { name: "React Testing Library", category: "tools", icon: "🧪" },
    { name: "Git", category: "tools", icon: "📝" },
    { name: "EAS", category: "tools", icon: "☁️" },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "from-blue-500 to-cyan-500";
      case "backend":
        return "from-green-500 to-emerald-500";
      case "mobile":
        return "from-purple-500 to-pink-500";
      case "database":
        return "from-orange-500 to-red-500";
      case "tools":
        return "from-slate-500 to-gray-500";
      default:
        return "from-gray-500 to-slate-500";
    }
  };

  const getCategoryBg = (category: string) => {
    switch (category) {
      case "frontend":
        return "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800";
      case "backend":
        return "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800";
      case "mobile":
        return "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800";
      case "database":
        return "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800";
      case "tools":
        return "bg-slate-50 dark:bg-slate-900/20 border-slate-200 dark:border-slate-800";
      default:
        return "bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800";
    }
  };

  return (
    <section id="skills-section" className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium mb-6 border border-blue-200 dark:border-blue-800">
            Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            React Native • Expo • Next.js • Node.js • TypeScript. Mobile, web, and
            backend development. Apps live on Play Store & App Store.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative p-6 rounded-2xl border-2 transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl hover:-translate-y-2 ${getCategoryBg(
                skill.category
              )} ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-center">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                  {skill.name}
                </h3>
              </div>

              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getCategoryColor(
                  skill.category
                )} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}
              ></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`text-center transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-block p-6 bg-gradient-to-r from-slate-100 to-blue-100 dark:from-slate-800 dark:to-blue-900/30 rounded-2xl border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform duration-300">
            <p className="text-slate-700 dark:text-slate-300 text-lg font-medium">
              Continuously learning and exploring new technologies to deliver
              the best solutions.
            </p>
          </div>
        </div>

        {/* Category Legend */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto transition-all duration-1000 ease-out delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {[
            { name: "Frontend", color: "from-blue-500 to-cyan-500" },
            { name: "Backend", color: "from-green-500 to-emerald-500" },
            { name: "Mobile", color: "from-purple-500 to-pink-500" },
            { name: "Database", color: "from-orange-500 to-red-500" },
            { name: "Tools", color: "from-slate-500 to-gray-500" },
          ].map((category, index) => (
            <div
              key={category.name}
              className="flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-300"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} animate-pulse`}
              ></div>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
