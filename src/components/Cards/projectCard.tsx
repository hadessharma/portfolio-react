import React, { useState, useEffect, useRef } from "react";

interface CardProps {
  name: string;
  img: string;
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
  const [isInfo, setIsInfo] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleHover = () => {
    setIsInfo(!isInfo);
  };

  const handleClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      toggleHover();
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative">
      <div className="transition-transform duration-300 ease-in-out transform hover:scale-105 flex flex-col border border-black rounded-3xl p-4">
        {/* Card */}
        <div className="border border-black rounded-3xl">
          {/* Info Button */}
          <button
            className={`absolute top-2 right-2 flex items-center justify-center font-baskerville italic font-bold text-2xl bg-white border border-black w-8 h-8 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-black hover:text-white hover:border-white z-10
            ${info ? "" : " "}`}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            onClick={handleClick}
            disabled={isInfo}
          >
            i
          </button>
          <>
            {isInfo && (
              <div className="border border-black p-2 px-4 rounded-2xl absolute top-16 -left-5 -right-5 z-10 bg-white">
                {info.map((item, index) => (
                  <p key={index} className="text-center">
                    {item}
                  </p>
                ))}
              </div>
            )}
          </>
          {/* Image */}
          <img
            className={`rounded-3xl ${
              app ? "sm:max-w-52 md:max-w-72" : "sm:max-w-lg md:max-w-lg"
            }`}
            src={img}
            alt={name}
          />
        </div>
        <div className="flex flex-col space-y-2 pt-2">
          <h3 className="text-center text-2xl font-semibold px-10">{name}</h3>
          <div className="flex justify-evenly">
            {/* GitHub Button */}
            <div className="border min-w-28 border-zinc-400 rounded-2xl bg-zinc-800 text-white hover:bg-black transition delay-150 hover:delay-75">
              <button
                onClick={() => window.open(github)}
                className="w-full text-center p-3 text-sm"
              >
                GitHub
              </button>
            </div>
            {/* Dropdown Menu */}
            {demo && (
              <div
                className="relative"
                ref={dropdownRef}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div
                  className={`border border-black rounded-2xl min-w-28 bg-white hover:bg-black hover:text-white transition delay-150 hover:delay-75 cursor-pointer ${
                    isDropdownOpen ? "bg-gray-800" : " "
                  }`}
                >
                  <button className="w-full text-center p-3 text-sm">
                    Live Demo
                  </button>
                </div>
                {isDropdownOpen && (
                  <ul className="absolute mt-1 w-48 bg-white border border-gray-800 rounded-xl shadow-lg z-10">
                    {demo.map((item, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 text-sm  text-gray-700 hover:bg-black hover:text-white cursor-pointer rounded-xl text-center"
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
    </div>
  );
};

export default ProjectCard;
