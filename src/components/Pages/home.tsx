import React from "react";
import Terminal from "../Terminal/Terminal";

const Home: React.FC = () => {
  return (
    <>
      {/* Hero / Terminal Section */}
      <div className="flex flex-col items-center justify-center py-8 px-4 min-h-[90vh]">
        <Terminal />
      </div>
    </>
  );
};

export default Home;
