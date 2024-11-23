import React from "react";
import { Card, CardContent } from "@mui/material";
import {
  programmingLanguages,
  toolsDatabase,
  frontend,
  cloudDevOps,
} from "../data/experienceData";

const Experience: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full md:h-full sm:h-screen overflow-auto pt-4">
        <div className="flex flex-col items-center py-4">
          <h2 className="text-center text-base font-semibold text-zinc-500">
            Explore My
          </h2>
          <h2 className="text-center text-5xl font-semibold text-zinc-950">
            Experiences
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap p-4 w-full h-auto">
          <Card
            className="flex-grow flex-1 w-full lg:h-full md:h-full sm:w-1/2 md:w-1/3 lg:w-1/4 md:mx-4 my-4"
            sx={{
              border: 1,
              borderRadius: 2.5,
            }}
          >
            <CardContent>
              <h2 className="text-center text-lg sm:text-xl lg:text-2xl font-semibold text-zinc-500">
                Programming Languages
              </h2>
              <div className="flex flex-wrap justify-around p-4">
                {programmingLanguages.map((item) => (
                  <img
                    className="w-auto h-auto sm:h-24 md:h-28 lg:h-32 max-w-36 p-2"
                    srcSet={`${item.img}`}
                    src={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                  ></img>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card
            className="flex-grow flex-1 w-full lg:h-full md:h-full sm:w-1/2 md:w-1/3 lg:w-1/4 md:mx-4 my-4"
            sx={{
              border: 1,
              borderRadius: 2.5,
            }}
          >
            <CardContent>
              <h2 className="text-center text-lg sm:text-xl lg:text-2xl font-semibold text-zinc-500">
                Tools & Databases
              </h2>
              <div className="flex flex-wrap justify-around p-4">
                {toolsDatabase.map((item) => (
                  <img
                    className="w-auto h-auto sm:h-24 md:h-28 lg:h-32 max-w-36 p-2"
                    srcSet={`${item.img}`}
                    src={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                  ></img>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card
            className="flex-grow flex-1 w-full lg:h-full md:h-full sm:w-1/2 md:w-1/3 lg:w-1/4 md:mx-4 my-4"
            sx={{
              border: 1,
              borderRadius: 2.5,
            }}
          >
            <CardContent>
              <h2 className="text-center text-lg sm:text-xl lg:text-2xl font-semibold text-zinc-500">
                Frontend
              </h2>
              <div className="flex flex-wrap justify-around p-4">
                {frontend.map((item) => (
                  <img
                    className="w-auto h-auto sm:h-24 md:h-28 lg:h-32 max-w-36 p-2"
                    srcSet={`${item.img}`}
                    src={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                  ></img>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card
            className="flex-grow flex-1 w-full lg:h-full md:h-full sm:w-1/2 md:w-1/3 lg:w-1/4 md:mx-4 my-4"
            sx={{
              border: 1,
              borderRadius: 2.5,
            }}
          >
            <CardContent>
              <h2 className="text-center text-lg sm:text-xl lg:text-2xl font-semibold text-zinc-500">
                Cloud and DevOps
              </h2>
              <div className="flex flex-wrap justify-around p-4">
                {cloudDevOps.map((item) => (
                  <img
                    className="w-auto h-auto sm:h-24 md:h-28 lg:h-32 max-w-36 p-2"
                    srcSet={`${item.img}`}
                    src={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                  ></img>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Experience;
