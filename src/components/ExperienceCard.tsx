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
      className="flex flex-col md:flex-row items-start gap-6 p-8 rounded-xl bg-card shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <div className="shrink-0">
        <div className="w-20 h-20 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-md border border-border">
          <img 
            src={experience.companyLogo} 
            alt={`${experience.company} logo`} 
            className="w-full h-full object-contain p-3"
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
              className="rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-medium border border-accent/20"
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