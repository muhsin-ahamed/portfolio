import React, { useState } from 'react';
import { profileData } from '../data/profileData';
import { experienceData, educationData, hrValueProps } from '../data/experienceData';
import { 
  User, 
  Smartphone, 
  Layout, 
  Server, 
  Cpu, 
  CheckCircle2, 
  Zap, 
  Layers, 
  MessageSquare, 
  Briefcase, 
  GraduationCap, 
  ChevronRight,
  Download,
  Rocket,
  Globe,
  Handshake
} from 'lucide-react';

export default function AboutSection() {
  const [activeSkillCategory, setActiveSkillCategory] = useState(0);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-indigo-600" />;
      case 'Layout': return <Layout className="w-5 h-5 text-blue-600" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-600" />;
      default: return <Smartphone className="w-5 h-5 text-indigo-600" />;
    }
  };

  const getValPropIcon = (iconName) => {
    switch (iconName) {
      case 'Rocket': return <Rocket className="w-6 h-6 text-indigo-600" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-500" />;
      case 'Globe': return <Globe className="w-6 h-6 text-blue-600" />;
      case 'Handshake': return <Handshake className="w-6 h-6 text-emerald-600" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
      case 'Layers': return <Layers className="w-6 h-6 text-indigo-600" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-blue-600" />;
      default: return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-white border-y border-slate-200/80 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            About & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Building Reliable Digital Products
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">
            I build scalable apps and web platforms with a focus on performance, clean architecture, and great user experiences.
          </p>
        </div>

        {/* HR & Client Value Proposition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {hrValueProps.map((prop, idx) => (
            <div 
              key={idx}
              className="paper-card paper-card-hover p-6 rounded-2xl border border-slate-200/90 flex flex-col justify-between cursor-default"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 shadow-2xs">
                  {getValPropIcon(prop.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {prop.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {prop.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-indigo-600">
                <span>Verified Metric</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout: Skills Tabs & Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-8">
          
          {/* Left Column: Interactive Skills Matrix */}
          <div className="lg:col-span-7">
            <div className="paper-card p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Technical Skill
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Click categories to explore specific domain proficiencies
                  </p>
                </div>
                <span className="text-xs font-mono font-bold bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full border border-indigo-200/60">
                  Core Skills
                </span>
              </div>

              {/* Category Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
                {profileData.skillsCategory.map((cat, idx) => {
                  const isActive = activeSkillCategory === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveSkillCategory(idx)}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300 hover:text-slate-900'
                      }`}
                    >
                      <div className="mb-1.5">{getCategoryIcon(cat.icon)}</div>
                      <span className="text-center leading-tight">{cat.category}</span>
                    </button>
                  );
                })}
              </div>

              {/* Skill List */}
              <div className="space-y-2.5">
                {profileData.skillsCategory[activeSkillCategory].skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-200/60 hover:bg-slate-50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 shrink-0"></div>
                    <span className="text-sm font-bold text-slate-800">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: Work History */}
          <div className="lg:col-span-5">
            <div className="paper-card p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs">
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-100">
                <Briefcase className="w-5 h-5 text-indigo-600" />
                <h3 className="text-xl font-extrabold text-slate-900">
                  Professional Experience
                </h3>
              </div>

              <div className="space-y-6">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="relative pl-6 border-l-2 border-indigo-200/80 group">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-indigo-600 group-hover:scale-125 transition-transform"></div>
                    
                    <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">
                      {exp.period}
                    </span>
                    <h4 className="text-base font-extrabold text-slate-900 mt-1">
                      {exp.role}
                    </h4>
                    <span className="text-xs font-semibold text-slate-500 block mb-2">
                      {exp.company} • {exp.location}
                    </span>

                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-1.5 mb-3">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <ChevronRight className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Full-Width Education Section */}
        <div className="paper-card p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <GraduationCap className="w-5 h-5 text-indigo-600" />
            <h3 className="text-xl font-extrabold text-slate-900">
              Education & Academic Foundation
            </h3>
          </div>
          {educationData.map((edu, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-slate-600">
              <div>
                <div className="font-extrabold text-slate-900 text-base">{edu.degree}</div>
                <div className="text-indigo-600 font-semibold text-sm">{edu.institution}</div>
                <p className="mt-1 text-xs text-slate-500">{edu.description}</p>
              </div>
              <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-xl border border-indigo-100 shrink-0 self-start sm:self-center">
                {edu.period}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
