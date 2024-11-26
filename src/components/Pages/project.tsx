import React from "react";

const Project: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full md:h-full sm:h-screen overflow-auto pt-4">
        <div className="flex flex-col items-center py-4">
          <h2 className="text-center text-base font-semibold text-zinc-500">
            Browse My Recent
          </h2>
          <h2 className="text-center text-5xl font-semibold text-zinc-950">
            Experiences
          </h2>
        </div>
      </div>
    </>
  );
};

export default Project;
