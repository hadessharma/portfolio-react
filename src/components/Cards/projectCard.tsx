import React, { useState, useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface CardProps {
  name: string;
  img: string[];
  app: boolean;
  github: string;
  demo?: { title: string; link: string }[];
  info: string[];
}

const ProjectCard: React.FC<CardProps> = ({
  name,
  img,
  app,
  github,
  demo,
  info,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex flex-col flex-1 basis-1/3 max-w-lg min-w-[300px] border-gray-800 border p-6 rounded-3xl bg-gray-900 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-500/30">
      <div className="embla rounded-2xl relative overflow-hidden" ref={emblaRef}>
        <div
          className={`embla__container flex rounded-2xl ${
            app ? "sm:max-w-52 md:max-w-72" : ""
          }`}
        >
          {img.map((value, index) => (
            <img
              key={index + value}
              className="w-full embla__slide object-cover"
              src={img[index]}
              alt={`${name} - ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-4 pt-4 grow">
        <h3 className="text-center text-2xl font-semibold text-indigo-400">
          {name}
        </h3>
        <div className="text-slate-300 text-center text-sm grow">
          {info.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="flex justify-center space-x-4 pt-2">
          {/* GitHub Button */}
          <button
            onClick={() => window.open(github)}
            className="min-w-28 text-center p-3 text-sm font-semibold border-2 border-slate-300 rounded-full text-slate-300 hover:bg-slate-300 hover:text-gray-950 transition-all duration-300"
          >
            GitHub
          </button>
          {/* Dropdown Menu */}
          {demo && (
            <div
              className="relative"
              ref={dropdownRef}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <button className="min-w-28 text-center p-3 text-sm font-semibold border-2 border-indigo-500 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300">
                Live Demo
              </button>
              {isDropdownOpen && (
                <ul className="absolute bottom-full mb-2 w-48 bg-gray-800 border border-gray-700 rounded-xl shadow-lg z-10">
                  {demo.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 text-sm text-slate-200 hover:bg-indigo-500 cursor-pointer rounded-xl text-center"
                      onClick={() => window.open(item.link)}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
