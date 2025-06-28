
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const WorkSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-learning Platform',
      category: 'Web App',
      description: 'A comprehensive online learning platform with video courses, quizzes, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      color: 'emerald',
    },
    {
      id: 2,
      title: 'Digital Agency Website',
      category: 'Website',
      description: 'Modern, responsive website for a creative digital agency with stunning animations.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      color: 'rose',
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'Mobile UI',
      description: 'Clean and secure mobile banking interface with intuitive user experience.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      color: 'blue',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Work
          </h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my passion for creating exceptional digital experiences.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              style={{ animation: `fadeInUp 1s ease-out ${index * 0.2}s both` }}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative group">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
                    <a 
                      href="#"
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                    >
                      <ExternalLink size={18} className="text-gray-700" />
                    </a>
                    <a 
                      href="#"
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                    >
                      <Github size={18} className="text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="space-y-6">
                  <div>
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                      project.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                      project.color === 'rose' ? 'bg-rose-100 text-rose-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex space-x-4 pt-4">
                    <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300 flex items-center space-x-2">
                      <span>View Project</span>
                      <ExternalLink size={16} />
                    </button>
                    <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-colors duration-300">
                      View Code
                    </button>
                  </div>
                </div>
              </div>
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

export default WorkSection;
