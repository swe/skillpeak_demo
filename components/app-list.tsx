import AppCard from "@/components/app-card";
import IntegrationImg01 from "@/public/images/integration-01.svg";
import IntegrationImg02 from "@/public/images/integration-02.svg";
import IntegrationImg03 from "@/public/images/integration-03.svg";
import IntegrationImg04 from "@/public/images/integration-04.svg";
import IntegrationImg05 from "@/public/images/integration-05.svg";
import IntegrationImg06 from "@/public/images/integration-06.svg";
import IntegrationImg07 from "@/public/images/integration-07.svg";
import IntegrationImg08 from "@/public/images/integration-08.svg";
import IntegrationImg09 from "@/public/images/integration-09.svg";
import IntegrationImg10 from "@/public/images/integration-10.svg";
import IntegrationImg11 from "@/public/images/integration-11.svg";
import IntegrationImg12 from "@/public/images/integration-12.svg";
import IntegrationImg13 from "@/public/images/integration-13.svg";
import IntegrationImg14 from "@/public/images/integration-14.svg";
import IntegrationImg15 from "@/public/images/integration-15.svg";
import IntegrationImg16 from "@/public/images/integration-16.svg";
import IntegrationImg17 from "@/public/images/integration-17.svg";
import IntegrationImg18 from "@/public/images/integration-18.svg";
import IntegrationImg19 from "@/public/images/integration-19.svg";
import IntegrationImg20 from "@/public/images/integration-20.svg";
import IntegrationImg21 from "@/public/images/integration-21.svg";

export default function AppList() {
  const apps01 = [
    {
      name: "The basics of accounting",
      description:
        "We will start by updating and consolidating your knowledge of basic accounting principles. This section will help you remember and structure basic accounting concepts, preparing you to master more complex topics specific to Canada and adapt to local standards.",
      image: IntegrationImg01,
      link: "#0",
      badge: true,
    },
    {
      name: "Canadian Standards and Terms",
      description:
        "The course includes a detailed study of Canadian accounting standards and specific terminology. You will learn about the key differences between Canadian and international practices, which will allow you to work confidently in accordance with local requirements and standards.",
      image: IntegrationImg02,
      link: "#0",
    },
    {
      name: "Software",
      description:
        "Get hands-on experience working with popular accounting software in Canada. We will provide you with all the skills you need to use the software, which will give you a competitive advantage in employment.",
      image: IntegrationImg03,
      link: "#0",
      badge: true,
    },
    {
      name: "Taxes",
      description:
        "The blog materials will help you understand the tax legislation of Canada. You will learn how to fill out tax returns, understand tax reports and understand the key tax obligations of Canadian companies, which is an important skill for working in public practice.",
      image: IntegrationImg04,
      link: "#0",
    },
  ];

  return (
    <section id="apps" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          <div className="space-y-10">
            {/* Section #1 */}
            <section>
              <div className="pb-12 text-center">
                <h1 className="mb-6 text-5xl font-bold md:text-6xl text-white">
                  About the course structure
                </h1>
              </div>

              <div className="grid gap-4 sm:grid-cols-6 md:gap-6 lg:grid-cols-2">
                {apps01.map((app, index) => (
                  <div key={index} className="group">
                    <AppCard app={app}>{app.description}</AppCard>
                  </div>
                ))}
              </div>
            </section>
          </div>

        </div>
      </div>
    </section>
  );
}
