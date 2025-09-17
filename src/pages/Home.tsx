import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Phone, MapPin, Calendar, Users, Award, TrendingUp } from 'lucide-react';
import { Button, LinkButton } from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';
import SkillsCarousel from '../components/SkillsCarousel';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/projects';
import { experiences } from '../data/experience';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Varnica - Product & Project Manager';
  }, []);

  const featuredProjects = projects.slice(0, 3);
  const recentExperiences = experiences.slice(0, 2);

  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '3+' },
    { icon: Users, label: 'Teams Led', value: '15+' },
    { icon: Award, label: 'Projects Delivered', value: '25+' },
    { icon: TrendingUp, label: 'Efficiency Improvement', value: '40%' }
  ];

  const skillCategories = [
    {
      title: 'Product Management',
      skills: [
        'Product Strategy & Roadmapping',
        'User Research & Analysis',
        'Feature Prioritization',
        'Stakeholder Management',
        'Agile & Scrum Methodologies',
        'Product Requirements Documentation',
        'Go-to-Market Strategy',
        'Data-Driven Decision Making'
      ]
    },
    {
      title: 'Technical Skills',
      skills: [
        'Java & Spring Boot',
        'SQL & Database Design',
        'AWS Cloud Services',
        'API Integration',
        'System Architecture',
        'Microservices',
        'Git Version Control',
        'CI/CD Pipelines'
      ]
    },
    {
      title: 'Project Management',
      skills: [
        'Cross-functional Team Leadership',
        'Sprint Planning & Execution',
        'Risk Management',
        'Timeline & Resource Planning',
        'Quality Assurance',
        'Process Optimization',
        'Vendor Management',
        'Budget Planning'
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        'Jira & Confluence',
        'Figma & Design Tools',
        'Slack & Communication',
        'Notion & Documentation',
        'Postman & API Testing',
        'Google Analytics',
        'Tableau & Data Visualization',
        'Microsoft Office Suite'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Product Manager &{' '}
                <span className="text-accent">Systems Engineer</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transforming complex business challenges into scalable digital solutions. 
                Specialized in e-commerce platforms, AI-driven products, and cross-functional team leadership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <LinkButton to="/contact" variant="primary" size="lg" className="group">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </LinkButton>
                <LinkButton to="/VarnicaBajaj-Resume.pdf" variant="secondary" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </LinkButton>
              </div>
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Delhi, India</span>
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
              <div className="relative z-10 bg-card rounded-2xl shadow-2xl p-8 border border-border">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="text-center"
                    >
                      <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl transform rotate-3 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <SectionHeading
            title="Core Expertise"
            subtitle="Technologies and methodologies I leverage to drive product success"
          />
          <SkillsCarousel categories={skillCategories} />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container-custom">
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
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <LinkButton to="/projects" variant="secondary" size="lg">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
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
                <ExperienceCard experience={experience} index={index} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <LinkButton to="/experience" variant="secondary" size="lg">
              View Full Experience
              <ArrowRight className="w-5 h-5 ml-2" />
            </LinkButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/90 to-accent">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how I can help drive your product vision forward with strategic thinking and technical expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LinkButton to="/contact" variant="secondary" size="lg" className="bg-white text-accent hover:bg-white/90">
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </LinkButton>
              <LinkButton to="/VarnicaBajaj-Resume.pdf" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </LinkButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;