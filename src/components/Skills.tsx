'use client';

import * as React from 'react';
import { skillsData } from '@/data/skills';
import { TechIcon } from '@/components/icons/TechIcons';
import { Layers } from 'lucide-react';

export function Skills() {
  const [activeTab, setActiveTab] = React.useState<string>('All');

  const categories = ['All', ...skillsData.map((c) => c.category)];

  const displayedSkills = React.useMemo(() => {
    if (activeTab === 'All') {
      return skillsData.flatMap((cat) =>
        cat.skills.map((skill) => ({ ...skill, category: cat.category }))
      );
    }
    const cat = skillsData.find((c) => c.category === activeTab);
    return cat ? cat.skills.map((skill) => ({ ...skill, category: cat.category })) : [];
  }, [activeTab]);

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            Skills &amp; Technologies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Tech Stack &amp; Tools
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base">
            Technologies, frameworks, databases, and infrastructure tools I use to build scalable products.
          </p>
        </div>

        {/* Category Selector Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 font-semibold'
                    : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/40 hover:text-emerald-500'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid: Logo on Top, Name Below */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
          {displayedSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative p-5 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-lg hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center gap-3"
            >
              {/* Logo on top */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 p-2.5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-neutral-100 dark:border-neutral-700/50">
                <TechIcon name={skill.icon || skill.name} className="w-full h-full object-contain" />
              </div>

              {/* Name directly below the logo */}
              <div className="space-y-0.5">
                <span className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors block">
                  {skill.name}
                </span>
                {activeTab === 'All' && (
                  <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 block">
                    {skill.category}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
