import React, { useState, FC } from "react";
import { Link } from "react-router-dom";
interface NavbarState {
  isOpen: boolean;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logF = () => {
    console.log("Clicked!");
  };
  return (
    <nav className="flex bg-gray-800 text-white p-10 justify-between">
      <h2 className="text-3xl flex-1 min-w-7">Deep Sharma</h2>
      <ul className="flex item-center hidden md:flex">
        <li className="text-xl px-5" onClick={logF}>
          About
        </li>
        <li className="text-xl px-5">
          <Link to={"/experience"}>Experience</Link>
        </li>
        <li className="text-xl px-5">Project</li>
        <li className="text-xl px-5">Contact</li>
      </ul>

      {/* HAMBURGER */}
      <button className="space-y-1 group md:hidden" onClick={toggleMenu}>
        <div className="w-6 h-1 bg-white"></div>
        <div className="w-6 h-1 bg-white"></div>
        <div className="w-6 h-1 bg-white"></div>
      </button>
      {/* menus */}
      <ul
        className={`bg-gray-800 flex flex-col w-screen absolute right-0 duration-150 space-y-2 justify-end md:hidden ${
          isOpen ? "top-0" : "-top-full"
        }`}
      >
        <button className="px-10 py-4 relative ml-auto" onClick={toggleMenu}>
          <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
          <div className="w-6 h-1 -rotate-45 absolute bg-white"></div>
        </button>
        <li className="flex justify-center w-full px-5 hover:bg-[#71717a]">
          About
        </li>
        <li className="flex justify-center w-full px-5 hover:bg-[#71717a]">
          <Link to={"/experience"}>Experience</Link>
        </li>
        <li className="flex justify-center w-full px-5 hover:bg-[#71717a]">
          Project
        </li>
        <li className="flex justify-center w-full px-5 hover:bg-[#71717a]">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
