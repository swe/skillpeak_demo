"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  
  // Determine current language and target language
  const isRussian = pathname.startsWith('/ru');
  const currentPath = isRussian ? pathname.replace('/ru', '') || '/' : pathname;
  const targetPath = isRussian ? currentPath : `/ru${currentPath}`;
  const targetLanguage = isRussian ? 'English' : 'Русский';

  return (
    <Link
      href={targetPath}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100"
    >
      <svg 
        className="w-4 h-4" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" 
        />
      </svg>
      {targetLanguage}
    </Link>
  );
}
