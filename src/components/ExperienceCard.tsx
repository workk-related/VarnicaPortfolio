import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceType } from '../data/experience';

interface ExperienceCardProps {
  experience: ExperienceType;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="shrink-0">
        <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center overflow-hidden">
          <img 
            src={experience.companyLogo} 
            alt={`${experience.company} logo`} 
            className="w-full h-full object-contain p-2"
          />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <h3 className="text-xl font-bold">{experience.role}</h3>
          <span className="text-sm text-muted-foreground">{experience.period}</span>
        </div>
        
        <p className="text-accent font-medium mb-2">{experience.company}</p>
        <p className="text-muted-foreground mb-4">{experience.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;