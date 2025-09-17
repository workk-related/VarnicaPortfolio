import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Phone, MapPin, Calendar, Users, Award, TrendingUp } from 'lucide-react';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';
import SkillsCarousel from '../components/SkillsCarousel';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/projects';
import { experiences } from '../data/experience';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Arpit Sharma - Product Manager & Systems Engineer';
  }, []);

  const featuredProjects = projects.slice(0, 3);
  const recentExperiences = experiences.slice(0, 2);

  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '3+' },
    { icon: Users, label: 'Teams Led', value: '15+' },
    { icon: Award, label: 'Projects Delivered', value: '25+' },
    { icon: TrendingUp, label: 'Efficiency Improvement', value: '40%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Product Manager &{' '}
                <span className="text-blue-600">Systems Engineer</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Transforming complex business challenges into scalable digital solutions. 
                Specialized in e-commerce platforms, AI-driven products, and cross-functional team leadership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="primary" size="lg" className="group">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="secondary" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
              <div className="flex items-center gap-6 text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Bangalore, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="text-center"
                    >
                      <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Core Expertise"
            subtitle="Technologies and methodologies I leverage to drive product success"
          />
          <SkillsCarousel />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Projects"
            subtitle="Recent work showcasing product leadership and technical expertise"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="secondary" size="lg">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Professional Journey"
            subtitle="Key roles and achievements in product management and engineering"
          />
          <div className="space-y-8">
            {recentExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ExperienceCard experience={experience} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="secondary" size="lg">
              View Full Experience
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how I can help drive your product vision forward with strategic thinking and technical expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;