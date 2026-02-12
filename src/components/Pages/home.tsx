import React, { useState } from "react";
import Terminal from "../Terminal/Terminal";
import StandardHome from "./StandardHome";

const Home: React.FC = () => {
  const [isDevMode, setIsDevMode] = useState(false);

  return (
    <>
      {/* Developer Mode Toggle */}
      <div className="fixed top-24 right-4 z-50 md:top-28 md:right-8">
        <button
          onClick={() => setIsDevMode(!isDevMode)}
          className={`
            px-4 py-2 rounded-full font-mono text-sm font-bold shadow-lg transition-all duration-300 border
            ${isDevMode
              ? "bg-green-500/20 text-green-400 border-green-500 hover:bg-green-500/30"
              : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white"
            }
          `}
        >
          {isDevMode ? ">_ Standard Mode" : "{ Developer Mode }"}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center py-8 px-4 min-h-[90vh] w-full">
        {isDevMode ? <Terminal /> : <StandardHome />}
      </div>
    </>
  );
};

export default Home;
