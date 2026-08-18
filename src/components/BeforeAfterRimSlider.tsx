import React, { useState } from 'react';
import { ArrowLeftRight, CheckCircle2, ShieldCheck, Wrench } from 'lucide-react';
import { getWhatsAppUrl } from '../data/businessData';

export const BeforeAfterRimSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="py-20 bg-[#0F0F0F] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="mb-3">
            <span className="bg-red-600/20 text-red-500 text-xs font-black px-3 py-1 uppercase tracking-widest border border-red-600/30">
              GERÇEK SERVİS İŞÇİLİĞİ
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white mb-4">
            EĞİLMİŞ JANT, <span className="text-red-600">SÜRÜŞ KEYFİNİZİ BOZMASIN</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-medium">
            Jantta oluşan deformasyonları kontrol ediyor, uygun durumlarda presli düzeltme ve kaynak işlemi uyguluyoruz.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl bg-[#1A1A1A] p-4 sm:p-6 border border-white/10 shadow-2xl">
          <div className="relative w-full h-[320px] sm:h-[420px] overflow-hidden select-none border border-white/10">
            
            {/* AFTER Image (Background) */}
            <div className="absolute inset-0 w-full h-full bg-[#111111] flex items-center justify-center">
              <img
                src="/src/assets/images/straightened_rim_1787081406542.jpg"
                alt="Düzeltilmiş Sonraki Jant"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-[#25D366] text-white font-black px-3 py-1 text-xs tracking-wider uppercase border border-white/10 flex items-center gap-1.5 z-10">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>SONRA: DÜZELTİLMİŞ JANT</span>
              </div>
            </div>

            {/* BEFORE Image (Clipped Layer) */}
            <div
              className="absolute top-0 bottom-0 left-0 overflow-hidden bg-black z-10"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src="/src/assets/images/bent_car_rim_1787081394690.jpg"
                alt="Eğilmiş Önceki Jant"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover max-w-none"
                style={{ width: '100%', minWidth: '100%', height: '100%' }}
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white font-black px-3 py-1 text-xs tracking-wider uppercase border border-white/10 flex items-center gap-1.5 z-10 whitespace-nowrap">
                <Wrench className="w-3.5 h-3.5" />
                <span>ÖNCE: HASARLI / EĞİLMİŞ</span>
              </div>
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-red-600 cursor-ew-resize"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-red-600 text-white border-2 border-white flex items-center justify-center shadow-xl">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>

            {/* Slider Control overlay */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              aria-label="Önce Sonra Karşılaştırma Kaydırıcısı"
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Sürgü kaydırarak değişim farkını inceleyin
            </span>
            <div className="flex items-center gap-4">
              <span className="text-gray-200 font-black uppercase">
                Adem Usta İşi Hassas Pres
              </span>
              <a
                href={getWhatsAppUrl('Merhaba, eğilmiş jantım var. Düzeltme işlemi hakkında fotoğraf gönderip bilgi almak istiyorum.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-white font-black uppercase tracking-wider transition-colors"
              >
                Fotoğraf Gönder & Bilgi Al →
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
