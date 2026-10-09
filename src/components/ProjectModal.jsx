import React, { useEffect } from 'react';
import { GithubIcon } from './SocialIcons';
import { X, ExternalLink, CheckCircle2, Zap, Sparkles, Layers, ArrowUpRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    // Disable background page scrolling when modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Handle Escape key press to close modal
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      // Re-enable page scrolling on cleanup
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const isLiveWeb = project.liveUrl && !project.liveUrl.includes('github.com');

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header Bar with Close Button */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 backdrop-blur-xs">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200/60">
              {project.categoryLabel}
            </span>
            {isLiveWeb && (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Live System
              </span>
            )}
            {project.featured && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200/60">
                <Zap className="w-3 h-3 text-amber-600 fill-current" />
                Featured
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-7">
          
          {/* Project Title */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
              {project.shortDescription}
            </p>
          </div>

          {/* Project Details & Quick Repository Card (Replacing Image Banner) */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-mono text-sm sm:text-base font-extrabold text-slate-900">
                  {project.codeName || `${project.id}.dev`}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-2xs flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub Repo</span>
                  </a>
                )}
                {(project.liveUrl || project.driveUrl) && (
                  <a
                    href={project.driveUrl || project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-2xs flex items-center gap-1.5 text-xs font-bold"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live / Drive</span>
                  </a>
                )}
              </div>
            </div>

            <div className="border-t border-dashed border-slate-300 my-1"></div>

            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-mono text-slate-500 mr-1 font-semibold">Tech Stack:</span>
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-white text-slate-800 border border-slate-200/80 shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Key Metrics Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
              <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                Architecture & Performance Metrics
              </h4>
              <div className={`grid grid-cols-1 sm:grid-cols-2 ${project.metrics.length >= 4 ? 'lg:grid-cols-4' : 'sm:grid-cols-3'} gap-3`}>
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200/70 shadow-2xs">
                    <span className="text-lg font-mono font-extrabold text-slate-900 block leading-tight">
                      {m.value}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Overview & Scope */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-2">
              System Overview & Architecture
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.fullDescription}
            </p>
            {project.overview && project.overview !== project.fullDescription && (
              <p className="text-sm text-slate-600 leading-relaxed mt-2 pt-2 border-t border-slate-100">
                {project.overview}
              </p>
            )}
          </div>

          {/* Problem & Solution Callout */}
          {project.problemSolution && (
            <div className="p-4.5 rounded-2xl bg-amber-50/50 border border-amber-200/70">
              <h4 className="text-xs font-mono font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                💡 Problem & Engineering Solution
              </h4>
              <p className="text-xs sm:text-sm text-amber-950/90 leading-relaxed whitespace-pre-line font-normal">
                {project.problemSolution}
              </p>
            </div>
          )}

          {/* Core Technical Capabilities List */}
          {project.keyFeatures && (
            <div>
              <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-3">
                Key Capabilities & System Modules
              </h4>
              <ul className="grid grid-cols-1 gap-2.5">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50/60 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Resume Highlights */}
          {project.resumeBullets && project.resumeBullets.length > 0 && (
            <div>
              <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-3">
                Engineering Highlights
              </h4>
              <ul className="space-y-2">
                {project.resumeBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0 mt-2"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-mono hidden sm:block">
            {project.id}
          </div>

          <div className="flex items-center gap-2.5 ml-auto">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-xs text-slate-700 bg-white hover:bg-slate-100 border border-slate-200/90 shadow-2xs transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                View Repository
              </a>
            )}
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                {isLiveWeb ? 'Open Live Demo' : 'Explore Source'}
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
