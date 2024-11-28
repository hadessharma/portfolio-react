import React from "react";
import Card from "../cards";

// importing tictactoe
import tictacttoeImage1 from "../../assets/project/tictactoe/1.jpg";
// import tictacttoeImage2 from "../../assets/project/tictactoe/2.jpg";
// import tictacttoeImage3 from "../../assets/project/tictactoe/3.jpg";

// importing phishing detection
import phishingdetectionImage1 from "../../assets/project/phishing/1.png";
// import phishingdetectionImage2 from "../../assets/project/phishing/2.png";

// importing terraZure
import terraZureImage1 from "../../assets/project/terraZure/1.png";
// import terraZureImage2 from "../../assets/project/terraZure/2.png";
// import terraZureImage3 from "../../assets/project/terraZure/3.png";
// import terraZureImage4 from "../../assets/project/terraZure/4.png";

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
              Projects
            </h2>
          </div>
        </div>
        <div className="flex flex-col w-screen sm:flex-row md:space-x-10 md:space-y-0 sm:space-x-5 space-y-5 justify-center items-center px-10 overflow-auto hover:overflow-x-scroll">
          {/* card slider */}
          <Card img={tictacttoeImage1} app={true} />
          <Card img={phishingdetectionImage1} app={false} />
          <Card img={terraZureImage1} app={false} />
        </div>
      </div>
    </>
  );
};

export default Project;
