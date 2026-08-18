import React from 'react';
import { Wrench, UserCheck, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/businessData';

export const MastersSection: React.FC = () => {
  return (
    <section id="ustalar" className="py-20 bg-[#0F0F0F] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#1A1A1A] p-8 sm:p-12 border border-white/10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="mb-4">
                <span className="bg-red-600/20 text-red-500 text-xs font-black px-3 py-1 uppercase tracking-widest border border-red-600/30">
                  BİREBİR İLGİLENEN USTALAR
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white mb-6">
                İŞİN BAŞINDA <span className="text-red-600">USTALAR VAR</span>
              </h2>

              <p className="text-gray-200 text-base sm:text-lg font-bold mb-4 leading-relaxed">
                Müşterilerimizin Google yorumlarında Adem Usta ve Ömer Usta; işini bilen, hızlı, dürüst ve yardımcı olan ustalar olarak sıkça anılıyor.
              </p>

              <p className="text-gray-400 text-xs sm:text-sm mb-8 leading-relaxed font-medium">
                Amacımız sadece işi yapmak değil, müşterinin işini mümkün olduğunca doğru ve hızlı şekilde çözmek. Baştan savma değil, kaliteli ve garantili iş sunmaktır.
              </p>

              {/* Masters Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {BUSINESS_INFO.masters.map((master, idx) => (
                  <div key={idx} className="bg-[#151515] p-5 border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center font-black text-base shrink-0">
                        {master.name[0]}
                      </div>
                      <div>
                        <h3 className="text-sm font-black italic text-white uppercase leading-none">
                          {master.name}
                        </h3>
                        <span className="text-xs text-red-500 font-bold">
                          {master.title}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed font-medium">
                      {master.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                  className="bg-white text-black hover:bg-red-600 hover:text-white px-6 py-3.5 text-xs font-black uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>USTAYI BİREBİR ARA: {BUSINESS_INFO.phone}</span>
                </a>

                <a
                  href={getWhatsAppUrl('Merhaba Adem Usta / Ömer Usta, bir konuda bilgi almak istiyorum.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-6 py-3.5 text-xs font-black uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WHATSAPP'TAN DANIŞ</span>
                </a>
              </div>
            </div>

            {/* Right Visual Workshop Atmosphere */}
            <div className="lg:col-span-5">
              <div className="relative border border-white/10 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000"
                  alt="Sağlam Oto Servis Atölye Ve Ustalar"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] object-cover"
                />
                
                <div className="absolute bottom-4 left-4 right-4 bg-[#151515] p-4 border border-white/10 text-center">
                  <div className="text-sm font-black italic text-white uppercase">
                    Adem & Ömer Kardeşler
                  </div>
                  <div className="text-xs text-gray-400 font-medium">
                    2017'den Beri Beylikdüzü Kavaklı'da Kesintisiz Usta İşçilik
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
