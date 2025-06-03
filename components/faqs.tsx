import Accordion from "@/components/accordion";
import React from "react";

export default function Faqs() {
  const faqs = [
        {
          question: "What is the course format?",
          answer:
              "The training takes place in a flexible online format with access to lecture notes, practical assignments and materials. You can study at any convenient time without being tied to a fixed schedule.",
        },
        {
          question: "What are the course prerequisites?",
          answer:
              "Year-end preparation course – the course is designed for people with basic knowledge or experience in accounting. If you have a desire to study and develop in the Canadian accounting system, this is enough to start.\n\nBookkeeping essentials course – the course is designed for people with no prior knowledge of accounting or bookkeeping. This is a perfect opportunity to start your own business in bookkeeping.\n\nFinancial literacy for entrepreneurs course – this course is designed for seasoned and start-up entrepreneurs who are looking to gain important knowledge of business and accounting terminology and concepts.",
        },
        {
          question: "Is it possible to take the course while outside Canada?",
          answer:
              "Yes, the courses are completely online and accessible from anywhere in the world. You can study from your own country of residence before moving in Canada to be ready to work from day one. We offer a flexible schedule so that you can combine your studies with other commitments.",
        },
        {
          question: "How long does it take to complete the course?",
          answer:
              "All of our courses are designed to be completed in under 40 hours of training. You can complete the course in 4–6 weeks if you only dedicate several hours a week to studying. The flexible format allows you to adapt the learning process to your schedule in order to complete it at a convenient time for you.",
        }
      ];

  return (

      <div className="relative pb-10">
        <div className="text-center">
          <h2 className="py-2 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl">
            Questions we often get
          </h2>
          <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  title={faq.question}
                  id={`faqs-${index}`}
                >
                  {faq.answer}
                </Accordion>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}
