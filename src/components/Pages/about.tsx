import React from "react";
import experienceIcon from "../../assets/experience.png";
import educationIcon from "../../assets/education.png";

const About: React.FC = () => {
  return (
    <div
      className="min-h-full flex flex-col justify-center items-center px-4 py-8 bg-transparent"
    >
      {/* Header */}
      <div className="text-center mb-14 md:mb-16 max-w-4xl mx-auto space-y-4 md:space-y-5">
        <h2 className="paper-eyebrow">Get To Know More</h2>
        <h1 className="paper-title paper-title-underline">About Me</h1>
        <p className="paper-copy text-base md:text-xl max-w-3xl mx-auto pt-3">
          I am a <strong>Computer Science Graduate Student at ASU</strong> and a <strong>Software Engineer</strong> with over
          three years of experience in automating and scaling cloud infrastructure.
          <br /><br />
          I specialize in <span className="text-paper-accent">bridging the gap</span> between full-stack development and DevOps
          to build resilient, cost-effective solutions.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
        {/* Experience Card */}
        <div className="paper-card p-8 transition-all duration-300 hover:border-paper-accent/50 hover:-translate-y-1">
          <div className="flex items-center justify-center mb-6">
            <div className="paper-logo-stamp w-12 h-12 mr-4">
              <img
                src={experienceIcon}
                alt="Experience"
                className="w-6 h-6 paper-icon"
              />
            </div>
            <h3 className="text-2xl font-bold text-paper-accent">Experience</h3>
          </div>
          <div className="space-y-4 text-center">
            <div className="paper-card-muted p-4">
              <h4 className="text-lg font-semibold text-paper-ink mb-1">Software Engineer</h4>
              <p className="text-paper-muted">3 years of industry experience</p>
            </div>
            <div className="paper-card-muted p-4">
              <h4 className="text-lg font-semibold text-paper-ink mb-1">Core Competencies</h4>
              <p className="text-paper-muted">Full-Stack Dev, DevOps & Cloud</p>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="paper-card p-8 transition-all duration-300 hover:border-paper-accent/50 hover:-translate-y-1">
          <div className="flex items-center justify-center mb-6">
            <div className="paper-logo-stamp w-12 h-12 mr-4">
              <img
                src={educationIcon}
                alt="Education"
                className="w-6 h-6 paper-icon"
              />
            </div>
            <h3 className="text-2xl font-bold text-paper-accent">Education</h3>
          </div>
          <div className="space-y-4 text-center">
            <div className="paper-card-muted p-4">
              <h4 className="text-lg font-semibold text-paper-ink mb-1">M.S. Computer Science</h4>
              <p className="text-paper-muted">Arizona State University, USA</p>
            </div>
            <div className="paper-card-muted p-4">
              <h4 className="text-lg font-semibold text-paper-ink mb-1">B.Tech. Computer Science</h4>
              <p className="text-paper-muted">SRM University, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
