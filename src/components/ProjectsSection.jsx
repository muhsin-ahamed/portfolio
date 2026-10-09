import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/projectsData';
import { GithubIcon } from './SocialIcons';
import { 
  FolderGit2, 
  ExternalLink, 
  Search, 
  Sparkles, 
  Layers, 
  Zap, 
  ArrowUpRight,
  Code2,
  X,
  ChevronRight
} from 'lucide-react';

export default function ProjectsSection({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'flutter', label: 'Mobile & Flutter' },
    { id: 'enterprise', label: 'Enterprise & Systems' }
  ];

  // Dynamic counts for category tabs
  const getCategoryCount = (catId) => {
    if (catId === 'all') return projectsData.length;
    return projectsData.filter((p) => 
      p.category === catId || (Array.isArray(p.category) && p.category.includes(catId))
    ).length;
  };

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesFilter = 
        activeFilter === 'all' || 
        project.category === activeFilter ||
        (Array.isArray(project.category) && project.category.includes(activeFilter));
      
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesFilter;

      const matchesSearch = 
        project.title.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.categoryLabel.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query));
      
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#FAFBFD] bg-grid-pattern relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50/90 border border-indigo-200/60 text-indigo-700 text-xs font-mono font-semibold tracking-wide mb-3">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              03 // SELECTED WORKS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Featured Projects & Applications
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl leading-relaxed">
              Explore real-world applications built with Flutter, modern web technologies, and scalable backend services — from cross-platform mobile apps to student portals and event management systems.
            </p>
          </div>

          {/* Quick Metrics Counter */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-left">
              <div className="text-lg font-mono font-extrabold text-slate-900">
                {projectsData.length}
              </div>
              <div className="text-[11px] font-medium text-slate-500">
                Production Works
              </div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-left">
              <div className="text-lg font-mono font-extrabold text-emerald-600">
                100%
              </div>
              <div className="text-[11px] font-medium text-slate-500">
                Cross-Platform
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Filter & Search Control Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200/80">
          
          {/* Segmented Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100/90 rounded-2xl border border-slate-200/60 w-full sm:w-auto">
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat.id;
              const count = getCategoryCount(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50 border border-transparent'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                    isActive 
                      ? 'bg-indigo-50 text-indigo-700 font-bold' 
                      : 'bg-slate-200/70 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by tech, keyword, name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 bg-white border border-slate-200/90 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-slate-200/80 shadow-2xs my-8 max-w-lg mx-auto">
            <Code2 className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-sm font-bold text-slate-800">No matching projects found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
              No results match "{searchQuery}". Try searching for Flutter, Dart, Supabase, or clear the search.
            </p>
            <button 
              onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* GRID VIEW: Theme-Aligned Code & Architecture Detail Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 pt-3">
            {filteredProjects.map((project) => {
              const primaryTags = project.tags.slice(0, 4);

              return (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="group bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-xl hover:shadow-slate-300/60 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between p-6 cursor-pointer relative overflow-hidden active:translate-y-0"
                >

                  <div>
                    {/* Header Bar: Category, Featured, CodeName/Title & Action Links */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-200/60">
                            {project.categoryLabel}
                          </span>
                          {project.featured && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-md">
                              <Zap className="w-2.5 h-2.5 fill-current text-amber-600" />
                              Featured
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-black font-mono tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {project.codeName || project.title}
                        </h3>
                        <p className="text-xs font-semibold text-slate-500 mt-0.5 line-clamp-1">
                          {project.title}
                        </p>
                      </div>

                      {/* Top Right Action Icons: GitHub & Drive/Live Link */}
                      <div className="flex items-center gap-1 shrink-0 p-1 rounded-xl bg-slate-50 border border-slate-200/70">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-white hover:shadow-2xs transition-all"
                            title="GitHub Repository"
                            aria-label="GitHub Repository"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}
                        {(project.liveUrl || project.driveUrl) && (
                          <a
                            href={project.driveUrl || project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-white hover:shadow-2xs transition-all"
                            title="Live Demo / Drive Link"
                            aria-label="Live Demo / Drive Link"
                          >
                            <ExternalLink className="w-4 h-4" strokeWidth={1.8} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Short Description Text */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-sans line-clamp-3 mt-3">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Card Bottom: Dashed Divider Line + Tech Stack Badges */}
                  <div className="mt-5">
                    {/* Theme Cohesive Dashed Divider Line */}
                    <div className="border-t border-dashed border-slate-300 my-3.5 w-full"></div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {primaryTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-[11px] font-semibold text-slate-800 px-2.5 py-1 bg-slate-100/90 border border-slate-200/90 rounded-md group-hover:border-indigo-200 group-hover:bg-indigo-50/40 transition-colors shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > primaryTags.length && (
                        <span className="font-mono text-[10px] font-semibold text-slate-400 px-1 py-0.5">
                          +{project.tags.length - primaryTags.length}
                        </span>
                      )}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-600 group-hover:text-indigo-700 transition-colors">
                      <span>View Specifications</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
