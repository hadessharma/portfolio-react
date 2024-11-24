import React from "react";
import experienceIcon from "../../assets/experience.png";
import educationIcon from "../../assets/education.png";

const About: React.FC = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center w-full h-full md:px-40">
        <div className="flex flex-col flex-1 items-center">
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
        <div className="flex flex-1 flex-col px-10 space-y-4">
          <div className="flex flex-col items-center border border-black rounded-2xl p-2 w-full">
            <img
              src={experienceIcon}
              alt="Experience Icon"
              className="w-8 h-8"
            />
            <h3 className="text-lg font-semibold">Experience</h3>
            <p className="font-light">3 years</p>
            <p className="font-light">Software Engineer</p>
          </div>
          <div className="flex flex-col items-center border border-black rounded-2xl p-2">
            <img
              src={educationIcon}
              alt="Experience Icon"
              className="w-8 h-8"
            />
            <h3 className="text-lg font-semibold">Education</h3>
            <p className="font-light">3 years</p>
            <p className="font-light">Software Engineer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
