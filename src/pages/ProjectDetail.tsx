import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Wrench } from 'lucide-react';
import { LinkButton } from '../components/Button';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState(projects.find(p => p.id === id));
  
  useEffect(() => {
    if (!project) {
      navigate('/projects', { replace: true });
    } else {
      document.title = `${project.title} | Varnica - Product & Project Manager`;
    }
  }, [project, navigate]);
  
  if (!project) {
    return null;
  }
  
  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to projects
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md bg-white flex items-center justify-center p-0 m-0">
  <img
    src={project.coverImage}
    alt={project.title}
    className="max-w-full max-h-full object-contain p-0 m-0"
  />
</div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Overview</h2>
                <p className="text-lg mb-6">{project.description}</p>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Challenges</h2>
                <p className="mb-6">{project.challenges}</p>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Solutions</h2>
                <p className="mb-6">{project.solutions}</p>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Impact & Results</h2>
                <p className="mb-6">{project.impact}</p>
              </section>
              
              
            </div>
            
            <div>
              <div className="bg-card rounded-lg shadow-sm p-6 sticky top-24">
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-4">Project Details</h3>
                  
                  
                  <div className="flex items-start mb-4">
                    <Wrench size={18} className="mr-3 mt-1 text-accent" />
                    <div>
                      <p className="font-medium">Tools & Technologies</p>
                      <ul className="text-muted-foreground">
                        {project.tools.map((tool, index) => (
                          <li key={index}>{tool}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-medium">My Role</p>
                    <p className="text-muted-foreground">{project.role}</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;