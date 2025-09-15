"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function LanguageDetector() {
  const pathname = usePathname();
  
  useEffect(() => {
    const htmlElement = document.documentElement;
    const lang = pathname.startsWith('/ru') ? 'ru' : 'en';
    
    if (htmlElement.getAttribute('lang') !== lang) {
      htmlElement.setAttribute('lang', lang);
    }
  }, [pathname]);

  return null;
}
