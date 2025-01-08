import React from "react";
import {
  programmingLanguages,
  toolsDatabase,
  frontend,
  cloudDevOps,
} from "../data/experienceData";
import ExperienceCard from "../Cards/experienceCard";

const Experience: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full overflow-auto pt-4">
        <div className="flex flex-col items-center py-4">
          <h2 className="text-center text-base font-semibold text-zinc-500">
            Explore My
          </h2>
          <h2 className="text-center text-5xl font-semibold text-zinc-950">
            Experiences
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-evenly px-5 md:px-20 h-auto">
          {/* <div className="flex justify-evenly px-20"> */}
          <ExperienceCard
            name="Programming Languages"
            logos={programmingLanguages}
          />
          <ExperienceCard name="Tools & Databases" logos={toolsDatabase} />
          <ExperienceCard name="Frontend" logos={frontend} />
          <ExperienceCard name="Cloud & DevOps" logos={cloudDevOps} />
        </div>
      </div>
    </>
  );
};

export default Experience;
