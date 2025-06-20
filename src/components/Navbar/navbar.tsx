import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex bg-gray-900 text-gray-100 p-6 md:px-10 lg:px-40 md:py-8 justify-between items-center shadow-lg sticky top-0 z-50 border-b border-gray-700">
      <h2 className="text-3xl font-baskerville flex-1 min-w-7">
        <a href="#home" className="text-blue-400 hover:text-blue-300 transition-colors">Deep Sharma</a>
      </h2>
      <ul className="items-center hidden md:flex">
        <li className="text-lg px-5 transition ease-in-out duration-300 hover:scale-110 hover:text-blue-400">
          <a href="#about">About</a>
        </li>
        <li className="text-lg px-5 transition ease-in-out duration-300 hover:scale-110 hover:text-blue-400">
          <a href="#projects">Projects</a>
        </li>
        <li className="text-lg px-5 transition ease-in-out duration-300 hover:scale-110 hover:text-blue-400">
          <a href="#experience">Experience</a>
        </li>
        <li className="text-lg px-5 transition ease-in-out duration-300 hover:scale-110 hover:text-blue-400">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* HAMBURGER */}
      <button className="space-y-1.5 group md:hidden" onClick={toggleMenu}>
        <div className="w-6 h-0.5 bg-gray-100 group-hover:bg-blue-400 transition-colors"></div>
        <div className="w-6 h-0.5 bg-gray-100 group-hover:bg-blue-400 transition-colors"></div>
        <div className="w-6 h-0.5 bg-gray-100 group-hover:bg-blue-400 transition-colors"></div>
      </button>
      {/* Mobile Menu */}
      <ul
        className={`bg-gray-900 text-gray-100 flex flex-col w-screen h-screen fixed inset-0 duration-300 space-y-4 items-center justify-center md:hidden transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="px-10 py-4 absolute right-4 top-4"
          onClick={toggleMenu}
        >
          <div className="w-6 h-1 rotate-45 absolute bg-gray-100"></div>
          <div className="w-6 h-1 -rotate-45 absolute bg-gray-100"></div>
        </button>
        <li
          className="text-2xl hover:text-blue-400 transition-colors"
          onClick={toggleMenu}
        >
          <a href="#about">About</a>
        </li>
        <li
          className="text-2xl hover:text-blue-400 transition-colors"
          onClick={toggleMenu}
        >
          <a href="#projects">Projects</a>
        </li>
        <li
          className="text-2xl hover:text-blue-400 transition-colors"
          onClick={toggleMenu}
        >
          <a href="#experience">Experience</a>
        </li>
        <li
          className="text-2xl hover:text-blue-400 transition-colors"
          onClick={toggleMenu}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
