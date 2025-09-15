"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Transition } from "@headlessui/react";
import { Button } from "./button";
import { smoothScroll } from "@/utils/smooth-scroll";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const isEnrollPage = pathname === "/enroll";
  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const handleClick = () => {
    setMobileNavOpen(false);
  };

  return (
    <div className="flex md:hidden relative">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`group inline-flex h-8 w-8 items-center justify-center bg-white rounded-lg text-center text-gray-800 transition cursor-pointer ${mobileNavOpen && "active"}`}
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

      {/* Mobile navigation dropdown */}
      <div ref={mobileNav} className="absolute top-full right-0 z-50">
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="w-64 mt-2 rounded-xl bg-white shadow-xl border border-gray-200 transform transition-all duration-200 ease-out"
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="py-4">
            <ul className="space-y-1">
              <li>
                <a
                  href="#courses"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={(e) => {
                    setMobileNavOpen(false);
                    smoothScroll(e);
                  }}
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={(e) => {
                    setMobileNavOpen(false);
                    smoothScroll(e);
                  }}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={(e) => {
                    setMobileNavOpen(false);
                    smoothScroll(e);
                  }}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={(e) => {
                    setMobileNavOpen(false);
                    smoothScroll(e);
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="border-t border-gray-100 mt-2 pt-4 px-4">
              <Link
                href="http://178.128.232.165/moodle/login/"
                className="block w-full text-center py-2 px-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                onClick={() => setMobileNavOpen(false)}
              >
                Sign in
              </Link>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}
