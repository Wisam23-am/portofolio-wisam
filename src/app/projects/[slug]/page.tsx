import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projects';
import { GithubIcon } from '@/components/icons/BrandIcons';
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  User,
  Layers,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Cpu,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Case Study | Wisam`,
      description: project.summary,
      images: [
        {
          url: project.images[0] || '/images/og-image.svg',
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next project for smooth navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject =
    projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects Archive
        </Link>

        {/* Project Header Banner */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                Featured Case Study
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-4xl">
            {project.summary}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm text-sm">
            <div>
              <div className="text-xs text-neutral-400 font-mono flex items-center gap-1.5 mb-1">
                <User className="w-3.5 h-3.5" />
                Role
              </div>
              <div className="font-semibold text-neutral-900 dark:text-white">
                {project.role}
              </div>
            </div>

            <div>
              <div className="text-xs text-neutral-400 font-mono flex items-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5" />
                Timeline
              </div>
              <div className="font-semibold text-neutral-900 dark:text-white">
                {project.period}
              </div>
            </div>

            <div className="col-span-2 flex items-center justify-start sm:justify-end gap-3 pt-2 sm:pt-0">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-500 transition-colors shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Preview
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold text-xs hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Primary Project Mockup / Screenshot Showcase */}
        <div className="space-y-4">
          <div className="relative w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 aspect-[16/9] shadow-xl">
            <Image
              src={project.images[0]}
              alt={`${project.title} Preview`}
              fill
              priority
              className="object-cover object-top"
            />
          </div>

          {/* Secondary Gallery Previews */}
          {project.images.length > 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.slice(1).map((img, i) => (
                <div
                  key={i}
                  className="relative w-full rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 aspect-[16/9] shadow-md"
                >
                  <Image
                    src={img}
                    alt={`${project.title} Architecture/Preview ${i + 2}`}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Key Metrics Row */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-4 rounded-xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                  {metric.value}
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-300 font-medium mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Case Study Content Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                Project Overview
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Problem & Solution */}
            {project.problem && project.solution && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-3">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-rose-500" />
                    The Problem &amp; Bottleneck
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 space-y-3">
                  <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    The Implemented Solution
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            )}

            {/* Features */}
            {project.features && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  Key Highlights &amp; Features
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="p-3.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                    >
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                        {idx + 1}
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Architecture & Engineering Details */}
            {project.architecture && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-blue-500" />
                  System Architecture
                </h2>
                <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-3">
                  <ul className="space-y-2.5 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {project.architecture.map((arch, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Challenges Overcome */}
            {project.challenges && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-cyan-500" />
                  Engineering Challenges &amp; Lessons
                </h2>
                <ul className="space-y-3">
                  {project.challenges.map((ch, idx) => (
                    <li
                      key={idx}
                      className="p-4 rounded-xl bg-neutral-100/70 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed"
                    >
                      <div className="font-semibold text-neutral-900 dark:text-white mb-1">
                        Challenge #{idx + 1}
                      </div>
                      <div>{ch}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Sidebar: Tech Stack & Actions */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-5 sticky top-24">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-500" />
                Technologies Used
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/60 dark:border-neutral-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 space-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Visit Live Demo
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    View GitHub Repository
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Next Project Footer Bar */}
        <div className="pt-12 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-emerald-500"
          >
            <ArrowLeft className="w-4 h-4" />
            All Projects
          </Link>

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500"
            >
              <span>Next: {nextProject.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
