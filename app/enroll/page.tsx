'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { H1 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

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
    isAvailable: false
  },
  {
    id: 'financial-literacy',
    name: 'Financial Literacy for Entrepreneurs',
    description: 'Essential knowledge for business owners and entrepreneurs.',
    price: 950,
    isAvailable: false
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
      // Premium excludes software practicum, resume building, job interview tips, personal session
      return additionalServices.filter(
        (s) =>
          s.id !== 'software-practicum' &&
          s.id !== 'resume-building' &&
          s.id !== 'job-interview' &&
          s.id !== 'personal-session'
      );
    } else if (selectedPackage === 'pro') {
      // Pro excludes software practicum
      return additionalServices.filter((s) => s.id !== 'software-practicum');
    }
    // Standard: all services available
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
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="mt-18 max-w-3xl mx-auto">
            <div className="pb-12 text-center">
              <h2 className="py-2 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl">
                Enroll in a Course
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Course Selection */}
              <div className="bg-white p-6 rounded-lg shadow-lg shadow-black/[0.03]">
                <h3 className="font-semibold mb-4">Select a Course</h3>
                <div className="grid grid-cols-1 gap-4">
                  {courses.map((course) => (
                    <label
                      key={course.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedCourse === course.id ? 'border-teal-500 bg-teal-50' : 'border-gray-200 hover:border-teal-300'
                      } ${!course.isAvailable ? 'opacity-75' : ''}`}
                    >
                      <input
                        type="radio"
                        name="course"
                        value={course.id}
                        checked={selectedCourse === course.id}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="hidden"
                        disabled={!course.isAvailable}
                      />
                      <div>
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-md">{course.name}</p>
                            <p className="text-sm text-gray-600 mt-1">{course.description}</p>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="font-semibold text-lg text-teal-800">${course.price}+</span>
                            {!course.isAvailable && (
                              <span className="mt-2 inline-block rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800">
                                Coming Soon
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Package Selection */}
              <div className="bg-white p-6 rounded-lg shadow-lg shadow-black/[0.03]">
                <h3 className="font-semibold mb-4">Select a Package</h3>
                <div className="grid grid-cols-3 gap-4">
                  {packages.map((pkg) => (
                    <label
                      key={pkg.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedPackage === pkg.id ? 'border-teal-500 bg-teal-50' : 'border-gray-200 hover:border-teal-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="package"
                        value={pkg.id}
                        checked={selectedPackage === pkg.id}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                        className="hidden"
                      />
                      <div>
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-md">{pkg.name}</p>
                            <p className="text-xs text-gray-600 mt-1">{pkg.description}</p>
                          </div>
                          <span className="font-semibold text-lg text-teal-800">${pkg.price}</span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Services */}
              <div className="bg-white p-6 rounded-lg shadow-lg shadow-black/[0.03]">
                <h3 className="font-semibold mb-4">Additional Services</h3>
                <div className="grid grid-cols-2 gap-4">
                  {getAvailableServices().map((service) => (
                    <label
                      key={service.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedServices.includes(service.id) ? 'border-teal-500 bg-teal-50' : 'border-gray-200 hover:border-teal-300'
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
                        className="hidden"
                      />
                      <div>
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium md">{service.name}</p>
                            <p className="text-gray-600 mt-1 text-sm">{service.description}</p>
                          </div>
                          <span className="font-semibold text-lg text-teal-600">${service.price}</span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div className="bg-white p-6 rounded-lg shadow-lg shadow-black/[0.03]">
                <h3 className="font-semibold mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      required
                      value={personalInfo.firstName}
                      onChange={(e) => setPersonalInfo({...personalInfo, firstName: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      required
                      value={personalInfo.lastName}
                      onChange={(e) => setPersonalInfo({...personalInfo, lastName: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      required
                      value={personalInfo.email}
                      onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      required
                      value={personalInfo.phone}
                      onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                </div>
              </div>

              {/* Total and Submit */}
              <div className="bg-white p-6 rounded-lg shadow-lg shadow-black/[0.03] w-1/2 m-auto">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold">Total Amount:</h3>
                  <span className="text-2xl font-bold text-teal-600">${calculateTotal()}</span>
                </div>
                <Button
                  type="submit"
                  className="shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Proceed to Payment
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer border={true} />
    </>
  );
} 