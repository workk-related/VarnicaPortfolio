import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ExperienceCard from '../components/ExperienceCard';
import { Button } from '../components/Button';
import { experiences } from '../data/experience';

const Experience: React.FC = () => {
  useEffect(() => {
    document.title = 'Experience | Varnica - Product & Project Manager';
  }, []);

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionHeading
            title="Professional Experience"
            subtitle="My journey through various roles and organizations."
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              variant="outline"
              onClick={() => window.open('/VarnicaBajaj-Resume.pdf', '_blank')}
              className="flex items-center"
            >
              Download Resume <Download size={18} className="ml-2" />
            </Button>
          </motion.div>
        </div>
        
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </motion.div>
        
        <motion.div
          className="mt-16 bg-card rounded-lg p-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          
          <div className="space-y-6">
            
            <div>
              <h4 className="text-xl font-bold">Bachelor of Technology in Computer Science</h4>
              <p className="text-accent">Galgotias University</p>
              <p className="text-muted-foreground">2018 - 2022</p>
            </div>
            
            
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;