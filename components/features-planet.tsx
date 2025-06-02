import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  return (
    <section id="features" className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="mb-8 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-700/.8),transparent)1] md:text-6xl text-gray-300">
              The perfect course for you
            </h1>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-6 flex items-center space-x-2 text-gray-200">
                <span>We moved to Canada and faced difficulties in understanding local accounting and taxation standards.</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                In the course from SkillPeak Academy, you will master the specifics of the Canadian accounting system and terminology in Russian. We will help you adapt quickly and become a confident specialist in the new labor market.
              </p>
            </article>
            <article>
              <h3 className="mb-6 flex items-center space-x-2 text-gray-200">
                <span>You have experience in accounting, but you are not sure about using Canadian accounting software.</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                We provide practical training on working with popular accounting programs in Canada. This will give you confidence and a competitive advantage when applying for a job.
              </p>
            </article>
            <article>
              <h3 className="mb-6 flex items-center space-x-2 text-gray-200">
                <span>You want to start a career in Canada, but you are worried about the lack of English and professional terminology.</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                All course materials and lectures are presented in Russian, which will allow you to easily understand complex concepts without additional language barriers. You will be able to focus on mastering skills rather than translating terms.
              </p>
            </article>
            <article>
              <h3 className="mb-6 flex items-center space-x-2 text-gray-200">
                <span>Your accounting knowledge is outdated and you want to brush up on your skills before entering the Canadian job market.</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                The course includes a block on the basics of accounting, which will help you quickly restore and update your knowledge, preparing for the requirements of employers in Canada.
              </p>
            </article>
            <article>
              <h3 className="mb-6 flex items-center space-x-2 text-gray-200">
                <span>You are just starting to adapt to life in Canada and need a flexible learning schedule.</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Our course is available online, which allows you to study at your convenience, from anywhere in the world. This is especially important for people who are simultaneously settling into a new place and continuing their studies.
              </p>
            </article>
            <article>
              <h3 className="mb-6 flex items-center space-x-2 text-gray-200">
                <span>You need to complete your training quickly and get to work.</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Our intensive course is designed for 40 hours so that you can gain knowledge and start working as soon as possible. A flexible schedule will allow you to start earning faster in a few weeks.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
