import React from "react";
import Card from "../cards";

// importing tictactoe
import tictacttoeImage1 from "../../assets/project/tictactoe/1.jpg";
import tictacttoeImage2 from "../../assets/project/tictactoe/2.jpg";
import tictacttoeImage3 from "../../assets/project/tictactoe/3.jpg";

// importing phishing detection
import phishingdetectionImage1 from "../../assets/project/phishing/1.png";

const Project: React.FC = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col items-center w-full md:h-full overflow-auto pt-4">
          <div className="flex flex-col items-center py-4">
            <h2 className="text-center text-base font-semibold text-zinc-500">
              Browse My Recent
            </h2>
            <h2 className="text-center text-5xl font-semibold text-zinc-950">
              Experiences
            </h2>
          </div>
        </div>
        <div className="flex px-10 space-x-10 sm:flex-col md:flex-row">
          {/* card slider */}
          <Card img={tictacttoeImage1} app={true} />
          <Card img={phishingdetectionImage1} app={false} />
        </div>
      </div>
    </>
  );
};

export default Project;
