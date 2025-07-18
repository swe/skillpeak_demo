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
    <div className="relative pb-10" data-aos="zoom-y-out" data-aos-delay="100">
      <div className="pb-8 text-center">
        <h2 className="py-2 text-5xl font-bold md:text-6xl text-white">
          How It Works
        </h2>
        <p className="text-lg text-gray-900">
          Discover our streamlined process that ensures exceptional results every step of the way
        </p>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-8 items-start">
              <div className="text-sm flex-shrink-0 w-8 h-8 rounded-full border-2 border-teal-600 flex items-center justify-center text-teal-600 font-bold text-2xl">
                {step.number}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white">{step.title}</p>
                <p className="text-sm text-gray-900 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 