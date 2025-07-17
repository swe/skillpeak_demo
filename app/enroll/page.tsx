'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { H1 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { UserIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

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
    name: 'Year-end Preparation Course',
    description: 'Master Canadian accounting standards and software with our comprehensive course.',
    price: 950,
    isAvailable: true
  },
  {
    id: 'bookkeeping',
    name: 'Bookkeeping Essentials Course',
    description: 'Master the fundamentals of bookkeeping with our comprehensive course.',
    price: 950,
    isAvailable: true
  },
  {
    id: 'financial-literacy',
    name: 'Financial Literacy for Entrepreneurs',
    description: 'Essential knowledge for business owners and entrepreneurs.',
    price: 950,
    isAvailable: true
  }
];

const packages: Package[] = [
  {
    id: 'standard',
    name: 'Standard',
    description: 'Theory only',
    price: 950,
    features: [true, true, true, false, false, false, false, false, false, false, false, false]
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Theory and software practice',
    price: 1700,
    features: [true, true, true, true, true, true, false, false, false, false, false, false]
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Theory, software practice and practical experience',
    price: 5700,
    features: [true, true, true, true, true, true, true, true, true, true, true, true]
  }
];

const additionalServices: AdditionalService[] = [
  {
    id: 'software-practicum',
    name: 'Software practicum',
    description: 'Hands-on training with industry-standard software',
    price: 1000
  },
  {
    id: 'mentorship-student',
    name: 'Mentorship (student)',
    description: 'One-on-one guidance throughout your learning journey',
    price: 900
  },
  {
    id: 'practical-experience',
    name: 'Practical experience (3 months)',
    description: 'Real-world experience in a professional setting',
    price: 4000
  },
  {
    id: 'resume-building',
    name: 'Resume building',
    description: 'Professional resume optimization for the Canadian job market',
    price: 350
  },
  {
    id: 'job-interview',
    name: 'Job interview tips',
    description: 'Expert guidance for successful job interviews',
    price: 250
  },
  {
    id: 'personal-session',
    name: 'Personal session',
    description: 'One-hour personal consultation with an expert',
    price: 250
  }
];

const features = [
  'Course package',
  'Video course',
  'Free webinar library access',
  'Practice quizzes',
  'Software practicum',
  'Mentorship (student)',
  'Mentorship (career)',
  'Practical experience (3 months)',
  'Practical experience certificate',
  'Resume building',
  'Job interview tips',
  'Personal session (up to one hour/mo)'
];

export default function EnrollmentPage() {
  const router = useRouter();
  const [selectedCourse, setSelectedCourse] = useState<string>('year-end');
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const calculateTotal = () => {
    const coursePrice = courses.find(c => c.id === selectedCourse)?.price || 0;
    const packagePrice = packages.find(p => p.id === selectedPackage)?.price || 0;
    const servicesPrice = selectedServices.reduce((total, serviceId) => {
      const service = additionalServices.find(s => s.id === serviceId);
      return total + (service?.price || 0);
    }, 0);

    // For now, we only use the package price as the base price
    return packagePrice + servicesPrice;
  };

  // Helper to get available additional services based on selected package
  const getAvailableServices = () => {
    if (selectedPackage === 'premium') {
      // Premium: no add-ons available
      return [];
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

  // Auto-deselect unavailable services when package changes
  React.useEffect(() => {
    const availableIds = getAvailableServices().map((s) => s.id);
    setSelectedServices((prev) => prev.filter((id) => availableIds.includes(id)));
  }, [selectedPackage]);

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
        <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="w-full max-w-2xl mx-auto">
            <div className="pb-12 text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">Enroll in a Course</h2>
              <p className="text-lg text-gray-500">Start your learning journey with SkillPeak Academy</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Course Selection */}
              <section className="tile-white-blur bg-white/80 p-8 rounded-3xl shadow-xl border border-gray-200">
                <h3 className="font-semibold mb-4 text-lg text-gray-900 flex items-center gap-2">🎓 Select a Course</h3>
                <div className="flex flex-col gap-6">
                  {courses.map((course) => (
                    <label
                      key={course.id}
                      className={`flex items-center gap-4 px-6 py-6 cursor-pointer transition-colors bg-white/80 rounded-2xl shadow-xl border border-gray-200 ${
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
                      <span className="flex-1 flex flex-col">
                        <span className="flex items-center gap-2 text-base">
                          <span>{course.id === 'year-end' ? '📅' : course.id === 'bookkeeping' ? '📚' : '💡'}</span>
                          <span className="text-base">{course.name}</span>
                        </span>
                        <span className="block text-sm text-gray-500">{course.description}</span>
                        {course.id === 'year-end' && <span className="text-xs text-teal-700 mt-1">Best for newcomers to Canada</span>}
                        {course.id === 'bookkeeping' && <span className="text-xs text-teal-700 mt-1">Perfect for beginners</span>}
                        {course.id === 'financial-literacy' && <span className="text-xs text-teal-700 mt-1">For entrepreneurs</span>}
                      </span>
                      <span className="text-base font-bold">${course.price}+</span>
                    </label>
                  ))}
                </div>
              </section>

              {/* Package Selection */}
              <section className="tile-white-blur bg-white/80 p-8 rounded-3xl shadow-xl border border-gray-200">
                <h3 className="font-semibold mb-4 text-lg text-gray-900 flex items-center gap-2">💼 Select a Package</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  {packages.map((pkg) => (
                    <label
                      key={pkg.id}
                      className={`flex-1 flex flex-col items-start px-6 py-6 cursor-pointer transition-colors relative bg-white/80 rounded-2xl shadow-xl border border-gray-200 min-w-[180px] ${
                        selectedPackage === pkg.id ? 'ring-2 ring-teal-400' : 'text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-2 w-full mb-1">
                        <input
                          type="radio"
                          name="package"
                          value={pkg.id}
                          checked={selectedPackage === pkg.id}
                          onChange={(e) => setSelectedPackage(e.target.value)}
                          className="accent-teal-600 w-5 h-5 mb-0"
                        />
                        <span className="text-xl">{pkg.id === 'standard' ? '📦' : pkg.id === 'pro' ? '⭐' : '🏆'}</span>
                        <span className="text-base">{pkg.name}</span>
                      </div>
                      <span className="block text-xs text-gray-500 mb-1">{pkg.description}</span>
                      <span className="text-base font-bold">${pkg.price}</span>
                    </label>
                  ))}
                </div>
              </section>

              {/* Additional Services */}
              <section className="tile-white-blur bg-white/80 p-8 rounded-3xl shadow-xl border border-gray-200">
                <h3 className="font-semibold mb-4 text-lg text-gray-900 flex items-center gap-2">🛠️ Additional Services</h3>
                {getAvailableServices().length === 0 ? (
                  <div className="text-gray-500 text-center py-4">No add-ons available for the Premium package.</div>
                ) : (
                  <div className="flex flex-col gap-3">
                    {getAvailableServices().map((service) => (
                      <label
                        key={service.id}
                        className={`flex items-center gap-4 px-0 py-3 cursor-pointer transition-colors ${
                          selectedServices.includes(service.id) ? 'text-teal-600 font-semibold' : 'text-gray-700'
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
                        <span className="flex-1 flex items-center gap-2">
                          <span>{service.id === 'software-practicum' ? '🖥️' : service.id === 'mentorship-student' ? '👨‍🏫' : service.id === 'practical-experience' ? '🏢' : service.id === 'resume-building' ? '📄' : service.id === 'job-interview' ? '🎤' : '💬'}</span>
                          <span className="block text-base">{service.name}</span>
                        </span>
                        <span className="block text-sm text-gray-500 flex-1">{service.description}</span>
                        <span className="text-base font-bold">${service.price}</span>
                      </label>
                    ))}
                  </div>
                )}
              </section>

              {/* Personal Information */}
              <section className="tile-white-blur bg-white/80 p-8 rounded-3xl shadow-xl border border-gray-200">
                <h3 className="font-semibold mb-4 text-lg text-gray-900 flex items-center gap-2">👤 Personal Information</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      required
                      value={personalInfo.firstName}
                      onChange={(e) => setPersonalInfo({...personalInfo, firstName: e.target.value})}
                      className="block w-full bg-transparent border-0 border-b border-gray-300 focus:border-teal-500 focus:ring-0 text-base py-2 pl-8"
                    />
                    <UserIcon className="w-5 h-5 text-gray-400 absolute left-0 top-8" />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      required
                      value={personalInfo.lastName}
                      onChange={(e) => setPersonalInfo({...personalInfo, lastName: e.target.value})}
                      className="block w-full bg-transparent border-0 border-b border-gray-300 focus:border-teal-500 focus:ring-0 text-base py-2 pl-8"
                    />
                    <UserIcon className="w-5 h-5 text-gray-400 absolute left-0 top-8" />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={personalInfo.email}
                      onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                      className="block w-full bg-transparent border-0 border-b border-gray-300 focus:border-teal-500 focus:ring-0 text-base py-2 pl-8"
                    />
                    <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-0 top-8" />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      required
                      value={personalInfo.phone}
                      onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                      className="block w-full bg-transparent border-0 border-b border-gray-300 focus:border-teal-500 focus:ring-0 text-base py-2 pl-8"
                    />
                    <PhoneIcon className="w-5 h-5 text-gray-400 absolute left-0 top-8" />
                  </div>
                </div>
              </section>

              {/* Total and Submit */}
              <section className="tile-white-blur bg-white/90 p-8 rounded-3xl shadow-xl border border-gray-200 flex flex-col items-center gap-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="font-semibold text-lg text-gray-900">Total:</h3>
                  <span className="text-2xl font-bold text-teal-600">${calculateTotal()}</span>
                </div>
                <Button
                  type="submit"
                  className="cursor-pointer w-full max-w-xs py-3 px-4 rounded-full text-base font-semibold bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 shadow-none"
                >
                  Proceed to Payment
                </Button>
              </section>
            </form>
          </div>
        </div>
      </main>
      <Footer border={false} />
    </>
  );
} 