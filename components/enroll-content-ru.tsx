'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { H1 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header-ru";
import FooterWrapper from "@/components/ui/footer-wrapper";
import { UserIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Image from "next/image";
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface Course {
  id: string;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
}

interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  features: boolean[];
}

interface AdditionalService {
  id: string;
  name: string;
  description: string;
  price: number;
}

const courses: Course[] = [
  {
    id: 'year-end',
    name: 'Курс подготовки к концу года',
    description: 'Освойте канадские стандарты учета и программное обеспечение с нашим комплексным курсом.',
    price: 950,
    isAvailable: true
  },
  {
    id: 'bookkeeping',
    name: 'Курс основ бухгалтерии',
    description: 'Освойте основы бухгалтерии с нашим комплексным курсом.',
    price: 1100,
    isAvailable: true
  },
  {
    id: 'financial-literacy',
    name: 'Финансовая грамотность для предпринимателей',
    description: 'Необходимые знания для владельцев бизнеса и предпринимателей.',
    price: 550,
    isAvailable: true
  }
];

const packages: Package[] = [
  {
    id: 'standard',
    name: 'Стандарт',
    description: 'Учебные материалы и видеокурс',
    price: 950,
    features: [true, true, true, false, false, false, false, false, false, false, false, false]
  },
  {
    id: 'pro',
    name: 'Профессионал',
    description: 'Добавляет практические тесты и работу с софтом',
    price: 1700,
    features: [true, true, true, true, true, true, false, false, false, false, false, false]
  },
  {
    id: 'premium',
    name: 'Премиум',
    description: 'Полный пакет с менторством и практическим опытом',
    price: 5700,
    features: [true, true, true, true, true, true, true, true, true, true, true, true]
  }
];

const additionalServices: AdditionalService[] = [
  {
    id: 'software-practicum',
    name: 'Практическое занятие с софтом',
    description: 'Практическое обучение с программным обеспечением отраслевого стандарта',
    price: 1000
  },
  {
    id: 'mentorship-student',
    name: 'Менторство (студенческое)',
    description: 'Индивидуальное руководство на протяжении всего вашего пути обучения',
    price: 900
  },
  {
    id: 'practical-experience',
    name: 'Практический опыт (3 месяца)',
    description: 'Реальный опыт в профессиональной среде',
    price: 4000
  },
  {
    id: 'resume-building',
    name: 'Помощь в составлении резюме',
    description: 'Профессиональная оптимизация резюме для канадского рынка труда',
    price: 350
  },
  {
    id: 'job-interview',
    name: 'Советы по прохождению собеседований',
    description: 'Экспертное руководство для успешных собеседований',
    price: 250
  },
  {
    id: 'personal-session',
    name: 'Личные сессии',
    description: 'Личные консультации с экспертом до одного часа в месяц',
    price: 250
  }
];

const features = [
  'Учебные материалы',
  'Видеокурс',
  'Бесплатный доступ к библиотеке вебинаров',
  'Практические тесты',
  'Практическое занятие с софтом',
  'Менторство (студенческое)',
  'Менторство (карьерное)',
  'Практический опыт (3 месяца)',
  'Сертификат о практическом опыте',
  'Помощь в составлении резюме',
  'Советы по прохождению собеседований',
  'Личные сессии (до одного часа в месяц)'
];

export default function EnrollmentContentRu({ mdxSource }: { mdxSource: MDXRemoteSerializeResult }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Helper function to format prices with commas
  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };
  const [selectedCourse, setSelectedCourse] = useState<string>('year-end');
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);

  const calculateTotal = () => {
    const coursePrice = courses.find(c => c.id === selectedCourse)?.price || 0;
    const packagePrice = selectedCourse === 'year-end' ? (packages.find(p => p.id === selectedPackage)?.price || 0) : 0;
    const servicesPrice = selectedServices.reduce((total, serviceId) => {
      const service = additionalServices.find(s => s.id === serviceId);
      return total + (service?.price || 0);
    }, 0);

    // For year-end: course price + package price + services
    // For other courses: course price + services only
    return coursePrice + packagePrice + servicesPrice;
  };

  // Helper to get available additional services based on selected package and course
  const getAvailableServices = () => {
    if (selectedPackage === 'premium') {
      // Premium: no add-ons available
      return [];
    }
    
    // Course-specific service filtering
    if (selectedCourse === 'bookkeeping' || selectedCourse === 'financial-literacy') {
      // For bookkeeping and financial literacy: only specific services available
      return additionalServices.filter(s => [
        'mentorship-student',
        'resume-building',
        'job-interview',
        'personal-session',
      ].includes(s.id));
    }
    
    if (selectedPackage === 'pro') {
      // Pro: only specific add-ons available
      return additionalServices.filter(s => [
        'resume-building',
        'practical-experience',
        'job-interview',
        'personal-session',
      ].includes(s.id));
    }
    // All other packages: all add-ons available
    return additionalServices;
  };

  // Auto-deselect unavailable services when package or course changes
  React.useEffect(() => {
    const availableIds = getAvailableServices().map((s) => s.id);
    setSelectedServices((prev) => prev.filter((id) => availableIds.includes(id)));
  }, [selectedPackage, selectedCourse]);

  // Clear selected package when switching away from year-end course
  React.useEffect(() => {
    if (selectedCourse !== 'year-end') {
      setSelectedPackage('');
    }
  }, [selectedCourse]);

  // Read course parameter from URL
  useEffect(() => {
    const course = searchParams.get('course');
    if (course && courses.find(c => c.id === course)) {
      setSelectedCourse(course);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the payment process
    console.log('Proceeding to payment with:', {
      course: selectedCourse,
      package: selectedPackage,
      services: selectedServices,
      personalInfo,
      total: calculateTotal(),
    });
    // router.push('/payment'); // Uncomment when payment page is ready
  };

  return (
    <>
      <Header />
      <main className="grow">
        <div className="min-h-screen py-12 sm:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="w-full max-w-2xl mx-auto">
            <div className="pb-12 pt-8 sm:pb-16 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">Записаться на курс</h2>
              <p className="text-base sm:text-lg text-gray-500">Начните свой путь обучения в SkillPeak Academy</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-12">
              {/* Course Selection */}
              <section className="tile-white-blur bg-white/80 p-4 sm:p-8 rounded-3xl shadow-xl border border-gray-200">
                <div className="flex flex-col items-center">
                  <Image src="/images/course.png" alt="Иконка курса" width={96} height={96} className="mb-4 mx-auto" />
                  <h3 className="font-semibold mb-4 text-lg text-gray-900 text-center">Выберите курс</h3>
                </div>
                <div className="flex flex-col gap-4 sm:gap-6">
                  {courses.map((course) => (
                    <label
                      key={course.id}
                      className={`flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-6 cursor-pointer transition-colors bg-white/80 rounded-2xl shadow-xl border border-gray-200 ${
                        selectedCourse === course.id ? 'ring-2 ring-teal-400' : 'text-gray-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="course"
                        value={course.id}
                        checked={selectedCourse === course.id}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="accent-teal-600 w-5 h-5"
                      />
                      <span className="flex-1 flex flex-col min-w-0">
                        <span className="flex items-center gap-2 text-sm sm:text-base">
                          <span className="text-sm sm:text-base break-words">{course.name}</span>
                        </span>
                        <span className="block text-xs sm:text-sm text-gray-500 break-words">{course.description}</span>
                        {course.id === 'year-end' && <span className="text-xs text-teal-700 mt-1">Лучше всего для новичков в Канаде</span>}
                        {course.id === 'bookkeeping' && <span className="text-xs text-teal-700 mt-1">Идеально для начинающих</span>}
                        {course.id === 'financial-literacy' && <span className="text-xs text-teal-700 mt-1">Для предпринимателей</span>}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-teal-600 whitespace-nowrap">C${formatPrice(course.price)}{course.id === 'year-end' ? '+' : ''}</span>
                    </label>
                  ))}
                </div>
              </section>

              {/* Package Selection - Only for Year-end course */}
              {selectedCourse === 'year-end' && (
                <section className="tile-white-blur bg-white/80 p-4 sm:p-8 rounded-3xl shadow-xl border border-gray-200">
                  <div className="flex flex-col items-center">
                    <Image src="/images/package.png" alt="Иконка пакета" width={96} height={96} className="mb-4 mx-auto" />
                    <h3 className="font-semibold mb-4 text-lg text-gray-900 text-center">Выберите пакет</h3>
                  </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full py-2">
                  {packages.map((pkg) => {
                    const isSelected = selectedPackage === pkg.id;
                    const icon = pkg.id === 'standard' ? '/images/standard.png' : pkg.id === 'pro' ? '/images/pro.png' : '/images/premium.png';
                    return (
                      <div
                        key={pkg.id}
                        className={`flex flex-col w-full h-full bg-white rounded-3xl border transition-all shadow-md cursor-pointer
                          ${isSelected ? 'ring-2 ring-teal-500 border-teal-300 bg-teal-50 shadow-xl z-10' : 'border-gray-200 hover:shadow-lg'}
                        `}
                        style={{ transition: 'box-shadow 0.2s, border 0.2s' }}
                        onClick={() => setSelectedPackage(pkg.id)}
                        tabIndex={0}
                        role="button"
                        aria-pressed={isSelected}
                      >
                        {/* Top section */}
                        <div className="flex flex-col items-center pt-8 pb-4 px-4 relative">
                          <Image src={icon} alt={pkg.name + ' иконка'} width={48} height={48} className="mb-2" />
                          <span className="text-lg font-bold text-gray-900 mb-1">{pkg.name}</span>
                          <span className="block text-xs text-gray-500 mb-2 text-center">{pkg.description}</span>
                        </div>
                        {/* Select button */}
                        <div className="px-6 pb-8 flex flex-col items-center mt-auto">
                          <span className="text-xl font-bold text-teal-600 mb-2">C${formatPrice(pkg.price)}</span>
                          {isSelected ? (
                            <button className="w-full py-2 rounded-full bg-teal-600 text-white font-semibold shadow-none cursor-default" disabled>Выбрано</button>
                          ) : (
                            <button className="w-full py-2 rounded-full bg-teal-50 text-teal-700 font-semibold border border-teal-200 hover:bg-teal-100 transition">Выбрать</button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* What's included link */}
                <div className="text-center mt-6">
                  <button
                    type="button"
                    className="text-teal-600 hover:text-teal-700 underline font-medium text-sm sm:text-base break-words"
                    onClick={() => setExpandedPackage(expandedPackage ? null : 'comparison')}
                  >
                    {expandedPackage ? 'Скрыть что включено' : 'Что включено?'}
                  </button>
                </div>
                
                {/* Comparison table */}
                {expandedPackage && (
                  <div className="mt-6 overflow-x-auto">
                    <div className="min-w-full">
                      <table className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="px-2 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-900 min-w-[120px]">Функция</th>
                            {packages.map((pkg) => (
                              <th key={pkg.id} className="px-2 sm:px-4 py-3 text-center text-xs sm:text-sm font-semibold text-gray-900 min-w-[80px]">
                                {pkg.name}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {features.map((feature, index) => (
                            <tr key={index} className="border-t border-gray-200">
                              <td className="px-2 sm:px-4 py-3 text-xs sm:text-sm text-gray-700 break-words">{feature}</td>
                              {packages.map((pkg) => (
                                <td key={pkg.id} className="px-2 sm:px-4 py-3 text-center">
                                  {pkg.features[index] ? (
                                    <div className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-teal-600 rounded-full">
                                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                  ) : (
                                    <div className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-gray-300 rounded-full">
                                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                </section>
              )}

              {/* Additional Services */}
              <section className="tile-white-blur bg-white/80 p-4 sm:p-8 rounded-3xl shadow-xl border border-gray-200">
                <div className="flex flex-col items-center">
                  <Image src="/images/services.png" alt="Иконка услуг" width={96} height={96} className="mb-4 mx-auto" />
                  <h3 className="font-semibold mb-4 text-lg text-gray-900 text-center">Дополнительные услуги</h3>
                </div>
                {getAvailableServices().length === 0 ? (
                  <div className="text-gray-500 text-center py-4">Дополнения недоступны для пакета Премиум.</div>
                ) : (
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {getAvailableServices().map((service) => (
                      <label
                        key={service.id}
                        className={`flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 cursor-pointer transition-colors bg-white/90 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-teal-300 ${
                          selectedServices.includes(service.id) ? 'ring-2 ring-teal-400 bg-teal-50' : 'text-gray-700'
                        }`}
                      >
                        <input
                          type="checkbox"
                          value={service.id}
                          checked={selectedServices.includes(service.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedServices([...selectedServices, service.id]);
                            } else {
                              setSelectedServices(selectedServices.filter(id => id !== service.id));
                            }
                          }}
                          className="accent-teal-600 w-5 h-5"
                        />
                      
                        <span className="flex-1 flex flex-col min-w-0">
                          <span className="block text-base font-medium break-words">{service.name}</span>
                          <span className="block text-sm text-gray-500 break-words">{service.description}</span>
                        </span>
                        <span className="text-base font-bold whitespace-nowrap text-teal-600">C${formatPrice(service.price)}</span>
                      </label>
                    ))}
                  </div>
                )}
              </section>

              {/* Personal Information */}
              <section className="tile-white-blur bg-white/80 p-4 sm:p-8 rounded-3xl shadow-xl border border-gray-200">
                <div className="flex flex-col items-center mb-6">
                  <Image src="/images/personal.png" alt="Иконка личных данных" width={96} height={96} className="mb-4 mx-auto" />
                  <h3 className="font-semibold mb-2 text-lg text-gray-900 text-center">Личная информация</h3>
                  <p className="text-gray-500 text-sm text-center max-w-md">Пожалуйста, предоставьте ваши контактные данные, чтобы мы могли связаться с вами по поводу записи.</p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
                  <div className="relative">
                    <UserIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="Имя"
                      value={personalInfo.firstName}
                      onChange={(e) => setPersonalInfo({...personalInfo, firstName: e.target.value})}
                      className="block w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3 py-3 text-base focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition placeholder-gray-400"
                    />
                  </div>
                  <div className="relative">
                    <UserIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="Фамилия"
                      value={personalInfo.lastName}
                      onChange={(e) => setPersonalInfo({...personalInfo, lastName: e.target.value})}
                      className="block w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3 py-3 text-base focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition placeholder-gray-400"
                    />
                  </div>
                  <div className="relative">
                    <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={personalInfo.email}
                      onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                      className="block w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3 py-3 text-base focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition placeholder-gray-400"
                    />
                  </div>
                  <div className="relative">
                    <PhoneIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      placeholder="Телефон"
                      value={personalInfo.phone}
                      onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                      className="block w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-3 py-3 text-base focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition placeholder-gray-400"
                    />
                  </div>
                </div>
              </section>

              {/* Total and Submit */}
              <section className="tile-white-blur bg-white/90 p-8 rounded-3xl shadow-xl border border-gray-200 flex flex-col items-center gap-4">
                <div className="flex flex-col items-center w-full">
                  <Image src="/images/total.png" alt="Иконка итого" width={96} height={96} className="mb-4 mx-auto" />
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="font-semibold text-lg text-gray-900">Итого:</h3>
                    <span className="text-2xl font-bold text-teal-600">C${formatPrice(calculateTotal())}</span>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="cursor-pointer w-full max-w-xs py-3 px-4 rounded-full text-base font-semibold bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 shadow-none"
                >
                  Перейти к оплате
                </Button>
              </section>
            </form>
          </div>
        </div>
      </main>
      <FooterWrapper border={false} mdxSource={mdxSource} />
    </>
  );
}
