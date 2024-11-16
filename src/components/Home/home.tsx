import React from "react";
import profilePic from "../../assets/profile-pic.png";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="size-96 -mt-[150px]">
          <img src={profilePic} alt="profile pic" />
        </div>
        <div className="flex flex-col -mt-[150px] px-10 size-96  justify-center items-center">
          <h3 className="font-sans text-3xl">Hello I'm</h3>
          <h1 className="font-sans text-6xl">Deep Sharma</h1>
          <h2>Software Developer</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
