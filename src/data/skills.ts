import { SkillCategory } from '@/types';

export const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    description: 'Programming and scripting languages across systems, backends, web, and mobile.',
    skills: [
      { name: 'JavaScript', icon: 'js' },
      { name: 'TypeScript', icon: 'ts' },
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'java' },
      { name: 'C', icon: 'c' },
      { name: 'C#', icon: 'csharp' },
      { name: 'Golang', icon: 'golang' },
      { name: 'PHP', icon: 'php' },
      { name: 'Dart', icon: 'dart' },
      { name: 'HTML5', icon: 'html' },
      { name: 'CSS3', icon: 'css' },
      { name: '.NET', icon: 'net' },
    ],
  },
  {
    category: 'Frontend & Mobile',
    description: 'UI frameworks, styling libraries, and cross-platform mobile SDKs.',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Flutter', icon: 'flutter' },
    ],
  },
  {
    category: 'Backend & Databases',
    description: 'Server runtimes, backend frameworks, relational databases, and BaaS platforms.',
    skills: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'PostgreSQL', icon: 'postgre' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Firebase', icon: 'firebase' },
    ],
  },
  {
    category: 'Version Control & Tools',
    description: 'Source control, continuous integration, and collaboration tools.',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
    ],
  },
];
