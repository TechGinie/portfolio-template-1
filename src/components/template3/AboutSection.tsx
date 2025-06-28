
import React from 'react';
import { Brain, Zap, Target, Award } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'Frontend Development', level: 95 },
    { name: 'Backend Development', level: 88 },
    { name: 'UI/UX Design', level: 92 },
    { name: 'DevOps', level: 85 },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I'm a passionate full-stack developer and digital strategist with over 5 years of experience 
              creating innovative solutions that bridge the gap between technology and user experience.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              My expertise spans modern web technologies, cloud architecture, and user-centered design. 
              I believe in building products that not only look great but also solve real-world problems.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <Brain className="mx-auto mb-2 text-purple-400" size={32} />
                <h3 className="font-semibold mb-1">Strategic Thinking</h3>
                <p className="text-sm text-gray-400">Problem-solving approach</p>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <Zap className="mx-auto mb-2 text-pink-400" size={32} />
                <h3 className="font-semibold mb-1">Fast Execution</h3>
                <p className="text-sm text-gray-400">Rapid prototyping</p>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <Target className="mx-auto mb-2 text-blue-400" size={32} />
                <h3 className="font-semibold mb-1">Goal-Oriented</h3>
                <p className="text-sm text-gray-400">Results-driven mindset</p>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <Award className="mx-auto mb-2 text-green-400" size={32} />
                <h3 className="font-semibold mb-1">Quality Focus</h3>
                <p className="text-sm text-gray-400">Excellence in delivery</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                alt="Professional portrait"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-purple-400">Technical Skills</h3>
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
