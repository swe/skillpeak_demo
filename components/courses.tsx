"use client";

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Image from "next/image";

const Courses = () => {
  const [expandedCourses, setExpandedCourses] = useState<{ [key: string]: boolean }>({});

  const toggleCourseStructure = (courseTitle: string) => {
    setExpandedCourses(prev => ({
      ...prev,
      [courseTitle]: !prev[courseTitle]
    }));
  };

  const courses = [
    {
      title: 'Year-end Preparation Course',
      description: 'Master Canadian accounting standards and software with our comprehensive course.',
      features: [
        'Perfect for newcomers to Canada',
        'Hands-on training with Canadian accounting software',
        'ESL-friendly course materials',
        'Flexible online schedule',
        '40-hour intensive program',
        'Six comprehensive blocks'
      ],
      blocks: [
        {
          title: 'Introduction',
          description: 'Course structure overview and instructor introduction'
        },
        {
          title: 'Accounting Fundamentals',
          description: 'Basic accounting concepts and Canadian standards preparation'
        },
        {
          title: 'Accounting Standards',
          description: 'Detailed study of Canadian accounting standards and terminology'
        },
        {
          title: 'Caseware',
          description: 'Hands-on experience with popular Canadian accounting software'
        },
        {
          title: 'Corporate Taxes',
          description: 'Understanding Canadian tax legislation and corporate tax returns'
        },
        {
          title: 'Personal Taxes',
          description: 'Bonus section on Canadian personal tax basics'
        }
      ],
      isAvailable: true
    },
    {
      title: 'Bookkeeping Essentials Course',
      description: 'Master the fundamentals of bookkeeping with our comprehensive course.',
      features: [
        'Perfect for beginners',
        'Step-by-step learning approach',
        'Practical exercises',
        'Industry-standard software training',
        'Career guidance',
        'Certificate upon completion'
      ],
      isAvailable: false
    },
    {
      title: 'Financial Literacy for Entrepreneurs',
      description: 'Essential knowledge for business owners and entrepreneurs.',
      features: [
        'Business finance basics',
        'Financial planning',
        'Tax optimization',
        'Cash flow management',
        'Business growth strategies',
        'Investment fundamentals'
      ],
      isAvailable: false
    }
  ];

  return (
    <div className="relative pb-10" data-aos="zoom-y-out" data-aos-delay="100">
      <div className="pb-12 text-center">
        <h2 className="py-2 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl">
          Explore Our Popular Courses
        </h2>
        <p className="text-lg text-gray-600">
          Master Canadian accounting and bookkeeping with our industry-oriented courses
        </p>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          {courses.map((course) => (
            <div key={course.title} className="tile-white-blur overflow-hidden">
              <div className="p-6 flex flex-col items-center">
                {/* Course Icon Centered */}
                {course.title === "Year-end Preparation Course" && (
                  <Image src="/images/course1.png" alt="Year-end course icon" width={96} height={96} className="mb-4 mx-auto" priority />
                )}
                {course.title === "Bookkeeping Essentials Course" && (
                  <Image src="/images/course2.png" alt="Bookkeeping course icon" width={96} height={96} className="mb-4 mx-auto" priority />
                )}
                {course.title === "Financial Literacy for Entrepreneurs" && (
                  <Image src="/images/course3.png" alt="Financial Literacy course icon" width={96} height={96} className="mb-4 mx-auto" priority />
                )}
                <h3 className="text-xl font-semibold text-gray-900 text-center">{course.title}</h3>
                <p className="mt-2 text-sm text-gray-600 text-center">{course.description}</p>

                <ul className="mt-6 space-y-2 text-left w-full">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-baseline gap-2">
                      <span className="flex-shrink-0 text-green-500 text-lg leading-none align-baseline">✓</span>
                      <span className="text-sm text-gray-600 align-baseline">{feature}</span>
                    </li>
                  ))}
                </ul>

                {course.blocks && (
                  <div className="mt-8">
                    <button
                      onClick={() => toggleCourseStructure(course.title)}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <h5 className="text-lg font-semibold text-gray-900">Course Structure</h5>
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
                              <p className="text-sm font-medium text-gray-900">{block.title}</p>
                              <p className="text-xs mt-1 text-sm text-gray-600">{block.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 w-full">
                  <a href="/enroll">
                    <button
                      className="cursor-pointer w-full py-3 px-4 rounded-md text-sm font-medium bg-teal-600 text-white hover:bg-teal-700"
                    >
                      Enroll Now
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

export default Courses;