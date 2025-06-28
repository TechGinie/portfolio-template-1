
import React from 'react';
import { Mail, MessageCircle, Send, Sparkles } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 opacity-50"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-red-400 to-orange-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-10 blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full px-6 py-3 mb-6">
              <Sparkles size={16} />
              <span className="font-medium">Let's Create Something Amazing</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-800 mb-6">
              Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Project?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Let's discuss how we can bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Get in Touch</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email Me</h4>
                    <p className="text-gray-600">maya@example.com</p>
                    <p className="text-sm text-gray-500">I'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-xl flex items-center justify-center">
                    <MessageCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Let's Chat</h4>
                    <p className="text-gray-600">Schedule a free consultation</p>
                    <p className="text-sm text-gray-500">Available for calls Mon-Fri</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Quick Response Guarantee</h4>
                <p className="text-white/90 mb-4">
                  I understand that timing is crucial for your projects. That's why I guarantee 
                  a response within 24 hours to all inquiries.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Currently available for new projects</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300" 
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300" 
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300" 
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300">
                    <option>Web Design & Development</option>
                    <option>Mobile App Design</option>
                    <option>Brand Identity</option>
                    <option>UI/UX Consultation</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Project Details</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300 resize-none" 
                    placeholder="Tell me about your project, goals, timeline, and budget..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
