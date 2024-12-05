import React from "react";

interface CardProps {
  name: string;
  img: string;
  app: boolean;
  github: string;
  demo?: string[];
}
const ProjectCard: React.FC<CardProps> = ({ name, img, app, github, demo }) => {
  return (
    <div className="relative">
      <div className="transition-transform duration-300 ease-in-out transform hover:scale-105 flex flex-col border border-black rounded-3xl p-4">
        {/* card */}
        <div className="border border-black rounded-3xl">
          {/* image slider */}
          <button className="absolute top-2 right-2 flex items-center justify-center font-baskerville italic font-bold text-2xl bg-white border border-black w-8 h-8 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-black hover:text-white hover:border-white z-10">
            i
          </button>
          <img
            className={`rounded-3xl ${
              app ? "sm:max-w-52 md:max-w-72" : "sm:max-w-lg md:max-w-lg"
            }`}
            //   "max-w-72 rounded-3xl"
            src={img}
            alt="Tic Tac Toe Image 1"
          />
        </div>
        <div className="flex flex-col space-y-2 pt-2">
          <h3 className="text-center text-2xl font-semibold px-10">{name}</h3>
          <div className="flex justify-evenly">
            {/* Buttons */}
            <div className="border min-w-28 border-zinc-400 rounded-2xl bg-zinc-800 text-white hover:bg-black transition delay-150 hover:delay-75">
              <a href={github} className="block text-center p-3">
                GitHub
              </a>
            </div>
            <>
              {demo && (
                <div className="border border-black rounded-2xl min-w-28 hover:bg-black hover:text-white transition delay-150 hover:delay-75">
                  <a href="" className="block text-center p-3">
                    Live Demo
                  </a>
                </div>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
