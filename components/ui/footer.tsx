import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 pt-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              &copy; Skillpeak.ca - All rights reserved.
            </div>
            {/* Socials removed */}
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative h-24 w-full overflow-hidden" aria-hidden="true">
        <div className="footer-faint-text footer-faint-text--academy">SkillPeak Academy</div>
      </div>
    </footer>
  );
}
