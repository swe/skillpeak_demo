"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Transition } from "@headlessui/react";
import { Button } from "./button";

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
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`group inline-flex h-8 w-8 items-center justify-center bg-white text-center text-gray-800 transition cursor-pointer ${mobileNavOpen && "active"}`}
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
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute inset-x-2 top-full z-20 rounded-xl bg-white shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] transform transition ease-out duration-200"
        >
          <div className="flex flex-col items-center py-4">
            <ul className="w-full px-2 text-sm">
              <li>
                <a
                  href="#courses"
                  className="flex rounded-lg px-2 py-1.5 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="flex rounded-lg px-2 py-1.5 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="flex rounded-lg px-2 py-1.5 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex rounded-lg px-2 py-1.5 text-gray-700 hover:bg-gray-100"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="w-full flex justify-center pt-2">
              <Link
                href="http://178.128.232.165/moodle/login/"
                className="btn-sm text-white shadow-sm rounded"
                style={{
                  background: 'linear-gradient(to bottom, #02C1B6 0%, #0395A6 100%)',
                  filter: 'none',
                  minWidth: 120,
                  textAlign: 'center',
                }}
                onMouseOver={e => e.currentTarget.style.filter = 'brightness(0.9)'}
                onMouseOut={e => e.currentTarget.style.filter = 'none'}
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
