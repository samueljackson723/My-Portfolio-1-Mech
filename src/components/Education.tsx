import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-cyan-400">Education</span>
          </h2>
        </div>

        <div className="space-y-8">
          {/* Bachelor's Degree */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 transform transition-all duration-300 hover:bg-slate-800 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <GraduationCap size={28} className="text-white" />
              </div>
              
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Bachelor of Engineering (B.E.) — Mechanical Engineering
                  </h3>
                  <div className="text-xl text-cyan-400 font-semibold mb-2">NUST University</div>
                  
                  <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>Graduation: May 2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award size={16} />
                      <span className="font-semibold text-yellow-400">CGPA: 3.20</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-cyan-400 font-semibold mb-3 flex items-center space-x-2">
                    <BookOpen size={16} />
                    <span>Technical Subjects:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['CFD in ANSYS', 'CAD in SolidWorks', 'Thermodynamics', 'Mechanics of Machine', 'Manufacturing Processes'].map((subject) => (
                      <span
                        key={subject}
                        className="px-4 py-2 bg-slate-700/50 text-gray-300 text-sm font-medium rounded-full border border-slate-600"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* A Levels */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 transform transition-all duration-300 hover:bg-slate-800 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/25">
                <Award size={28} className="text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">O / A Levels</h3>
                <div className="text-xl text-yellow-400 font-semibold mb-4">Reads College</div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="text-yellow-400 font-bold text-lg">Straight A*'s</div>
                  <span className="text-gray-400">in Physics, Mathematics, and Chemistry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;