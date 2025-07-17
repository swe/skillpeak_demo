import React from 'react';

const ComparePlans = () => {
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

  const plans = [
    {
      name: 'Standard',
      price: 950,
      features: [true, true, true, false, false, false, false, false, false, false, false, false],
      description: 'Theory only'
    },
    {
      name: 'Pro',
      price: 1700,
      features: [true, true, true, true, true, true, false, false, false, false, false, false],
      description: 'Theory and software practice'
    },
    {
      name: 'Premium',
      price: 5700,
      features: [true, true, true, true, true, true, true, true, true, true, true, true],
      description: 'Theory, software practice and practical experience'
    }
  ];

  const addons = [
    { name: 'Software practicum', price: 1000 },
    { name: 'Mentorship (student)', price: 900 },
    { name: 'Practical experience (3 months)', price: 4000 },
    { name: 'Resume building', price: 350 },
    { name: 'Job interview tips', price: 250 },
    { name: 'Personal session (up to one hour)', price: 250 }
  ];

  return (
    <section id="pricing" className="relative">
      <div className="pb-12 text-center">
        <h1 className="mb-6 text-5xl font-bold md:text-6xl text-white">
          Pricing
        </h1>
      </div>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="pb-12 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Plan */}
            <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">Standard</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-2xl font-bold">$</span>
                  <span className="text-4xl font-bold tabular-nums">950</span>
                </div>
                <p className="mt-2 text-sm text-gray-900">Theory only</p>
                <ul className="mt-6 space-y-4">
                  {features.map((feature, index) => (
                    <li key={feature} className="flex items-start">
                      <span className={`flex-shrink-0 h-6 w-6 ${plans[0].features[index] ? 'text-green-500' : 'text-gray-300'}`}>
                        {plans[0].features[index] ? '✓' : '×'}
                      </span>
                      <span className="ml-3 text-gray-900">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-200">Pro</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-2xl font-bold text-gray-200">$</span>
                  <span className="text-4xl font-bold tabular-nums text-gray-200">1700</span>
                </div>
                <p className="mt-2 text-sm text-gray-400">Theory and software practice</p>
                <ul className="mt-6 space-y-4">
                  {features.map((feature, index) => (
                    <li key={feature} className="flex items-start">
                      <span className={`flex-shrink-0 h-6 w-6 ${plans[1].features[index] ? 'text-green-500' : 'text-gray-500'}`}>
                        {plans[1].features[index] ? '✓' : '×'}
                      </span>
                      <span className="ml-3 text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Premium</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-2xl font-bold">$</span>
                  <span className="text-4xl font-bold tabular-nums">5700</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">Theory, software practice and practical experience</p>
                <ul className="mt-6 space-y-4">
                  {features.map((feature, index) => (
                    <li key={feature} className="flex items-start">
                      <span className={`flex-shrink-0 h-6 w-6 ${plans[2].features[index] ? 'text-green-500' : 'text-gray-300'}`}>
                        {plans[2].features[index] ? '✓' : '×'}
                      </span>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Add-ons */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Additional Services
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {addons.map((addon) => (
              <div key={addon.name} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-blue-500 transition-colors">
                <div className="flex justify-between items-start">
                  <h4 className="text-lg font-semibold text-gray-900">{addon.name}</h4>
                  <span className="text-2xl font-bold text-blue-600">${addon.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparePlans;
