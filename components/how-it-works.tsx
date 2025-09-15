import React from 'react';
import NumberCircle from './number-circle';

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
      <div className="mx-auto max-w-5xl px-4 pb-8 text-center">
        <h2 className="py-2 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl">
          How It Works
        </h2>
        <p className="text-lg text-gray-600">
          Discover our streamlined process that ensures exceptional results every step of the way
        </p>
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-8 items-start">
              <NumberCircle number={step.number} size={32} className="flex-shrink-0" />
              <div className="flex-1">
                <p className="font-semibold text-sky-900">{step.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 