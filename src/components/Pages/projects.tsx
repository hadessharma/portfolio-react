import React, { useState } from "react";
import ProjectCard from "../Cards/projectCard";
import ProjectModal from "../Cards/projectModal";
import { projects, Project as ProjectType } from "../data/projectData";

const Project: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const orderedProjects = [...projects].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
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
    <div className="flex flex-col h-full w-full items-center justify-start px-4 md:px-20 py-8 pb-20 md:pb-8 overflow-y-auto scrollbar-thin scrollbar-thumb-paper-edge scrollbar-track-transparent">
      <div className="text-center mb-12 md:mb-14 shrink-0 space-y-3">
        <h2 className="paper-eyebrow">
          Browse My Recent
        </h2>
        <h2 className="paper-title paper-title-underline">Projects</h2>
        <p className="paper-copy text-sm md:text-base max-w-2xl mx-auto pt-3">
          Featured work is highlighted first with richer card treatment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl shrink-0">
        {orderedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onOpenModal={openModal}
          />
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
