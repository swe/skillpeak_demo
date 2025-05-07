export const metadata = {
  title: "Home - Skillpeak",
  description: "No description",
};

import Hero from "@/components/hero-home";
import FeaturesPlanet from "@/components/features-planet";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Faqs from "@/components/faqs-02";
import ComparePlans from "@/components/compare-plans";
import AppList from "@/components/app-list";

export default function Home() {
  return (
    <>
      <Hero />
      <AppList />
      <FeaturesPlanet />
      <TestimonialsCarousel />
      <ComparePlans />
      <Faqs />
    </>
  );
}
