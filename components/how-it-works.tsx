import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Enroll in the right course',
      description: 'Choose from our list of courses and their respective price tiers.'
    },
    {
      number: '02',
      title: 'Become a student of SkillPeak Academy',
      description: 'Receive access to our study materials, resources and support. Learn at your own pace with 24/7 access to your materials.'
    },
    {
      number: '03',
      title: 'Start learning with expert-led lessons',
      description: 'Dive into interactive video lessons and real-world case studies taught by experienced accounting professionals.'
    },
    {
      number: '04',
      title: 'Complete quizzes and assignments',
      description: 'Apply what you\'ve learned through the course to quizzes, and assignments to test your knowledge and build up confidence.'
    },
    {
      number: '05',
      title: 'Earn your certificate',
      description: 'Upon successful completion of the course, receive your certificate that proves your skills and commitment to excellence.'
    },
    {
      number: '06',
      title: 'Launch your career',
      description: 'Graduate with more than just a certificate — you\'ll have hands-on experience, practical skills, and software knowledge to showcase on your resume. Whether you\'re applying for your first job, switching careers, or starting your own bookkeeping business, our career support team will help you craft a standout resume, build your LinkedIn profile, and prepare for interviews. Plus, you\'ll gain insider tips on where to find job opportunities and how to land them with confidence.'
    }
  ];

  return (
    <section className="relative py-20">
      <div className="pb-8 text-center">
        <h1 className="border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
          How It Works
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our streamlined process that ensures exceptional results every step of the way
        </p>
      </div>

      <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600 font-bold text-2xl">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 