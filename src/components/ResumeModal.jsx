import React, { useEffect } from 'react';
import { profileData } from '../data/profileData';
import { experienceData, educationData } from '../data/experienceData';
import { projectsData } from '../data/projectsData';
import { LinkedinIcon, GithubIcon, TwitterIcon } from './SocialIcons';
import { X, Printer, Mail, MapPin } from 'lucide-react';

export default function ResumeModal({ onClose }) {
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Fixed Control Bar */}
        <div className="flex items-center justify-between p-4 sm:px-8 border-b border-slate-200 bg-white/95 backdrop-blur-md z-10 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-mono font-bold text-slate-600">
              Official Candidate Resume • Muhsin Ahamed T
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container (Scrollable) */}
        <div className="overflow-y-auto p-6 sm:p-10">
          <div className="space-y-8 font-sans">
            
            {/* Header */}
            <div className="border-b border-slate-300 pb-6">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                {profileData.name}
              </h1>
              <p className="text-base font-bold text-indigo-700 mt-1">
                {profileData.title}
              </p>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-indigo-600" />
                  {profileData.email}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                  {profileData.location}
                </span>
                <a 
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-indigo-600"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-indigo-600" />
                  linkedin.com/in/muhsin-ahamed-t
                </a>
                <a 
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-indigo-600"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-indigo-600" />
                  github.com/muhsin-ahamed
                </a>
                <a 
                  href={profileData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-indigo-600"
                >
                  <TwitterIcon className="w-3.5 h-3.5 text-indigo-600" />
                  x.com/muhsinahamed_t
                </a>
              </div>
            </div>

            {/* Executive Summary */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-2">
                Executive Profile & Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                Freelance Flutter Developer &amp; Full-Stack Engineer specializing in cross-platform mobile application development using Flutter &amp; Dart, along with full-stack web development with React, JavaScript, and cloud databases (Supabase, Firebase). Focused on delivering clean architecture, modern user interfaces, and responsive web applications for real-world client use cases.
              </p>
            </div>

            {/* Core Skills Matrix */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-3">
                Technical Proficiencies Matrix
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-extrabold text-slate-900 block mb-1">Frontend & Mobile:</span>
                  <span className="text-slate-700">Flutter (Web & Mobile), Dart, Material 3 UI, go_router, Provider, BLoC</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-extrabold text-slate-900 block mb-1">Frontend Web Development:</span>
                  <span className="text-slate-700">React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-extrabold text-slate-900 block mb-1">Backend & Cloud Databases:</span>
                  <span className="text-slate-700">Supabase & Migrations, Firebase (Auth/Firestore), REST APIs (Dio), JWT & Secure Storage, PostgreSQL, SQLite, Hive</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-extrabold text-slate-900 block mb-1">Architecture & Enterprise Tools:</span>
                  <span className="text-slate-700">Clean Architecture, SOLID Principles, RBAC, Excel Bulk Pipelines, Git, GitHub Actions CI/CD</span>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
                Professional Work History
              </h2>
              <div className="space-y-6">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-indigo-600 pl-4 py-0.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                      <h3 className="text-sm font-extrabold text-slate-900">
                        {exp.role} — <span className="text-indigo-700">{exp.company}</span>
                      </h3>
                      <span className="text-xs font-mono font-bold text-slate-500">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mb-2">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="text-xs text-slate-700 flex items-start gap-1.5">
                          <span className="text-indigo-600 font-bold">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Key Projects */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-3">
                Selected Production Projects
              </h2>
              <div className="space-y-3 text-xs">
                {projectsData.map((proj) => (
                  <div key={proj.id} className="p-3 rounded-xl border border-slate-200 bg-white">
                    <div className="flex items-center justify-between font-bold text-slate-900">
                      <span>{proj.title}</span>
                      <span className="font-mono text-indigo-600">{proj.tags.slice(0, 3).join(', ')}</span>
                    </div>
                    <p className="text-slate-600 text-[11px] mt-1">{proj.shortDescription}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-2">
                Education
              </h2>
              {educationData.map((edu, idx) => (
                <div key={idx} className="text-xs">
                  <span className="font-extrabold text-slate-900">{edu.degree}</span>
                  <span className="text-slate-600 block">{edu.institution} ({edu.period})</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
