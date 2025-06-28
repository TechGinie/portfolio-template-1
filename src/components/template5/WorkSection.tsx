
import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const WorkSection = () => {
  const projects = [
    {
      title: 'Brand Identity System',
      category: 'Branding & Design',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop',
      description: 'Complete brand identity redesign for a tech startup, including logo, color palette, and design system.',
      tags: ['Figma', 'Illustrator', 'Branding'],
      featured: true
    },
    {
      title: 'E-commerce Mobile App',
      category: 'Mobile Design',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      description: 'User-centered mobile app design with seamless shopping experience and modern interface.',
      tags: ['React Native', 'UI/UX', 'Prototyping'],
      featured: false
    },
    {
      title: 'Creative Portfolio Website',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      description: 'Custom portfolio website with interactive animations and responsive design.',
      tags: ['React', 'GSAP', 'CSS'],
      featured: true
    },
    {
      title: 'Data Visualization Dashboard',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'Interactive dashboard for complex data visualization with real-time updates.',
      tags: ['D3.js', 'React', 'Node.js'],
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of projects that showcase my creative and technical abilities
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${
                project.featured 
                  ? 'lg:grid lg:grid-cols-2 bg-gradient-to-r from-red-50 to-orange-50' 
                  : 'bg-white border border-gray-200 hover:border-orange-300'
              }`}
            >
              <div className={`relative overflow-hidden ${project.featured ? 'h-96 lg:h-auto' : 'h-64'}`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
                
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
                      <Play className="text-red-500" size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
                      <ExternalLink className="text-red-500" size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
                      <Github className="text-red-500" size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className={`p-8 ${project.featured ? 'lg:p-12' : ''}`}>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-medium mb-4">
                    {project.category}
                  </span>
                  <h3 className={`font-black text-gray-800 mb-4 ${project.featured ? 'text-3xl' : 'text-xl'}`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
