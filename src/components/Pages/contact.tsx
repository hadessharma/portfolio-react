import React from "react";
import mailIcon from "../../assets/email.png";
import linkedinIcon from "../../assets/linkedin.png";

const Contact: React.FC = () => {
  return (
    // Use flex-col + h-screen to fill the viewport's height
    <div id="contact" className="flex flex-col h-screen">
      {/*
        1) Top section: 
           - Grows to fill available space with flex-1.
           - Centers content both vertically and horizontally.
      */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <p className="cursor-default">Get in Touch</p>
        <h3 className="text-5xl font-semibold mb-4 cursor-default">
          Contact Me
        </h3>

        <div className="flex mt-4 border-0 md:border flex-col md:flex-row justify-center items-center rounded-2xl border-black p-1">
          <div className="flex m-3 items-center border md:border-0 border-black rounded-2xl">
            <img src={mailIcon} alt="Email Icon" className="w-12 h-12 m-2" />
            <a
              className="md:text-xl m-2 transition ease-in-out duration-75 hover:scale-105"
              href="mailto:de.sharma993@gmail.com"
            >
              de.sharma993@gmail.com
            </a>
          </div>
          <div className="flex m-3 items-center border md:border-0 border-black rounded-2xl">
            <img
              src={linkedinIcon}
              alt="LinkedIn Icon"
              className="w-10 h-10 m-2"
            />
            <a
              className="text-xl m-2 transition ease-in-out duration-75 hover:scale-105"
              href="https://www.linkedin.com/in/deepsharma993/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/*
        2) Bottom section (footer):
           - Contains navigation links and copyright.
           - Uses "underline-effect" for custom hover underline effect.
      */}
      <div className="flex flex-col items-center pb-4">
        <div className="flex justify-center mt-10">
          <a
            href="#about"
            className="underline-effect px-3 md:px-4 md:text-2xl transition duration-75 hover:scale-105"
          >
            About
          </a>
          <a
            href="#experience"
            className="underline-effect px-3 md:px-4 md:text-2xl transition duration-75 hover:scale-105"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="underline-effect px-3 md:px-4 md:text-2xl transition duration-75 hover:scale-105"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="underline-effect px-3 md:px-4 md:text-2xl transition duration-75 hover:scale-105"
          >
            Contact
          </a>
        </div>
        <div className="flex justify-center mt-10 font-light">
          Deep Sharma <span>&copy;</span> 2024
        </div>
      </div>
    </div>
  );
};

export default Contact;
