"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { smoothScroll } from "@/utils/smooth-scroll";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    smoothScroll(e);
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
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute left-0 top-full z-20 w-full rounded-xl bg-white shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] transform transition ease-out duration-200 data-enter:data-closed:-translate-y-2 data-closed:opacity-0"
        >
          <ul className="p-2 text-sm">
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
                href="#testimonials"
                className="flex rounded-lg px-2 py-1.5 text-gray-700 hover:bg-gray-100"
                onClick={handleClick}
              >
                Testimonials
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
        </Transition>
      </div>
    </div>
  );
}
