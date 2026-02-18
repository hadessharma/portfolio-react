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
      className="flex flex-col items-center justify-start min-h-full px-4 md:px-8 py-8 pb-20 md:pb-8"
    >
      <div className="flex flex-col items-center py-4 mb-8 shrink-0">
        <h2 className="text-center text-sm md:text-lg font-semibold text-slate-400">
          Explore My
        </h2>
        <h2 className="text-center text-4xl md:text-6xl font-bold text-slate-100">
          Skills
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl shrink-0">
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
