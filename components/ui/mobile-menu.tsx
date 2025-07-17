"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Transition } from "@headlessui/react";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const isEnrollPage = pathname === "/enroll";
  const trigger = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setMobileNavOpen(false);
  };

  return (
    <>
      {/* Hamburger button */}
      <div className="flex md:hidden">
        <button
          ref={trigger}
          className={`group inline-flex h-8 w-8 items-center justify-center bg-white text-center text-gray-800 transition ${mobileNavOpen && "active"}`}
          aria-controls="mobile-nav"
          aria-expanded={mobileNavOpen}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="pointer-events-none fill-current"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="3" width="16" height="2" rx="1" />
            <rect y="7" width="16" height="2" rx="1" />
            <rect y="11" width="16" height="2" rx="1" />
          </svg>
        </button>
      </div>
      {/* Modal mobile menu */}
      <Transition
        show={mobileNavOpen}
        as="div"
        className="fixed inset-0 z-50 flex items-center justify-center"
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          aria-hidden="true"
          onClick={handleClick}
        />
        {/* Modal card */}
        <div
          className="relative z-10 w-full max-w-xs mx-auto rounded-2xl bg-white/80 backdrop-blur-md shadow-md border border-[var(--color-gray-200)] p-6 pb-6 flex flex-col items-center animate-[fadeInUp_0.3s] max-h-[100dvh] overflow-y-auto"
          style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          {/* Close button */}
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 p-2 rounded-full bg-white/70 backdrop-blur-sm shadow"
            aria-label="Close menu"
            onClick={handleClick}
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6l8 8M6 14L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          {/* Logo and title */}
          <Link href="/" className="mb-2 flex-shrink-0 pt-6" aria-label="SkillPeak" onClick={handleClick}>
            <svg className="w-10 h-10" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                    <stop stopColor="#4F46E5" offset="0%" />
                    <stop stopColor="#4F46E5" offset="100%" />
                  </radialGradient>
                </defs>
              <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
              </svg>
            </Link>
          <div className="mb-4 text-lg font-semibold text-gray-900 text-center">SkillPeak Academy</div>
          {/* Menu links */}
          <nav className="w-full">
            <ul className="flex flex-col gap-2 w-full">
              {!isEnrollPage && (
                <>
                  <li>
                    <a
                      href="#courses"
                      className="block w-full rounded-lg px-4 py-2 text-base text-gray-800 hover:bg-[var(--color-gray-200)] focus-visible:text-[var(--color-primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] transition"
                      onClick={handleClick}
                    >
                      Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="#how-it-works"
                      className="block w-full rounded-lg px-4 py-2 text-base text-gray-800 hover:bg-[var(--color-gray-200)] focus-visible:text-[var(--color-primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] transition"
                      onClick={handleClick}
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="block w-full rounded-lg px-4 py-2 text-base text-gray-800 hover:bg-[var(--color-gray-200)] focus-visible:text-[var(--color-primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] transition"
                      onClick={handleClick}
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="block w-full rounded-lg px-4 py-2 text-base text-gray-800 hover:bg-[var(--color-gray-200)] focus-visible:text-[var(--color-primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] transition"
                      onClick={handleClick}
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="block w-full rounded-lg px-4 py-2 text-base text-gray-800 hover:bg-[var(--color-gray-200)] focus-visible:text-[var(--color-primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] transition"
                      onClick={handleClick}
                    >
                      Contact
                    </a>
                  </li>
                </>
              )}
              <li>
                <Link
                  href="http://178.128.232.165/moodle/login/"
                  className="block w-full rounded-lg px-4 py-2 text-base text-white bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary)] transition font-semibold shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] text-center"
                  onClick={handleClick}
                >
                  Sign in
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Transition>
    </>
  );
}
