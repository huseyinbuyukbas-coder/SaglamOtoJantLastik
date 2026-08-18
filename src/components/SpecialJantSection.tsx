import React from 'react';
import { CircleAlert, Activity, PenTool, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl, BUSINESS_INFO } from '../data/businessData';
import rimImage from '../assets/images/rim_repair_service_1787080330493.jpg';

export const SpecialJantSection: React.FC = () => {
  return (
    <section id="jant-duzeltme" className="py-20 bg-[#0F0F0F] text-white relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-white/10 shadow-2xl group overflow-hidden">
              <img
                src={rimImage}
                alt="Jant Düzeltme İşlemi Sağlam Oto"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-[#1A1A1A] p-4 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="bg-red-600 p-2 text-white shrink-0 font-black text-sm">
                    PRES
                  </div>
                  <div>
                    <div className="text-sm font-black text-white uppercase italic">
                      PRESLİ JANT DÜZELTME
                    </div>
                    <div className="text-[11px] text-gray-400 font-medium">
                      Çukur ve darbe deformasyonlarında hassas doğrultma
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-7">
            <div className="mb-3">
              <span className="bg-red-600/20 text-red-500 text-xs font-black px-3 py-1 uppercase tracking-widest border border-red-600/30">
                HASSAS JANT ONARIMI
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white mb-6">
              JANTINIZDA <span className="text-red-600">SORUN MU VAR?</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base mb-8 leading-relaxed font-medium">
              Kaldırıma sürtme, çukura girme veya kaza sonrası jantlarda oluşan eğilmeler yüksek hızda titreşime, hava kaçırmaya ve sürüş emniyetsizliğine yol açar. Adem Usta ve Ömer Usta ile doğrudan görüşün.
            </p>

            {/* 3 Technical Problem Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
              <div className="bg-[#1A1A1A] p-4 border border-white/5 hover:border-red-600 transition-colors">
                <div className="w-8 h-8 bg-red-600/20 text-red-500 flex items-center justify-center mb-3">
                  <CircleAlert className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-black uppercase text-white mb-1 tracking-tight">
                  EĞİLMİŞ JANT
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-medium">
                  Darbe veya çukur sonrası oluşan jant deformasyonları.
                </p>
              </div>

              <div className="bg-[#1A1A1A] p-4 border border-white/5 hover:border-red-600 transition-colors">
                <div className="w-8 h-8 bg-red-600/20 text-red-500 flex items-center justify-center mb-3">
                  <Activity className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-black uppercase text-white mb-1 tracking-tight">
                  BALANS SORUNU
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-medium">
                  Sürüş sırasında oluşan titreşimlerin kontrolü için balans ayarı.
                </p>
              </div>

              <div className="bg-[#1A1A1A] p-4 border border-white/5 hover:border-red-600 transition-colors">
                <div className="w-8 h-8 bg-red-600/20 text-red-500 flex items-center justify-center mb-3">
                  <PenTool className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-black uppercase text-white mb-1 tracking-tight">
                  LASTİK HASARI
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-medium">
                  Patlak ve hasarlı lastiklerde kontrol ve uygun tamir işlemleri.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppUrl('Merhaba, jantımda eğiklik/sorun var. Ustaya danışmak istiyorum.')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-500 text-white px-6 py-3.5 text-xs font-black uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>USTAYA DANIŞ</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                className="bg-white text-black hover:bg-red-600 hover:text-white px-6 py-3.5 text-xs font-black uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
