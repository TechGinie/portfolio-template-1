
import React from 'react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-white flex items-center relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 right-20 w-64 h-64 bg-emerald-50 rounded-full opacity-60"
          style={{ animation: 'pulse 4s ease-in-out infinite' }}
        ></div>
        <div 
          className="absolute bottom-32 left-16 w-32 h-32 bg-rose-50 transform rotate-45 opacity-40"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/4 w-4 h-4 bg-emerald-400 rounded-full opacity-60"
          style={{ animation: 'bounce 3s ease-in-out infinite' }}
        ></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div 
            className="space-y-4"
            style={{ animation: 'slideInLeft 1s ease-out' }}
          >
            <p className="text-emerald-600 font-medium text-lg tracking-wide uppercase">
              Welcome to my portfolio
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              I'm <span className="text-emerald-600">Sarah</span><br />
              Creative Developer
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Crafting digital experiences with clean code and beautiful design. 
              I specialize in React, TypeScript, and modern web technologies.
            </p>
          </div>

          <div 
            className="flex flex-wrap gap-4"
            style={{ animation: 'slideInLeft 1s ease-out 0.3s both' }}
          >
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105">
              <span>View My Work</span>
              <ExternalLink size={18} />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-all duration-300 flex items-center space-x-2">
              <Download size={18} />
              <span>Download CV</span>
            </button>
          </div>

          <div 
            className="flex items-center space-x-8 pt-8"
            style={{ animation: 'slideInLeft 1s ease-out 0.6s both' }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">3+</div>
              <div className="text-sm text-gray-600">Years Exp</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>

        <div 
          className="relative"
          style={{ animation: 'slideInRight 1s ease-out 0.4s both' }}
        >
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616c2e2b36f?w=500&h=600&fit=crop&crop=face"
              alt="Sarah - Creative Developer"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-rose-400 rounded-2xl opacity-20 transform translate-x-4 translate-y-4"></div>
        </div>
      </div>

      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        style={{ animation: 'bounce 2s ease-in-out infinite' }}
      >
        <ArrowDown size={24} className="text-gray-400" />
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-10px) rotate(45deg);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
