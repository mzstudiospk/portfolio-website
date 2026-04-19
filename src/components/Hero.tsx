"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Available Badge */}
        <div
          className={`inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium mb-8 border border-green-200 dark:border-green-800 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          Available for Remote • Contract • Project-based work
        </div>

        {/* Main Heading */}
        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
            Senior React Native Engineer
          </span>
        </h1>

        {/* Tagline */}
        <p
          className={`text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-8 font-medium transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          Muhammad Zeeshan — Full-Stack JavaScript Developer
        </p>

        {/* Bio */}
        <p
          className={`text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-1000 ease-out delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          React Native • Expo • Next.js • Node.js • TypeScript. Building and scaling
          production-grade mobile and web apps. Apps live on Play Store & App Store.
          Strong focus on performance, CI/CD, and pixel-perfect UI.
        </p>

        {/* Statistics */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 animate-count">
              5+
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              Years Experience
            </div>
          </div>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 animate-count">
              15+
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              Apps Live on Play Store & App Store
            </div>
          </div>
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 animate-count">
              Full-Stack
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              Mobile + Web + Backend
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-3 sm:gap-4 transition-all duration-1000 ease-out delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            View My Work
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-lg border-2 border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Get In Touch
          </a>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 dark:border-blue-400/30 text-blue-700 dark:text-blue-300 font-semibold text-lg hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </Link>
          <Link
            href="/react-native"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 font-semibold text-lg hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            React Native
          </Link>
        </div>
      </div>
    </section>
  );
}
