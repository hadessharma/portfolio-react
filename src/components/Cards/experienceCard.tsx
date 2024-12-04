import React from "react";
import { ImageData } from "../data/experienceData";
interface CardProps {
  name: string;
  logos: ImageData[];
}
const ExperienceCard: React.FC<CardProps> = ({ name, logos }) => {
  return (
    <>
      <div className="flex flex-col w-1/5 border-black border rounded-2xl">
        <div className="flex justify-center text-2xl py-4">
          <h2 className="text-center">{name}</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 grow">
          {logos.map((item) => (
            <img src={item.img} alt={item.title} className=""></img>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
