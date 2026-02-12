import React from "react";
import Terminal from "../Terminal/Terminal";
import StandardHome from "./StandardHome";
import devIcon from "../../assets/dev-icon.svg";

interface HomeProps {
  isDevMode: boolean;
  setIsDevMode: (value: boolean) => void;
}

const Home: React.FC<HomeProps> = ({ isDevMode, setIsDevMode }) => {
  return (
    <>
      {/* Developer Mode Toggle */}
      <div className="fixed top-24 right-4 z-50 md:top-28 md:right-8">
        <button
          onClick={() => setIsDevMode(!isDevMode)}
          className="group relative p-2 rounded-full transition-all duration-300 hover:bg-gray-800/50"
          aria-label="Toggle Developer Mode"
        >
          <img
            src={devIcon}
            alt="Developer Mode"
            className={`w-12 h-12 md:w-14 md:h-14 transition-all duration-300 ${isDevMode ? "drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" : "opacity-70 hover:opacity-100 grayscale hover:grayscale-0"
              }`}
          />

          {/* Tooltip */}
          <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 text-xs text-green-400 border border-green-500/30 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {isDevMode ? "Exit Terminal" : "Enter Terminal"}
          </span>
        </button>
      </div>

      {/* Main Content */}
      <div className={`flex flex-col items-center justify-center py-8 px-4 w-full ${isDevMode ? 'h-[550px] md:h-full' : 'min-h-[90vh]'}`}>
        {isDevMode ? <Terminal /> : <StandardHome />}
      </div>
    </>
  );
};

export default Home;
