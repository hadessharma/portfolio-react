import React from "react";
import mailIcon from "../../assets/email.png";
import linkedinIcon from "../../assets/linkedin.png";

const Contact: React.FC = () => {
  return (
    <div
      id="contact"
      className="flex flex-col h-screen justify-center items-center text-center px-4"
    >
      <div className="mb-auto pt-24">
        <p className="text-lg text-slate-400">Get in Touch</p>
        <h3 className="text-5xl font-bold text-slate-100 mb-8">Contact Me</h3>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 rounded-full border border-gray-800 bg-gray-900 px-8 py-4 shadow-lg">
          <div className="flex items-center">
            <img
              src={mailIcon}
              alt="Email Icon"
              className="w-8 h-8 mr-3 filter invert"
            />
            <a
              className="text-lg text-slate-300 hover:text-indigo-400 hover:underline transition-colors"
              href="mailto:de.sharma993@gmail.com"
            >
              de.sharma993@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <img
              src={linkedinIcon}
              alt="LinkedIn Icon"
              className="w-8 h-8 mr-3 filter invert"
            />
            <a
              className="text-lg text-slate-300 hover:text-indigo-400 hover:underline transition-colors"
              href="https://www.linkedin.com/in/deepsharma993/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <footer className="w-full py-8">
        <nav className="flex justify-center mb-4 gap-4 md:gap-8">
          <a href="#about" className="text-slate-400 hover:text-indigo-400 transition-colors">About</a>
          <a href="#experience" className="text-slate-400 hover:text-indigo-400 transition-colors">Experience</a>
          <a href="#projects" className="text-slate-400 hover:text-indigo-400 transition-colors">Projects</a>
        </nav>
        <p className="text-slate-500 text-sm">
          Copyright &copy; {new Date().getFullYear()} Deep Sharma. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
