import React from 'react';
import { Gauge, Check, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, BUSINESS_INFO } from '../data/businessData';

export const BalansSection: React.FC = () => {
  return (
    <section id="balans" className="py-20 bg-[#111111] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A1A1A] p-8 sm:p-12 border border-white/10 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="mb-4">
                <span className="bg-red-600/20 text-red-500 text-xs font-black px-3 py-1 uppercase tracking-widest border border-red-600/30">
                  DİJİTAL HASSAS AYAR
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white mb-4">
                DÜZGÜN SÜRÜŞ İÇİN <span className="text-red-600">DOĞRU BALANS</span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base mb-8 leading-relaxed font-medium">
                Balans ayarı, yüksek hızlarda direksiyonda veya araç gövdesinde oluşabilecek titreşimlerin kontrol altına alınması, süspansiyon sisteminin korunması ve lastiklerin dengeli aşınması açısından kritik öneme sahiptir.
              </p>

              {/* 3 Advantages */}
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-3 bg-[#151515] p-3 border border-white/5">
                  <div className="w-5 h-5 bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-gray-200 text-xs sm:text-sm uppercase tracking-wide">
                    Daha dengeli ve konforlu sürüş
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-[#151515] p-3 border border-white/5">
                  <div className="w-5 h-5 bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-gray-200 text-xs sm:text-sm uppercase tracking-wide">
                    Lastiklerin düzgün ve eşit çalışması
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-[#151515] p-3 border border-white/5">
                  <div className="w-5 h-5 bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-gray-200 text-xs sm:text-sm uppercase tracking-wide">
                    Sürüş sırasındaki titreşim problemlerinin kontrolü
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                  className="bg-white text-black hover:bg-red-600 hover:text-white px-6 py-3.5 text-xs font-black uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>BALANS AYARI İÇİN ARA</span>
                </a>

                <a
                  href={getWhatsAppUrl('Merhaba, aracımda balans ayarı yaptırmak istiyorum. Randevu ve bilgi alabilir miyim?')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-6 py-3.5 text-xs font-black uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WHATSAPP'TAN SOR</span>
                </a>
              </div>
            </div>

            {/* Right Card Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full bg-[#151515] p-6 border border-white/10 text-center relative">
                <div className="w-16 h-16 bg-red-600/20 border border-red-600/30 mx-auto flex items-center justify-center text-red-500 mb-4">
                  <Gauge className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black italic uppercase text-white mb-2">
                  DİJİTAL BALANS MAKİNESİ
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4 font-medium">
                  Adem Usta tarafından her tekerlek için miligram hassasiyetinde kurşun ağırlık çakılarak tekerleğin dönüş balansı sıfırlanır.
                </p>
                <div className="inline-block bg-[#0F0F0F] px-3 py-1.5 text-[10px] font-mono text-[#25D366] border border-white/10 uppercase tracking-widest font-bold">
                  HASSASİYET: 0.1 GRAM / DİJİTAL KALİBRASYON
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
