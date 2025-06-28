
import React from 'react';
import { Heart, ArrowUp, Instagram, Twitter, Dribbble, Linkedin } from 'lucide-react';

const FooterSection = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Dribbble, href: '#', label: 'Dribbble' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <ArrowUp size={20} />
      </button>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-500/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full translate-y-36 -translate-x-36"></div>

      <div className="container mx-auto px-6 pt-20 pb-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-black mb-4">
              MAYA<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">CHEN</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Creative developer passionate about crafting digital experiences that blend 
              beautiful design with functional code. Let's create something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-white" size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Work', 'Services', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {['Web Design', 'Mobile Apps', 'Branding', 'Consultation'].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-bold mb-4">Stay Inspired</h4>
            <p className="text-gray-400 mb-6 text-sm">
              Get design tips, creative insights, and project updates delivered to your inbox.
            </p>
            <div className="flex rounded-full overflow-hidden">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 text-white"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-gray-400">Crafted with</span>
            <Heart className="text-red-500 fill-current" size={16} />
            <span className="text-gray-400">by Maya Chen</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2024 Maya Chen. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
