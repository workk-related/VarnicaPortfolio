export interface ExperienceType {
  id: string;
  company: string;
  companyLogo: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
}

export const experiences: ExperienceType[] = [
  {
    id: 'chapter-apps',
    company: 'Chapter Apps',
    companyLogo: 'https://via.placeholder.com/80x80/4F46E5/FFFFFF?text=CA',
    role: 'Product Manager',
    period: 'Present',
    description: 'Leading multi-product development across AI, SaaS, and HR Tech domains. Managing 3+ concurrent projects including an AI-powered HR recruitment platform, WhatsApp bot for farmers, and enterprise LMS/CMS solutions. Driving product strategy, client relationships, and cross-functional team coordination.',
    skills: ['Multi-Project Management', 'AI Product Development', 'SaaS Architecture', 'Client Relationship Management', 'HR Tech Solutions', 'Cross-functional Leadership', 'Product Strategy', 'Agile Methodology']
  },
  {
    id: 'infosys',
    company: 'Infosys Limited',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/200px-Infosys_logo.svg.png',
    role: 'Senior Systems Engineer',
    period: '2022 - 2024',
    description: 'Developed and maintained enterprise-level backend systems using Java, SpringBoot, and SQL. Collaborated with cross-functional teams to ensure timely delivery of features, focusing on quality and scalability.',
    skills: ['Java', 'SpringBoot', 'SQL', 'AWS', 'Agile', 'Cross-functional Collaboration', 'Feature Prioritization & Roadmapping']
  },
  {
    id: 'seekho360',
    company: 'Seekho 360',
    companyLogo: 'https://via.placeholder.com/80x80/10B981/FFFFFF?text=S360',
    role: 'Project Manager',
    period: 'Sep 2023 – Dec 2023',
    description: 'Spearheaded the planning and execution of three educational products. Coordinated across design and development teams, driving agile sprints and comprehensive product documentation.',
    skills: ['Project Management', 'Agile', 'Product Documentation', 'Team Leadership', 'Educational Technology', 'Stakeholder Communication']
  },
  {
    id: 'perimattic',
    company: 'Perimattic Pvt Ltd.',
    companyLogo: 'https://via.placeholder.com/80x80/F59E0B/FFFFFF?text=P',
    role: 'Associate Product Manager',
    period: 'May 2022 – Aug 2022',
    description: 'Owned end-to-end product planning for a smart job portal integrated with ATS. Conducted user research, authored PRDs, and collaborated closely with engineering on MVP development.',
    skills: ['Product Management', 'User Research', 'PRD Writing', 'MVP Development', 'ATS Integration']
  },
  {
    id: 'cerebry',
    company: 'Cerebry Pte. Ltd.',
    companyLogo: 'https://via.placeholder.com/80x80/8B5CF6/FFFFFF?text=C',
    role: 'Associate Project Manager Intern',
    period: 'Nov 2021 – Mar 2022',
    description: 'Led AI-driven project initiatives for personalized math learning. Managed timelines, coordinated with cross-functional teams, and ensured smooth project execution aligned with user-centric goals.',
    skills: ['Project Management', 'AI/ML', 'Educational Technology', 'Timeline Management', 'User-Centric Design']
  }
];