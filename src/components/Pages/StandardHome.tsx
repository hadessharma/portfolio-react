import React, { useState, useEffect } from "react";
import profilePic from "../../assets/profile-pic.png";
import ProjectCard from "../Cards/projectCard";
import ProjectModal from "../Cards/projectModal";
import { getFeaturedProjects, Project as ProjectType } from "../data/projectData";

const StandardHome: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
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
        }, 2500);

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

    return (
        <>
            <div className="flex flex-col xl:flex-row items-center justify-center min-h-[85vh] px-4 gap-8 md:gap-16 w-full max-w-7xl mx-auto">

                {/* Left Side: Profile & Intro */}
                <div className="flex flex-col items-center xl:items-start text-center xl:text-left space-y-6 max-w-xl shrink-0">
                    <div className="flex items-center space-x-4 md:space-x-6">
                        <img
                            src={profilePic}
                            alt="Deep Sharma"
                            className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-cyan-900 to-gray-950 shadow-xl shadow-cyan-500/10 border-2 border-cyan-500/20"
                        />
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold text-gray-100 tracking-tight">Deep Sharma</h1>
                            <h2 className="text-base md:text-xl font-medium text-cyan-400 mt-1">
                                Software Developer <span className="text-gray-500">and</span>{" "}
                                <span className="block md:inline transition-all duration-700 ease-in-out text-gray-300">
                                    {roles[currentRoleIndex]}
                                </span>
                            </h2>
                        </div>
                    </div>

                    <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg">
                        Computer Science Graduate Student at <span className="text-cyan-400 font-medium">ASU</span> and <span className="text-cyan-400 font-medium">a Software Engineer</span>.
                        Specializing in Cloud Automation, DevOps, and Full Stack Development.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="#contact"
                            className="px-6 py-2 md:py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                        >
                            Contact Me
                        </a>
                        <a
                            href="#projects"
                            className="px-6 py-2 md:py-3 border border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-cyan-400 font-semibold rounded-lg transition-all duration-300 bg-gray-900/50"
                        >
                            View Work
                        </a>
                    </div>
                </div>

                {/* Right Side: Featured Projects (Compact) */}
                <div className="flex flex-col items-center xl:items-start w-full max-w-2xl">
                    <div className="text-center xl:text-left mb-6 w-full">
                        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Featured Projects</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        {featuredProjects.slice(0, 2).map((project, index) => (
                            <ProjectCard key={index} project={project} onOpenModal={openModal} />
                        ))}
                    </div>

                    <div className="mt-6 w-full flex justify-center xl:justify-start">
                        <a
                            href="#projects"
                            className="text-sm text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1 group"
                        >
                            Explore All Projects
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
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

export default StandardHome;
