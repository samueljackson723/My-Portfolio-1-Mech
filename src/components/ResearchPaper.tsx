import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

const SSRN_URL = 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5377395';

const ResearchPaper: React.FC = () => {
  return (
    <section id="research-paper" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-yellow-400 bg-yellow-400/10 border border-yellow-500/30 rounded-full px-3 py-1">
            Published research
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 bg-slate-800/40 border border-slate-700 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <FileText size={22} />
            </div>
            <div>
              <a
                href={SSRN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-xl sm:text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
              >
                CFD modeling of blood flow through a stenosed carotid artery under hyperthermic conditions
                <ExternalLink size={18} className="opacity-60 group-hover:opacity-100" />
              </a>

              {/* Small screens: clamp to ~3 lines */}
              <p className="mt-3 text-gray-300 text-sm line-clamp-3 md:hidden">
                ANSYS-based CFD study of pulsatile, non-Newtonian blood flow in 25/50/75% stenosed carotid models
                (created in SolidWorks). Compares baseline vs. hyperthermia (UDF heating): stenosis sharply raises
                systolic pressure drop, while mild hyperthermia lowers viscosity, reduces vascular resistance, enlarges
                jet flow, and may improve downstream perfusion.
              </p>
              {/* Medium+ screens: fuller summary */}
              <p className="mt-3 text-gray-300 hidden md:block">
                ANSYS-based CFD study of pulsatile, non-Newtonian blood flow in 25/50/75% stenosed carotid models
                created in SolidWorks. Compares baseline vs. hyperthermia (UDF heating): stenosis sharply raises
                systolic pressure drop, while mild hyperthermia lowers viscosity, reduces vascular resistance, enlarges
                jet flow, and may improve downstream perfusion.
              </p>
            </div>
          </div>

          <div className="flex md:flex-col gap-3 md:gap-2 md:items-end">
            <a
              href={SSRN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              View the Paper
            </a>
            <a
              href={SSRN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border-2 border-slate-600 text-gray-300 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Read full paper
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800" />
      </div>
    </section>
  );
};

export default ResearchPaper;


