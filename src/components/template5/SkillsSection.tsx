
import React from 'react';
import { Paintbrush, Code, Smartphone, Globe, Database, Zap } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { icon: Paintbrush, name: 'UI/UX Design', level: 95, color: 'from-pink-500 to-rose-500' },
    { icon: Code, name: 'Frontend Development', level: 90, color: 'from-blue-500 to-cyan-500' },
    { icon: Smartphone, name: 'Mobile Design', level: 85, color: 'from-purple-500 to-indigo-500' },
    { icon: Globe, name: 'Web Development', level: 88, color: 'from-green-500 to-emerald-500' },
    { icon: Database, name: 'Backend Systems', level: 75, color: 'from-orange-500 to-red-500' },
    { icon: Zap, name: 'Creative Problem Solving', level: 98, color: 'from-yellow-400 to-orange-500' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A blend of creative design and technical expertise to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <span className="text-sm font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
