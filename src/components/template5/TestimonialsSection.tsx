
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      content: 'Maya delivered exceptional work that exceeded our expectations. Her creative vision and technical skills are unmatched.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, InnovateLab',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      content: 'Working with Maya was a game-changer for our product. She brought fresh ideas and flawless execution.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Creative Director, BrandForge',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      content: 'Maya has an incredible ability to transform complex ideas into beautiful, user-friendly designs.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            What People Say
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Don't just take my word for it - here's what my clients have to say
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="mb-6">
                <Quote className="text-yellow-300 mb-4" size={32} />
                <p className="text-white text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-300 fill-current" size={16} />
                ))}
              </div>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white/20"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-white/70 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
