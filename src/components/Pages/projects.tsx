import React from "react";
import ProjectCard from "../Cards/projectCard";

// importing tictactoe
import tictacttoeImage1 from "../../assets/project/tictactoe/1.jpg";
import tictacttoeImage2 from "../../assets/project/tictactoe/2.jpg";
import tictacttoeImage3 from "../../assets/project/tictactoe/3.jpg";

// importing phishing detection
import phishingdetectionImage1 from "../../assets/project/phishing/1.png";
import phishingdetectionImage2 from "../../assets/project/phishing/2.png";

// importing terraZure
import terraZureImage1 from "../../assets/project/terraZure/1.png";
import terraZureImage2 from "../../assets/project/terraZure/2.png";
import terraZureImage4 from "../../assets/project/terraZure/4.png";

const Project: React.FC = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col flex-none items-center w-full md:h-full overflow-auto pt-4">
          <div className="flex flex-col items-center py-4">
            <h2 className="text-center text-base font-semibold text-zinc-500">
              Browse My Recent
            </h2>
            <h2 className="text-center text-5xl font-semibold text-zinc-950">
              Projects
            </h2>
          </div>
        </div>
        <div className="flex flex-col grow w-screen sm:flex-row md:space-x-14 md:space-y-0 sm:space-x-5 space-y-5 justify-center items-center px-10">
          {/* <div className="flex flex-col grow w-screen sm:flex-row md:space-x-10 md:space-y-0 sm:space-x-5 space-y-5 justify-center items-center px-10 overflow-auto hover:overflow-x-scroll"> */}
          {/* card slider */}
          <ProjectCard
            name="Tic Tac Toe"
            img={[tictacttoeImage1, tictacttoeImage2, tictacttoeImage3]}
            app={true}
            github="https://github.com/hadessharma/TicTacToe"
            demo={[
              {
                title: "Bluetooth Multiplayer",
                link: "https://www.youtube.com/watch?v=TWcV-bMbiUk",
              },
              {
                title: "vs AI",
                link: "https://www.youtube.com/watch?v=8V81xjbQjyY",
              },
            ]}
            info={[
              "This project develops a Tic-Tac-Toe app for Android, featuring an AI opponent that uses the Minimax algorithm with alpha-beta pruning for optimized gameplay across three difficulty levels: Easy, Medium, and Hard.",
            ]}
          />
          <ProjectCard
            name="Phishing Detection"
            img={[phishingdetectionImage1, phishingdetectionImage2]}
            app={false}
            github="https://github.com/shoviknandy/Phishing-detection---ML"
            info={[
              "This project aims to detect phishing URLs using advanced machine learning techniques. We compare and contrast different algorithms to identify the most effective approach in phishing detection.",
            ]}
          />
          <ProjectCard
            name="TerraZure"
            img={[terraZureImage1, terraZureImage2, terraZureImage4]}
            app={false}
            github="https://github.com/hadessharma/terraZure"
            info={[
              "TerraZure enables users to easily deploy and manage cloud resources through a user-friendly graphical interface, without needing in-depth knowledge of the underlying Terraform technology. The platform integrates with multiple cloud providers, allowing authenticated deployment across different environments. Users can customize cloud deployments through simple front-end forms, which directly feed into Terraform's automation modules.",
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Project;
