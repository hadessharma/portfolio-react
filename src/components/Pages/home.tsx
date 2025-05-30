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
          <img src={profilePic} alt="profile pic" className="p-4" />
        </div>
        <div className="flex flex-col md:px-10 size-96 min-w-max justify-center items-center cursor-default">
          <h3 className="pt-2 text-base">Hello I'm</h3>
          <h1 className="py-2 text-5xl font-semibold">Deep Sharma</h1>
          <h2 className="py-2 text-3xl font-semibold text-zinc-500 mb-3">
            Software Developer
          </h2>
          <div className="flex justify-center items-center">
            <button
              className="px-4 h-full w-full min-w-36 min-h-14 border border-black rounded-2xl mr-2 hover:bg-black hover:scale-105 hover:text-white transition duration-400"
              onClick={handleDownloadCV}
            >
              Download CV
            </button>
            <a
              href="#contact"
              className="px-4 h-full w-full min-w-36 min-h-14 border border-zinc-800 rounded-2xl bg-zinc-800 text-white flex items-center justify-center hover:bg-black hover:scale-105 transition delay-150 hover:delay-75"
            >
              Contact Info
            </a>
          </div>
          <div className="flex justify-center w-10 h-10 mt-5">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="mx-1 cursor-pointer hover:scale-105"
              onClick={() => {
                window.open("https://www.linkedin.com/in/deepsharma993/");
              }}
            />
            <img
              src={githubIcon}
              alt="GitHub"
              className="mx-1 cursor-pointer hover:scale-105"
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
