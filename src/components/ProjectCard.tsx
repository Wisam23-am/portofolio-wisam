import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';
import { GithubIcon } from '@/components/icons/BrandIcons';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  featuredLayout?: boolean;
}

export function ProjectCard({ project, featuredLayout = false }: ProjectCardProps) {
  return (
    <div
      className={`group relative rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300 flex flex-col ${
        featuredLayout ? 'lg:flex-row lg:items-stretch' : ''
      }`}
    >
      {/* Thumbnail / Mockup Container */}
      <Link
        href={`/projects/${project.slug}`}
        className={`relative block overflow-hidden bg-neutral-950 cursor-pointer ${
          featuredLayout ? 'w-full lg:w-1/2 min-h-[260px] lg:min-h-[340px]' : 'w-full aspect-[16/10]'
        }`}
      >
        <div className="relative w-full h-full">
          <Image
            src={project.images[0] || '/images/projects/tbconnect-1.svg'}
            alt={project.title}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-neutral-950/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </Link>

      {/* Content Container */}
      <div className={`p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-5 ${featuredLayout ? 'lg:w-1/2' : ''}`}>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>{project.period}</span>
            <span>{project.role}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-emerald-500 transition-colors">
            <Link href={`/projects/${project.slug}`} className="hover:underline">
              {project.title}
            </Link>
          </h3>

          <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3 leading-relaxed">
            {project.summary}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-700/50"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="px-2 py-0.5 rounded-md text-xs font-mono text-neutral-400 bg-neutral-100 dark:bg-neutral-800">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 group-hover:translate-x-0.5 transition-all"
          >
            Case Study &amp; Details
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                title="View Source Code"
                aria-label="View Source Code"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-emerald-500 transition-colors"
                title="Live Demo"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
