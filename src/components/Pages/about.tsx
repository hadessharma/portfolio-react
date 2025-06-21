import React from "react";
import experienceIcon from "../../assets/experience.png";
import educationIcon from "../../assets/education.png";

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: About Me */}
        <div className="text-center">
          <h2 className="text-lg font-medium text-cyan-400 mb-2">Get To Know More</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">About Me</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a graduate student at Arizona State University with three years
            of work experience in Software Development and DevOps in the
            industry. I'm passionate about building web applications and
            designing automated cloud infrastructure deployment platforms.
          </p>
        </div>

        {/* Right Column: Cards */}
        <div className="space-y-6">
          {/* Experience Card */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-800/70">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-cyan-600/20 rounded-lg flex items-center justify-center mr-4">
                <img
                  src={experienceIcon}
                  alt="Experience"
                  className="w-5 h-5 filter invert opacity-80"
                />
              </div>
              <h3 className="text-xl font-bold text-cyan-400">Experience</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700 text-center">
                <h4 className="text-md font-semibold text-gray-100 mb-1">Software Engineer</h4>
                <p className="text-gray-400 text-sm">3 years of industry experience</p>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-800/70">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-cyan-600/20 rounded-lg flex items-center justify-center mr-4">
                <img
                  src={educationIcon}
                  alt="Education"
                  className="w-5 h-5 filter invert opacity-80"
                />
              </div>
              <h3 className="text-xl font-bold text-cyan-400">Education</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700 text-center">
                <h4 className="text-md font-semibold text-gray-100 mb-1">M.S. Computer Science</h4>
                <p className="text-gray-400 text-sm">Arizona State University, USA</p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700 text-center">
                <h4 className="text-md font-semibold text-gray-100 mb-1">B.Tech. Computer Science</h4>
                <p className="text-gray-400 text-sm">SRM University, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
