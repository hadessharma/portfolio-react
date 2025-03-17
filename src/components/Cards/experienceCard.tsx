import React from "react";
import { ImageData } from "../data/experienceData";
interface CardProps {
  name: string;
  logos: ImageData[];
}
const ExperienceCard: React.FC<CardProps> = ({ name, logos }) => {
  return (
    <>
      <div className="flex flex-col md:w-1/5 border-black border my-5 p-4 rounded-2xl">
        <div className="flex justify-center text-2xl py-4">
          <h2 className="text-center text-zinc-500 font-semibold">{name}</h2>
        </div>
        <div className="flex flex-wrap justify-around items-center gap-4 grow">
          {logos.map((item) => (
            <img
              key={item.title}
              src={item.img}
              alt={item.title}
              className="max-w-28"
            ></img>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
