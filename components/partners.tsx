import Image from "next/image";

const partners = [
  {
    name: "FY",
    logo: "/images/partners/FY.png",
    url: "https://placeholder.com/partner1"
  },
  {
    name: "Svalbard",
    logo: "/images/partners/Svalbard.png",
    url: "https://placeholder.com/partner2"
  }
];

export default function Partners() {
  return (
    <section className="relative" data-aos="zoom-y-out" data-aos-delay="100">
      <div className="text-center w-full max-w-3xl mx-auto aos-init aos-animate">
        <h2 className="py-2 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl">
          Our Partners
        </h2>
      </div>
      <div className="relative mx-auto flex max-w-[94rem] justify-center">
        {/* Row */}
        <div className="flex w-full justify-center items-center gap-16 py-8">
          {/* Partner Logos */}
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
              tabIndex={0}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain mb-2 transition-transform duration-300 group-hover:scale-110 hover:scale-110"
                priority
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 