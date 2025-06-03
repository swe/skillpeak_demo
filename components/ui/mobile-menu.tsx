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
    <div className="flex md:hidden">
      {/* Hamburger button */}
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
          <rect
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] -translate-y-[5px] translate-x-[7px] group-aria-expanded:rotate-[315deg] group-aria-expanded:translate-y-0 group-aria-expanded:translate-x-0"
            y="7"
            width="9"
            height="2"
            rx="1"
          ></rect>
          <rect
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
            y="7"
            width="16"
            height="2"
            rx="1"
          ></rect>
          <rect
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] translate-y-[5px] group-aria-expanded:rotate-[135deg] group-aria-expanded:translate-y-0"
            y="7"
            width="9"
            height="2"
            rx="1"
          ></rect>
        </svg>
      </button>

      {/*Mobile navigation */}
      <Transition
        show={mobileNavOpen}
        as="div"
        className="fixed left-0 top-0 z-50 h-full w-full overflow-y-auto bg-white px-4 py-6 sm:px-6 sm:py-8"
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="flex min-h-full flex-col">
          <div className="mb-4 flex items-center justify-between">
            <Link href="/" className="block" aria-label="SkillPeak">
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
            <div className="flex-1 text-center text-lg font-semibold text-gray-900 -ml-8">SkillPeak Academy</div>
            <button
              className="text-gray-500 hover:text-gray-400"
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.7071 5.29289C13.0976 5.68342 13.0976 6.31658 12.7071 6.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929L11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.7071 18.7071C12.3166 19.0976 11.6834 19.0976 11.2929 18.7071L5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929C5.68342 10.9024 6.31658 10.9024 6.70711 11.2929L12.7071 17.2929C13.0976 17.6834 13.0976 18.3166 12.7071 18.7071Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu links */}
          <nav className="flex flex-1 flex-col">
            <ul className="flex-1 space-y-8">
              {!isEnrollPage && (
                <>
                  <li>
                    <a
                      href="#courses"
                      className="flex rounded-lg px-2 py-1.5 text-gray-700 hover:bg-gray-100"
                      onClick={handleClick}
                    >
                      Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="#how-it-works"
                      className="flex rounded-lg px-2 py-1.5 text-gray-700 hover:bg-gray-100"
                      onClick={handleClick}
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="flex rounded-lg px-2 py-1.5 text-gray-700 hover:bg-gray-100"
                      onClick={handleClick}
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="flex rounded-lg px-2 py-1.5 text-gray-700 hover:bg-gray-100"
                      onClick={handleClick}
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="flex rounded-lg px-2 py-1.5 text-gray-700 hover:bg-gray-100"
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
                  className="flex rounded-lg px-2 py-1.5 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Sign in
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Transition>
    </div>
  );
}
