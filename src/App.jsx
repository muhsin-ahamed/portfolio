import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import Toast from './components/Toast';
import { profileData } from './data/profileData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
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

  return (
    <div className="min-h-screen bg-[#FAFBFD] dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 flex flex-col font-sans antialiased transition-colors duration-200">
      
      {/* Toast Notification Container */}
      <Toast 
        message={toast.message} 
        type={toast.type} 
        onClose={() => setToast({ message: '', type: 'success' })} 
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="grow">
        {/* Section 1: Hero Section */}
        <HeroSection 
          onCopyEmail={handleCopyEmail}
        />

        {/* Section 2: About Section */}
        <AboutSection />

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

    </div>
  );
}
