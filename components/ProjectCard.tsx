
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group overflow-hidden rounded-[2rem] bg-white border border-emerald-50 shadow-sm transition-all hover:shadow-xl hover:border-emerald-200">
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-stone-800 serif leading-tight">
          {project.title}
        </h3>
        <p className="mt-1 text-xs uppercase tracking-widest text-emerald-700 font-semibold">
          {project.category}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
