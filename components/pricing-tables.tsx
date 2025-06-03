"use client";

import { H1 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import React from "react";

export default function PricingTables() {
  return (
      <div className="relative pb-10" data-aos="zoom-y-out" data-aos-delay="100">
        <div className="pb-8 text-center">
          <h2 className="py-2 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl">
            Our Pricing
          </h2>
        </div>
        <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
          <div className="">
            <div className="mx-auto grid max-w-sm md:-mx-4 md:max-w-none md:grid-cols-4" style={{gap:0}}>
              {/* Header section */}
              <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-4 md:[&>div:last-child>div]:border-none [&>div:last-child]:rounded-b-2xl">
                <div></div>
                <div className="flex flex-col justify-end px-4 max-md:hidden md:order-1" aria-hidden="true">
                  <div className="mb-2 mt-4 font-bold">Key features</div>
                </div>
                <div className="flex flex-col justify-end px-4 max-md:hidden md:order-2" aria-hidden="true">
                  <div className="border-b border-gray-200 py-3 text-sm">
                    <div className="relative">
                      <button className="block cursor-help text-left text-gray-500 underline decoration-gray-300 decoration-dotted underline-offset-4" aria-describedby="tooltip-01">
                        Course package
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 max-md:hidden md:order-3" aria-hidden="true">
                  <div className="border-b border-gray-200 py-3 text-sm">
                    <div className="relative">
                      <button className="block cursor-help text-left text-gray-500 underline decoration-gray-300 decoration-dotted underline-offset-4" aria-describedby="tooltip-02">
                        Video course
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 max-md:hidden md:order-4" aria-hidden="true">
                  <div className="border-b border-gray-200 py-3 text-sm">
                    <div className="relative">
                      <button className="block cursor-help text-left text-gray-500 underline decoration-gray-300 decoration-dotted underline-offset-4" aria-describedby="tooltip-03">
                        Webinar library
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 max-md:hidden md:order-5" aria-hidden="true">
                  <div className="border-b border-gray-200 py-3 text-sm">
                    <div className="relative">
                      <button className="block cursor-help text-left text-gray-500 underline decoration-gray-300 decoration-dotted underline-offset-4" aria-describedby="tooltip-04">
                        Practice quizzes
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 max-md:hidden md:order-6" aria-hidden="true">
                  <div className="border-b border-gray-200 py-3 text-sm">
                    <div className="relative">
                      <button className="block cursor-help text-left text-gray-500 underline decoration-gray-300 decoration-dotted underline-offset-4" aria-describedby="tooltip-05">
                        Software practicum
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 max-md:hidden md:order-7" aria-hidden="true">
                  <div className="mb-2 mt-4 font-bold">Support</div>
                </div>
                <div className="flex flex-col justify-end px-4 max-md:hidden md:order-8" aria-hidden="true">
                  <div className="border-b border-gray-200 py-3 text-sm">
                    <div className="relative">
                      <button className="block cursor-help text-left text-gray-500 underline decoration-gray-300 decoration-dotted underline-offset-4" aria-describedby="tooltip-06">
                        Mentorship (student)
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 max-md:hidden md:order-9" aria-hidden="true">
                  <div className="border-b border-gray-200 py-3 text-sm">
                    <div className="relative">
                      <button className="block cursor-help text-left text-gray-500 underline decoration-gray-300 decoration-dotted underline-offset-4" aria-describedby="tooltip-07">
                        Mentorship (career)
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 max-md:hidden md:order-10" aria-hidden="true">
                  <div className="border-b border-gray-200 py-3 text-sm">
                    <div className="relative">
                      <button className="block cursor-help text-left text-gray-500 underline decoration-gray-300 decoration-dotted underline-offset-4" aria-describedby="tooltip-08">
                        Practical experience
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 max-md:hidden md:order-11" aria-hidden="true">
                  <div className="border-b border-gray-200 py-3 text-sm">
                    <div className="relative">
                      <button className="block cursor-help text-left text-gray-500 underline decoration-gray-300 decoration-dotted underline-offset-4" aria-describedby="tooltip-09">
                        Resume building
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 max-md:hidden md:order-12" aria-hidden="true">
                  <div className="border-b border-gray-200 py-3 text-sm">
                    <div className="relative">
                      <button className="block cursor-help text-left text-gray-500 underline decoration-gray-300 decoration-dotted underline-offset-4" aria-describedby="tooltip-10">
                        Job interview tips
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 max-md:hidden md:order-13" aria-hidden="true">
                  <div className="border-b border-gray-200 py-3 text-sm">
                    <div className="relative">
                      <button className="block cursor-help text-left text-gray-500 underline decoration-gray-300 decoration-dotted underline-offset-4" aria-describedby="tooltip-11">
                        Personal session
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Standard plan */}
              <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-4 md:[&>div:last-child>div]:border-none [&>div:last-child]:rounded-b-2xl">
                <div className="relative flex flex-col justify-end px-4">
                  <div>
                    <div className="mb-1 font-medium underline decoration-gray-300 underline-offset-4">Standard</div>
                    <div className="mb-4 flex items-baseline border-b border-dashed border-gray-200 pb-4">
                      <span className="text-2xl font-bold">C$</span>
                      <span className="text-4xl font-bold tabular-nums">950</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-1">
                  <div className="mb-2 mt-4 font-bold md:sr-only">Key features</div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-2">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Course package</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-3">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Video course</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-4">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Webinar library</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-5">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-gray-300" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Practice quizzes</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-6">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-gray-300" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Software practicum</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-7">
                  <div className="mb-2 mt-4 font-bold md:sr-only">Support</div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-8">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-gray-300" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Mentorship (student)</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-9">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-gray-300" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Mentorship (career)</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-10">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-gray-300" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Practical experience</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-11">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-gray-300" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Resume building</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-12">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-gray-300" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Job interview tips</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-13">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-gray-300" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Personal session</span>
                  </div>
                </div>
              </section>

              {/* Pro plan */}
              <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-4 md:[&>div:last-child>div]:border-none [&>div:last-child]:rounded-b-2xl [&>div]:bg-gray-800">
                <div className="relative flex flex-col justify-end px-4">
                  <div>
                    <div className="mb-1 font-medium underline decoration-gray-700 underline-offset-4 text-gray-200">Pro</div>
                    <div className="mb-4 flex items-baseline border-b border-dashed border-gray-700 pb-4 text-gray-200">
                      <span className="text-2xl font-bold">C$</span>
                      <span className="text-4xl font-bold tabular-nums">1700</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-1">
                  <div className="mb-2 mt-4 font-bold text-gray-200 md:sr-only">Key features</div>
                </div>
                <div className="flex flex-col justify-end px-4 text-gray-300 md:order-2">
                  <div className="flex h-full items-center border-b border-gray-600 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Course package</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 text-gray-300 md:order-3">
                  <div className="flex h-full items-center border-b border-gray-600 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Video course</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 text-gray-300 md:order-4">
                  <div className="flex h-full items-center border-b border-gray-600 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Webinar library</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 text-gray-300 md:order-5">
                  <div className="flex h-full items-center border-b border-gray-600 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Practice quizzes</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 text-gray-300 md:order-6">
                  <div className="flex h-full items-center border-b border-gray-600 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Software practicum</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-7">
                  <div className="mb-2 mt-4 font-bold text-gray-200 md:sr-only">Support</div>
                </div>
                <div className="flex flex-col justify-end px-4 text-gray-300 md:order-8">
                  <div className="flex h-full items-center border-b border-gray-600 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-gray-300" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Mentorship (student)</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 text-gray-300 md:order-9">
                  <div className="flex h-full items-center border-b border-gray-600 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-gray-300" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Mentorship (career)</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 text-gray-300 md:order-10">
                  <div className="flex h-full items-center border-b border-gray-600 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-gray-300" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Practical experience</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 text-gray-300 md:order-11">
                  <div className="flex h-full items-center border-b border-gray-600 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-gray-300" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Resume building</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 text-gray-300 md:order-12">
                  <div className="flex h-full items-center border-b border-gray-600 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-gray-300" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Job interview tips</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 text-gray-300 md:order-13">
                  <div className="flex h-full items-center border-b border-gray-600 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-gray-300" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Personal session</span>
                  </div>
                </div>
              </section>

              {/* Premium plan */}
              <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-4 md:[&>div:last-child>div]:border-none [&>div:last-child]:rounded-b-2xl">
                <div className="relative flex flex-col justify-end px-4">
                  <div>
                    <div className="mb-1 font-medium underline decoration-gray-300 underline-offset-4">Premium</div>
                    <div className="mb-4 flex items-baseline border-b border-dashed border-gray-200 pb-4">
                      <span className="text-2xl font-bold">C$</span>
                      <span className="text-4xl font-bold tabular-nums">5700</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-1">
                  <div className="mb-2 mt-4 font-bold md:sr-only">Key features</div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-2">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Course package</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-3">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Video course</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-4">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Webinar library</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-5">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Practice quizzes</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-6">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Software practicum</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-7">
                  <div className="mb-2 mt-4 font-bold md:sr-only">Support</div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-8">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Mentorship (student)</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-9">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Mentorship (career)</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-10">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Practical experience</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-11">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Resume building</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-12">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Job interview tips</span>
                  </div>
                </div>
                <div className="flex flex-col justify-end px-4 md:order-13">
                  <div className="flex h-full items-center border-b border-gray-200 py-3 text-sm">
                    <svg className="mr-2 shrink-0 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                      <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"></path>
                    </svg>
                    <span className="md:sr-only">Personal session</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
    </div>
  );
}
