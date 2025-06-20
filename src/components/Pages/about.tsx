import React from "react";
import experienceIcon from "../../assets/experience.png";
import educationIcon from "../../assets/education.png";
import { useMediaQuery } from "react-responsive";

const About: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center min-h-screen px-4 md:px-40"
    >
      <div className="flex flex-col items-center py-4 mb-8 text-center">
        <h2 className="text-lg font-semibold text-slate-400">Get To Know More</h2>
        <h2 className="text-5xl font-bold text-slate-100">About Me</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
        {/* Left Section (Description) */}
        <div className="md:flex-1 max-w-xl text-center md:text-left md:pr-12 mb-8 md:mb-0">
          <p className="md:text-lg text-slate-300">
            I am a graduate student at Arizona State University with three years
            of work experience in Software Development and DevOps in the
            industry. I'm also passionate about building web applications and
            designing automated cloud infrastructure deployment platforms.
          </p>
        </div>

        {/* Right Section (Cards) */}
        <div className="flex md:flex-1 flex-col justify-center space-y-4 w-full max-w-md">
          <div className="flex items-center border border-gray-800 rounded-2xl p-4 bg-gray-900 shadow-lg">
            <img
              src={experienceIcon}
              alt="Experience Icon"
              className="w-8 h-8 mr-4 filter invert"
            />
            <div>
              <h3 className="text-lg font-semibold text-indigo-400">
                Experience
              </h3>
              <p className="text-slate-300">3 years, Software Engineer</p>
            </div>
          </div>
          <div className="flex flex-col border border-gray-800 rounded-2xl p-4 bg-gray-900 shadow-lg">
            <div className="flex items-center mb-2">
              <img
                src={educationIcon}
                alt="Education Icon"
                className="w-8 h-8 mr-4 filter invert"
              />
              <h3 className="text-lg font-semibold text-indigo-400">Education</h3>
            </div>
            <div className="pl-12">
              <p className="font-semibold text-slate-200">
                M.S. Computer Science
              </p>
              <p className="text-sm text-slate-400">
                Arizona State University, USA
              </p>
              <p className="mt-2 font-semibold text-slate-200">
                B.Tech. Computer Science
              </p>
              <p className="text-sm text-slate-400">SRM University, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
