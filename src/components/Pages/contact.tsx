import React from "react";
import mailIcon from "../../assets/email.png";
import linkedinIcon from "../../assets/linkedin.png";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
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
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end">
        <div className="flex justify-center">
          <a
            href="#about"
            className="px-3 md:px-4 md:text-2xl trasnition duration-75 hover:scale-105"
          >
            About
          </a>
          <a
            href="#experience"
            className="px-3 md:px-4 md:text-2xl trasnition duration-75 hover:scale-105"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="px-3 md:px-4 md:text-2xl trasnition duration-75 hover:scale-105"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-3 md:px-4 md:text-2xl trasnition duration-75 hover:scale-105"
          >
            Contact
          </a>
        </div>
        <div className="flex justify-center mt-10 font-light">
          Deep Sharma
          <span>&copy;</span> 2024
        </div>
      </div>
    </div>
  );
};

export default Contact;
