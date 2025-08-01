"use client";

import React, { useRef, useEffect } from 'react';
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import NumberCircle from './number-circle';

const HeroHome = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Simple autoplay attempt without any conditionals
    const tryAutoplay = async () => {
      try {
        video.muted = false;
        video.volume = 1.0;
        await video.play();
        console.log('Autoplay successful');
      } catch (error) {
        console.log('Autoplay blocked - user can use native controls');
      }
    };

    // Delay to ensure video is loaded
    const timer = setTimeout(tryAutoplay, 500);
    return () => clearTimeout(timer);
  }, []);

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
          <div className="pt-40 pb-10">
            <div className="text-center">
              <h1
                  className="py-2 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl text-gray-900"
                  data-aos="zoom-y-out"
                  data-aos-delay={150}
              >
                Welcome to SkillPeak Academy!
              </h1>

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
                      preload="metadata"
                      poster="/images/video-poster.png"
                      controls
                      controlsList="nodownload"
                  >
                    <source src="/welcomeEugeneEN.mp4" type="video/mp4" />
                    <source src="/welcomeEugeneEN.webm" type="video/webm" />
                    <p className="text-white p-4">
                      Your browser does not support the video tag.
                      <a href="/welcomeEugeneEN.mp4" className="underline text-blue-300 ml-2">
                        Download the video instead.
                      </a>
                    </p>
                  </video>
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
                  <h2 className="py-2 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl mb-8">
                    Why Choose Us
                  </h2>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                        <div
                            key={feature}
                            className="flex gap-8 items-start"
                        >
                          <NumberCircle number={index + 1} size={64} className="flex-shrink-0" />
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