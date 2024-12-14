import React, { useState, useEffect, useRef } from "react";

interface CardProps {
  name: string;
  img: string[]; // Accept a list of images
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
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // Track the current image index
  const [isFading, setIsFading] = useState<boolean>(false); // State to trigger fade animation
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

  // Automatic Image Loop with Fade Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Trigger fade-out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === img.length - 1 ? 0 : prevIndex + 1
        );
        setIsFading(false); // Trigger fade-in after image change
      }, 500); // Match fade duration
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [img]);

  return (
    <div className="relative">
      <div className="transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg flex flex-col border border-gray-500 rounded-3xl p-4">
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
        {isInfo && (
          <div className="border border-black p-2 px-4 rounded-2xl absolute top-16 -left-5 -right-5 z-10 bg-white">
            {info.map((item, index) => (
              <p key={index} className="text-center">
                {item}
              </p>
            ))}
          </div>
        )}
        {/* Image Carousel */}
        <div className="border border-gray-500 rounded-3xl relative overflow-hidden">
          <img
            className={`absolute inset-0 w-full h-auto transition-opacity duration-500 ease-in-out ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
            src={img[currentImageIndex]}
            alt={`${name} - ${currentImageIndex + 1}`}
          />
        </div>
        <div className="flex flex-col space-y-2 pt-2">
          <h3 className="text-center text-2xl font-semibold px-10">{name}</h3>
          <div className="flex justify-evenly">
            {/* GitHub Button */}
            <div className="border min-w-28 border-gray-500 rounded-2xl bg-zinc-800 text-white hover:bg-black transition delay-150 hover:delay-75">
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
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white cursor-pointer rounded-xl text-center"
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
