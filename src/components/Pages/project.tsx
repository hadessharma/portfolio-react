import React from "react";

const Project: React.FC = () => {
  return (
    <>
      <div>
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
        <div className="flex px-10">
          {/* card slider */}
          <div className="flex border border-black rounded-2xl p-2">
            {/* card */}
            <div>
              <div>
                {/* image slider */}
                <img src="" alt="" />
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-center text-2xl font-semibold px-10">
                  Tic Tac Toe
                </h3>
                <div className="flex justify-evenly">
                  {/* Buttons */}
                  <div className="border border-black rounded-2xl p-3 min-w-28">
                    <a href="" className="block text-center">
                      GitHub
                    </a>
                  </div>
                  <div className="border border-black rounded-2xl p-3 min-w-28">
                    <a href="" className="block text-center">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
