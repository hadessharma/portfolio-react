import React from "react";
import mailIcon from "../../assets/email.png";
import linkedinIcon from "../../assets/linkedin.png";

const Contact: React.FC = () => {
  return (
    <div
      className="min-h-full flex flex-col items-center px-4 py-16 bg-gray-900"
    >
      {/* Main Content Wrapper */}
      <div className="flex-grow flex flex-col justify-center items-center w-full">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-6xl font-bold text-gray-100 mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl mx-auto">
            {/* Email Button */}
            <a
              href="mailto:de.sharma993@gmail.com"
              className="w-full md:w-auto flex-grow bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-800/70 text-left flex items-center gap-4"
            >
              <img
                src={mailIcon}
                alt="Email"
                className="w-12 h-12 filter invert opacity-80"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-1">Email</h3>
                <p className="text-cyan-400 break-all">de.sharma993@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/deepsharma993/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto flex-grow bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-800/70 text-left flex items-center gap-4"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-12 h-12 filter invert opacity-80"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-1">LinkedIn</h3>
                <p className="text-cyan-400">Connect with me</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center pt-16">
        <div className="max-w-4xl mx-auto">
          <nav className="flex justify-center mb-6 gap-8">
            <a 
              href="#about" 
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#experience" 
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              Projects
            </a>
          </nav>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Deep Sharma. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
