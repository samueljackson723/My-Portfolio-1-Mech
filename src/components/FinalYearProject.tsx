import React, { useState } from 'react';
import { FileText, Download, Brain, Activity, Target } from 'lucide-react';

const FinalYearProject: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: "https://res.cloudinary.com/dn7yati9d/image/upload/v1756813619/Untitled_design_7_xefatj.png",
      alt: "Carotid Artery — image 1",
      caption: "Carotid Artery — image 1"
    },
    {
      url: "https://res.cloudinary.com/dn7yati9d/image/upload/v1756813619/Untitled_design_6_hipa8z.png",
      alt: "Carotid Artery — image 2",
      caption: "Carotid Artery — image 2"
    },
    {
      url: "https://res.cloudinary.com/dn7yati9d/image/upload/v1756813619/Untitled_design_8_nrl3st.png",
      alt: "Carotid Artery — image 3",
      caption: "Carotid Artery — image 3"
    },
    {
      url: "https://res.cloudinary.com/dn7yati9d/image/upload/v1756813619/Untitled_design_10_gbbym8.png",
      alt: "Carotid Artery — image 4",
      caption: "Carotid Artery — image 4"
    },
    {
      url: "https://res.cloudinary.com/dn7yati9d/image/upload/v1756813619/Untitled_design_9_xau1qn.png",
      alt: "Carotid Artery — image 5",
      caption: "Carotid Artery — image 5"
    }
  ];

  const keyMetrics = [
    { label: "Wall Shear Stress", value: "36.0 Pa", icon: Activity },
    { label: "Velocity Resolution", value: "0.892 m/s", icon: Target },
    { label: "Mesh Optimization", value: "0.4 mm", icon: Brain },
    { label: "ML Accuracy", value: "<5% error", icon: Brain },
    { label: "Cost Reduction", value: "15%", icon: Target },
    { label: "Accuracy Gain", value: "5%", icon: Activity }
  ];

  return (
    <section id="fyp" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Final Year <span className="text-cyan-400">Project</span>
          </h2>
          <div className="text-2xl font-semibold text-yellow-400 mb-4">
            CFD Analysis of Blood Flow through Stenosed Carotid Artery with Fluid–Structure Interaction (FSI)
          </div>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            Advanced computational biomechanics research combining CFD, structural analysis, and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl shadow-2xl w-full">
              <div className="w-full aspect-square">
                <img
                  src={images[selectedImage].url}
                  alt={images[selectedImage].alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{images[selectedImage].caption}</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-1 aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400 ${
                    selectedImage === index
                      ? 'border-cyan-400 shadow-lg shadow-cyan-500/25'
                      : 'border-slate-600 hover:border-cyan-400/50'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Research Overview</h3>
              <p className="text-gray-300 leading-relaxed">
                Engineered a multiscale CFD–FSI framework using Navier–Stokes and structural mechanics governing 
                equations to simulate blood flow in stenosed arteries (15–75% occlusion). Quantified plaque rupture 
                risks by coupling arterial wall elasticity with hemodynamic indicators, correlating wall deformation 
                with stenosis severity for surgical planning.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                {keyMetrics.map((metric, index) => {
                  const IconComponent = metric.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 bg-slate-900/50 rounded-lg p-4">
                      <IconComponent size={20} className="text-cyan-400" />
                      <div>
                        <div className="text-white font-semibold">{metric.value}</div>
                        <div className="text-xs text-gray-400">{metric.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Innovation Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Brain size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold mb-1">Hyperthermic Analysis</div>
                    <div className="text-gray-300 text-sm">
                    heating lowered viscosity, increased peak velocity, reduced recirculation, and improved compliance and wall-shear uniformity
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold mb-1">Computational Efficiency</div>
                    <div className="text-gray-300 text-sm">
                      Reduced computational costs by 30% via optimized meshing, supporting scalable biomedical simulations
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/FYP_Report.docx"
              target="_blank"
              rel="noopener noreferrer"
              download="FYP_Report.docx"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-4 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 flex items-center justify-center space-x-2"
            >
              <FileText size={20} />
              <span>Download FYP Report</span>
              <Download size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-4">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-300">
            <div>
              <div className="font-semibold text-cyan-400 mb-2">Simulation Framework</div>
              <div>ANSYS Fluent, SolidWorks integration, multiscale CFD-FSI coupling</div>
            </div>
            <div>
              <div className="font-semibold text-cyan-400 mb-2">Mesh Analysis</div>
              <div>0.4mm optimal element size, mesh independence studies, 20% accuracy improvement</div>
            </div>
            <div>
              <div className="font-semibold text-cyan-400 mb-2">Biomechanics</div>
              <div>Arterial wall elasticity modeling (1.2E-2E modulus), stenosis severity correlation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalYearProject;