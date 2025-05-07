import Accordion from "@/components/accordion";

export default function Faqs() {
  const faqs01 = [
    {
      question: "How is the training going?",
      answer:
        "The training takes place in a flexible online format with access to lecture notes, practical assignments and materials. You can study at any convenient time without being tied to a fixed schedule. Live sessions with a teacher are also available to answer questions and provide additional explanations.",
    },
    {
      question: "What are requirements for admission to the course?",
      answer:
        "The course is designed for people with basic knowledge or experience in accounting. It is also important to have a command of the Russian language and at least basic knowledge of English for further professional growth. If you have a desire to study and develop in the Canadian accounting system, this is enough to start.",
    },
    {
      question: "Is it possible to take the course while outside Canada?",
      answer:
        "Yes, the course is completely online and accessible from anywhere in the world. You can study from your country before moving to be ready to work in Canada from day one. We offer a flexible schedule so that you can combine your studies with other commitments.",
    },
    {
      question: "How long does it take to complete the course?",
      answer:
        "The program is designed for about 40 hours of training. You can complete the course in 4-6 weeks if you devote several hours a week to classes. The flexible format allows you to adapt the learning process to your schedule in order to complete it at a convenient time for you.",
    },
  ];


  return (
    <section id="faq" className="relative">
      <div className="pb-12 text-center">
        <h1 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl">
          Questions and answers
        </h1>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl space-y-12">
            <div>
              <div className="space-y-2">
                {faqs01.map((faq, index) => (
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
      </div>
    </section>
  );
}
