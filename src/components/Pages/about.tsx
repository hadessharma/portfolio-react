import React from "react";
import experienceIcon from "../../assets/experience.png";
import educationIcon from "../../assets/education.png";
import { useMediaQuery } from "react-responsive";

const About: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <div className="flex flex-col flex-wrap pb-4 md:flex-row items-center w-full h-auto md:h-5/6 md:px-40">
        <div className="flex flex-col md:flex-1 items-center px-10 mb-8 md:mb-0">
          <p className="text-base pb-5 font-light">Get to Know More</p>
          <h2 className="text-5xl font-bold">About Me</h2>
          <br />
          <p className="md:text-lg text-center font-light">
            I am a graduate student at Arizona State University with three years
            of work experience in Software Development and DevOps in the
            industry. I'm also passionate about building web applications and
            designing automated cloud infrastructure deployment platforms.
          </p>
        </div>
        <div className="flex md:flex-1 flex-col justify-center px-10 space-y-4 w-full md:m-0 max-w-2xl">
          <div className="flex flex-col items-center border border-black rounded-2xl p-4">
            <div className="pt-2">
              <img
                src={experienceIcon}
                alt="Experience Icon"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-sm md:text-lg font-semibold pb-2">
              Experience
            </h3>
            <p className="font-light">3 years</p>
            <p className="font-light">Software Engineer</p>
          </div>
          <div className="flex flex-col items-center border border-black rounded-2xl p-4">
            <div className="pt-2">
              <img
                src={educationIcon}
                alt="Experience Icon"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-sm md:text-lg font-semibold pb-2">Education</h3>

            {isMobile ? (
              <div className="flex items-center">
                <p className="text-sm md:text-lg px-4 font-semibold">M.S. CS</p>
                <p className="text-sm md:text-lg font-light">
                  Arizona State University
                </p>
              </div>
            ) : (
              <div className="flex items-center">
                <p className="text-sm md:text-lg px-4 font-semibold">
                  M.S. Computer Science
                </p>
                <p className="text-sm md:text-lg font-light">
                  Arizona State University, USA
                </p>
              </div>
            )}
            {isMobile ? (
              <div className="flex items-center">
                <p className="text-sm md:text-lg px-4 font-semibold">
                  B.Tech. CS
                </p>
                <p className="text-sm md:text-lg font-light">SRM University</p>
              </div>
            ) : (
              <div className="flex items-center">
                <p className="text-sm md:text-lg px-4 font-semibold">
                  B.Tech. Computer Science
                </p>
                <p className="text-sm md:text-lg font-light">
                  SRM University, India
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
