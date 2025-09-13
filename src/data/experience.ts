export interface ExperienceType {
  id: string;
  company: string;
  companyLogo: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
}

import infosysLogo from '../assets/images/infosys-logo-png (1).png';
import seekhoLogo from '../assets/images/Seekho360.png';
import perimatticLogo from '../assets/images/Perimattic.png';
import cerebryLogo from '../assets/images/Cerebry Logo.png';
import chapterAppsLogo from '../assets/images/Logo.png';

export const experiences: ExperienceType[] = [
  {
    id: 'chapter-apps',
    company: 'Chapter Apps',
    companyLogo: chapterAppsLogo,
    role: 'Product Manager',
    period: 'Present',
    description: 'Leading product strategy and development initiatives, driving user-centered product decisions and cross-functional team collaboration to deliver impactful solutions.',
    skills: ['Product Strategy', 'User Research', 'Product Roadmapping', 'Cross-functional Leadership', 'Data-driven Decision Making', 'Agile Product Development']
  },
  {
    id: 'infosys',
    company: 'Infosys Limited',
    companyLogo: infosysLogo,
    role: 'Senior Systems Engineer',
    //period: '2022 - 2024',
    description: 'Developed and maintained enterprise-level backend systems using Java, SpringBoot, and SQL. Collaborated with cross-functional teams to ensure timely delivery of features, focusing on quality and scalability.',
    skills: ['Java', 'SpringBoot', 'SQL', 'AWS', 'Agile', 'Cross-functional Collaboration', 'Feature Prioritization & Roadmapping']
  },
  {
    id: 'seekho360',
    company: 'Seekho 360',
    companyLogo: seekhoLogo,
    role: 'Project Manager',
    //period: 'Sep 2023 – Dec 2023',
    description: 'Spearheaded the planning and execution of three educational products. Coordinated across design and development teams, driving agile sprints and comprehensive product documentation.',
    skills: ['Project Management', 'Agile', 'Product Documentation', 'Team Leadership', 'Educational Technology', 'Stakeholder Communication']
  },
  {
    id: 'perimattic',
    company: 'Perimattic Pvt Ltd.',
    companyLogo: perimatticLogo,
    role: 'Associate Product Manager',
    //period: 'May 2022 – Aug 2022',
    description: 'Owned end-to-end product planning for a smart job portal integrated with ATS. Conducted user research, authored PRDs, and collaborated closely with engineering on MVP development.',
    skills: ['Product Management', 'User Research', 'PRD Writing', 'MVP Development', 'ATS Integration']
  },
  {
    id: 'cerebry',
    company: 'Cerebry Pte. Ltd.',
    companyLogo: cerebryLogo,
    role: 'Associate Project Manager Intern',
    //period: 'Nov 2021 – Mar 2022',
    description: 'Led AI-driven project initiatives for personalized math learning. Managed timelines, coordinated with cross-functional teams, and ensured smooth project execution aligned with user-centric goals.',
    skills: ['Project Management', 'AI/ML', 'Educational Technology', 'Timeline Management', 'User-Centric Design']
  }
];