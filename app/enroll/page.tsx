'use client';

import { useState } from 'react';
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
  features: string[];
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
    features: [
      'Perfect for newcomers to Canada',
      'Hands-on training with Canadian accounting software',
      'ESL-friendly course materials',
      'Flexible online schedule',
      '40-hour intensive program',
      'Six comprehensive blocks'
    ],
    isAvailable: true
  },
  {
    id: 'bookkeeping',
    name: 'Bookkeeping Essentials Course',
    description: 'Master the fundamentals of bookkeeping with our comprehensive course.',
    price: 950,
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
    id: 'financial-literacy',
    name: 'Financial Literacy for Entrepreneurs',
    description: 'Essential knowledge for business owners and entrepreneurs.',
    price: 950,
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

    return coursePrice + packagePrice + servicesPrice;
  };

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
          <div className="max-w-3xl mx-auto">
            <div className="pb-12 text-center">
              <H1 className="mb-6 border-y text-4xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-5xl">
                Enroll in a Course
              </H1>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Course Selection */}
              <div className="bg-white p-6 rounded-lg shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <h2 className="text-xl font-semibold mb-4">Select a Course</h2>
                <div className="grid grid-cols-1 gap-4">
                  {courses.map((course) => (
                    <label
                      key={course.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedCourse === course.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
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
                            <h3 className="font-medium text-lg">{course.name}</h3>
                            <p className="text-gray-600 mt-1">{course.description}</p>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="font-semibold text-lg">${course.price}+</span>
                            {!course.isAvailable && (
                              <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                                Coming Soon
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <h4 className="font-medium mb-2">Course Features:</h4>
                          <ul className="space-y-2">
                            {course.features.map((feature) => (
                              <li key={feature} className="flex items-start">
                                <span className="flex-shrink-0 h-5 w-5 text-green-500">✓</span>
                                <span className="ml-2 text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Package Selection */}
              <div className="bg-white p-6 rounded-lg shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <h2 className="text-xl font-semibold mb-4">Select a Package</h2>
                <div className="grid grid-cols-1 gap-4">
                  {packages.map((pkg) => (
                    <label
                      key={pkg.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedPackage === pkg.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
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
                            <h3 className="font-medium text-lg">{pkg.name}</h3>
                            <p className="text-gray-600 mt-1">{pkg.description}</p>
                          </div>
                          <span className="font-semibold text-lg">${pkg.price}</span>
                        </div>
                        
                        <div className="mt-4">
                          <h4 className="font-medium mb-2">Package Features:</h4>
                          <ul className="space-y-2">
                            {features.map((feature, index) => (
                              <li key={feature} className="flex items-start">
                                <span className={`flex-shrink-0 h-5 w-5 ${pkg.features[index] ? 'text-green-500' : 'text-gray-300'}`}>
                                  {pkg.features[index] ? '✓' : '×'}
                                </span>
                                <span className="ml-2 text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Services */}
              <div className="bg-white p-6 rounded-lg shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <h2 className="text-xl font-semibold mb-4">Additional Services</h2>
                <div className="grid grid-cols-1 gap-4">
                  {additionalServices.map((service) => (
                    <label
                      key={service.id}
                      className="flex items-start space-x-4 border rounded-lg p-4 hover:border-blue-500 transition-colors"
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
                        className="mt-1 h-4 w-4 text-blue-600"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-lg">{service.name}</h3>
                            <p className="text-gray-600 mt-1">{service.description}</p>
                          </div>
                          <span className="font-semibold text-lg">${service.price}</span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div className="bg-white p-6 rounded-lg shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      required
                      value={personalInfo.firstName}
                      onChange={(e) => setPersonalInfo({...personalInfo, firstName: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      required
                      value={personalInfo.lastName}
                      onChange={(e) => setPersonalInfo({...personalInfo, lastName: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      required
                      value={personalInfo.email}
                      onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      required
                      value={personalInfo.phone}
                      onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Total and Submit */}
              <div className="bg-white p-6 rounded-lg shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Total Amount</h2>
                  <span className="text-2xl font-bold text-blue-600">${calculateTotal()}</span>
                </div>
                <Button
                  type="submit"
                  className="w-full"
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