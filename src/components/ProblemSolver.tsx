import React, { useState } from 'react';
import { DIAGNOSTIC_OPTIONS, getWhatsAppUrl, BUSINESS_INFO } from '../data/businessData';
import { DiagnosticOption } from '../types';
import { Activity, CircleAlert, PenTool, CalendarCheck, ShoppingBag, Sparkles, MessageCircle, ArrowRight, HelpCircle, Phone } from 'lucide-react';

export const ProblemSolver: React.FC = () => {
  const [selected, setSelected] = useState<DiagnosticOption>(DIAGNOSTIC_OPTIONS[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return Activity;
      case 'CircleAlert': return CircleAlert;
      case 'PenTool': return PenTool;
      case 'CalendarCheck': return CalendarCheck;
      case 'ShoppingBag': return ShoppingBag;
      case 'Sparkles': return Sparkles;
      default: return HelpCircle;
    }
  };

  return (
    <section id="teshis" className="py-20 bg-[#0F0F0F] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <div className="mb-3">
            <span className="bg-red-600/20 text-red-500 text-xs font-black px-3 py-1 uppercase tracking-widest border border-red-600/30">
              HIZLI TEŞHİS REHBERİ
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white mb-4">
            ARACINIZDA <span className="text-red-600">HANGİ SORUN VAR?</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-medium">
            Sık karşılaşılan oto jant & lastik problemlerini seçin, ustamızın önerdiği çözümü ve hızlı iletişim seçeneğini anında görün.
          </p>
        </div>

        {/* Diagnostic Options Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {DIAGNOSTIC_OPTIONS.map((item) => {
            const Icon = getIcon(item.iconName);
            const isSelected = selected.id === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className={`text-left p-4 transition-all border flex items-start gap-4 ${
                  isSelected
                    ? 'bg-[#1A1A1A] border-red-600 shadow-lg'
                    : 'bg-[#151515] border-white/5 hover:border-white/20'
                }`}
              >
                <div className={`w-9 h-9 flex items-center justify-center shrink-0 ${
                  isSelected ? 'bg-red-600 text-white' : 'bg-[#1A1A1A] text-gray-400 border border-white/10'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className={`text-sm font-black uppercase tracking-tight mb-0.5 ${
                    isSelected ? 'text-white' : 'text-gray-200'
                  }`}>
                    "{item.symptom}"
                  </h3>
                  <span className={`text-xs font-bold ${
                    isSelected ? 'text-red-500' : 'text-gray-500'
                  }`}>
                    Çözüm: {item.solution}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Solution Detail Card - Sleek Interface Style */}
        <div className="bg-[#1A1A1A] p-6 sm:p-8 border-l-4 border-l-red-600 border-y border-r border-white/10 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-red-500 font-black uppercase text-xs tracking-widest mb-2">
                <Sparkles className="w-4 h-4" />
                <span>USTA TEŞHİSİ & ÖNERİSİ</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black italic uppercase text-white mb-2">
                {selected.solution}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {selected.description}
              </p>

              <div className="inline-block bg-[#0F0F0F] px-3 py-1 text-[11px] text-gray-400 border border-white/10 font-mono uppercase tracking-wider">
                Sorumlu Usta: Adem Usta / Ömer Usta • Beylikdüzü Kavaklı Atölyesi
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <a
                href={getWhatsAppUrl(selected.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3.5 text-xs font-black uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{selected.actionText}</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                className="bg-white text-black hover:bg-red-600 hover:text-white px-6 py-3.5 text-xs font-black uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>HEMEN ARA</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Diagnosis CTA Banner */}
        <div className="mt-8 bg-[#151515] p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black italic uppercase text-white mb-1">
              NE İHTİYACINIZ OLDUĞUNDAN EMİN DEĞİL MİSİNİZ?
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm font-medium">
              Aracınızdaki sorunu bize anlatın, ustamızla telefonda veya WhatsApp'ta görüşün.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('Merhaba, aracımda tam emin olamadığım bir jant/lastik sorunu var. Ustamızla görüşmek istiyorum.')}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-500 text-white px-6 py-3.5 font-black text-xs uppercase tracking-wider shrink-0 transition-colors"
          >
            <span>USTAYA SOR</span>
          </a>
        </div>

      </div>
    </section>
  );
};
