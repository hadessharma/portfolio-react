import React from "react";

interface CardProps {
  img: string;
  app: boolean;
}
const Card: React.FC<CardProps> = ({ img, app }) => {
  return (
    <>
      <div className="transition-transform duration-300 ease-in-out transform hover:scale-105 flex flex-col border border-black rounded-2xl p-4">
        {/* card */}

        <div className="border border-black rounded-2xl">
          {/* image slider */}
          <img
            className={`rounded-2xl ${
              app ? "sm:max-w-52 md:max-w-72" : "sm:max-w-lg md:max-w-lg"
            }`}
            //   "max-w-72 rounded-2xl"
            src={img}
            alt="Tic Tac Toe Image 1"
          />
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
    </>
  );
};

export default Card;
