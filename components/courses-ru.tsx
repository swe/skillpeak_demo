"use client";

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Image from "next/image";

const CoursesRu = () => {
  const [expandedCourses, setExpandedCourses] = useState<{ [key: string]: boolean }>({});

  const toggleCourseStructure = (courseTitle: string) => {
    setExpandedCourses(prev => ({
      ...prev,
      [courseTitle]: !prev[courseTitle]
    }));
  };

  const courses = [
    {
      id: 'year-end',
      title: 'Курс подготовки к концу года',
      description: 'Освойте канадские стандарты учета и программное обеспечение с нашим комплексным курсом.',
      features: [
        'Идеально для новичков в Канаде',
        'Практическое обучение с канадским программным обеспечением для учета',
        'Учебные материалы, подходящие для изучающих английский язык',
        'Гибкий онлайн-график',
        '40-часовая интенсивная программа',
        'Шесть комплексных блоков'
      ],
      blocks: [
        {
          title: 'Введение',
          description: 'Здесь вы узнаете больше о структуре курса и познакомитесь с вашим преподавателем.'
        },
        {
          title: 'Основы бухгалтерии',
          description: 'Этот раздел поможет вам вспомнить и структурировать основные бухгалтерские концепции, подготовив вас к освоению более сложных тем, специфичных для Канады и адаптации к местным стандартам бухгалтерии и налогообложения.'
        },
        {
          title: 'Бухгалтерские стандарты',
          description: 'Курс включает подробное изучение канадских бухгалтерских стандартов и специфической терминологии. Вы узнаете о ключевых различиях между канадской и международной практикой, что позволит вам уверенно работать в соответствии с местными требованиями и стандартами.'
        },
        {
          title: 'Caseware',
          description: 'Получите практический опыт работы с популярным бухгалтерским софтом в Канаде. Мы предоставим вам все необходимые навыки для использования этого программного обеспечения, что даст вам конкурентное преимущество при трудоустройстве.'
        },
        {
          title: 'Корпоративные налоги',
          description: 'Материалы блока помогут вам понять налоговое законодательство Канады. Вы научитесь заполнять налоговые декларации, разбираться в налоговых отчетах и понимать ключевые налоговые обязательства канадских компаний, что является важным навыком для работы в этой сфере.'
        },
        {
          title: 'Персональные налоги',
          description: 'Бонусный раздел, который даст вам базовые знания о канадских персональных налогах.'
        }
      ],
      isAvailable: true
    },
    {
      id: 'bookkeeping',
      title: 'Курс основ бухгалтерии',
      description: 'Освойте основы бухгалтерии с нашим комплексным курсом.',
      features: [
        'Идеально для начинающих',
        'Пошаговый подход к обучению',
        'Практические упражнения',
        'Обучение работе с программным обеспечением отраслевого стандарта',
        'Карьерное руководство',
        'Сертификат по завершении'
      ],
      blocks: [
        {
          title: 'Введение',
          description: 'Обзор структуры курса и представление инструктора'
        },
        {
          title: 'Основы бизнес-финансов',
          description: 'Фундаментальные концепции бизнес-финансов'
        },
        {
          title: 'Финансовое планирование',
          description: 'Стратегическое финансовое планирование для предпринимателей'
        },
        {
          title: 'Оптимизация налогов',
          description: 'Стратегии оптимизации бизнес-налогов'
        },
        {
          title: 'Управление денежными потоками',
          description: 'Эффективные методы управления денежными потоками'
        },
        {
          title: 'Стратегии роста бизнеса',
          description: 'Основы инвестиций и планирование роста'
        }
      ],
      isAvailable: false
    },
    {
      id: 'financial-literacy',
      title: 'Финансовая грамотность для предпринимателей',
      description: 'Необходимые знания для владельцев бизнеса и предпринимателей.',
      features: [
        'Основы бизнес-финансов',
        'Финансовое планирование',
        'Оптимизация налогов',
        'Управление денежными потоками',
        'Стратегии роста бизнеса',
        'Основы инвестиций'
      ],
      blocks: [
        {
          title: 'Введение',
          description: 'Обзор структуры курса и представление инструктора'
        },
        {
          title: 'От идеи к бизнес-сущности',
          description: 'Создание структуры вашего бизнеса и операций'
        },
        {
          title: 'Бизнес-налоги',
          description: 'Основы канадского бизнес-налогообложения'
        },
        {
          title: 'Бухгалтерия',
          description: 'Основные концепции бизнес-бухгалтерии'
        },
        {
          title: 'Финансовые отчеты',
          description: 'Как читать и использовать финансовые отчеты для лучших решений'
        },
        {
          title: 'Примечательные бизнес-концепции',
          description: 'Дополнительные советы и идеи для ведения успешного бизнеса'
        }
      ],
      isAvailable: false
    }
  ];

  return (
    <div className="relative pb-10" data-aos="zoom-y-out" data-aos-delay="100">
      <div className="pb-12 text-center w-full max-w-3xl mx-auto aos-init aos-animate">
        <h2 className="py-2 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl">
          Изучите наши популярные курсы
        </h2>
        <p className="text-lg text-gray-600">
          Освойте канадскую бухгалтерию и учет с нашими отраслевыми курсами
        </p>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          {courses.map((course) => (
            <div key={course.title} className="tile-white-blur overflow-hidden">
              <div className="p-6 flex flex-col items-center">
                {/* Course Icon Centered */}
                {course.title === "Курс подготовки к концу года" && (
                  <Image src="/images/course1.png" alt="Иконка курса конца года" width={96} height={96} className="mb-4 mx-auto" priority />
                )}
                {course.title === "Курс основ бухгалтерии" && (
                  <Image src="/images/course2.png" alt="Иконка курса бухгалтерии" width={96} height={96} className="mb-4 mx-auto" priority />
                )}
                {course.title === "Финансовая грамотность для предпринимателей" && (
                  <Image src="/images/course3.png" alt="Иконка курса финансовой грамотности" width={96} height={96} className="mb-4 mx-auto" priority />
                )}
                <h3 className="text-xl font-semibold text-sky-900 text-center">{course.title}</h3>
                <p className="mt-2 text-sm text-gray-600 text-center">{course.description}</p>

                <ul className="mt-6 space-y-2 text-left w-full">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-baseline gap-2">
                      <span className="flex-shrink-0 text-green-500 text-lg leading-none align-baseline">✓</span>
                      <span className="text-sm text-gray-600 align-baseline">{feature}</span>
                    </li>
                  ))}
                </ul>
                {(course.title === "Курс основ бухгалтерии" || course.title === "Финансовая грамотность для предпринимателей") && <br />}

                {course.blocks && (
                  <div className="mt-8">
                    <button
                      onClick={() => toggleCourseStructure(course.title)}
                      className="flex items-center justify-between w-full text-left cursor-pointer"
                    >
                      <h5 className="text-lg font-semibold text-sky-900">Структура курса</h5>
                      <ChevronDownIcon 
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                          expandedCourses[course.title] ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        expandedCourses[course.title] 
                          ? 'grid-rows-[1fr] opacity-100 mt-4' 
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-4">
                          {course.blocks.map((block) => (
                            <div key={block.title} className="bg-gray-50 rounded-lg p-4">
                              <p className="text-sm font-medium text-sky-900">{block.title}</p>
                              <p className="text-xs mt-1 text-sm text-gray-600">{block.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 w-full">
                  <a href={`/ru/enroll?course=${course.id}`}>
                    <button
                      className="cursor-pointer w-full py-3 px-4 rounded-md text-sm font-medium bg-teal-600 text-white hover:bg-teal-700"
                    >
                      Записаться сейчас
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesRu;
