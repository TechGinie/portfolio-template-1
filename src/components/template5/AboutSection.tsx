
import React from 'react';
import { Heart, Coffee, Music, Camera } from 'lucide-react';

const AboutSection = () => {
  const personalTags = [
    { icon: Coffee, text: 'Coffee Lover', color: 'bg-amber-500' },
    { icon: Music, text: 'Music Enthusiast', color: 'bg-purple-500' },
    { icon: Camera, text: 'Photography', color: 'bg-blue-500' },
    { icon: Heart, text: 'Design Passionate', color: 'bg-red-500' }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-red-100 to-transparent rounded-full translate-y-32 -translate-x-32"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Creative Visual */}
          <div className="relative">
            <div className="bg-gradient-to-r from-red-400 to-orange-400 rounded-3xl p-8 transform -rotate-3">
              <div className="bg-white rounded-2xl p-8 transform rotate-6">
                <div className="text-6xl font-black text-gray-800 mb-4">5+</div>
                <div className="text-lg text-gray-600">Years of Creative Excellence</div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center transform rotate-12">
              <span className="text-2xl">✨</span>
            </div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
              <Heart className="text-white" size={20} />
            </div>
          </div>
          
          {/* Right - Content */}
          <div>
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-medium mb-4">
                About Me
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-6">
                I'm a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Creative</span> Developer
              </h2>
            </div>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                With over 5 years of experience in the creative industry, I specialize in 
                building digital experiences that not only function beautifully but also 
                tell compelling stories.
              </p>
              <p>
                My approach combines technical expertise with artistic vision, ensuring 
                every project is both innovative and user-centered. I believe great design 
                happens when form meets function.
              </p>
            </div>
            
            {/* Personal interests */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">What I Love</h3>
              <div className="flex flex-wrap gap-3">
                {personalTags.map((tag, index) => (
                  <div key={index} className={`flex items-center space-x-2 ${tag.color} text-white px-4 py-2 rounded-full`}>
                    <tag.icon size={16} />
                    <span className="text-sm font-medium">{tag.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
