import * as React from 'react';
import Link from 'next/link';
import { projectsData } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { Sparkles, ArrowRight } from 'lucide-react';

export function FeaturedProjects() {
  const featured = projectsData.filter((p) => p.featured);

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Selected Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-base max-w-xl">
              Highlights of platforms, system tools, and full-stack solutions built with performance and scale in mind.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 hover:underline"
          >
            View All {projectsData.length} Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Projects Stack */}
        <div className="space-y-8">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featuredLayout={true} />
          ))}
        </div>

        {/* Bottom CTA to all projects */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-md"
          >
            Browse Full Project Archive
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
