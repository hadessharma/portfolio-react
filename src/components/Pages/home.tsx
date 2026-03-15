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
      <div className="hidden md:block fixed top-28 right-8 z-50">
        <button
          onClick={() => setIsDevMode(!isDevMode)}
          className="group relative flex items-center gap-2 rounded-full border border-cyan-500/30 bg-gray-900/90 px-3 py-2 shadow-md shadow-cyan-500/10 transition-all duration-300 hover:border-cyan-400/60 hover:bg-gray-800/95 hover:shadow-cyan-500/20"
          aria-label="Toggle Developer Mode"
        >
          <img
            src={devIcon}
            alt="Developer Mode"
            className={`w-8 h-8 transition-all duration-300 ${isDevMode ? "drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]" : "opacity-90 group-hover:scale-105"
              }`}
          />
          <span className="text-xs font-semibold tracking-wide text-cyan-300">
            {isDevMode ? "Exit" : "Terminal"}
          </span>

          <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-cyan-500/30 bg-gray-900 px-2 py-1 text-xs text-cyan-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            {isDevMode ? "Back to portfolio view" : "Open interactive developer terminal"}
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
