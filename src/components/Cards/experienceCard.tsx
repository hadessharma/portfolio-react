import React from "react";
import { ImageData } from "../data/experienceData";
interface CardProps {
  name: string;
  logos: ImageData[];
}
const ExperienceCard: React.FC<CardProps> = ({ name, logos }) => {
  return (
    <>
      <div className="flex flex-col flex-1 basis-1/5 min-w-[300px] border-gray-700 border p-6 rounded-3xl bg-gray-800/50 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30">
        <div className="flex justify-center text-2xl py-4">
          <h2 className="text-center text-blue-400 font-semibold">{name}</h2>
        </div>
        <div className="flex flex-wrap justify-around items-center gap-6 grow">
          {logos.map((item) => (
            <div
              key={item.title}
              className="flex items-center flex-col w-28 text-center group"
            >
              <img
                src={item.img}
                alt={item.title}
                className="max-w-20 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
              ></img>
              {item.showLabel && (
                <p className="mt-2 text-center text-gray-300 font-semibold group-hover:text-blue-400 transition-colors">
                  {item.title}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
