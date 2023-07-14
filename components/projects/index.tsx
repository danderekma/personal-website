import Image from "next/image";

import CardGrid from "./CardGrid";
import Card from "./Card";

export default function Projects() {
  return (
    <div
      className="py-12 px-[15%] sm:py-24 sm:px-[20%] xl:mx-auto xl:max-w-screen-xl xl:px-0"
      id="projects"
    >
      <h1 className="py-6 font-sf-bold text-2xl transition-all duration-100 dark:text-white sm:text-4xl">
        Projects
      </h1>
      <CardGrid>
        <Card
          name="AggieExplorer"
          description="A full-stack web application developed to provide grading distributions and enrollment statistics for UC Davis students."
          image={
            <Image
              src="/images/aggie-explorer.jpeg"
              alt="aggie-explorer.jpeg"
              className="h-full w-full rounded-3xl object-cover object-left"
              width={3024}
              height={1673}
            />
          }
          link="https://codelabdavis.medium.com/aggieexplorer-605c9d67965c"
        />
        <Card
          name="UC Davis New Vietnam Studies Initiative"
          description="A landing page for the New Vietnam Studies Initiative at UC Davis created with Next.js."
          image={
            <Image
              src="/images/nvsi.svg"
              alt="nvsi.svg"
              className="h-full w-full rounded-3xl object-cover object-right"
              width={3024}
              height={1673}
            />
          }
          link="https://newvietnam.ucdavis.edu"
        />
        <Card
          name="CodeLab Training Tool"
          description="An internal training tool that allows associates to create and consume educational material and track personal progress."
          image={
            <div className="flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-r from-[#65DEF9] to-[#509DE5]">
              <Image
                src="/images/training-tool-cow.svg"
                alt="training-tool-cow.svg"
                className="h-[60%] w-auto rounded-3xl object-cover"
                width={3024}
                height={1673}
              />
            </div>
          }
          link="https://codelabdavis.medium.com"
        />
      </CardGrid>
    </div>
  );
}
