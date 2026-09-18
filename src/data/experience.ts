import { ExperienceItem } from '@/types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Lead Full-Stack Developer',
    company: 'Nexus Digital Labs',
    location: 'Remote',
    period: '2024 — Present',
    type: 'Full-time',
    featured: true,
    description: [
      'Spearheaded the development and deployment of enterprise SaaS portals and health monitoring mobile systems serving thousands of active users.',
      'Designed microservices with Next.js, Node.js, and Supabase, reducing query latencies by 42% through strategic caching and indexing.',
      'Implemented automated CI/CD deployment pipelines using GitHub Actions and Docker, cutting deployment cycle times from 45 minutes to 4 minutes.',
      'Mentored 4 junior developers on TypeScript best practices, semantic HTML, and test-driven development.'
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Tailwind CSS', 'Supabase'],
  },
  {
    id: 'exp-2',
    role: 'Systems & Software Engineer',
    company: 'Synapse Tech Solutions',
    location: 'Jakarta, Indonesia',
    period: '2023 — 2024',
    type: 'Full-time',
    featured: true,
    description: [
      'Developed real-time network monitoring and alert tools with Python and WebSockets to monitor internal server health across 20+ nodes.',
      'Built customer-facing web dashboards with React and Tailwind CSS featuring interactive data visualizations and CSV/PDF export workflows.',
      'Maintained Linux production servers, configured Nginx reverse proxies with SSL/TLS automation, and hardened firewall configurations.'
    ],
    technologies: ['React', 'Python', 'FastAPI', 'Linux', 'Nginx', 'Docker', 'Redis', 'WebSockets'],
  },
  {
    id: 'exp-3',
    role: 'Mobile & Web Developer (Contract / Consultant)',
    company: 'InnoHealth Initiative',
    location: 'Remote',
    period: '2022 — 2023',
    type: 'Contract',
    featured: false,
    description: [
      'Built cross-platform mobile application (TBConnect) for community health workers with offline-first synchronization capabilities.',
      'Collaborated with healthcare stakeholders to iterate UX wireframes into an intuitive interface for field workers in low-connectivity areas.'
    ],
    technologies: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'Figma', 'Offline Sync'],
  },
  {
    id: 'exp-4',
    role: 'Bachelor of Computer Science / Informatics',
    company: 'State University of Technology',
    location: 'Indonesia',
    period: '2019 — 2023',
    type: 'Education',
    featured: false,
    description: [
      'Graduated with Honors. Focused on Computer Networks, Distributed Computing, and Software Engineering.',
      'Authored final research thesis on low-latency data synchronization for resource-constrained edge devices.'
    ],
    technologies: ['Algorithms & Data Structures', 'Computer Networks', 'Database Systems', 'Operating Systems'],
  },
];
