import React, { useState } from 'react';

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skillCategories = {
    'FEA/CFD': [
      'ANSYS - Structural Analysis',
      'ANSYS - CFD',
      'ANSYS - Thermal Analysis',
      'Finite Element Analysis'
    ],
    'Programming': [
      'MATLAB',
      'Simulink',
      'Dynamic Systems',
      'Model-based Simulation'
    ],
    'Design': [
      'SolidWorks',
      'AutoCAD',
      'Mechanical Design'
    ],
    'Mathematics': [
      'Differential Equations',
      'Linear Algebra',
      'Numerical Methods',
      'Engineering Mathematics'
    ],
    'Energy': [
      'Renewable Energy',
      'HVAC Systems',
      'Power Plants',
      'Energy Systems'
    ],
    'Management': [
      'Project Management',
      'Gantt Charts',
      'Resource Allocation',
      'Microsoft Office Suite'
    ]
  };

  const allSkills = Object.values(skillCategories).flat();

  const getDisplaySkills = () => {
    if (selectedCategory === 'all') return allSkills;
    return skillCategories[selectedCategory as keyof typeof skillCategories] || [];
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive expertise across computational analysis, design, and sustainable energy systems
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-cyan-400'
              }`}
            >
              All Skills
            </button>
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-cyan-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {getDisplaySkills().map((skill, index) => (
              <div
                key={skill}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg px-4 py-3 
                         transform transition-all duration-300 hover:scale-105 hover:bg-slate-800 
                         hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10
                         animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;