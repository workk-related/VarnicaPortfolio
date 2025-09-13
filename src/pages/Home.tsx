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
            <h3 className="text-2xl font-bold text-center mb-8">Tools & Technologies I Work With</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
              {/* Product Management Tools */}
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Jira" className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">Jira</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" alt="Confluence" className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">Confluence</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">Figma</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="https://mixpanel.com/wp-content/uploads/2021/07/mp-logo-mark-color.svg" alt="Mixpanel" className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">Mixpanel</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Slack" className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">Slack</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" alt="Trello" className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">Trello</span>
              </div>
              
              {/* Development Tools */}
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">Java</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">Spring Boot</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">SQL</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">AWS</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">Git</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins" className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">Jenkins</span>
              </div>
              
              {/* Design & Analytics */}
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt="Canva" className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">Canva</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg" alt="Google Analytics" className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">Analytics</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" alt="Notion" className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">Notion</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="https://www.vectorlogo.zone/logos/microsoft_powerpoint/microsoft_powerpoint-icon.svg" alt="PowerPoint" className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">PowerPoint</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="https://www.vectorlogo.zone/logos/microsoft_office_excel/microsoft_office_excel-icon.svg" alt="Excel" className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">Excel</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">Postman</span>
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
            <h3 className="text-xl font-bold mb-6 text-accent">🚀 Current & Recent Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.filter(p => ['wella-ecommerce-platform', 'adidas-labelling'].includes(p.id)).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
          
          {/* Key Product Achievements */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-6 text-accent">🎯 Key Product Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.filter(p => ['smart-spending-dashboard', 'ats-portal'].includes(p.id)).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
          
          {/* Early Career Impact */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-accent">📈 Early Career Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.filter(p => ['educational-platform', 'ai-learning'].includes(p.id)).map((project, index) => (
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="text-3xl font-bold text-accent mb-2">6+</h4>
              <p className="text-muted-foreground">Projects Led</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="text-3xl font-bold text-accent mb-2">3+</h4>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="text-3xl font-bold text-accent mb-2">40%</h4>
              <p className="text-muted-foreground">Avg. Efficiency Gain</p>
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
            title="Professional Journey"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Create Something Amazing Together</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, and opportunities.
            </p>
            <LinkButton to="/contact" size="lg">
              Let's Get in Touch <ArrowRight className="ml-2" size={18} />
            </LinkButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
