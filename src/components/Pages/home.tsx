import React from "react";
import profilePic from "../../assets/profile-pic.png";
import ProjectCard from "../Cards/projectCard";
import ProjectModal from "../Cards/projectModal";
import { getFeaturedProjects, Project as ProjectType } from "../data/projectData";
import { useState } from "react";

const Home: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const openModal = (project: ProjectType) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      {/* Compact Hero Section */}
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <div className="flex items-center space-x-6">
          <img
            src={profilePic}
            alt="Deep Sharma"
            className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-900 to-gray-950 shadow-xl shadow-cyan-500/10"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-100">Deep Sharma</h1>
            <h2 className="text-xl font-semibold text-cyan-400">Software Developer</h2>
          </div>
          <a
            href="#about"
            className="hidden md:flex items-center px-4 py-2 bg-gray-800/30 border border-gray-700/50 rounded-lg text-gray-300 text-sm font-medium hover:bg-gray-800/50 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200"
          >
            Know more →
          </a>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="flex flex-col items-center justify-center px-4 md:px-20 py-8">
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold text-slate-400">Featured</h2>
          <h2 className="text-4xl font-bold text-slate-100">Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {getFeaturedProjects().map((project, index) => (
            <ProjectCard key={index} project={project} onOpenModal={openModal} />
          ))}
        </div>
        
        {/* Explore All Projects Button */}
        <div className="mt-8">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Explore All Projects</span>
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>
        
        {selectedProject && (
          <ProjectModal
            isOpen={modalIsOpen}
            onClose={closeModal}
            project={selectedProject}
          />
        )}
      </div>
    </>
  );
};

export default Home;
