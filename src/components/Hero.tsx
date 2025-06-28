
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-4 -left-4 w-72 h-72 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
            animation: 'float 6s ease-in-out infinite',
          }}
        ></div>
        <div 
          className="absolute top-1/2 -right-8 w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite reverse',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div 
          className="mb-8"
          style={{
            animation: 'fadeInUp 1s ease-out',
          }}
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            John Doe
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90 mb-8">
            Full Stack Developer & UI/UX Designer
          </p>
        </div>

        <div 
          className="flex justify-center space-x-6 mb-12"
          style={{
            animation: 'fadeInUp 1s ease-out 0.3s both',
          }}
        >
          <a 
            href="#" 
            className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a 
            href="#" 
            className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="#" 
            className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        <div 
          className="animate-bounce cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={32} className="mx-auto opacity-75" />
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
