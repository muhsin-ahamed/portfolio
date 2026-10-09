import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import Toast from './components/Toast';
import { profileData } from './data/profileData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toast, setToast] = useState({ message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast({ message: '', type: 'success' });
    }, 3500);
  };

  const handleCopyEmail = (email = profileData.email) => {
    navigator.clipboard.writeText(email);
    showToast(`Copied ${email} to clipboard!`);
  };

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-slate-900 flex flex-col font-sans antialiased">
      
      {/* Toast Notification Container */}
      <Toast 
        message={toast.message} 
        type={toast.type} 
        onClose={() => setToast({ message: '', type: 'success' })} 
      />

      {/* Navbar */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="grow">
        {/* Section 1: Hero Section */}
        <HeroSection 
          onOpenResume={() => setIsResumeOpen(true)}
          onCopyEmail={handleCopyEmail}
        />

        {/* Section 2: About Section */}
        <AboutSection 
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Section 3: Projects Section */}
        <ProjectsSection 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Section 4: Contact Section */}
        <ContactSection 
          onShowToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Interactive Resume View/Print Modal */}
      {isResumeOpen && (
        <ResumeModal 
          onClose={() => setIsResumeOpen(false)} 
        />
      )}

    </div>
  );
}
