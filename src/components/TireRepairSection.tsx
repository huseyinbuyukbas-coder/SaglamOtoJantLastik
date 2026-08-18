import React from 'react';
import { Phone, MessageCircle, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/businessData';

export const TireRepairSection: React.FC = () => {
  return (
    <section id="tamir" className="py-20 bg-[#0F0F0F] text-white relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A1A1A] p-8 sm:p-12 border border-white/10 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="mb-4">
                <span className="bg-red-600/20 text-red-500 text-xs font-black px-3 py-1 uppercase tracking-widest border border-red-600/30">
                  HIZLI & GÜVENLİ ONARIM
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white mb-4">
                LASTİĞİNİZ PATLADIYSA <span className="text-red-600">ÇÖZÜM BURADA</span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg font-medium mb-6 leading-relaxed">
                Lastik hasarını kontrol ediyor, uygun durumlarda güvenli mantar yama ve profesyonel onarım işlemini gerçekleştiriyoruz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 text-xs text-gray-300 font-bold uppercase">
                <div className="flex items-center gap-2 bg-[#151515] p-3 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>İçten Soğuk/Sıcak Mantar Yama</span>
                </div>
                <div className="flex items-center gap-2 bg-[#151515] p-3 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Subap / Sibop İğnesi Değişimi</span>
                </div>
                <div className="flex items-center gap-2 bg-[#151515] p-3 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Fitil Onarımı (Uygun Durumlarda)</span>
                </div>
                <div className="flex items-center gap-2 bg-[#151515] p-3 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Sızdırmazlık Temizliği & Jant Yanak Kontrolü</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                  className="bg-red-600 hover:bg-red-500 text-white px-6 py-4 text-xs font-black uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>LASTİK TAMİRİ İÇİN ARA: {BUSINESS_INFO.phone}</span>
                </a>

                <a
                  href={getWhatsAppUrl('Merhaba, lastiğim patladı. Konum atıp servis veya tamir bilgisi almak istiyorum.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-6 py-4 text-xs font-black uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>KONUM / WHATSAPP</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full bg-[#151515] p-6 border border-white/10 text-center">
                <div className="w-20 h-20 bg-red-600/20 border border-red-600/30 mx-auto flex items-center justify-center text-red-500 mb-4">
                  <Wrench className="w-10 h-10" />
                </div>
                <div className="text-lg font-black italic uppercase text-white mb-1">
                  BEYLİKDÜZÜ KAVAKLI
                </div>
                <div className="text-xs text-gray-400 mb-4 font-medium">
                  En Yakın Hızlı Oto Lastik Tamiri
                </div>
                <div className="text-xs text-red-400 bg-red-600/10 p-2.5 border border-red-600/20 font-bold uppercase">
                  ⚡ Orhangazi Caddesi Üzerinde Kolay Ulaşım
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
