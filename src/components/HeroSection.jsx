import React, { useState } from 'react';
import { profileData } from '../data/profileData';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ onCopyEmail }) {
  const [imgError, setImgError] = useState(false);

  const techStack = [
    'Flutter',
    'Dart',
    'React',
    'Supabase',
    'Firebase',
    'REST APIs'
  ];

  const stats = [
    { value: '3', label: 'Platforms' },
    { value: '6+', label: 'Projects' },
    { value: '2', label: 'Backends' }
  ];

  const platformTags = ['Mobile', 'Web', 'Desktop'];

  return (
    <section id="hero" className="pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Indicator Pill */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
              <span>Available for freelance projects &amp; full-time roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-[#0B1325] dark:text-white tracking-tight leading-[1.08] mb-6">
              Flutter developer &amp;<br />
              full-stack engineer.
            </h1>

            {/* Intro Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl font-normal">
              I'm Muhsin Ahamed T. I build cross-platform mobile, web and desktop applications with clean architecture, reliable backends and attention to detail.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-[#0B1325] hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 transition-colors shadow-2xs"
              >
                View projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-2xs"
              >
                Contact me
              </a>
            </div>

            {/* Technology Stack Text Row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              {techStack.map((tech) => (
                <span key={tech} className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Clean Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-[28px] border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 sm:p-8 shadow-xs dark:shadow-none">
              
              {/* Rounded Rectangle Avatar */}
              <div className="w-20 h-20 rounded-[22px] overflow-hidden bg-[#0B1325] dark:bg-slate-800 shrink-0 mb-6 flex items-center justify-center">
                {imgError ? (
                  <span className="text-white text-2xl font-bold tracking-tight">MA</span>
                ) : (
                  <img
                    src={profileData.avatar}
                    alt={profileData.name}
                    className="w-full h-full object-cover object-top"
                    onError={() => setImgError(true)}
                  />
                )}
              </div>

              {/* Identity Info */}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {profileData.name}
              </h3>
              <p className="text-[15px] text-slate-500 dark:text-slate-400 mt-1 font-normal">
                Flutter developer &amp; full-stack engineer
              </p>

              {/* Divider Line */}
              <div className="border-t border-slate-100 dark:border-slate-800 my-6"></div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2">
                {stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-2xl sm:text-[26px] font-bold text-slate-900 dark:text-white leading-none">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-normal">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider Line */}
              <div className="border-t border-slate-100 dark:border-slate-800 my-6"></div>

              {/* Platform Tags */}
              <div className="flex items-center gap-2.5 flex-wrap">
                {platformTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100/90 dark:bg-slate-800/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
