import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/projectsData';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

export default function ProjectsSection({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'flutter', label: 'Mobile & Flutter' },
    { id: 'enterprise', label: 'Enterprise & Systems' }
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectsData;
    return projectsData.filter((project) => {
      if (Array.isArray(project.category)) {
        return project.category.includes(activeFilter);
      }
      return project.category === activeFilter;
    });
  }, [activeFilter]);

  const getDisplayTitle = (project) => {
    if (project.id === 'hidayathul-anam-madrasa-portal') {
      return 'Madrasa Student & Admin Portal';
    }
    if (project.id === 'adab-union-payment-portal') {
      return 'ADAB Financial App: Union Payment Portal';
    }
    if (project.id === 'chicken-shop-pos-suite') {
      return 'Chicken Shop Management & Retail POS Suite';
    }
    if (project.id === 'amia-fest-management-platform') {
      return 'AMIA FEST: Arts & Competition Suite';
    }
    return project.title;
  };

  const getShortDesc = (project) => {
    const conciseDescriptions = {
      'chicken-shop-pos-suite':
        'Offline-first retail POS & ERP with weight-based billing, role portals, and business ledger analytics.',
      'amia-fest-management-platform':
        'Full-stack fest management platform with live TV stage broadcasting and real-time jury scoring.',
      'hidayathul-anam-madrasa-portal':
        'Role-based school management portal with student dashboards, results tracking, and hall tickets.',
      'adab-union-payment-portal':
        'Financial management system designed for monthly dues collection and union payment tracking.',
      'maranoo-app':
        'Cross-platform mobile and web application suite built with clean architecture and cloud sync.'
    };
    return conciseDescriptions[project.id] || project.shortDescription;
  };

  return (
    <section id="projects" className="py-16 lg:py-20 border-t border-slate-200/60 dark:border-slate-800/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
          <div>
            <span className="text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase block mb-1.5">
              PROJECTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1325] dark:text-white tracking-tight">
              Featured work &amp; case studies.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 max-w-xl leading-relaxed">
              Cross-platform applications, web platforms, and business systems engineered with Flutter and modern backends.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 self-start md:self-end">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  activeFilter === cat.id
                    ? 'bg-[#0B1325] text-white dark:bg-white dark:text-slate-950'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Project Cards Grid (3 in one row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredProjects.map((project) => {
            const primaryTags = project.tags ? project.tags.slice(0, 3) : [];
            const remainingCount = project.tags ? project.tags.length - primaryTags.length : 0;
            const displayTitle = getDisplayTitle(project);
            const shortDesc = getShortDesc(project);

            return (
              <div
                key={project.id}
                className="flex flex-col justify-between bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
              >
                <div>
                  {/* Category & Featured Badge */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[11px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 truncate">
                      {project.categoryLabel}
                    </span>

                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-800/60 px-2 py-0.5 rounded-full shrink-0">
                        <span>★</span>
                        <span>Featured</span>
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white tracking-tight leading-snug cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors line-clamp-1"
                    title={displayTitle}
                  >
                    {displayTitle}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed line-clamp-2">
                    {shortDesc}
                  </p>

                  {/* Compact Technology Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-3 mb-3.5">
                    {primaryTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium text-slate-700 dark:text-slate-300 bg-slate-100/90 dark:bg-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                    {remainingCount > 0 && (
                      <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 dark:text-slate-500">
                        +{remainingCount}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  {/* Compact Action Buttons */}
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-[#0B1325] hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 shadow-2xs transition-colors cursor-pointer"
                      >
                        <span>Live demo</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg text-xs font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-2xs transition-colors"
                      >
                        Code
                      </a>
                    )}
                  </div>

                  {/* Divider Line */}
                  <div className="border-t border-slate-100 dark:border-slate-800/80 my-3"></div>

                  {/* View Specifications Link */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors"
                  >
                    <span>View specifications</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
