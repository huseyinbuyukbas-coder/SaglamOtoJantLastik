import React from 'react';
import { SERVICE_PROCESS_STEPS } from '../data/businessData';
import { Wrench } from 'lucide-react';

export const ServiceProcess: React.FC = () => {
  return (
    <section className="py-20 bg-[#0F0F0F] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="mb-3">
            <span className="bg-red-600/20 text-red-500 text-xs font-black px-3 py-1 uppercase tracking-widest border border-red-600/30">
              TEKNİK AKIŞ
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white mb-4">
            SERVİS <span className="text-red-600">SÜRECİMİZ</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-medium">
            Hızlı, şeffaf ve güven veren adım adım otomotiv servis sürecimiz.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICE_PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#1A1A1A] p-6 border border-white/5 hover:border-red-600 transition-colors group"
            >
              <div className="text-3xl font-black italic text-red-600 mb-2">
                {step.number}
              </div>

              <h3 className="text-base font-black italic uppercase text-white mb-2">
                {step.title}
              </h3>

              <p className="text-gray-400 text-xs font-medium leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
