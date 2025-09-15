"use client";

import React, { useState, useRef } from 'react';
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import NumberCircle from './number-circle';

const HeroHomeRu = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setShowVideo(true);
    // Небольшая задержка чтобы анимация завершилась
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 100);
  };

  const features = [
    'Практическое обучение ориентированное на карьерный рост',
    'Гибкий онлайн курс',
    'Наши преподаватели это сертифицированные профессиональные бухгалтеры из Канады',
    'Практические навыки для работы в области канадского бухгалтерского учета, ведения бухгалтерии, расчета заработной платы, налогообложения и многого другого',
    'Доступная стоимость обучения'
  ];

  const featureDescriptions = [
    'Наши курсы разработаны для обеспечения практического, ориентированного на карьерный рост обучения, которое подготовит вас к успеху в сфере бухгалтерского учета и налогов.',
    'Вы можете изучать в своем собственном темпе и из любой точки мира с нашим гибким онлайн курсом.',
    'Наши преподаватели — это сертифицированные профессиональные бухгалтеры из Канады, которые привносят реальный опыт и экспертизу в класс.',
    'Наши курсы разработаны для того, чтобы дать вам практические навыки для работы в области канадского бухгалтерского учета, ведения бухгалтерии, расчета заработной платы, налогообложения и многого другого.',
    'Наши платы за обучение доступны, что облегчает достижение ваших карьерных целей.'
  ];

  return (
      <section className="relative">
        <PageIllustration />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-40 pb-10">
            <div className="text-center">
              <h1
                  className="py-2 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl text-sky-900"
                  data-aos="zoom-y-out"
                  data-aos-delay={150}
              >
                Добро пожаловать в SkillPeak Academy!
              </h1>

              <div
                  className="mx-auto max-w-4xl mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay={200}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">

                  {!showVideo ? (
                    /* Placeholder with Play Button */
                    <div 
                      className="absolute inset-0 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#eef2ff' }}
                      onClick={handlePlayClick}
                    >
                      {/* Centered content container */}
                      <div className="relative">
                        {/* Logo as background */}
                        <Image
                          src="/images/skillpeak_logo.png"
                          alt="SkillPeak Academy"
                          width={320}
                          height={320}
                          className="opacity-90"
                          priority
                        />
                        
                        {/* Play Button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative group z-20">
                            <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                              <svg 
                                className="w-8 h-8 text-sky-900 ml-1" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                            
                            {/* Ripple effect */}
                            <div className="absolute inset-0 w-20 h-20 bg-white rounded-full animate-ping opacity-20 z-10"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Video Player */
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        playsInline
                        preload="metadata"
                        controls
                        controlsList="nodownload"
                        autoPlay
                    >
                      <source src="/welcomeEugeneEN.mp4" type="video/mp4" />
                      <source src="/welcomeEugeneEN.webm" type="video/webm" />
                      <p className="text-white p-4">
                        Ваш браузер не поддерживает тег video.
                        <a href="/welcomeEugeneEN.mp4" className="underline text-blue-300 ml-2">
                          Скачайте видео вместо этого.
                        </a>
                      </p>
                    </video>
                  )}
                </div>
              </div>

              <div className="mx-auto max-w-3xl">
                <h3
                    className="text-3xl font-semibold text-sky-900 md:text-4xl"
                    data-aos="zoom-y-out"
                    data-aos-delay={300}
                >
                  Освойте бухгалтерский учет и налоги с уверенностью!
                </h3>
                <p
                    className="mb-4 text-lg text-gray-600"
                    data-aos="zoom-y-out"
                    data-aos-delay={400}
                >
                  Независимо от того, начинаете ли вы новую карьеру, повышаете квалификацию или ищете новое направление, 
                  SkillPeak Academy — ваш путь к успеху в мире бухгалтерского учета и налогов.
                </p>
                <p
                    className="text-lg text-gray-600"
                    data-aos="zoom-y-out"
                    data-aos-delay={500}
                >
                  Благодаря курсам, ориентированным на финансовую отрасль, практическому обучению и опытным преподавателям 
                  мы помогаем студентам получить знания и практический опыт, необходимые для успешной карьеры в условиях современной конкурентной среды.
                </p>

                <div
                    className="py-8 w-full max-w-3xl mx-auto"
                    data-aos="zoom-y-out"
                    data-aos-delay={600}
                >
                  <h2 className="py-2 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl mb-8">
                    Почему выбирают нас
                  </h2>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                        <div
                            key={feature}
                            className="flex gap-8 items-start"
                        >
                          <NumberCircle number={index + 1} size={32} className="flex-shrink-0" />
                          <div className="flex-1 text-left">
                            <h5 className="mb-1 text-sky-900">{feature}</h5>
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

export default HeroHomeRu;
