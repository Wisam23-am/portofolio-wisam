'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { profileData } from '@/data/profile';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';
import { ArrowRight, Download, Mail, MapPin, Terminal, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Background subtle glow gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-500/10 dark:bg-blue-500/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Hero Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{profileData.availability}</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">{profileData.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-neutral-700 dark:text-neutral-200">
                {profileData.role}
              </p>
            </div>

            {/* Subtext / Tagline */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {profileData.tagline}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-mono">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-500" />
                {profileData.location}
              </span>
              <span className="text-neutral-300 dark:text-neutral-700 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-cyan-500" />
                {profileData.timezone}
              </span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium text-sm hover:bg-emerald-500 active:scale-95 transition-all shadow-lg shadow-emerald-600/20"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-medium text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all active:scale-95 shadow-sm"
              >
                <Mail className="w-4 h-4 text-neutral-500" />
                Contact Me
              </Link>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/70 text-neutral-700 dark:text-neutral-300 font-medium text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all"
              >
                <Download className="w-4 h-4 text-neutral-500" />
                Resume (PDF)
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Connect:</span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-emerald-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-emerald-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-emerald-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Photo / Avatar Terminal Card */}
          <div className="relative group flex-shrink-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-emerald-500/30 dark:border-emerald-500/40 p-2 bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-950 shadow-2xl">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-900 flex items-center justify-center">
                <Image
                  src="/images/avatar.svg"
                  alt={`${profileData.name} - Profile`}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Quick Experience Badge Floating on Image */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-3 shadow-xl flex items-center gap-3 backdrop-blur-md">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">Production Ready</div>
                <div className="text-sm font-bold text-neutral-900 dark:text-white">Full-Stack &amp; Infra</div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-neutral-200 dark:border-neutral-800/80">
          {profileData.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl bg-neutral-100/50 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-neutral-800/60 text-center sm:text-left transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 mt-1">
                {stat.label}
              </div>
              {stat.subtext && (
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {stat.subtext}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
