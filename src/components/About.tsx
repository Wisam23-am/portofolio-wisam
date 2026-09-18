import * as React from 'react';
import { profileData } from '@/data/profile';
import { Code2, Server, Cpu, ShieldCheck, Sparkles, GraduationCap } from 'lucide-react';

export function About() {
  const principles = [
    {
      icon: Code2,
      title: 'Maintainable & Typed Code',
      description: 'Strict TypeScript typing, modular component boundaries, and comprehensive self-documenting code.',
    },
    {
      icon: Server,
      title: 'Resilient System Architecture',
      description: 'Designing offline-first synchronization, zero-downtime deployments, and optimized serverless edge functions.',
    },
    {
      icon: Cpu,
      title: 'Performance-First Engineering',
      description: 'Targeting sub-second load times, lightweight bundle footprints, and 90+ Lighthouse audit scores.',
    },
    {
      icon: ShieldCheck,
      title: 'Security & Privacy By Design',
      description: 'Zero-knowledge client encryption, robust Row Level Security (RLS), and principle of least privilege.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column: Bio */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              About Me
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Bridging software development with reliable systems engineering.
            </h2>

            <div className="space-y-4 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
              {profileData.fullBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Education / Background highlight */}
            <div className="pt-2 p-5 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                  B.Sc. in Informatics / Computer Science
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  State University of Technology • Focus on Computer Networks &amp; Distributed Systems
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Principles */}
          <div className="w-full md:w-5/12 grid grid-cols-1 gap-4">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1.5 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
