
import React from 'react';
import { Award, Users, Coffee, Heart } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    { icon: Award, title: 'Award Winner', description: 'Best UI Design 2023' },
    { icon: Users, title: 'Happy Clients', description: '200+ Satisfied' },
    { icon: Coffee, title: 'Coffee Cups', description: '1000+ Consumed' },
    { icon: Heart, title: 'Passion Projects', description: '50+ Created' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            I'm a passionate creative developer who loves turning ideas into beautiful, functional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div 
            className="space-y-6"
            style={{ animation: 'fadeInUp 1s ease-out' }}
          >
            <h3 className="text-2xl font-bold text-gray-900">
              My Journey
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Started as a graphic designer, I discovered my love for coding and decided to bridge the gap between design and development. 
              Today, I create seamless user experiences that are both beautiful and functional.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I believe that great design should be accessible to everyone, and I'm committed to writing clean, maintainable code 
              that makes the web a better place for users and developers alike.
            </p>
            
            <div className="pt-4">
              <h4 className="font-semibold text-gray-900 mb-4">Technologies I Love:</h4>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-emerald-300 hover:text-emerald-600 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div 
            className="relative"
            style={{ animation: 'fadeInUp 1s ease-out 0.3s both' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
              alt="Creative workspace"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-600 rounded-2xl opacity-80"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-rose-400 rounded-full opacity-60"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ animation: `fadeInUp 1s ease-out ${index * 0.1 + 0.5}s both` }}
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{achievement.title}</h4>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </div>
          ))}
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
      `}</style>
    </section>
  );
};

export default AboutSection;
