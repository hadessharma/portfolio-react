import React, { useState } from "react";
import ProjectCard from "../Cards/projectCard";
import ProjectModal from "../Cards/projectModal";
import { projects, Project as ProjectType } from "../data/projectData";

const Project: React.FC = () => {
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
    <div
      className="flex flex-col h-full w-full items-center justify-center px-4 md:px-20 py-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-lg font-semibold text-slate-400">
          Browse My Recent
        </h2>
        <h2 className="text-6xl font-bold text-slate-100">Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} onOpenModal={openModal} />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </div>
  );
};

export default Project;
