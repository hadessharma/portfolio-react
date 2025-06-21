import React from "react";
import experienceIcon from "../../assets/experience.png";
import educationIcon from "../../assets/education.png";

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-4 py-16 bg-gray-900"
    >
      {/* Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-lg font-medium text-gray-400 mb-2">Get To Know More</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-8">About Me</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I am a graduate student at Arizona State University with three years
          of work experience in Software Development and DevOps in the
          industry. I'm passionate about building web applications and
          designing automated cloud infrastructure deployment platforms.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
        {/* Experience Card */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-800/70">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mr-4">
              <img
                src={experienceIcon}
                alt="Experience"
                className="w-6 h-6 filter invert opacity-80"
              />
            </div>
            <h3 className="text-2xl font-bold text-cyan-400">Experience</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
              <h4 className="text-lg font-semibold text-gray-100 mb-1">Software Engineer</h4>
              <p className="text-gray-400">3 years of industry experience</p>
              <p className="text-sm text-gray-500 mt-2">
                Specialized in full-stack development and DevOps practices
              </p>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-800/70">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mr-4">
              <img
                src={educationIcon}
                alt="Education"
                className="w-6 h-6 filter invert opacity-80"
              />
            </div>
            <h3 className="text-2xl font-bold text-cyan-400">Education</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
              <h4 className="text-lg font-semibold text-gray-100 mb-1">M.S. Computer Science</h4>
              <p className="text-gray-400">Arizona State University, USA</p>
              <p className="text-sm text-gray-500 mt-2">
                Currently pursuing advanced studies in computer science
              </p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
              <h4 className="text-lg font-semibold text-gray-100 mb-1">B.Tech. Computer Science</h4>
              <p className="text-gray-400">SRM University, India</p>
              <p className="text-sm text-gray-500 mt-2">
                Foundation in computer science and software engineering
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Preview */}
      <div className="mt-16 text-center max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-100 mb-8">What I Do</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
            <h4 className="text-lg font-semibold text-cyan-400 mb-2">Full-Stack Development</h4>
            <p className="text-gray-300 text-sm">
              Building modern web applications with React, Node.js, and cloud technologies
            </p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
            <h4 className="text-lg font-semibold text-cyan-400 mb-2">DevOps & Cloud</h4>
            <p className="text-gray-300 text-sm">
              Designing automated deployment pipelines and cloud infrastructure
            </p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
            <h4 className="text-lg font-semibold text-cyan-400 mb-2">Problem Solving</h4>
            <p className="text-gray-300 text-sm">
              Creating efficient solutions for complex technical challenges
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
