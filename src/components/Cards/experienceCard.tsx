import React from "react";
import { ImageData } from "../data/experienceData";
interface CardProps {
  name: string;
  logos: ImageData[];
}
const ExperienceCard: React.FC<CardProps> = ({ name, logos }) => {
  return (
    <>
      <div className="flex flex-col flex-1 basis-1/5 min-w-[300px] border-gray-800 border p-6 rounded-3xl bg-gray-900 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-500/30">
        <div className="flex justify-center text-2xl py-4">
          <h2 className="text-center text-indigo-400 font-semibold">{name}</h2>
        </div>
        <div className="flex flex-wrap justify-around items-center gap-6 grow">
          {logos.map((item) => (
            <div
              key={item.title}
              className="flex items-center flex-col w-28 text-center group"
            >
              <div className="bg-white rounded-full p-2">
                <img
                  src={item.img}
                  alt={item.title}
                  className="max-w-16 transition-all duration-300 group-hover:scale-110"
                ></img>
              </div>
              {item.showLabel && (
                <p className="mt-2 text-center text-slate-300 font-semibold transition-colors group-hover:text-indigo-400">
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
