
import React from 'react';
import { Code, Palette, Smartphone, Database } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, name: 'Frontend Development', level: 90 },
    { icon: Database, name: 'Backend Development', level: 85 },
    { icon: Palette, name: 'UI/UX Design', level: 80 },
    { icon: Smartphone, name: 'Mobile Development', level: 75 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                  alt="Developer workspace"
                  className="rounded-lg shadow-2xl"
                  style={{
                    animation: 'fadeInLeft 1s ease-out',
                  }}
                />
                <div 
                  className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg opacity-20"
                  style={{
                    animation: 'pulse 2s infinite',
                  }}
                ></div>
              </div>
            </div>

            <div 
              style={{
                animation: 'fadeInRight 1s ease-out',
              }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Passionate Developer with 5+ Years Experience
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a full-stack developer who loves creating beautiful, functional web applications. 
                With expertise in modern frameworks and a keen eye for design, I bring ideas to life 
                through clean code and intuitive user experiences.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center mb-2">
                      <skill.icon className="w-5 h-5 text-blue-500 mr-3" />
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="ml-auto text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animation: `fillBar 2s ease-out ${index * 0.2}s both`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fillBar {
          from {
            width: 0%;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
