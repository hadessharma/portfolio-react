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
    <div
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen px-4 md:px-20"
    >
      <div className="flex flex-col items-center py-4 mb-8">
        <h2 className="text-center text-lg font-semibold text-slate-400">
          Browse My Recent
        </h2>
        <h2 className="text-center text-5xl font-bold text-slate-100">
          Projects
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap justify-center items-stretch w-full gap-8">
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
          name="TerraZure"
          img={[terraZureImage1, terraZureImage2, terraZureImage4]}
          app={false}
          github="https://github.com/hadessharma/terraZure"
          info={[
            "TerraZure enables users to easily deploy and manage cloud resources through a user-friendly graphical interface, without needing in-depth knowledge of the underlying Terraform technology. The platform integrates with multiple cloud providers, allowing authenticated deployment across different environments. Users can customize cloud deployments through simple front-end forms, which directly feed into Terraform's automation modules.",
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
      </div>
    </div>
  );
};

export default Project;
