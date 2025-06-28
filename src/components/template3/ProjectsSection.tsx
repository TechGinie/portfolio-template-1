
import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'A comprehensive analytics platform with machine learning insights and real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['React', 'Python', 'TensorFlow', 'AWS'],
      featured: true,
    },
    {
      title: 'E-Commerce Revolution',
      description: 'Modern e-commerce platform with advanced search, AR try-on, and personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      featured: true,
    },
    {
      title: 'Mobile Health Tracker',
      description: 'Cross-platform mobile app for health monitoring with wearable device integration.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      tags: ['React Native', 'Firebase', 'HealthKit'],
      featured: false,
    },
    {
      title: 'Blockchain Voting System',
      description: 'Secure, transparent voting platform built on blockchain technology.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      tags: ['Solidity', 'Web3.js', 'Ethereum'],
      featured: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative solutions that push the boundaries of technology and user experience.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-[1.02] transition-all duration-500 ${
                project.featured ? 'lg:h-96' : 'h-80'
              }`}
            >
              <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'grid-cols-1'} h-full`}>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    {project.featured && <Sparkles className="text-yellow-400" size={20} />}
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.featured ? 'bg-yellow-400 text-black' : 'bg-purple-500 text-white'
                    }`}>
                      {project.featured ? 'Featured' : 'Project'}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-700 text-purple-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:scale-105 transition-transform">
                      <ExternalLink size={16} />
                      View Live
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
                      <Github size={16} />
                      Source
                    </button>
                  </div>
                </div>
                
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/50"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
