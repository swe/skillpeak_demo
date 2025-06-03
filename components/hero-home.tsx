"use client";

import React, { useRef, useState } from 'react';
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";

const HeroHome = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const features = [
    'Practical, career-focused training',
    'Flexible online course',
    'Taught by local Certified Professional Accountants',
    'Job-ready skills in Canadian accounting, bookkeeping, payroll, tax and more',
    'Affordable tuition'
  ];

  const featureDescriptions = [
    'Our courses are designed to provide practical, career-focused training that prepares you for success in the accounting and bookkeeping industry.',
    'You can study at your own pace and from anywhere in the world with our flexible online course.',
    'Our instructors are local Certified Professional Accountants who bring real-world experience and expertise to the classroom.',
    'Our courses are designed to give you job-ready skills in Canadian accounting, bookkeeping, payroll, tax, and more.',
    'Our tuition fees are affordable, making it easier for you to achieve your career goals.'
  ];

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-40 pb-10">
          {/* Section header */}
          <div className="text-center">
            {/* Main title */}
            <h1
              className="text-5xl md:text-6xl font-bold text-gray-900"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Welcome to SkillPeak Academy!
            </h1>

            {/* Hero video with gradient border */}
            <div
              className="mx-auto max-w-4xl mb-8"
              data-aos="zoom-y-out"
              data-aos-delay={200}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  playsInline
                  autoPlay={true}
                >
                  <source src="/welcome.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/20" />
                
                {/* Video controls */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? (
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-3xl">
              <h3
                className="text-3xl font-semibold text-gray-900 md:text-4xl"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Master Accounting and Bookkeeping with Confidence!
              </h3>
              <p
                className="mb-4 text-lg text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay={400}
              >
                Whether you're starting your career, upgrading your skills, or pursuing a new direction, 
                SkillPeak Academy is your gateway to success in the world of accounting and bookkeeping.
              </p>
              <p
                className="text-lg text-gray-600"
                data-aos="zoom-y-out"
                data-aos-delay={500}
              >
                With industry-focused courses, hands-on training, and expert instructors, we help students 
                gain the knowledge and real-world experience needed to thrive in today's competitive job market.
              </p>

              <div
                className="py-8 w-full max-w-3xl mx-auto"
                data-aos="zoom-y-out"
                data-aos-delay={600}
              >
                <h4 className="mb-8 text-2xl font-semibold text-gray-900 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] py-4">Why Choose Us</h4>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div 
                      key={feature} 
                      className="flex gap-8 items-start"
                    >
                      <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600 font-bold text-2xl">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="flex-1 text-left">
                        <h5 className="mb-1 text-gray-900">{feature}</h5>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {featureDescriptions[index]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
