import React from "react";
import profilePic from "../../assets/profile-pic.png";

// importing icons
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center h-5/6">
        <div className="basis-96 min-w-96">
          <img src={profilePic} alt="profile pic" />
        </div>
        <div className="flex flex-col px-10 size-96 min-w-max justify-center items-center">
          <h3 className="pt-2 text-base">Hello I'm</h3>
          <h1 className="py-2 text-5xl font-semibold">Deep Sharma</h1>
          <h2 className="py-2 text-3xl font-semibold text-zinc-500 mb-3">
            Software Developer
          </h2>
          <div className="flex justify-center items-center">
            <button className="px-4 h-full w-full min-w-36 min-h-14 border border-black rounded-2xl mr-2 ">
              Download CV
            </button>
            <button className="px-4 h-full w-full min-w-36 min-h-14 border border-zinc-800 rounded-2xl bg-zinc-800 text-white">
              Contact Info
            </button>
          </div>
          <div className="flex justify-center w-10 h-10 mt-5">
            <img src={linkedinIcon} alt="LinkedIn" className="mx-1" />
            <img src={githubIcon} alt="GitHub" className="mx-1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
