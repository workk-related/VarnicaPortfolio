import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projectCategories } from '../data/projects';

const Projects: React.FC = () => {
  useEffect(() => {
    document.title = 'Projects | Varnica - Product & Project Manager';
  }, []);

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        <SectionHeading
          title="My Work"
          subtitle="Explore my projects organized by industry, showcasing my approach to product and project management across different domains."
        />
        
        <div className="space-y-16">
          {projectCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;