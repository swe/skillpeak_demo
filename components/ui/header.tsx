"use client";

import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { smoothScroll } from "@/utils/smooth-scroll";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isEnrollPage = pathname === "/enroll";

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className={
          `relative flex h-14 items-center px-3 rounded-xl ` +
          `before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent ` +
          `before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ` +
          `md:tile-white-blur bg-white md:bg-transparent header-desktop-bg`
        }>
          {/* Site branding */}
          <div className="flex flex-1 items-center min-w-0">
            <Link
              className="flex items-center gap-2"
              href="/"
              aria-label="SkillPeak"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-200 bg-white overflow-hidden">
                <img
                  src="/images/skillpeak_logo.png"
                  alt="SkillPeak Logo"
                  className="object-contain w-8 h-8"
                />
              </span>
              {isEnrollPage && (
                <span className="hidden md:inline text-lg font-semibold text-gray-900">SkillPeak Academy</span>
              )}
            </Link>
          </div>

          {isEnrollPage ? (
            <>
              {/* Center text for enroll page (only on mobile) */}
              <div className="absolute left-1/2 -translate-x-1/2 text-md text-gray-900 text-center w-full md:w-auto md:hidden">
                <Link href="/" className="hover:underline">SkillPeak Academy</Link>
              </div>
              {/* Sign in button */}
              <div className="flex items-center">
                <Link
                  href="http://178.128.232.165/moodle/login/"
                  className="btn-sm text-white shadow-sm"
                  style={{
                    background: 'linear-gradient(to bottom, #02C1B6 0%, #0395A6 100%)',
                    filter: 'none',
                  }}
                  onMouseOver={e => e.currentTarget.style.filter = 'brightness(0.9)'}
                  onMouseOut={e => e.currentTarget.style.filter = 'none'}
                >
                  Sign in
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Desktop navigation - центрируем абсолютно */}
              <nav className="hidden md:flex absolute left-1/2 top-0 h-full -translate-x-1/2 items-center z-10">
                <ul className="flex items-center justify-center gap-2 lg:gap-5 text-xs lg:text-sm whitespace-nowrap px-1">
                  <li className="px-2 py-1 lg:px-3 lg:py-1">
                    <a
                      href="#courses"
                      className="flex items-center text-gray-700 transition hover:text-gray-900"
                      onClick={smoothScroll}
                    >
                      Courses
                    </a>
                  </li>
                  <li className="px-2 py-1 lg:px-3 lg:py-1">
                    <a
                      href="#how-it-works"
                      className="flex items-center text-gray-700 transition hover:text-gray-900"
                      onClick={smoothScroll}
                    >
                      How It Works
                    </a>
                  </li>
                  <li className="px-2 py-1 lg:px-3 lg:py-1">
                    <a
                      href="#faq"
                      className="flex items-center text-gray-700 transition hover:text-gray-900"
                      onClick={smoothScroll}
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="px-2 py-1 lg:px-3 lg:py-1">
                    <a
                      href="#contact"
                      className="flex items-center text-gray-700 transition hover:text-gray-900"
                      onClick={smoothScroll}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              {/* Sign in button справа */}
              <div className="hidden md:flex flex-1 items-center justify-end">
                <Link
                  href="http://178.128.232.165/moodle/login/"
                  className="btn-sm text-white shadow-sm"
                  style={{
                    background: 'linear-gradient(to bottom, #02C1B6 0%, #0395A6 100%)',
                    filter: 'none',
                  }}
                  onMouseOver={e => e.currentTarget.style.filter = 'brightness(0.9)'}
                  onMouseOut={e => e.currentTarget.style.filter = 'none'}
                >
                  Sign in
                </Link>
              </div>
              {/* Mobile menu */}
              <div className="md:hidden relative">
                <MobileMenu />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
