import React from "react";
import { ImageData } from "../data/experienceData";
interface CardProps {
  name: string;
  logos: ImageData[];
}
const ExperienceCard: React.FC<CardProps> = ({ name, logos }) => {
  return (
    <div className="paper-card flex flex-col h-full p-4 transition-all duration-300 hover:border-paper-accent/40 hover:-translate-y-1">
      <div className="flex justify-center text-2xl py-4">
        <h2 className="text-center text-paper-accent font-semibold">{name}</h2>
      </div>
      <div className="flex flex-wrap justify-around items-center gap-4 grow">
        {logos.map((item) => (
          <div
            key={item.title}
            className="flex items-center flex-col w-24 text-center group"
          >
            <div className="bg-white rounded-full p-2">
              <img
                src={item.img}
                alt={item.title}
                className="max-w-16 paper-icon transition-all duration-300 group-hover:-translate-y-0.5"
              ></img>
            </div>
            {item.showLabel && (
              <p className="mt-2 text-center text-paper-muted font-semibold transition-colors group-hover:text-paper-accent">
                {item.title}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
