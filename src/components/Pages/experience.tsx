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
    <div
      id="experience"
      className="flex flex-col items-center justify-center min-h-screen px-5 md:px-20"
    >
      <div className="flex flex-col items-center py-4">
        <h2 className="text-center text-base font-semibold text-zinc-500">
          Explore My
        </h2>
        <h2 className="text-center text-5xl font-semibold text-zinc-950">
          Experiences
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-evenly items-center w-full space-y-5 sm:space-y-0">
        <ExperienceCard
          name="Programming Languages"
          logos={programmingLanguages}
        />
        <ExperienceCard name="Tools & Databases" logos={toolsDatabase} />
        <ExperienceCard name="Frontend" logos={frontend} />
        <ExperienceCard name="Cloud & DevOps" logos={cloudDevOps} />
      </div>
    </div>
  );
};

export default Experience;
