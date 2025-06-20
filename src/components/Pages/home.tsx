import React from "react";
import profilePic from "../../assets/profile-pic.png";

// importing icons
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";
import cvPDF from "../../assets/resume_DeepSharma.pdf";

const Home: React.FC = () => {
  const handleDownloadCV = () => {
    window.open(cvPDF);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center h-5/6">
        <div className="basis-96 min-w-24 shrink">
          <img
            src={profilePic}
            alt="profile pic"
            className="p-4 rounded-full ring-4 ring-blue-500/20 shadow-2xl"
          />
        </div>
        <div className="flex flex-col md:px-10 size-96 min-w-max justify-center items-center cursor-default">
          <h3 className="pt-2 text-lg text-gray-400">Hello I'm</h3>
          <h1 className="py-2 text-6xl font-bold font-baskerville text-gray-100">
            Deep Sharma
          </h1>
          <h2 className="py-2 text-3xl font-semibold text-blue-400 mb-4">
            Software Developer
          </h2>
          <div className="flex justify-center items-center space-x-4">
            <button
              className="px-6 py-3 w-full min-w-36 border-2 border-blue-500 rounded-full text-blue-400 font-semibold hover:bg-blue-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              onClick={handleDownloadCV}
            >
              Download CV
            </button>
            <a
              href="#contact"
              className="px-6 py-3 w-full min-w-36 border-2 border-blue-500 rounded-full bg-blue-500 text-gray-900 font-semibold flex items-center justify-center hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Contact Info
            </a>
          </div>
          <div className="flex justify-center w-10 h-10 mt-6 space-x-4">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="mx-1 cursor-pointer hover:scale-110 transition-transform duration-200 filter brightness-0 invert hover:brightness-100 hover:invert-0"
              onClick={() => {
                window.open("https://www.linkedin.com/in/deepsharma993/");
              }}
            />
            <img
              src={githubIcon}
              alt="GitHub"
              className="mx-1 cursor-pointer hover:scale-110 transition-transform duration-200 filter brightness-0 invert hover:brightness-100 hover:invert-0"
              onClick={() => {
                window.open("https://github.com/hadessharma");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
