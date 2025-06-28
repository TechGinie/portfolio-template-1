
import React from 'react';
import { ArrowRight, Download, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left Content */}
          <div className="lg:w-1/2 text-white mb-12 lg:mb-0">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-500 bg-opacity-30 rounded-full text-sm font-medium mb-4">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              I'm <span className="text-yellow-400">Alex</span>
              <br />
              <span className="text-3xl lg:text-5xl text-blue-200">Full Stack Developer</span>
            </h1>
            
            <p className="text-xl mb-8 text-blue-100 max-w-lg leading-relaxed">
              Passionate about creating exceptional digital experiences with modern technologies. 
              Let's build something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="flex items-center justify-center px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span>View My Work</span>
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300">
                <Download className="mr-2" size={20} />
                <span>Download CV</span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-blue-200 text-sm">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">3+</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">20+</div>
                <div className="text-blue-200 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 p-2">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Play className="text-blue-900" size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">💼</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
