import React, { useState } from 'react';
import { X, Zap, Cpu, Flame, Wind } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  React.useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: "Biogas Digester + Fuel Cell Integration",
      tools: "Simulink / MATLAB",
      summary: "Developed a Simulink MATLAB model integrating biogas digestion and fuel cell systems for renewable energy utilization.",
      icon: Zap,
      metrics: ["15% energy conversion efficiency boost", "20% reduction in energy waste", "UN SDG alignment"],
      description: "Developed a Simulink MATLAB model integrating biogas digestion and fuel cell systems for renewable energy utilization. Boosted energy conversion efficiency by 15%. Mathematical model predicted a 20% reduction in energy waste, directly aligning with UN Sustainable Development Goals.",
      tech: ["MATLAB", "Simulink", "Mathematical Modeling", "Renewable Energy"],
      imageUrl: 'https://res.cloudinary.com/dn7yati9d/image/upload/v1756812396/Untitled_design_z9qdsr.png',
      images: [
        'https://res.cloudinary.com/dn7yati9d/image/upload/v1756812396/Untitled_design_z9qdsr.png',
        'https://res.cloudinary.com/dn7yati9d/image/upload/v1756813619/Untitled_design_1_miagmk.png',
        'https://res.cloudinary.com/dn7yati9d/image/upload/v1756813618/Untitled_design_2_iprlop.png'
      ]
    },
    {
      id: 2,
      title: "Modelling of Ornithopter",
      tools: "SolidWorks, MATLAB, ANSYS",
      summary: "Engineered a nonlinear dynamics MATLAB model to replicate avian flapping kinematics for bio-inspired flight study.",
      icon: Wind,
      metrics: ["20% mass reduction", "Maintained aerodynamic efficiency", "Adaptive wing motion control"],
      description: "Engineered a nonlinear dynamics MATLAB model to replicate avian flapping kinematics for bio-inspired flight study. Optimized wing structural integrity under dynamic loads achieving 20% mass reduction while maintaining aerodynamic efficiency. Derived a reduced-order control algorithm from multibody dynamics equations enabling adaptive wing motion for energy-efficient UAV applications (aligned with SDG 9 and SDG 13).",
      tech: ["SolidWorks", "MATLAB", "ANSYS", "Nonlinear Dynamics", "Control Systems"],
      imageUrl: "https://res.cloudinary.com/dn7yati9d/image/upload/v1756813620/Untitled_design_3_gte0pe.png",
      images: [
        "https://res.cloudinary.com/dn7yati9d/image/upload/v1756813620/Untitled_design_3_gte0pe.png",
        "https://res.cloudinary.com/dn7yati9d/image/upload/v1756813620/Untitled_design_4_n6um9y.png",
        "https://res.cloudinary.com/dn7yati9d/image/upload/v1756813619/Untitled_design_5_ptqvep.png"
      ]
    },
    {
      id: 3,
      title: "Line-Following Robot",
      tools: "Arduino IDE",
      summary: "Architected an embedded control system combining PID algorithms and sensor fusion for autonomous path tracking and heat-source detection.",
      icon: Cpu,
      metrics: ["<1 cm tracking error", "95% flame-extinguishing success", "ROS-compatible framework"],
      description: "Architected an embedded control system combining PID algorithms and sensor fusion (IR/light + flame sensors) for autonomous path tracking and heat-source detection. Achieved <1 cm tracking error. Optimized actuator coordination (DC motors + servo-driven fan) to reach 95% flame-extinguishing success in controlled environments. Designed a ROS-compatible framework (C++/Arduino) enabling adaptive navigation for industrial safety applications (aligned with SDG 9 and SDG 11).",
      tech: ["Arduino", "C++", "PID Control", "Sensor Fusion", "ROS"],
      imageUrl: "https://res.cloudinary.com/dn7yati9d/image/upload/v1756814471/Untitled_design_11_sueu8r.png",
      images: [
        "https://res.cloudinary.com/dn7yati9d/image/upload/v1756814471/Untitled_design_11_sueu8r.png",
        "https://res.cloudinary.com/dn7yati9d/image/upload/v1756814660/Untitled_design_12_wsni4m.png"
      ]
    },
    {
      id: 4,
      title: "Indirect Direct Evaporative Cooling (IDEC) System",
      tools: "Microsoft Excel, Psychrometric tools",
      summary: "Engineered a thermodynamic and psychrometric mathematical model for Karachi climate to evaluate IDEC performance.",
      icon: Flame,
      metrics: ["30% EER improvement", "25% airflow optimization", "40% energy savings"],
      description: "Engineered a thermodynamic and psychrometric mathematical model for Karachi climate to evaluate IDEC performance. Improved cooling efficiency ratio (EER) by 30% across diverse climates. Optimized airflow and cooling loads by 25% using algorithm-driven Excel solvers. Reduced water/energy consumption by 15% and developed a climate-adaptive framework validated against Köppen–Geiger zones, enabling 40% energy savings in hot regions (SDG 7, SDG 6, SDG 11, SDG 12).",
      tech: ["Excel", "Psychrometrics", "Thermodynamics", "Climate Analysis"],
      imageUrl: "https://res.cloudinary.com/dn7yati9d/image/upload/v1756815301/Untitled_design_16_isuhmd.png",
      images: [
        "https://res.cloudinary.com/dn7yati9d/image/upload/v1756815301/Untitled_design_16_isuhmd.png",
        "https://res.cloudinary.com/dn7yati9d/image/upload/v1756815302/Untitled_design_13_e31mfd.png",
        "https://res.cloudinary.com/dn7yati9d/image/upload/v1756815302/Untitled_design_15_tuurxv.png"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Selected <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Engineering solutions that bridge computational analysis with real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8 
                         transform transition-all duration-300 hover:scale-105 hover:bg-slate-800/50 
                         hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer
                         animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Card Carousel */}
                <CardCarousel images={project.images} title={project.title} />

                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-yellow-400 font-medium">{project.tools}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 line-clamp-3">{project.summary}</p>

                <div className="space-y-2 mb-6">
                  {project.metrics.slice(0, 3).map((metric, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span className="text-sm text-gray-400">{metric}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs font-medium rounded-full border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-slate-700/50 text-gray-400 text-xs font-medium rounded-full border border-slate-600">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="mt-6 text-right">
                  <span className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">
                    View Details →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-slate-900 border-b border-slate-700 px-8 py-6 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">
                  {projects.find(p => p.id === selectedProject)?.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-slate-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-400"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8">
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  const gallery = project.images ?? (project.imageUrl ? [project.imageUrl] : []);

                  return (
                    <>
                      <div className="mb-8">
                        <DetailCarousel
                          images={gallery}
                          title={project.title}
                          currentIndex={currentImageIndex}
                          setCurrentIndex={setCurrentImageIndex}
                        />
                      </div>

                      <div className="mb-6">
                        <div className="text-yellow-400 font-semibold mb-2">Tools & Technologies:</div>
                        <p className="text-gray-300">{project.tools}</p>
                      </div>

                      {project.id === 1 ? (
                        <div className="mb-6 space-y-4">
                          <div className="text-cyan-400 font-semibold">Overview</div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                              <div className="text-white font-semibold mb-2">What?</div>
                              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                <li>Designed a biogas digestor and fuel cell model using Simulink MATLAB.</li>
                                <li>Introduced a novel system to improve energy efficiency in renewable applications.</li>
                              </ul>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                              <div className="text-white font-semibold mb-2">How?</div>
                              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                <li>Simulated the mathematical model of a biogas digestor + fuel cell system in Simulink MATLAB.</li>
                                <li>Performed extensive parameter optimization to increase energy conversion rates.</li>
                              </ul>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                              <div className="text-white font-semibold mb-2">Results</div>
                              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                <li>Up to 15% increased energy efficiency vs conventional systems.</li>
                                <li>Demonstrated potential to reduce energy waste in renewable setups.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ) : project.id === 2 ? (
                        <div className="mb-6 space-y-4">
                          <div className="text-cyan-400 font-semibold">Overview</div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                              <div className="text-white font-semibold mb-2">What?</div>
                              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                <li>Built a simplified, parametric ornithopter CAD model in SolidWorks (body, wing skeleton).</li>
                                <li>Performed preliminary structural checks in ANSYS using static load cases.</li>
                              </ul>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                              <div className="text-white font-semibold mb-2">How?</div>
                              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                <li>Exported simplified geometry; applied linear-elastic materials and fixed supports at actuator mounts.</li>
                                <li>Used tetrahedral mesh with local refinement and modeled flapping as equivalent peak forces/moments.</li>
                                <li>Ran linear static analyses (von Mises, displacement).</li>
                              </ul>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                              <div className="text-white font-semibold mb-2">Results</div>
                              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                <li>Stress concentrations at wing roots/hinges and attachment interfaces; displacements within preliminary limits.</li>
                                <li>Preliminary findings — recommend mesh convergence, transient/FSI, fatigue studies, and physical testing.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ) : project.id === 3 ? (
                        <div className="mb-6 space-y-4">
                          <div className="text-cyan-400 font-semibold">Overview</div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                              <div className="text-white font-semibold mb-2">What?</div>
                              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                <li>Built a line-following firefighting robot with wooden chassis, Arduino, motors, IR line sensors, temperature sensors, and a small fan.</li>
                                <li>Implemented firmware to follow a line, detect heat, and trigger the fan.</li>
                              </ul>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                              <div className="text-white font-semibold mb-2">How?</div>
                              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                <li>Assembled and wired components; tuned sensor placement for reliable line tracking and motor control.</li>
                                <li>Uploaded Arduino code with a PID-like line follower, threshold heat detection, and a safety timeout.</li>
                              </ul>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                              <div className="text-white font-semibold mb-2">Results</div>
                              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                <li>Robot followed test tracks and activated the fan when heat was detected in controlled trials.</li>
                                <li>Effective only on small flames; recommend stronger airflow/extinguisher, sensor shielding, and safety interlocks for real-world use.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="mb-6">
                          <div className="text-cyan-400 font-semibold mb-2">Overview:</div>
                          <p className="text-gray-300 leading-relaxed">{project.description}</p>
                        </div>
                      )}

                      <div className="mb-6">
                        <div className="text-cyan-400 font-semibold mb-4">Key Achievements:</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {project.metrics.map((metric, idx) => (
                            <div key={idx} className="flex items-center space-x-3 bg-slate-800/50 rounded-lg p-4">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <span className="text-gray-300">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-cyan-400 font-semibold mb-4">Technology Stack:</div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-slate-700 text-cyan-400 text-sm font-medium rounded-full border border-slate-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

// Local components: CardCarousel and DetailCarousel
type CarouselProps = {
  images: string[];
  title: string;
};

const CardCarousel: React.FC<CarouselProps> = ({ images, title }) => {
  const [idx, setIdx] = React.useState(0);
  const safeImages = images && images.length ? images.slice(0, 3) : [];
  if (safeImages.length === 0) return null;

  return (
    <div
      className="mb-6 select-none"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} preview images`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setIdx((prev) => (prev - 1 + safeImages.length) % safeImages.length);
        if (e.key === 'ArrowRight') setIdx((prev) => (prev + 1) % safeImages.length);
      }}
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-lg border border-slate-700 bg-slate-800/50">
        <img
          src={safeImages[idx]}
          alt={`${title} image ${idx + 1} of ${safeImages.length}`}
          className="w-full h-full object-cover"
        />
        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setIdx((prev) => (prev - 1 + safeImages.length) % safeImages.length); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/70 text-white px-3 py-2 rounded-lg border border-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-cyan-400"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setIdx((prev) => (prev + 1) % safeImages.length); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/70 text-white px-3 py-2 rounded-lg border border-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-cyan-400"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>
      {safeImages.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2" aria-label="Carousel pagination">
          {safeImages.map((_, i) => (
            <button
              type="button"
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === idx}
              onClick={(e) => { e.stopPropagation(); setIdx(i); }}
              className={`w-2.5 h-2.5 rounded-full ${i === idx ? 'bg-cyan-400' : 'bg-slate-600 hover:bg-slate-500'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

type DetailCarouselProps = {
  images: string[];
  title: string;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

const DetailCarousel: React.FC<DetailCarouselProps> = ({ images, title, currentIndex, setCurrentIndex }) => {
  const safeImages = images && images.length ? images.slice(0, 3) : [];
  if (safeImages.length === 0) return null;

  // Basic swipe support
  const startRef = React.useRef<{ x: number; y: number } | null>(null);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} images`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length);
        if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % safeImages.length);
      }}
      onTouchStart={(e) => {
        const t = e.touches[0];
        startRef.current = { x: t.clientX, y: t.clientY };
      }}
      onTouchEnd={(e) => {
        if (!startRef.current) return;
        const t = e.changedTouches[0];
        const dx = t.clientX - startRef.current.x;
        const dy = t.clientY - startRef.current.y;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 30) {
          if (dx > 0) setCurrentIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length);
          else setCurrentIndex((prev) => (prev + 1) % safeImages.length);
        }
        startRef.current = null;
      }}
    >
      <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-lg border border-slate-700 bg-slate-800/50">
        <img
          src={safeImages[currentIndex]}
          alt={`${title} image ${currentIndex + 1} of ${safeImages.length}`}
          className="w-full h-full object-cover"
        />
        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/70 text-white px-3 py-2 rounded-lg border border-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-cyan-400"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => (prev + 1) % safeImages.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/70 text-white px-3 py-2 rounded-lg border border-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-cyan-400"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>
      {safeImages.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2" aria-label="Carousel pagination">
          {safeImages.map((_, i) => (
            <button
              type="button"
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === currentIndex}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full ${i === currentIndex ? 'bg-cyan-400' : 'bg-slate-600 hover:bg-slate-500'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};