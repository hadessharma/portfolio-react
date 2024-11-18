import React from "react";
import profilePic from "../../assets/profile-pic.png";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center h-full">
        <div className="basis-96 min-w-96">
          <img src={profilePic} alt="profile pic" />
        </div>
        <div className="flex flex-col px-10 size-96  justify-center items-start">
          <h3 className="py-2 font-sans text-2xl">Hello I'm</h3>
          <h1 className="py-2 font-sans text-5xl">Deep Sharma</h1>
          <h2 className="py-2 font-sans text-3xl">Software Developer</h2>
          <div className="flex justify-center space-x-5 items-center">
            <button className="px-4 h-full w-full border-2 font-bold">
              Download CV
            </button>
            <button className="px-4 h-full w-full border-2 font-bold">
              Contact Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
