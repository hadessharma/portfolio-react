import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex bg-gray-950/70 backdrop-blur-md text-slate-200 p-6 md:px-10 lg:px-40 md:py-6 justify-between items-center shadow-lg shadow-black/20 sticky top-0 z-50 border-b border-gray-800">
      <h2 className="text-3xl font-semibold flex-1 min-w-7">
        <a
          href="#home"
          className="text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Deep Sharma
        </a>
      </h2>
      <ul className="items-center hidden md:flex">
        <li className="text-lg px-5 transition-colors duration-300 hover:text-indigo-400">
          <a href="#about">About</a>
        </li>
        <li className="text-lg px-5 transition-colors duration-300 hover:text-indigo-400">
          <a href="#projects">Projects</a>
        </li>
        <li className="text-lg px-5 transition-colors duration-300 hover:text-indigo-400">
          <a href="#experience">Experience</a>
        </li>
        <li className="text-lg px-5 transition-colors duration-300 hover:text-indigo-400">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* HAMBURGER */}
      <button className="space-y-1.5 group md:hidden" onClick={toggleMenu}>
        <div className="w-6 h-0.5 bg-slate-200 group-hover:bg-indigo-400 transition-colors"></div>
        <div className="w-6 h-0.5 bg-slate-200 group-hover:bg-indigo-400 transition-colors"></div>
        <div className="w-6 h-0.5 bg-slate-200 group-hover:bg-indigo-400 transition-colors"></div>
      </button>
      {/* Mobile Menu */}
      <ul
        className={`bg-gray-900/90 backdrop-blur-md text-slate-200 flex flex-col w-screen h-screen fixed inset-0 duration-300 space-y-4 items-center justify-center md:hidden transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="px-10 py-4 absolute right-4 top-4"
          onClick={toggleMenu}
        >
          <div className="w-6 h-1 rotate-45 absolute bg-slate-200"></div>
          <div className="w-6 h-1 -rotate-45 absolute bg-slate-200"></div>
        </button>
        <li
          className="text-2xl hover:text-indigo-400 transition-colors"
          onClick={toggleMenu}
        >
          <a href="#about">About</a>
        </li>
        <li
          className="text-2xl hover:text-indigo-400 transition-colors"
          onClick={toggleMenu}
        >
          <a href="#projects">Projects</a>
        </li>
        <li
          className="text-2xl hover:text-indigo-400 transition-colors"
          onClick={toggleMenu}
        >
          <a href="#experience">Experience</a>
        </li>
        <li
          className="text-2xl hover:text-indigo-400 transition-colors"
          onClick={toggleMenu}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
