import React from 'react';
import { Mail, ExternalLink, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen pt-24 sm:pt-28 flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex flex-col items-center">
          <img
            src="https://res.cloudinary.com/dn7yati9d/image/upload/v1756823379/Untitled_design_19_-modified_nxjgnl.png"
            alt="Shaheer Farrukh profile photo"
            className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-2 border-slate-700 shadow-lg mb-6"
          />
          <div className="text-xl sm:text-2xl text-gray-300 mb-2 leading-relaxed">
            Mechanical Engineer
          </div>
          <div className="text-lg text-yellow-400 font-medium mb-6 leading-relaxed">
            3D Modeling • DFM • Simulation • Mesh Optimization  
          </div>
          <div className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed text-center">
            Simulation-focused engineer specializing in 3D modeling and design for manufacturability (DFM). Strong emphasis on CAD-driven workflows to create accurate 3D models, validate performance through simulation, and optimize parts and assemblies for efficient production. Skilled at bridging design intent and manufacturing constraints to deliver robust, production-ready components.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={handleScrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg 
                     transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 
                     focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </button>
          
          <button
            onClick={handleContact}
            className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg 
                     transform transition-all duration-300 hover:scale-105 hover:border-cyan-400 
                     hover:text-cyan-400 hover:shadow-lg focus:outline-none focus:ring-4 
                     focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Contact Me
          </button>
        </div>

        <div className="flex justify-center space-x-6 text-gray-400">
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <a 
              href="https://wa.me/923118260157"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-cyan-400 transition-colors duration-300"
            >
              +92 311 8260157
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span className="text-sm">shaheerfarrukh723@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <ExternalLink size={16} />
            <a 
              href="https://www.linkedin.com/in/shaheer-farrukh-8912a3228/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-cyan-400 transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;