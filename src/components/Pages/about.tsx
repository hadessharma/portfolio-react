import React from "react";
import { Card } from "@mui/material";

const About: React.FC = () => {
  return (
    <>
      <div className="flex items-center w-full h-full">
        <div className="flex flex-col flex-1 items-center">
          <p className="text-xl">Get to Know More</p>
          <h2 className="text-5xl font-bold">About Me</h2>
          <p className="text-xl text-justify">
            I am a graduate student at Arizona State University with three years
            of work experience in Software Development and DevOps in the
            industry. I'm also passionate about building web applications and
            designing automated cloud infrastructure deployment platforms.
          </p>
        </div>
        <div className="flex-col flex-1">
          <Card>sasd</Card>
          <Card>sadas</Card>
        </div>
      </div>
    </>
  );
};

export default About;
