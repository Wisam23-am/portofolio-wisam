import type { Metadata } from 'next';
import { projectsData } from '@/data/projects';
import { ProjectGallery } from '@/components/ProjectGallery';
import { FolderGit2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects & Work Archive',
  description:
    'Explore open-source platforms, systems engineering tools, and full-stack web/mobile applications built by Wisam.',
};

export default function ProjectsPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            Portfolio Archive
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Projects &amp; Case Studies
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed">
            A comprehensive catalog of systems architecture, web platforms, and mobile apps. Filter by domain or technology stack to inspect specific implementation details.
          </p>
        </div>

        {/* Filterable Project Gallery */}
        <ProjectGallery projects={projectsData} />
      </div>
    </div>
  );
}
