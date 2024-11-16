import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex bg-gray-800 text-white p-10">
      <h2 className="text-2xl flex-1">Deep Sharma</h2>
      <ul className="flex flex-1 justify-evenly">
        <li className="text-2xl px-10">About</li>
        <li className="text-2xl px-10">Experience</li>
        <li className="text-2xl px-10">Project</li>
        <li className="text-2xl px-10">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
