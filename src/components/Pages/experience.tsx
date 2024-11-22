import React from "react";
import { Card, CardContent } from "@mui/material";
import { programmingLanguages, toolsDatabase } from "../data/experienceData";

const Experience: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center h-full flex-wrap pt-4 ">
        <div className="flex flex-col items-center py-4">
          <h2 className="text-center text-base font-semibold text-zinc-500">
            Explore My
          </h2>
          <h2 className="text-center text-5xl font-semibold text-zinc-950">
            Experiences
          </h2>
        </div>
        <div className="flex pt-4 md:flex-row sm:flex-row">
          <Card
            className="flex-1 mx-2 mb-4 sm:w-1/2 md:w-1/3 w-1/4"
            sx={{
              border: 1,
              borderRadius: 2.5,
            }}
          >
            <CardContent>
              <h2 className="text-center text-base sm:text-lg md:text-xl font-semibold text-zinc-500">
                Programming Languages
              </h2>
              <div className="flex flex-wrap justify-around p-4">
                {programmingLanguages.map((item) => (
                  <img
                    className="md:size-28 my-4 sm:w-auto sm:h-auto"
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
            className="w-1/4 mx-5"
            sx={{
              border: 1,
              borderRadius: 2.5,
              flex: "1 1 0px",
            }}
          >
            <CardContent>
              <h2 className="text-center text-2xl font-semibold text-zinc-500">
                Tools & Databases
              </h2>
              <div className="flex flex-wrap justify-around p-4">
                {toolsDatabase.map((item) => (
                  <img
                    className="size-28"
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
            className="w-1/4 mx-5"
            sx={{
              border: 1,
              borderRadius: 2.5,
              flex: "1 1 0px",
            }}
          >
            <CardContent>
              <h2 className="text-center text-2xl font-semibold text-zinc-500">
                Programming Languages
              </h2>
              <div className="flex flex-wrap justify-around p-4">
                {programmingLanguages.map((item) => (
                  <img
                    className="size-28 my-4"
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
            className="w-1/4 mx-5"
            sx={{
              border: 1,
              borderRadius: 2.5,
              flex: "1 1 0px",
            }}
          >
            <CardContent>
              <h2 className="text-center text-2xl font-semibold text-zinc-500">
                Programming Languages
              </h2>
              <div className="flex flex-wrap justify-around p-4">
                {programmingLanguages.map((item) => (
                  <img
                    className="size-28 my-4"
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
