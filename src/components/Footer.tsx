import React from 'react';
import { Mail, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="mailto:shaheerfarrukh723@gmail.com"
              className="w-12 h-12 bg-slate-800 hover:bg-cyan-500 text-gray-300 hover:text-white rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shaheer-farrukh-8912a3228/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800 hover:bg-blue-500 text-gray-300 hover:text-white rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <div className="text-gray-500 mb-4">
            <div className="font-semibold text-lg text-white mb-2">Shaheer Farrukh</div>
            <div className="text-cyan-400">Mechanical Engineer • CFD Specialist</div>
            <div className="mt-2">+92 311 8260157</div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center space-x-1">
            <span>Built with</span>
            <Heart size={16} className="text-red-400" />
            <span>using React & Tailwind CSS</span>
          </p>
          <p className="text-gray-600 text-xs mt-2">
            © 2025 Shaheer Farrukh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;