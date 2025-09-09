'use client';

import Link from "next/link";
import { useState } from "react";
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Logo from "./logo";
import TermsPopup from "./terms-popup";

export default function Footer({ border = false, mdxSource }: { border?: boolean; mdxSource: MDXRemoteSerializeResult }) {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
  <footer>
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Top area: Blocks */}
      <div
        className={`grid gap-10 pt-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
      >
        {/* 1st block */}
        <div className="space-y-2 sm:col-span-12 lg:col-span-12 w-full">
          <div>
            <Logo />
          </div>
          {/* Copyright and Terms row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 w-full">
            <div className="text-sm text-gray-300">
              &copy; Skillpeak.ca - All rights reserved.
            </div>
            {/* Terms and Conditions Link */}
            <button
              onClick={() => setIsTermsOpen(true)}
              className="text-sm text-gray-300 hover:text-white hover:underline transition-all duration-200 text-left sm:text-right sm:ml-auto"
            >
              Terms and Conditions
            </button>
          </div>
          {/* Socials removed */}
        </div>
      </div>
    </div>

    {/* Big text */}
    <div className="relative h-24 w-full overflow-hidden" aria-hidden="true">
      <div className="footer-faint-text footer-faint-text--academy">SkillPeak Academy</div>
    </div>
    
    {/* Terms and Conditions Popup */}
    <TermsPopup 
      isOpen={isTermsOpen} 
      onClose={() => setIsTermsOpen(false)}
      mdxSource={mdxSource}
    />
  </footer>
  );
}
