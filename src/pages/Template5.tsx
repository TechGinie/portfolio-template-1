
import React from 'react';
import HeroSection from '../components/template5/HeroSection';
import AboutSection from '../components/template5/AboutSection';
import SkillsSection from '../components/template5/SkillsSection';
import WorkSection from '../components/template5/WorkSection';
import TestimonialsSection from '../components/template5/TestimonialsSection';
import ContactSection from '../components/template5/ContactSection';
import FooterSection from '../components/template5/FooterSection';

const Template5 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Template5;
