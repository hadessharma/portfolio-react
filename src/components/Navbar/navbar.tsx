import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex bg-zinc-800 text-white p-10 mb-5 md:mb-0 md:px-10 lg:px-40 md:py-10 justify-between">
      <h2 className="text-3xl flex-1 min-w-7">
        <a href="#home">Deep Sharma</a>
      </h2>
      <ul className="item-center hidden md:flex">
        <li className="text-xl px-5 transition ease-in-out duration-300 hover:scale-110">
          <a href="#about">About</a>
        </li>
        <li className="text-xl px-5 transition ease-in-out duration-300 hover:scale-110">
          <a href="#projects">Projects</a>
        </li>
        <li className="text-xl px-5 transition ease-in-out duration-300 hover:scale-110">
          <a href="#experience">Experience</a>
        </li>
        <li className="text-xl px-5 transition ease-in-out duration-300 hover:scale-110">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* HAMBURGER */}
      <button className="space-y-1 group md:hidden" onClick={toggleMenu}>
        <div className="w-6 h-[2px] bg-white"></div>
        <div className="w-6 h-[2px] bg-white"></div>
        <div className="w-6 h-[2px] bg-white"></div>
      </button>
      {/* Mobile Menu */}
      <ul
        className={`bg-zinc-800 flex flex-col w-screen absolute right-0 duration-150 space-y-2 justify-end md:hidden p-2 ${
          isOpen ? "top-0" : "-top-full"
        }`}
      >
        <button
          className="px-10 py-4 absolute right-0 top-0 ml-auto"
          onClick={toggleMenu}
        >
          <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
          <div className="w-6 h-1 -rotate-45 absolute bg-white"></div>
        </button>
        <li
          className="flex justify-center w-full px-5 hover:bg-[#71717a] text-lg"
          onClick={toggleMenu}
        >
          <a href="#about">About</a>
        </li>
        <li
          className="flex justify-center w-full px-5 hover:bg-[#71717a] text-lg"
          onClick={toggleMenu}
        >
          <a href="#projects">Projects</a>
        </li>
        <li
          className="flex justify-center w-full px-5 hover:bg-[#71717a] text-lg"
          onClick={toggleMenu}
        >
          <a href="#experience">Experience</a>
        </li>
        <li
          className="flex justify-center w-full px-5 hover:bg-[#71717a] text-lg"
          onClick={toggleMenu}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
