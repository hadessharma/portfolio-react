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
      className="flex flex-col items-center justify-center min-h-screen px-5 md:px-20 py-16"
    >
      <div className="flex flex-col items-center py-4 mb-8">
        <h2 className="text-center text-lg font-semibold text-gray-400">
          Explore My
        </h2>
        <h2 className="text-center text-5xl font-bold font-baskerville text-gray-100">
          Experience
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch w-full gap-8">
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
