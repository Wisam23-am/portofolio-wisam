'use client';

import * as React from 'react';
import Link from 'next/link';
import { profileData } from '@/data/profile';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';
import { Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950/50 mt-auto transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2 space-y-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-neutral-900 dark:text-white font-mono font-bold tracking-tight text-lg"
            >
              <span className="w-7 h-7 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-xs font-black">
                W
              </span>
              {profileData.name}
            </Link>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm">
              {profileData.role}. Building high-performance, resilient applications and systems with clean architecture.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-3 font-mono">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>
                <Link href="/#about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Career Experience
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Technical Skills
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-3 font-mono">
              Stack &amp; Hosting
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3">
              Crafted with Next.js App Router, Tailwind CSS, TypeScript, and Lucide Icons. Designed for 100% free static/serverless hosting ($0/month).
            </p>
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              Back to top
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 gap-4">
          <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Fast • Accessible • WCAG AA</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
