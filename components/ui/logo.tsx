import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="SkillPeak">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-200 bg-white overflow-hidden">
        <img
          src="/images/skillpeak_logo.png"
          alt="SkillPeak Logo"
          className="object-contain w-8 h-8"
        />
      </span>
      <span className="ml-2 text-lg font-semibold text-gray-900 hidden md:inline">SkillPeak Academy</span>
    </Link>
  );
}
