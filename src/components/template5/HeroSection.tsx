
import React from 'react';
import { ArrowDown, Sparkles, Palette, Code2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/20 rotate-45"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <Sparkles className="text-yellow-300" size={16} />
              <span className="text-sm font-medium">Creative Developer</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-none">
              <span className="block">MAYA</span>
              <span className="block text-yellow-300">CHEN</span>
            </h1>
            
            <p className="text-xl mb-8 text-white/90 max-w-lg">
              I craft digital experiences that blend creativity with functionality. 
              Let's create something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-4 bg-white text-red-500 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                View My Work
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-red-500 transition-all duration-300">
                Get In Touch
              </button>
            </div>
            
            {/* Floating icons */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Palette className="text-yellow-300" size={20} />
                <span className="text-sm">Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code2 className="text-yellow-300" size={20} />
                <span className="text-sm">Development</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Creative Layout */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 transform rotate-6">
              <div className="space-y-4">
                <div className="w-full h-32 bg-white/20 backdrop-blur-sm rounded-2xl"></div>
                <div className="w-full h-48 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="w-full h-40 bg-white/15 backdrop-blur-sm rounded-2xl"></div>
                <div className="w-full h-32 bg-white/25 backdrop-blur-sm rounded-2xl"></div>
              </div>
            </div>
            
            {/* Profile image overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-6">
              <div className="w-48 h-48 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face" 
                  alt="Maya Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ArrowDown size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
