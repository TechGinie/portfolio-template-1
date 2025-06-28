
import React from 'react';
import HeroSection from '../components/template3/HeroSection';
import AboutSection from '../components/template3/AboutSection';
import ProjectsSection from '../components/template3/ProjectsSection';
import ContactSection from '../components/template3/ContactSection';
import FooterSection from '../components/template3/FooterSection';

const Template3 = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Template3;
