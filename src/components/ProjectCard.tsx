import React from 'react';
import { motion } from 'framer-motion';
import { LinkButton } from './Button';
import { ProjectType } from '../data/projects';
import { Link } from 'react-router-dom';  // Assuming you're using react-router for routing

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="group flex flex-col overflow-hidden rounded-lg bg-card shadow-md transition-all hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden">
  <Link to={`/projects/${project.id}`} className="w-full block rounded-lg overflow-hidden shadow-md bg-white flex items-center justify-center">
    <img
      src={project.coverImage}
      alt={project.title}
      className="w-full aspect-video object-contain"
    />
  </Link>
  <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none" />
</div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold">
          <Link to={`/projects/${project.id}`} className="hover:underline">
            {project.title}
          </Link>
        </h3>
        <p className="mb-4 text-muted-foreground">{project.shortDescription}</p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <LinkButton to={`/projects/${project.id}`} variant="outline" size="sm">
            View Project
          </LinkButton>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
