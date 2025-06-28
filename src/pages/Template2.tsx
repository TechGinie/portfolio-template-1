
import React from 'react';
import HeroSection from '../components/template2/HeroSection';
import AboutSection from '../components/template2/AboutSection';
import WorkSection from '../components/template2/WorkSection';
import ContactSection from '../components/template2/ContactSection';
import FooterSection from '../components/template2/FooterSection';

const Template2 = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Template2;
