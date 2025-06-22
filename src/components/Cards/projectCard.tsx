import React from "react";
import { Project } from "../data/projectData";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <div
      onClick={() => onOpenModal(project)}
      className="flex flex-col text-center justify-center p-6 w-full h-full border-gray-800 border rounded-2xl bg-gray-900 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-500/30 hover:-translate-y-1 cursor-pointer"
    >
      <div>
        <h3 className="text-xl font-bold text-indigo-400 mb-4">
          {project.name}
        </h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="bg-gray-700 text-slate-200 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
