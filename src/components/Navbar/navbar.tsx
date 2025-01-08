import React, { useState } from "react";
import { Link } from "react-router-dom";
// interface NavbarState {
//   isOpen: boolean;
// }

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logF = () => {
    console.log("Clicked!");
  };
  return (
    <nav className="flex bg-zinc-800 text-white p-10 mb-5 md:mb-0 md:px-10 lg:px-40 md:py-10 justify-between">
      <h2 className="text-3xl flex-1 min-w-7">
        <Link to={"/"}>Deep Sharma</Link>
      </h2>
      <ul className="item-center hidden md:flex">
        <li
          className="text-xl px-5 transition ease-in-out duration-300 hover:scale-110"
          onClick={logF}
        >
          <Link to={"/about"}>About</Link>
        </li>
        <li className="text-xl px-5 transition ease-in-out duration-300 hover:scale-110">
          <Link to={"/projects"}>Projects</Link>
        </li>
        <li className="text-xl px-5 transition ease-in-out duration-300 hover:scale-110">
          <Link to={"/experience"}>Experience</Link>
        </li>

        <li className="text-xl px-5 transition ease-in-out duration-300 hover:scale-110">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>

      {/* HAMBURGER */}
      <button className="space-y-1 group md:hidden" onClick={toggleMenu}>
        <div className="w-6 h-1 bg-white"></div>
        <div className="w-6 h-1 bg-white"></div>
        <div className="w-6 h-1 bg-white"></div>
      </button>
      {/* menus */}
      <ul
        className={`bg-zinc-800 flex flex-col w-screen absolute right-0 duration-150 space-y-2 justify-end md:hidden ${
          isOpen ? "top-0" : "-top-full"
        }`}
      >
        <button className="px-10 py-4 relative ml-auto" onClick={toggleMenu}>
          <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
          <div className="w-6 h-1 -rotate-45 absolute bg-white"></div>
        </button>
        <li
          className="flex justify-center w-full px-5 hover:bg-[#71717a]"
          onClick={toggleMenu}
        >
          <Link to={"/about"}>About</Link>
        </li>
        <li
          className="flex justify-center w-full px-5 hover:bg-[#71717a]"
          onClick={toggleMenu}
        >
          <Link to={"/experience"}>Experience</Link>
        </li>
        <li
          className="flex justify-center w-full px-5 hover:bg-[#71717a]"
          onClick={toggleMenu}
        >
          <Link to={"/projects"}>Projects</Link>
        </li>
        <li
          className="flex justify-center w-full px-5 hover:bg-[#71717a]"
          onClick={toggleMenu}
        >
          <Link to={"./contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
