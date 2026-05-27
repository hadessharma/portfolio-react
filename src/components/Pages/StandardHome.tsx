import React, { useState, useEffect } from "react";
import profilePic from "../../assets/profile-pic.png";
import cvPDF from "../../assets/DeepSharma.pdf";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";
import ProjectCard from "../Cards/projectCard";
import ProjectModal from "../Cards/projectModal";
import { getFeaturedProjects, Project as ProjectType } from "../data/projectData";

const StandardHome: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    const roles = [
        "Cloud Automation Engineer",
        "AI Solutions Engineer",
        "DevOps Enthusiast"
    ];
    const maxRoleLength = Math.max(...roles.map((role) => role.length));

    const featuredProjects = getFeaturedProjects().filter(
        (project) => project.name !== "TerraZure"
    );

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

    const handleDownloadCV = () => {
        window.open(cvPDF);
    };

    return (
        <>
            <div className="flex flex-col xl:flex-row items-center justify-center min-h-[85vh] px-4 py-10 xl:py-0 gap-12 md:gap-16 w-full max-w-7xl mx-auto">

                {/* Left Side: Profile & Intro */}
                <div className="flex flex-col items-center xl:items-start text-center xl:text-left space-y-6 max-w-xl shrink-0">
                    <div className="flex items-center space-x-4 md:space-x-6">
                        <img
                            src={profilePic}
                            alt="Deep Sharma"
                            className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-paper-layer shadow-paper border-2 border-paper-edge"
                        />
                        <div>
                            <h1 className="text-2xl md:text-5xl font-bold text-paper-ink tracking-tight">Deep Sharma</h1>
                            <h2 className="text-sm md:text-xl font-medium text-paper-accentDeep mt-1">
                                Software Developer <span className="text-paper-muted">and</span>{" "}
                                <span
                                    className="block md:inline-block transition-all duration-700 ease-in-out text-paper-muted"
                                    style={{ minWidth: `${maxRoleLength}ch` }}
                                >
                                    {roles[currentRoleIndex]}
                                </span>
                            </h2>
                        </div>
                    </div>

                    <p className="paper-copy text-sm md:text-lg max-w-lg">
                        Computer Science Graduate Student at <span className="text-paper-accent font-medium">ASU</span> and <span className="text-paper-accent font-medium">Software Engineer</span>.
                        Specializing in Full stack development, Distributed Systems, Cloud Automation.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <button
                            onClick={handleDownloadCV}
                            className="paper-button-secondary text-center"
                        >
                            Download CV
                        </button>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.linkedin.com/in/deepsharma993/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="paper-icon-button paper-logo-stamp h-11 w-11 cursor-pointer"
                                aria-label="Open LinkedIn profile"
                            >
                                <img
                                    src={linkedinIcon}
                                    alt="LinkedIn"
                                    className="w-5 h-5 paper-icon"
                                />
                            </a>
                            <a
                                href="https://github.com/hadessharma"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="paper-icon-button paper-logo-stamp h-11 w-11 cursor-pointer"
                                aria-label="Open GitHub profile"
                            >
                                <img
                                    src={githubIcon}
                                    alt="GitHub"
                                    className="w-5 h-5 paper-icon"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side: Featured Projects (Compact) */}
                <div className="flex flex-col items-center xl:items-start w-full max-w-2xl mt-8 xl:mt-0">
                    <div className="text-center xl:text-left mb-6 w-full">
                        <h2 className="paper-eyebrow !text-xs md:!text-sm">Featured Projects</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        {featuredProjects.slice(0, 2).map((project, index) => (
                            <ProjectCard key={index} project={project} onOpenModal={openModal} />
                        ))}
                    </div>

                    <div className="mt-6 w-full flex justify-center xl:justify-start">
                        <a
                            href="#projects"
                            className="text-sm text-paper-accent hover:text-paper-accentDeep hover:underline flex items-center gap-1 group"
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
