import Testimonial from "@/components/testimonial";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      img: TestimonialImg01,
      name: "Peter Lowe",
      username: "An aspiring accountant in Toronto\n",
      date: "May 19, 2025",
      content:
        "The course helped me to understand the intricacies of Canadian accounting. I recommend it to anyone who wants to start a career in this field.",
    },
    {
      img: TestimonialImg02,
      name: "Walter Nieforth",
      username: "Accountant in a large Ottawa company\n",
      date: "Apr 12, 2027",
      content:
        "An excellent course for beginning accountants in Canada. Gives a complete understanding of the basics and nuances of the work.",
    },
    {
      img: TestimonialImg03,
      name: "Dmytro Tikhomirov",
      username: "Accountant's Assistant in Montreal\n",
      date: "Mar 04, 2027",
      content:
        "A very informative course. He helped me quickly get used to a new profession and get a job in Canada.",
    },
    {
      img: TestimonialImg04,
      name: "Michael Ross",
      username: "Financial Analyst in Vancouver\n",
      date: "Jan 15, 2027",
      content:
        "A useful course for those who plan to work as an accountant in Canada. I have gained a lot of useful knowledge and skills.",
    },
  ];

  return (
    <section id="testimonials" className="relative" data-aos="zoom-y-out" data-aos-delay="100">
        <div className="text-center w-full max-w-3xl mx-auto aos-init aos-animate">
          <h2 className="py-2 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl">
            Reviews
          </h2>
        </div>
        <div className="relative mx-auto flex max-w-[94rem] justify-center">
          <div className="absolute bottom-0 -z-10" aria-hidden="true">
            <div className="h-56 w-56 rounded-full border-[20px] border-white blur-[20px] will-change-[filter]" />
          </div>
          {/* Row */}
          <div className="group inline-flex w-full flex-nowrap py-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
            <div className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start *:mx-3">
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            <div
              className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start *:mx-3"
              aria-hidden="true"
            >
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  cloned={true}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}
