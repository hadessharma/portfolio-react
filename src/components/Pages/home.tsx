import React from "react";
import profilePic from "../../assets/profile-pic.png";
import ProjectCard from "../Cards/projectCard";
import ProjectModal from "../Cards/projectModal";
import { getFeaturedProjects, Project as ProjectType } from "../data/projectData";
import { useState, useEffect } from "react";


const Home: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const roles = [
    "DevOps Enthusiast",
    "Cloud Engineer", 
    "Problem Solver"
  ];
  
  const featuredProjects = getFeaturedProjects();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  const openModal = (project: ProjectType) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  // Dynamic grid classes based on number of featured projects
  const getGridClasses = () => {
    const count = featuredProjects.length;
    if (count === 1) {
      return "grid grid-cols-1 gap-6 w-full max-w-md";
    } else if (count === 2) {
      return "grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl";
    } else if (count === 3) {
      return "grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl";
    } else {
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl";
    }
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
          <div className="w-[28rem]">
            <h1 className="text-4xl font-bold text-gray-100">Deep Sharma</h1>
            <h2 className="text-xl font-semibold text-cyan-400">
              Software Developer <span className="text-gray-400">and</span>{" "}
              <span className="transition-all duration-700 ease-in-out">
                {roles[currentRoleIndex]}
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Brief Introduction Section */}
      <div className="flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-4xl text-center">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Graduate student at <span className="text-cyan-400 font-medium">Arizona State University</span> with{" "}
            <span className="text-cyan-400 font-medium">3+ years</span> of industry experience in software development and DevOps.
            Passionate about building scalable web applications and automated cloud infrastructure.
          </p>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="flex flex-col items-center justify-center px-4 md:px-20 py-4">
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold text-slate-400">Featured</h2>
          <h2 className="text-4xl font-bold text-slate-100">Projects</h2>
        </div>
        <div className={getGridClasses()}>
          {featuredProjects.map((project, index) => (
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
