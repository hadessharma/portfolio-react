import React, { useState, useEffect } from "react";
import profilePic from "../../assets/profile-pic.png";

// importing icons
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";
import cvPDF from "../../assets/resume_DeepSharma.pdf";

const titles = [
  "Software Developer",
  "DevOps Engineer",
  "Full-Stack Developer",
  "Cloud Engineer",
];

const Home: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsFading(false);
      }, 500); // Half second for fade-out
    }, 3000); // 3 seconds per title

    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    window.open(cvPDF);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center h-5/6">
        <div className="basis-96 min-w-24 shrink">
          <img
            src={profilePic}
            alt="profile pic"
            className="p-2 rounded-full bg-gradient-to-br from-cyan-900 to-gray-950 shadow-2xl shadow-cyan-500/10"
          />
        </div>
        <div className="flex flex-col md:px-10 size-96 min-w-max justify-center items-center cursor-default">
          <h3 className="pt-2 text-lg text-gray-400">Hello I'm</h3>
          <h1 className="py-2 text-6xl font-bold text-gray-100">
            Deep Sharma
          </h1>
          <h2
            className={`py-2 text-3xl font-semibold text-cyan-400 mb-4 transition-opacity duration-500 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          >
            {titles[currentTitleIndex]}
          </h2>
          <div className="flex justify-center items-center space-x-4">
            <button
              className="px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 font-medium hover:bg-gray-800 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200"
              onClick={handleDownloadCV}
            >
              Download CV
            </button>
            <a
              href="#contact"
              className="px-6 py-3 bg-cyan-600 border border-cyan-600 rounded-lg text-white font-medium hover:bg-cyan-700 hover:border-cyan-700 transition-all duration-200"
            >
              Contact Info
            </a>
          </div>
          <div className="flex justify-center w-10 h-10 mt-6 space-x-4">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="mx-1 cursor-pointer transition-transform duration-200 filter brightness-0 invert hover:brightness-100"
              onClick={() => {
                window.open("https://www.linkedin.com/in/deepsharma993/");
              }}
            />
            <img
              src={githubIcon}
              alt="GitHub"
              className="mx-1 cursor-pointer transition-transform duration-200 filter brightness-0 invert hover:brightness-100"
              onClick={() => {
                window.open("https://github.com/hadessharma");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
