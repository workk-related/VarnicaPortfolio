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
      className="group flex flex-col overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="relative overflow-hidden">
  <Link to={`/projects/${project.id}`} className="w-full block rounded-t-xl overflow-hidden bg-white flex items-center justify-center">
    <img
      src={project.coverImage}
      alt={project.title}
      className="w-full aspect-video object-contain transition-transform duration-300 group-hover:scale-105"
    />
  </Link>
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0 pointer-events-none" />
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
              className="rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-medium border border-accent/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <LinkButton to={`/projects/${project.id}`} variant="primary" size="sm">
            View Project
          </LinkButton>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
