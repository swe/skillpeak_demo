export const metadata = {
  title: "SkillPeak Academy - Master Accounting and Bookkeeping",
  description: "Master Accounting and Bookkeeping with Confidence! Industry-focused courses, hands-on training, and expert instructors to help you thrive in today's competitive job market.",
};

import Hero from "@/components/hero-home";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Faqs from "@/components/faqs";
import PricingTables from "@/components/pricing-tables";
import Courses from "@/components/courses";
import HowItWorks from "@/components/how-it-works";
import ContactForm from "@/components/contact-form";

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
      <section id="pricing">
        <PricingTables />
      </section>
      <section id="testimonials">
        <TestimonialsCarousel />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </>
  );
}
