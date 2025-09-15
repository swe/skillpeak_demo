import TestimonialsCarousel from "@/components/testimonials-carousel";

export const metadata = {
  title: "SkillPeak Academy - Освойте бухгалтерский учет и налоги",
  description: "Освойте бухгалтерский учет и налоги с уверенностью! Курсы, ориентированные на финансовую отрасль, практическое обучение и опытные преподаватели помогут вам получить знания и практический опыт для успешной карьеры.",
};

import Hero from "@/components/hero-home-ru";
import Faqs from "@/components/faqs-ru";
// import PricingTables from "@/components/pricing-tables";
import Courses from "@/components/courses-ru";
import HowItWorks from "@/components/how-it-works-ru";
import ContactForm from "@/components/contact-form-ru";
import Partners from "@/components/partners";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="courses">
        <Courses />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="faq">
        <Faqs />
      </section>
{/*
       <section id="pricing">
        <PricingTables />
      </section> 
      <TestimonialsCarousel />
*/}
      <section id="partners">
        <Partners />
      </section>
      <section id="contact" className="mt-16">
        <ContactForm />
      </section>
    </>
  );
}
