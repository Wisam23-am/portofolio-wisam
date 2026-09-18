import * as React from 'react';
import { experienceData } from '@/data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Experience &amp; Milestones
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base">
            Track record of shipping production software, optimizing systems, and leading development initiatives.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-4 md:ml-32 space-y-12">
          {experienceData.map((item) => (
            <div key={item.id} className="relative pl-8 md:pl-10 group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-neutral-950 border-4 border-emerald-500 group-hover:scale-125 transition-transform" />

              {/* Period Pill floating left on md screens */}
              <div className="md:absolute md:-left-36 md:top-1 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 mb-2 md:mb-0 md:text-right md:w-28 flex items-center md:justify-end gap-1">
                <Calendar className="w-3.5 h-3.5 md:hidden" />
                <span>{item.period}</span>
              </div>

              {/* Card Body */}
              <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/80 shadow-sm group-hover:border-emerald-500/40 transition-colors space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      {item.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 rounded-md">
                      <MapPin className="w-3 h-3 text-neutral-400" />
                      {item.location}
                    </span>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {item.type}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {item.description.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
