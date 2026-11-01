import React from 'react';

export default function AboutSection() {
  const bioChecks = [
    'Expert in Flutter & Dart for iOS, Android & Web from a single clean codebase.',
    'Architecting full-stack web applications with React, Next.js, Node.js, Supabase, & Firebase.',
    'Specialized in high-performance billing engines, real-time sync systems, and financial management portals.',
    'Passionate about UI/UX polish, micro-interactions, responsive accessibility, and performance optimization.'
  ];

  const workPrinciples = [
    {
      num: '01',
      title: 'Production-Ready Development',
      desc: 'Clean, maintainable Flutter applications built with scalable architecture, reusable components, and production-focused practices.'
    },
    {
      num: '02',
      title: 'Performance & Reliability',
      desc: 'Fast, responsive applications designed to deliver a smooth experience across mobile, desktop, and web.'
    },
    {
      num: '03',
      title: 'Cross-Platform Engineering',
      desc: 'Build once and deliver consistently across Android, iOS, Web, and Desktop using Flutter.'
    },
    {
      num: '04',
      title: 'Client-Focused Approach',
      desc: 'Clear communication, practical solutions, transparent progress, and a strong focus on delivering what the project actually needs.'
    }
  ];

  const skillGroups = [
    {
      category: 'Frontend',
      skills: ['Flutter & Flutter Web', 'Dart', 'Provider / BLoC', 'go_router', 'Material 3']
    },
    {
      category: 'Backend, Cloud & Databases',
      skills: ['Supabase & PostgreSQL', 'Firebase (Auth, Firestore, Functions)', 'REST APIs & Dio', 'JWT Auth', 'SQLite / Hive / Isar']
    },
    {
      category: 'Architecture & Best Practices',
      skills: ['Clean Architecture & SOLID', 'RBAC', 'Excel Import/Export', 'Git', 'CI/CD & GitHub Actions']
    }
  ];

  const experiencePoints = [
    'Developed cross-platform applications using Flutter for Android, iOS, Web, and Desktop.',
    'Built business-focused systems including POS, billing, management, and dashboard solutions.',
    'Integrated REST APIs, Supabase, Firebase, authentication, and cloud databases.',
    'Worked directly with project requirements, UI/UX implementation, testing, and deployment.'
  ];

  const experienceTags = ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'REST APIs', 'Firebase', 'Hive'];

  return (
    <section id="about" className="py-20 lg:py-24 border-t border-slate-200/60 dark:border-slate-800/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs sm:text-[13px] font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase block mb-2">
            ABOUT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B1325] dark:text-white tracking-tight leading-[1.1]">
            Reliable products,<br />built with care.
          </h2>
        </div>

        {/* Section 1: Overview */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-[20px] p-6 sm:p-8 shadow-xs">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 sm:gap-x-12">
            {bioChecks.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                <span className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 2: How I Work */}
        <div className="mt-16 sm:mt-20">
          <span className="text-xs sm:text-[13px] font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase block mb-1">
            HOW I WORK
          </span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            A process clients can rely on
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {workPrinciples.map((work) => (
              <div
                key={work.num}
                className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-[20px] p-6 sm:p-7 shadow-xs hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0B1325] text-white dark:bg-white dark:text-slate-950 flex items-center justify-center font-bold text-sm mb-4">
                  {work.num}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                  {work.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {work.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Skills */}
        <div className="mt-16 sm:mt-20">
          <span className="text-xs sm:text-[13px] font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase block mb-1">
            SKILLS
          </span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Tools &amp; technologies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGroups.map((group, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-[20px] p-6 sm:p-7 shadow-xs"
              >
                <h4 className="text-base font-bold text-slate-900 dark:text-white pb-3.5 mb-4 border-b border-slate-100 dark:border-slate-800">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-medium px-3 py-1.5 rounded-xl bg-slate-100/90 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Experience */}
        <div className="mt-16 sm:mt-20">
          <span className="text-xs sm:text-[13px] font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase block mb-1">
            EXPERIENCE
          </span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Where I've worked
          </h3>

          <div className="relative pl-7 sm:pl-8">
            {/* Timeline vertical bar */}
            <div className="absolute left-[7px] top-6 bottom-6 w-[2px] bg-slate-200 dark:bg-slate-800"></div>

            {/* Timeline card with bullet node */}
            <div className="relative">
              {/* Timeline Node dot */}
              <div className="absolute -left-7 sm:-left-8 top-7 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-[3.5px] border-[#0B1325] dark:border-white"></div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-[20px] p-6 sm:p-7 shadow-xs">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                      Freelance Flutter Developer
                    </h4>
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                      Client Projects
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    2023 – Present
                  </span>
                </div>

                <ul className="my-4 space-y-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed list-disc pl-5 marker:text-slate-300 dark:marker:text-slate-700">
                  {experiencePoints.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {experienceTags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium px-3 py-1.5 rounded-xl bg-slate-100/90 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Education */}
        <div className="mt-16 sm:mt-20">
          <span className="text-xs sm:text-[13px] font-semibold tracking-widest text-slate-400 dark:text-slate-500 uppercase block mb-1">
            EDUCATION
          </span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Background
          </h3>

          <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-[20px] p-6 sm:p-7 shadow-xs">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Bachelor of Arts in Sociology
                </h4>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                  University of Calicut
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2.5">
                  Focused on Sociology, Social Research Methods, and Social Theory.
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                2022 – 2025
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
