"use client";

import Link from "next/link";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Link
              className="block"
              href="/"
              aria-label="SkillPeak"
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    cx="21.152%"
                    cy="86.063%"
                    fx="21.152%"
                    fy="86.063%"
                    r="79.941%"
                    id="header-logo"
                  >
                    <stop stopColor="#4F46E5" offset="0%" />
                    <stop stopColor="#4F46E5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect
                  width="32"
                  height="32"
                  rx="16"
                  fill="url(#header-logo)"
                  fillRule="nonzero"
                />
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              <li className="px-3 py-1">
                <a
                  href="../#courses"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Courses
                </a>
              </li>
              <li className="px-3 py-1">
                <a
                  href="../#how-it-works"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  How It Works
                </a>
              </li>
              <li className="px-3 py-1">
                <a
                  href="../#faq"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  FAQ
                </a>
              </li>
              <li className="px-3 py-1">
                <a
                  href="../#pricing"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Pricing
                </a>
              </li>
              <li className="px-3 py-1">
                <a
                  href="../#testimonials"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Testimonials
                </a>
              </li>
              <li className="px-3 py-1">
                <a
                  href="../#contact"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex flex-1 items-center justify-end gap-3">
              <li>
                <Link
                  href="http://178.128.232.165/moodle/login/"
                  className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                >
                  Sign in
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
