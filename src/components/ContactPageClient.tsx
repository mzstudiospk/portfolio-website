"use client";

import { useEffect, useState } from "react";

export default function ContactPageClient() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
              Get In Touch
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Let&apos;s Work Together
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed px-4">
              I&apos;m always excited to hear about new projects and
              opportunities. Whether you have a specific project in mind or just
              want to chat about technology, feel free to reach out!
            </p>
          </div>

          {/* Main Content Grid - Full screen: 2 cols | Mobile: 1 col */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Col 1: Contact Information */}
            <div
              className={`transition-all duration-1000 ease-out delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 dark:border-white/10 shadow-xl h-full">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  Contact Information
                </h2>

                <div className="space-y-4 sm:space-y-6">
                  {/* Phone */}
                  <div className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        Phone
                      </p>
                      <a
                        href="tel:+923077068288"
                        className="text-slate-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 break-all"
                      >
                        +92 307 7068288
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        Email
                      </p>
                      <a
                        href="mailto:zeeshanofficial337@gmail.com"
                        className="text-slate-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 break-all"
                      >
                        zeeshanofficial337@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        LinkedIn
                      </p>
                      <a
                        href="https://www.linkedin.com/in/muhammadzeeshan-725224276"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 break-all"
                      >
                        linkedin.com/in/muhammadzeeshan-725224276
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        Location
                      </p>
                      <p className="text-slate-900 dark:text-white font-semibold">
                        Multan, Pakistan
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Col 2: What I'm Looking For + Response Time */}
            <div
              className={`flex flex-col gap-6 sm:gap-8 transition-all duration-1000 ease-out delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              {/* What I'm Looking For */}
              <div className="bg-blue-500/10 dark:bg-blue-400/10 p-6 sm:p-8 rounded-3xl border border-white/20 dark:border-white/10 shadow-xl backdrop-blur-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <span className="w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
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
                  </span>
                  What I&apos;m Looking For
                </h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    <span>Remote work</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    <span>Contract roles</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    <span>Project-based work</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    <span>Long-term collaboration</span>
                  </li>
                </ul>
              </div>

              {/* Response Time */}
              <div className="bg-green-500/10 dark:bg-green-400/10 p-6 sm:p-8 rounded-3xl border border-white/20 dark:border-white/10 shadow-xl backdrop-blur-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                  <span className="w-6 h-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  Response Time
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  I typically respond within 24 hours during business days. For
                  urgent matters, please mention it in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
