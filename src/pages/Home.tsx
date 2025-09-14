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

          {/* Tools & Technologies Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent">
                My Product Management Toolkit
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The strategic arsenal I use to transform ideas into impactful products
              </p>
            </div>

            {/* Product Management Core */}
            <div className="mb-12">
              <div className="flex items-center justify-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-xs"></div>
                <h4 className="px-6 text-xl font-bold text-accent">Strategy & Planning</h4>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent max-w-xs"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Jira" className="w-10 h-10 filter brightness-0 invert" />
                  </div>
                  <p className="text-center mt-2 text-sm font-medium">Jira</p>
                </div>
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" alt="Confluence" className="w-10 h-10 filter brightness-0 invert" />
                  </div>
                  <p className="text-center mt-2 text-sm font-medium">Confluence</p>
                </div>
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" alt="Notion" className="w-10 h-10 filter brightness-0 invert" />
                  </div>
                  <p className="text-center mt-2 text-sm font-medium">Notion</p>
                </div>
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" alt="Trello" className="w-10 h-10 filter brightness-0 invert" />
                  </div>
                  <p className="text-center mt-2 text-sm font-medium">Trello</p>
                </div>
              </div>
            </div>

            {/* Design & User Experience */}
            <div className="mb-12">
              <div className="flex items-center justify-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent max-w-xs"></div>
                <h4 className="px-6 text-xl font-bold text-purple-600">Design & UX</h4>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent max-w-xs"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-10 h-10" />
                  </div>
                  <p className="text-center mt-2 text-sm font-medium">Figma</p>
                </div>
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt="Canva" className="w-10 h-10" />
                  </div>
                  <p className="text-center mt-2 text-sm font-medium">Canva</p>
                </div>
              </div>
            </div>

            {/* Analytics & Data */}
            <div className="mb-12">
              <div className="flex items-center justify-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent max-w-xs"></div>
                <h4 className="px-6 text-xl font-bold text-green-600">Analytics & Data</h4>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent max-w-xs"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <span className="text-white font-bold text-2xl">M</span>
                  </div>
                  <p className="text-center mt-2 text-sm font-medium">Mixpanel</p>
                </div>
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <p className="text-center mt-2 text-sm font-medium">Analytics</p>
                </div>
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h2v2H7V7zm0 4h2v2H7v-2zm0 4h2v2H7v-2zm4-8h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6v-2z"/>
                    </svg>
                  </div>
                  <p className="text-center mt-2 text-sm font-medium">Excel</p>
                </div>
              </div>
            </div>

            {/* Communication & Collaboration */}
            <div className="mb-12">
              <div className="flex items-center justify-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent max-w-xs"></div>
                <h4 className="px-6 text-xl font-bold text-blue-600">Communication</h4>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent max-w-xs"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Slack" className="w-10 h-10" />
                  </div>
                  <p className="text-center mt-2 text-sm font-medium">Slack</p>
                </div>
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM3 5h18v2H3V5zm0 4h18v10H3V9z"/>
                      <path d="M5 11h6v2H5v-2zm0 4h4v2H5v-2z"/>
                    </svg>
                  </div>
                  <p className="text-center mt-2 text-sm font-medium">PowerPoint</p>
                </div>
              </div>
            </div>

            {/* Technical Foundation */}
            <div className="mb-12">
              <div className="flex items-center justify-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent max-w-xs"></div>
                <h4 className="px-6 text-xl font-bold text-orange-600">Technical Foundation</h4>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent max-w-xs"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-10 h-10" />
                  </div>
                  <p className="text-center mt-2 text-sm font-medium">Java</p>
                </div>
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="w-10 h-10" />
                  </div>
                  <p className="text-center mt-2 text-sm font-medium">Spring Boot</p>
                </div>
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="w-10 h-10" />
                  </div>
                  <p className="text-center mt-2 text-sm font-medium">SQL</p>
                </div>
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.75 11.35a4.32 4.32 0 0 0-.79-.08 4.32 4.32 0 0 0-4.32 4.32c0 .27.03.53.08.79L12 17.77l-1.72-1.39c.05-.26.08-.52.08-.79a4.32 4.32 0 0 0-4.32-4.32c-.27 0-.53.03-.79.08L6.64 12l1.39-1.72c-.05-.26-.08-.52-.08-.79a4.32 4.32 0 0 1 4.32-4.32c.27 0 .53.03.79.08L12 6.64l1.72 1.39c-.05.26-.08.52-.08.79a4.32 4.32 0 0 1 4.32 4.32c0 .27-.03.53-.08.79L17.36 12l-1.39 1.72z"/>
                    </svg>
                  </div>
                  <p className="text-center mt-2 text-sm font-medium">AWS</p>
                </div>
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-10 h-10" />
                  </div>
                  <p className="text-center mt-2 text-sm font-medium">Git</p>
                </div>
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" className="w-10 h-10" />
                  </div>
                  <p className="text-center mt-2 text-sm font-medium">Postman</p>
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
                  Current Product Leadership
                  <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
                </h3>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.filter(p => p.id.startsWith('chapter-apps')).slice(0, 2).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
          
          {/* Enterprise Impact Projects */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              <div className="px-6">
                <h3 className="text-2xl font-bold text-purple-600 flex items-center gap-3">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  Enterprise Impact Projects
                </h3>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.filter(p => ['wella-ecommerce-platform', 'adidas-labelling'].includes(p.id)).map((project, index) => (
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
