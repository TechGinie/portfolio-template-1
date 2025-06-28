
import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'Node.js', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'Python', level: 85 },
    { name: 'AWS/Cloud', level: 82 },
    { name: 'UI/UX Design', level: 78 }
  ];

  const achievements = [
    { icon: Award, title: 'Certified Developer', desc: 'AWS & Google Cloud' },
    { icon: Users, title: 'Team Leadership', desc: 'Led 5+ dev teams' },
    { icon: Clock, title: 'Fast Delivery', desc: '98% on-time projects' },
    { icon: Target, title: 'Client Success', desc: '100% satisfaction rate' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a keen eye for design and a love for clean, efficient code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image and Info */}
          <div>
            <div className="relative mb-8">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop" 
                alt="Working" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">3+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>
            
            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <item.icon className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{item.title}</h4>
                    <p className="text-gray-600 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Skills and Description */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">My Journey</h3>
              <p className="text-gray-600 mb-4">
                With over 3 years of experience in web development, I've had the privilege of working 
                with startups and established companies, helping them bring their digital visions to life.
              </p>
              <p className="text-gray-600 mb-6">
                I specialize in creating scalable web applications using modern technologies like React, 
                Node.js, and cloud platforms. My goal is to write clean, maintainable code that not only 
                works but also provides an exceptional user experience.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
