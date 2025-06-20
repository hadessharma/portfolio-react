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
            className="p-2 rounded-full bg-gradient-to-br from-indigo-900 to-gray-950 shadow-2xl shadow-indigo-500/10"
          />
        </div>
        <div className="flex flex-col md:px-10 size-96 min-w-max justify-center items-center cursor-default">
          <h3 className="pt-2 text-lg text-slate-400">Hello I'm</h3>
          <h1 className="py-2 text-6xl font-bold text-slate-100">
            Deep Sharma
          </h1>
          <h2 className="py-2 text-3xl font-semibold text-indigo-400 mb-4">
            Software Developer
          </h2>
          <div className="flex justify-center items-center space-x-4">
            <button
              className="px-6 py-3 w-full min-w-36 border-2 border-slate-300 rounded-full text-slate-300 font-semibold hover:bg-slate-300 hover:text-gray-950 transition-all duration-300 transform hover:scale-105"
              onClick={handleDownloadCV}
            >
              Download CV
            </button>
            <a
              href="#contact"
              className="px-6 py-3 w-full min-w-36 border-2 border-indigo-500 rounded-full bg-indigo-500 text-white font-semibold flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 hover:scale-105 transition-all duration-300"
            >
              Contact Info
            </a>
          </div>
          <div className="flex justify-center w-10 h-10 mt-6 space-x-4">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="mx-1 cursor-pointer transition-transform duration-200 filter brightness-0 invert hover:brightness-100"
              onClick={() => {
                window.open("https://www.linkedin.com/in/deepsharma993/");
              }}
            />
            <img
              src={githubIcon}
              alt="GitHub"
              className="mx-1 cursor-pointer transition-transform duration-200 filter brightness-0 invert hover:brightness-100"
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
