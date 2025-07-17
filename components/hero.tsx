import React from 'react';

const Hero = () => {
  const features = [
    'Practical, career-focused training',
    'Flexible online course',
    'Taught by local Certified Professional Accountants',
    'Job-ready skills in Canadian accounting, bookkeeping, payroll, tax and more',
    'Affordable tuition'
  ];

  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-8 py-2 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl">
            Welcome to SkillPeak Academy!
          </h1>
          <h2 className="mb-8 text-gray-900">
            Master Accounting and Bookkeeping with Confidence!
          </h2>
          <p className="mb-12 max-w-3xl text-lg text-gray-600">
            Whether you're starting your career, upgrading your skills, or pursuing a new direction, 
            SkillPeak Academy is your gateway to success in the world of accounting and bookkeeping.
          </p>
          <p className="mb-12 max-w-3xl text-lg text-gray-600">
            With industry-focused courses, hands-on training, and expert instructors, we help students 
            gain the knowledge and real-world experience needed to thrive in today's competitive job market.
          </p>

          <div className="w-full max-w-3xl">
            <h3 className="mb-6 text-gray-900">Why Choose Us?</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <span className="flex-shrink-0 h-6 w-6 text-blue-600">✓</span>
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <button className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 