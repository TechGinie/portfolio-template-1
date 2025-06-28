
import React from 'react';
import HeroSection from '../components/template4/HeroSection';
import AboutSection from '../components/template4/AboutSection';
import ServicesSection from '../components/template4/ServicesSection';
import PortfolioSection from '../components/template4/PortfolioSection';
import ContactSection from '../components/template4/ContactSection';
import FooterSection from '../components/template4/FooterSection';

const Template4 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Template4;
