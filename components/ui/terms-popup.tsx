'use client';

import { useState, useEffect } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface TermsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  mdxSource: MDXRemoteSerializeResult;
}

export default function TermsPopup({ isOpen, onClose, mdxSource }: TermsPopupProps) {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Restore body scroll when modal is closed
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 backdrop-blur-lg bg-black/40"
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <div className="relative tile-white-blur max-w-4xl w-full h-[80vh] overflow-hidden shadow-2xl border border-white/20">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <h3 className="text-xl font-bold text-gray-800" style={{ marginBottom: '0' }}>Online Course Terms and Conditions Agreement</h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/50 hover:bg-white/70 transition-all duration-200 text-gray-600 hover:text-gray-800"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-4 h-full overflow-y-auto scrollbar-hide">
          <div className="prose prose-sm max-w-none prose-headings:text-gray-800 prose-headings:font-bold prose-headings:mb-2 prose-headings:mt-4 prose-h1:text-lg prose-h2:text-base prose-h3:text-sm prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-2 prose-strong:text-gray-800 prose-a:text-[var(--color-primary)] prose-a:no-underline hover:prose-a:underline prose-ul:mb-2 prose-li:mb-1 pb-12">
            <MDXRemote {...mdxSource} />
          </div>
        </div>
      </div>
    </div>
  );
}
