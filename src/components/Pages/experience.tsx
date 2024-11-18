import React from "react";
import {
  Card,
  CardContent,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import programmingLanguages from "../data/experienceData";

const Experience: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center h-full flex-wrap ">
        <div className="flex flex-col items-center">
          <Typography variant="body1">Explore My</Typography>
          <Typography variant="h3">Experiences</Typography>
        </div>
        <div className="flex h-full">
          <Card
            className="w-1/4 mx-5"
            sx={{
              border: 1,
              borderRadius: 2.5,
            }}
          >
            <CardContent>
              <Typography variant="h4" align="center" sx={{ py: 4 }}>
                Programming Languages
              </Typography>
              <div className="flex flex-wrap justify-around py-4">
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
          <Card className="w-1/4 mx-5">
            <CardContent>
              <Typography variant="h6">Programming Languages</Typography>
              <div className="flex flex-wrap justify-center">
                {programmingLanguages.map((item) => (
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
          <Card className="w-1/4 mx-5">
            <CardContent>
              <Typography variant="h6">Programming Languages</Typography>
              <div className="flex flex-wrap justify-center">
                {programmingLanguages.map((item) => (
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
          <Card className="w-1/4 mx-5">
            <CardContent>
              <Typography variant="h6">Programming Languages</Typography>
              <div className="flex flex-wrap justify-center">
                {programmingLanguages.map((item) => (
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
        </div>
      </div>
    </>
  );
};

export default Experience;
