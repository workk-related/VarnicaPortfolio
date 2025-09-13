import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button, LinkButton } from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';
import { projects } from '../data/projects';
import { experiences } from '../data/experience';
import MyProfilePic from '../assets/images/ProfilePic.png';
import PMImage from '../assets/images/PMImage.png';
import SkillsCarousel from '../components/SkillsCarousel';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Varnica - Product & Project Manager';
  }, []);

  const skillCategories = [
    {
      title: "Product Strategy & Thinking",
      skills: [
        "User Journey Mapping",
        "Feature Prioritization",
        "MVP Development",
        "Customer Empathy",
        "Problem Solving",
        "Market Research",
        "Requirement Gathering",
        "SDLC Understanding"
      ]
    },
    {
      title: "Project & Program Management",
      skills: [
        "Agile Methodology",
        "Sprint Execution",
        "Scope Documentation",
        "Defect Management",
        "Cross-Team Collaboration",
        "Stakeholder Engagement",
        "Project Roadmapping",
        "Delivery Ownership"
      ]
    },
    {
      title: "User Experience & Design",
      skills: [
        "Visual Communication",
        "Dashboard Designing",
        "Presentation Design",
        "UX Designing",
        "Customer Interviews",
        "Interactive Prototyping"
      ]
    },
    {
      title: "Leadership & Soft Skills",
      skills: [
        "Team Leadership",
        "Conflict Resolution",
        "Public Speaking",
        "Time Management",
        "Communication Skills",
        "Meticulous Organization",
        "Collaboration & Empathy",
        "Talent Retention"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-secondary/20 py-20 sm:py-32">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center gap-12">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-3">
                  Hi, I'm <span className="text-accent">Varnica</span>
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground whitespace-nowrap">
                  Tech-Driven Thinker | PM in Progress | Bridging Engineering & Product
                </h2>
              </div>
              <p className="text-lg mb-8 max-w-2xl" style={{ lineHeight: 1.4 }}>
                <b style={{ fontSize: "1.2em", whiteSpace: "nowrap" }}>
                  From systems to stories, from sprints to strategy, I build with intention
                </b>
                <br />

                <div style={{ marginTop: '0.3em', marginBottom: '0.3em' }}></div>

                <span style={{ fontSize: "1.3em", fontWeight: "600" }}>
                  Hi, I'm Varnica,
                </span>{" "}
                I started my journey writing backend code at Infosys, but quickly found myself steering timelines, gathering requirements, and syncing cross-functional teams. That curiosity led me beyond the "how\" into the \"why", and I haven't looked back since.
                <br />

                <div style={{ marginTop: '0.3em', marginBottom: '0.3em' }}></div>

                <b style={{ fontSize: "1.25em" }}>Over the past 3+ years, I've:</b>
                <br />

                <div style={{ marginTop: '0.3em', marginBottom: '0.3em' }}></div>

                🔧 Engineered scalable systems for global brands
                <br />
                🚀 Managed 0→1 product builds in high-velocity startups
                <br />
                🎯 Taken full ownership across product, tech, and delivery
                <br />

                Whether it's building a job portal from scratch, managing ed-tech MVPs, or shipping features at scale, I bring clarity to chaos, turn ambiguity into action, and always lead with a user-first lens.
                <br />

                <div style={{ marginTop: '0.3em', marginBottom: '0.3em' }}></div>

                <b style={{ fontSize: "1.25em" }}>Why me?</b>
                <br />

                <div style={{ marginTop: '0.3em', marginBottom: '0.3em' }}></div>

                I speak code, think product, and breathe execution. I thrive where there's no roadmap, just a vision waiting to be built.
                <br />
                Now, I'm channeling it all into product & project roles, where strategy meets empathy, and ideas become impact.
                <br />

                <div style={{ marginTop: '0.3em', marginBottom: '0.3em' }}></div>

                <b style={{ lineHeight: 1.5, display: 'block' }}>
                  Let's build bold, Let's build better, Together.
                </b>
              </p>

              <div className="flex flex-wrap gap-4">
                <LinkButton to="/projects" size="lg">
                  View My Work <ArrowRight className="ml-2" size={18} />
                </LinkButton>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('/VarnicaBajaj-Resume.pdf', '_blank')}
                >
                  Resume <Download className="ml-2" size={18} />
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              className="flex-1 flex justify-center md:justify-end"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-full max-w-[28rem]">
                <div className="absolute inset-0 bg-accent/20 rounded-lg transform rotate-3"></div>
                <img
                  src={MyProfilePic}
                  alt="Varnica - Product Manager"
                  className="relative rounded-lg shadow-lg w-full object-cover z-10"
                  onContextMenu={(e) => e.preventDefault()} 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              My Superpowers at Work
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              A dynamic blend of tech, strategy & leadership—engineered to build products that matter.
            </p>
          </div>

          <SkillsCarousel categories={skillCategories} />

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">My Product Management Arsenal</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Product Management Tools */}
              <div className="group relative">
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200 dark:border-blue-700">
                  <div className="w-16 h-16 mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Jira" className="w-10 h-10" />
                  </div>
                  <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">Jira</span>
                  <span className="text-xs text-blue-600 dark:text-blue-300 mt-1">Project Tracking</span>
                </div>
              </div>
              
              <div className="group relative">
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-200 dark:border-indigo-700">
                  <div className="w-16 h-16 mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" alt="Confluence" className="w-10 h-10" />
                  </div>
                  <span className="text-sm font-semibold text-indigo-800 dark:text-indigo-200">Confluence</span>
                  <span className="text-xs text-indigo-600 dark:text-indigo-300 mt-1">Documentation</span>
                </div>
              </div>
              
              <div className="group relative">
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-200 dark:border-purple-700">
                  <div className="w-16 h-16 mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-10 h-10" />
                  </div>
                  <span className="text-sm font-semibold text-purple-800 dark:text-purple-200">Figma</span>
                  <span className="text-xs text-purple-600 dark:text-purple-300 mt-1">Design & Prototyping</span>
                </div>
              </div>
              
              <div className="group relative">
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-200 dark:border-pink-700">
                  <div className="w-16 h-16 mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">M</span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-pink-800 dark:text-pink-200">Mixpanel</span>
                  <span className="text-xs text-pink-600 dark:text-pink-300 mt-1">Analytics</span>
                </div>
              </div>
              
              <div className="group relative">
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-200 dark:border-green-700">
                  <div className="w-16 h-16 mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Slack" className="w-10 h-10" />
                  </div>
                  <span className="text-sm font-semibold text-green-800 dark:text-green-200">Slack</span>
                  <span className="text-xs text-green-600 dark:text-green-300 mt-1">Communication</span>
                </div>
              </div>
              
              <div className="group relative">
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-cyan-200 dark:border-cyan-700">
                  <div className="w-16 h-16 mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" alt="Trello" className="w-10 h-10" />
                  </div>
                  <span className="text-sm font-semibold text-cyan-800 dark:text-cyan-200">Trello</span>
                  <span className="text-xs text-cyan-600 dark:text-cyan-300 mt-1">Task Management</span>
                </div>
              </div>
              
              {/* Development Tools */}
              <div className="group relative">
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-orange-50 to-red-100 dark:from-red-900/20 dark:to-orange-800/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-200 dark:border-orange-700">
                  <div className="w-16 h-16 mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-10 h-10" />
                  </div>
                  <span className="text-sm font-semibold text-orange-800 dark:text-orange-200">Java</span>
                  <span className="text-xs text-orange-600 dark:text-orange-300 mt-1">Backend Development</span>
                </div>
              </div>
              
              <div className="group relative">
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-emerald-900/20 dark:to-green-800/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-200 dark:border-emerald-700">
                  <div className="w-16 h-16 mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="w-10 h-10" />
                  </div>
                  <span className="text-sm font-semibold text-emerald-800 dark:text-emerald-200">Spring Boot</span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-300 mt-1">Framework</span>
                </div>
              </div>
              
              <div className="group relative">
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200 dark:border-blue-700">
                  <div className="w-16 h-16 mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="w-10 h-10" />
                  </div>
                  <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">SQL</span>
                  <span className="text-xs text-blue-600 dark:text-blue-300 mt-1">Database</span>
                </div>
              </div>
              
              <div className="group relative">
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-orange-900/20 dark:to-yellow-800/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-200 dark:border-orange-700">
                  <div className="w-16 h-16 mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm">AWS</span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-orange-800 dark:text-orange-200">AWS</span>
                  <span className="text-xs text-orange-600 dark:text-orange-300 mt-1">Cloud Platform</span>
                </div>
              </div>
              
              <div className="group relative">
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-900/20 dark:to-orange-800/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-red-200 dark:border-red-700">
                  <div className="w-16 h-16 mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-10 h-10" />
                  </div>
                  <span className="text-sm font-semibold text-red-800 dark:text-red-200">Git</span>
                  <span className="text-xs text-red-600 dark:text-red-300 mt-1">Version Control</span>
                </div>
              </div>
              
              <div className="group relative">
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                  <div className="w-16 h-16 mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins" className="w-10 h-10" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Jenkins</span>
                  <span className="text-xs text-gray-600 dark:text-gray-300 mt-1">CI/CD</span>
                </div>
              </div>
              
              {/* Design & Analytics */}
              <div className="group relative">
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-pink-900/20 dark:to-purple-800/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-200 dark:border-purple-700">
                  <div className="w-16 h-16 mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt="Canva" className="w-10 h-10" />
                  </div>
                  <span className="text-sm font-semibold text-purple-800 dark:text-purple-200">Canva</span>
                  <span className="text-xs text-purple-600 dark:text-purple-300 mt-1">Visual Design</span>
                </div>
              </div>
              
              <div className="group relative">
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-orange-900/20 dark:to-yellow-800/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-yellow-200 dark:border-yellow-700">
                  <div className="w-16 h-16 mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <img src="https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg" alt="Google Analytics" className="w-10 h-10" />
                  </div>
                  <span className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">Analytics</span>
                  <span className="text-xs text-yellow-600 dark:text-yellow-300 mt-1">Data Insights</span>
                </div>
              </div>
              
              <div className="group relative">
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-slate-900/20 dark:to-gray-800/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
                  <div className="w-16 h-16 mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" alt="Notion" className="w-10 h-10" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Notion</span>
                  <span className="text-xs text-slate-600 dark:text-slate-300 mt-1">Knowledge Base</span>
                </div>
              </div>
              
              <div className="group relative">
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-orange-50 to-red-100 dark:from-red-900/20 dark:to-orange-800/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-200 dark:border-orange-700">
                  <div className="w-16 h-16 mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm">PP</span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-orange-800 dark:text-orange-200">PowerPoint</span>
                  <span className="text-xs text-orange-600 dark:text-orange-300 mt-1">Presentations</span>
                </div>
              </div>
              
              <div className="group relative">
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-emerald-900/20 dark:to-green-800/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-200 dark:border-green-700">
                  <div className="w-16 h-16 mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm">XL</span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-green-800 dark:text-green-200">Excel</span>
                  <span className="text-xs text-green-600 dark:text-green-300 mt-1">Data Analysis</span>
                </div>
              </div>
              
              <div className="group relative">
                <div className="flex flex-col items-center p-6 bg-gradient-to-br from-orange-50 to-red-100 dark:from-red-900/20 dark:to-orange-800/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-200 dark:border-orange-700">
                  <div className="w-16 h-16 mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" className="w-10 h-10" />
                  </div>
                  <span className="text-sm font-semibold text-orange-800 dark:text-orange-200">Postman</span>
                  <span className="text-xs text-orange-600 dark:text-orange-300 mt-1">API Testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading
            title="Featured Work"
            subtitle="Highlighting my most impactful projects that demonstrate strategic product thinking, cross-functional leadership, and measurable business outcomes."
          />
          
          {/* Current/Recent Projects */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              <div className="px-6">
                <h3 className="text-2xl font-bold text-accent flex items-center gap-3">
                  <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
                  Current Impact Projects
                  <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
                </h3>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.filter(p => ['wella-ecommerce-platform', 'adidas-labelling'].includes(p.id)).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
          
          {/* Key Product Achievements */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              <div className="px-6">
                <h3 className="text-2xl font-bold text-purple-600 flex items-center gap-3">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  Product Innovation Highlights
                </h3>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.filter(p => ['smart-spending-dashboard', 'ats-portal'].includes(p.id)).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Each project represents a unique challenge where I applied product thinking, stakeholder alignment, and execution excellence to drive meaningful outcomes.
            </p>
            <LinkButton to="/projects" variant="outline">
              Explore All Projects & Case Studies <ArrowRight className="ml-2" size={18} />
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Project Stats Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="text-3xl font-bold text-accent mb-2">6+</h4>
              <p className="text-muted-foreground">Projects Led</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="text-3xl font-bold text-accent mb-2">3+</h4>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="text-3xl font-bold text-accent mb-2">95%</h4>
              <p className="text-muted-foreground">On-Time Delivery</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="text-3xl font-bold text-accent mb-2">12+</h4>
              <p className="text-muted-foreground">Markets Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Preview Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading
            title="My Product Leadership Journey"
            subtitle="From engineering to product leadership - a journey of continuous learning and impact creation."
          />
          
          <div className="space-y-6">
            {experiences.slice(0, 2).map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <LinkButton to="/experience" variant="outline">
              View Complete Experience <ArrowRight className="ml-2" size={18} />
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <div className="w-full overflow-hidden" style={{ maxHeight: '600px' }}>
        <img
          src={PMImage}
          alt="Project Management Illustration"
          className="w-[75%] h-auto mx-auto block"
          style={{ maxHeight: '600px' }}
        />
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-accent via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Ready to Build the Next Big Thing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's turn your vision into reality. I bring the perfect blend of technical expertise, strategic thinking, and user empathy to drive product success.
            </p>
            <LinkButton to="/contact" size="lg" className="bg-gradient-to-r from-accent to-purple-600 hover:from-accent/90 hover:to-purple-600/90">
              Let's Connect & Create Impact <ArrowRight className="ml-2" size={18} />
            </LinkButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
