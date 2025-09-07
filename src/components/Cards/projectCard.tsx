import React from "react";
import { Project } from "../data/projectData";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  // Extract brief description (first 100 characters)
  const briefDescription = project.info[0].length > 100 
    ? project.info[0].substring(0, 100) + "..." 
    : project.info[0];

  return (
    <div
      onClick={() => onOpenModal(project)}
      className="flex flex-col justify-between p-4 sm:p-6 w-full h-48 border-gray-800 border rounded-2xl bg-gray-900 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 hover:-translate-y-1 cursor-pointer overflow-hidden"
    >
      <div className="flex-1 min-h-0">
        <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2 sm:mb-3 text-left truncate">
          {project.name}
        </h3>
        <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 text-left leading-relaxed line-clamp-3 overflow-hidden">
          {briefDescription}
        </p>
      </div>
      <div className="flex flex-wrap gap-1 sm:gap-2 justify-start overflow-hidden">
        {project.stack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="bg-gray-700/50 text-slate-200 text-xs font-medium px-2 sm:px-3 py-1 rounded-full border border-gray-600/50 whitespace-nowrap flex-shrink-0"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 3 && (
          <span className="bg-gray-700/50 text-slate-400 text-xs font-medium px-2 sm:px-3 py-1 rounded-full border border-gray-600/50 whitespace-nowrap flex-shrink-0">
            +{project.stack.length - 3}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
