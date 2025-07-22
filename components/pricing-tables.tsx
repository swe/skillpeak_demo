"use client";

import React from "react";
import Image from "next/image";

const plans = [
  {
    name: "Standard",
    price: 950,
    description: "Theory only",
    features: [
      "Course access",
      "Video lessons",
      "Webinars",
      "Practice quizzes"
    ],
    unavailable: [
      "Software practicum",
      "Mentorship",
      "Practical experience",
      "Experience certificate",
      "Resume building",
      "Interview tips",
      "Personal session"
    ]
  },
  {
    name: "Pro",
    price: 1700,
    description: "Theory + software practice",
    features: [
      "Course access",
      "Video lessons",
      "Webinars",
      "Practice quizzes",
      "Software practicum",
      "Mentorship"
    ],
    unavailable: [
      "Practical experience",
      "Experience certificate",
      "Resume building",
      "Interview tips",
      "Personal session"
    ],
    recommended: true
  },
  {
    name: "Premium",
    price: 5700,
    description: "All included: theory, practice, experience",
    features: [
      "Course access",
      "Video lessons",
      "Webinars",
      "Practice quizzes",
      "Software practicum",
      "Mentorship",
      "Practical experience",
      "Experience certificate",
      "Resume building",
      "Interview tips",
      "Personal session"
    ],
    unavailable: []
  }
];

export default function PricingTables() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="pb-8 text-center">
          <h2 className="py-2 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl">
            Pricing Plans
          </h2>
        </div>
        <div className="grid gap-10 md:gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col tile-white-blur p-8 transition-all duration-200 rounded-3xl ${plan.recommended ? "border-4 border-[#b2f1ee] md:scale-105 md:z-10 bg-white/90" : "border border-gray-200 bg-white/80"}`}
              style={{ fontFamily: "var(--font-sans)", boxShadow: "0 8px 32px 0 rgba(2, 193, 182, 0.10), 0 1.5px 6px 0 rgba(60, 60, 60, 0.08)" }}
            >
              {/* Recommendation badge: фирменные лазурные цвета */}
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full shadow-md text-sm font-semibold border border-[#b2f1ee] z-20 bg-gradient-to-r from-[#02C1B6] to-[#0395A6] text-white">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/0 animate-[pulse_2.5s_ease-in-out_infinite] text-lg">✨</span>
                  Recommended
                </div>
              )}
              {/* Название и цена: название менее заметно, цена акцентная */}
              <div className="flex flex-col items-center justify-center mb-4 mt-2 gap-1">
                {/* Plan Icon */}
                {plan.name === "Standard" && (
                  <Image src="/images/standard.png" alt="Standard plan icon" width={96} height={96} className="mb-2" priority />
                )}
                {plan.name === "Pro" && (
                  <Image src="/images/pro.png" alt="Pro plan icon" width={96} height={96} className="mb-2" priority />
                )}
                {plan.name === "Premium" && (
                  <Image src="/images/premium.png" alt="Premium plan icon" width={96} height={96} className="mb-2" priority />
                )}
                <span className="text-base font-normal text-gray-500 tracking-wide mb-0.5">{plan.name}</span>
                <span className="text-4xl font-extrabold text-primary flex items-center gap-1 leading-tight">
                  {plan.price}
                  <span className="text-base font-semibold text-gray-400 ml-1">CAD</span>
                </span>
              </div>
              <div className="mb-6 text-center text-gray-500 text-base">{plan.description}</div>
              <ul className="flex-1 space-y-2 mt-2 mb-0">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-800 text-base font-medium">
                    <span className="mr-2 text-green-500 text-lg">✔</span> {feature}
                  </li>
                ))}
                {plan.unavailable.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-400 text-base opacity-60 italic">
                    <span className="mr-2">✖</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
