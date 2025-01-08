import React from "react";
import experienceIcon from "../../assets/experience.png";
import educationIcon from "../../assets/education.png";

const About: React.FC = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center w-full h-5/6 md:px-40">
        <div className="flex flex-col flex-1 items-center px-10">
          <p className="text-base pb-5 font-light">Get to Know More</p>
          <h2 className="text-5xl font-bold">About Me</h2>
          <br />
          <p className="text-lg text-center font-light">
            I am a graduate student at Arizona State University with three years
            of work experience in Software Development and DevOps in the
            industry. I'm also passionate about building web applications and
            designing automated cloud infrastructure deployment platforms.
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-center px-10 space-y-4 w-full sm: -mt-24 md:m-0 max-w-2xl">
          <div className="flex flex-col items-center border border-black rounded-2xl p-4">
            <div className="pt-2">
              <img
                src={experienceIcon}
                alt="Experience Icon"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-lg font-semibold pb-2">Experience</h3>
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
            <h3 className="text-lg font-semibold pb-2">Education</h3>
            <div className="flex">
              <p className="px-4 font-semibold">M.S. Computer Science</p>
              <p className="font-light">Arizona State University, USA</p>
            </div>
            <div className="flex">
              <p className="px-4 font-semibold">B.Tech. Computer Science</p>
              <p className="font-light">SRM University, India</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
