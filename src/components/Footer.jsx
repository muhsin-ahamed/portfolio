import React from 'react';
import { profileData } from '../data/profileData';
import { GithubIcon, LinkedinIcon, InstagramIcon, XIcon, EmailIcon } from './SocialIcons';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/70 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Identity & Copyright */}
          <div>
            <span className="font-bold text-slate-900 dark:text-white text-sm tracking-tight block">
              Muhsin Ahamed T
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 block">
              Flutter Developer &amp; Full-Stack Engineer · © {new Date().getFullYear()}
            </span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
              title="GitHub"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A66C2] dark:hover:text-[#388bfd] transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
              title="X"
              aria-label="X"
            >
              <XIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={profileData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
              title="Instagram"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
              title="Email"
              aria-label="Email"
            >
              <EmailIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="ml-2 p-1.5 rounded-lg text-slate-400 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Back to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
