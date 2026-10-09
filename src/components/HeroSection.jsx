import React, { useState } from 'react';
import { profileData } from '../data/profileData';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './SocialIcons';
import {
  ArrowRight,
  FileText,
  Sparkles,
  Zap,
  Copy,
  Check,
  MapPin,
  ShieldCheck,
  Code2,
  Mail,
  Target,
  Layers
} from 'lucide-react';

export default function HeroSection({ onOpenResume, onCopyEmail }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-grid-pattern overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-200/40 blur-3xl rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-200/30 blur-3xl rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start">

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold mb-6 shadow-2xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Development Projects & Collaborations</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Flutter Developer <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800 bg-clip-text text-transparent">
                &amp; Full-Stack Engineer
              </span>
            </h1>

            {/* Subheading Summary */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
              Hi, I'm <strong className="text-slate-900 font-bold">Muhsin Ahamed T</strong>. I build high-performance cross-platform apps and responsive web platforms using Flutter and modern backend technologies — with a focus on clean architecture, performance, and pixel-perfect UX.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-indigo-500/25 transition-all w-full sm:w-auto"
              >
                View My Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-white border border-slate-200/90 shadow-xs hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer w-full sm:w-auto"
              >
                <FileText className="w-4 h-4 text-indigo-600" />
                Resume PDF
              </button>
            </div>

            {/* Tech Stack Icons Bar */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7 w-full text-slate-700 text-xs sm:text-sm">
              {/* Flutter */}
              <div className="flex items-center gap-2">
                <img
                  src="/images/flutter-logo.png"
                  alt="Flutter"
                  className="w-5 h-5 object-contain shrink-0"
                />
                <span className="font-bold text-slate-800">Flutter</span>
              </div>

              {/* Dart */}
              <div className="flex items-center gap-2">
                <img
                  src="/images/dart-logo.png"
                  alt="Dart"
                  className="w-5 h-5 object-contain shrink-0"
                />
                <span className="font-bold text-slate-800">Dart</span>
              </div>

              {/* Supabase */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M13.35 2.1a1 1 0 0 0-1.7 0L2.83 15.6a1 1 0 0 0 .84 1.55H11.5v4.75a1 1 0 0 0 1.7 0l8.82-13.5a1 1 0 0 0-.84-1.55H13.35V2.1z" fill="#3ECF8E" />
                </svg>
                <span className="font-bold text-slate-800">Supabase</span>
              </div>

              {/* REST APIs */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#007ACC" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
                </svg>
                <span className="font-bold text-slate-800">REST APIs</span>
              </div>
            </div>

          </div>

          {/* Right Hero Profile Photo Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">

              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-500 opacity-20 blur-xl"></div>

              {/* Main Photo Card Frame */}
              <div className="relative paper-card rounded-3xl p-6 sm:p-8 bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl flex flex-col items-center text-center">

                {/* Profile Image Container with Decorative Ring */}
                <div className="relative mb-6">
                  <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full p-1.5 bg-gradient-to-tr from-indigo-600 via-blue-500 to-emerald-400 shadow-lg">
                    <img
                      src={imgError ? 'https://github.com/muhsin-ahamed.png' : (profileData.avatar || 'https://github.com/muhsin-ahamed.png')}
                      alt={profileData.name}
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover rounded-full bg-slate-100 border-4 border-white shadow-inner"
                    />
                  </div>

                  {/* Verified Badge Icon on Photo */}
                  <div className="absolute bottom-2 right-2 p-2 bg-indigo-600 text-white rounded-full shadow-md border-2 border-white" title="Verified Software Engineer">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>

                {/* Profile Info */}
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {profileData.name}
                </h3>
                <p className="text-sm font-semibold text-slate-600 mt-1 flex items-center justify-center gap-2">
                  <span>Flutter Developer</span>
                  <span className="text-slate-300 font-bold">•</span>
                  <span>Full-Stack Engineer</span>
                </p>

                <p className="text-xs text-slate-500 mt-2 flex items-center justify-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Kerala, India <span className="text-slate-300 font-bold">•</span> Remote Worldwide</span>
                </p>

                {/* Focus & Architecture Card (Matching Uploaded Reference Design) */}
                <div className="w-full mt-6 bg-[#F8FAFD] border border-slate-200/70 rounded-2xl p-4 shadow-2xs">
                  <div className="grid grid-cols-2 divide-x divide-slate-200/80 items-center">
                    
                    {/* Focus */}
                    <div className="flex items-center justify-center gap-3 px-2">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                        <Target className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div className="text-left">
                        <span className="block text-[11px] font-semibold text-slate-400">Focus</span>
                        <span className="block text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">Flutter &amp; Web</span>
                      </div>
                    </div>

                    {/* Architecture */}
                    <div className="flex items-center justify-center gap-3 px-2">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 flex items-center justify-center shrink-0">
                        <Layers className="w-5 h-5 text-slate-700" />
                      </div>
                      <div className="text-left">
                        <span className="block text-[11px] font-semibold text-slate-400">Architecture</span>
                        <span className="block text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">Clean Architecture</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Circular Social Buttons Row (Matches Corner & Icon Design) */}
                <div className="flex items-center justify-between gap-2 sm:gap-3 w-full mt-6 pt-5 border-t border-slate-100">
                  {/* 1. GitHub */}
                  <div className="relative group flex-1 flex justify-center">
                    <a
                      href={profileData.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white border border-slate-200/90 text-slate-800 hover:text-slate-950 hover:border-slate-400 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-2xs"
                      title="GitHub Profile"
                      aria-label="GitHub Profile"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-slate-900 text-white text-[10px] font-semibold rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap shadow-sm z-30">
                      GitHub
                    </span>
                  </div>

                  {/* 2. LinkedIn */}
                  <div className="relative group flex-1 flex justify-center">
                    <a
                      href={profileData.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white border border-slate-200/90 text-slate-800 hover:text-[#0A66C2] hover:border-slate-400 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-2xs"
                      title="LinkedIn Profile"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-slate-900 text-white text-[10px] font-semibold rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap shadow-sm z-30">
                      LinkedIn
                    </span>
                  </div>

                  {/* 3. X (Twitter) */}
                  <div className="relative group flex-1 flex justify-center">
                    <a
                      href={profileData.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white border border-slate-200/90 text-slate-800 hover:text-black hover:border-slate-400 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-2xs"
                      title="X (Twitter) Profile"
                      aria-label="X (Twitter) Profile"
                    >
                      <TwitterIcon className="w-4.5 h-4.5" />
                    </a>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-slate-900 text-white text-[10px] font-semibold rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap shadow-sm z-30">
                      X (Twitter)
                    </span>
                  </div>

                  {/* 4. Instagram */}
                  <div className="relative group flex-1 flex justify-center">
                    <a
                      href={profileData.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white border border-slate-200/90 text-slate-800 hover:text-[#E4405F] hover:border-slate-400 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-2xs"
                      title="Instagram Profile"
                      aria-label="Instagram Profile"
                    >
                      <InstagramIcon className="w-5 h-5" />
                    </a>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-slate-900 text-white text-[10px] font-semibold rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap shadow-sm z-30">
                      Instagram
                    </span>
                  </div>

                  {/* 5. Mail */}
                  <div className="relative group flex-1 flex justify-center">
                    <a
                      href={`mailto:${profileData.email}`}
                      className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white border border-slate-200/90 text-slate-800 hover:text-indigo-600 hover:border-slate-400 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-2xs"
                      title="Send Email"
                      aria-label="Send Email"
                    >
                      <Mail className="w-5 h-5" strokeWidth={1.8} />
                    </a>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-slate-900 text-white text-[10px] font-semibold rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap shadow-sm z-30">
                      Email
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
