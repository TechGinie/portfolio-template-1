
import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Full-Stack Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management App',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['Next.js', 'Socket.io', 'PostgreSQL', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI Chat Application',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=600&h=400&fit=crop',
      description: 'An intelligent chat application powered by AI, featuring natural language processing and real-time communication.',
      technologies: ['React Native', 'Python', 'OpenAI', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Data Visualization Dashboard',
      category: 'Analytics Platform',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'Interactive dashboard for data visualization with real-time charts, filtering, and export capabilities.',
      technologies: ['Vue.js', 'D3.js', 'Express', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Social Media Platform',
      category: 'Full-Stack Development',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      description: 'A complete social media platform with posts, comments, likes, and real-time messaging functionality.',
      technologies: ['React', 'GraphQL', 'MongoDB', 'AWS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Cryptocurrency Tracker',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
      description: 'Real-time cryptocurrency tracking application with portfolio management and price alerts.',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'Redis'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise 
            in web development and software engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.liveUrl}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
                    >
                      <Eye className="text-blue-600" size={20} />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
                    >
                      <Github className="text-blue-600" size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                  >
                    <span className="mr-2">View Live</span>
                    <ExternalLink size={16} />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
