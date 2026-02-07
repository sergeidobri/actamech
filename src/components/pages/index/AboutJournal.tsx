import SectionTitle from "@/components/ui/SectionTitle";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutJournal() {
  return (
    <>
      <SectionTitle title="About Journal" classNameTitle="text-accent" />

      <div className="text-left-border flex flex-col gap-y-4 lg:grid lg:grid-flow-row-dense lg:grid-cols-4">
        <div className="col-span-3">
          <div className="flex flex-col justify-between gap-x-8 lg:flex-row gap-y-4">
            <p className="font-semibold text-justify">
              Acta Mechanica et Imperium is a peer review electronic journal
              published 4 times per year.
            </p>
            <p className="font-semibold text-justify">
              The journal is focused on publishing original high-quality
              research articles related to mechanics and control, covering a
              wide range of subject areas related to modern research and
              development in this field.
            </p>
          </div>
          <p className="text-justify">
            In addition to regular papers and review articles, the journal
            publishes select special issues and conference proceedings on hot
            topic, covering the following subject areas (but not limited to):
            space flight Mechanics, space operations and support, small
            satellite missions, earth observations, space sensors and actuators,
            deep space exploration, space materials and structures, space power
            and propulsion, space policy, law and economics. Particular
            attention is given to articles devoted to the application of AIML
            technologies in above mentioned fields, including optimization and
            automation of control processes, research and development of
            up-to-date robotic system, exploration and extraction of minerals on
            Earth and in space.
          </p>
        </div>
        <div className="lg:col-span-1 relative w-full h-[300px] lg:h-full">
          <Image
            src="/images/index/indexAboutImage.png"
            alt="About"
            fill
            className="object-contain my-auto mx-auto"
          />
        </div>
      </div>

      <Link
        href="/about/aims-and-scope"
        className="ml-auto w-fit text-secondary hover:text-accent font-bold flex flex-row items-center transition-colors
      duration-150 ease-in-out group underline-on-hover"
      >
        <span>READ MORE</span>
        <Play
          size={10}
          fill="currentColor"
          className="ml-1 group-hover:stroke-accent transition-colors duration-150 ease-in-out"
        />
      </Link>
    </>
  );
}
