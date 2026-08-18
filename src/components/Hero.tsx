import React from 'react';
import { Phone, MessageCircle, Star, ShieldCheck, Wrench, Award, MapPin } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/businessData';
import heroImage from '../assets/images/hero_automotive_service_1787080310704.jpg';

interface HeroProps {
  onOpenCallbackModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCallbackModal }) => {
  return (
    <section className="relative bg-[#0F0F0F] text-white min-h-[620px] lg:min-h-[680px] flex items-center overflow-hidden border-b border-white/10">
      {/* Background Image Overlay with Ultra Dark Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Sağlam Oto Jant Lastik Servis Atölyesi"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 scale-105"
        />
        {/* Gradients & Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-[#0F0F0F]/80"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-3xl">
          {/* Trust Badge Header */}
          <div className="mb-4">
            <span className="bg-red-600/20 text-red-500 text-xs font-black px-3 py-1 uppercase tracking-widest border border-red-600/30">
              2017'DEN BERİ GÜVENCE
            </span>
          </div>

          {/* Main Title - Sleek Interface Italic Uppercase */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-6 italic uppercase">
            BEYLİKDÜZÜ'NDE<br />
            <span className="text-red-600">USTA İŞİ</span> ÇÖZÜM.
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-xl leading-relaxed font-medium">
            Lastik satışından jant düzeltmeye, balans ayarından tamire kadar aracınızın ihtiyacı olan teknik çözümler tek noktada.
          </p>

          {/* Hero CTAs - Sleek High Contrast */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href={`tel:${BUSINESS_INFO.phoneFormatted}`}
              className="bg-white text-black py-4 px-6 flex items-center justify-between font-bold group hover:bg-red-600 hover:text-white transition-colors shadow-lg min-w-[280px]"
            >
              <span className="uppercase tracking-tight text-xs font-black">Hemen Ara</span>
              <span className="text-lg font-black">{BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white p-4 flex items-center justify-center gap-2 font-black uppercase text-xs hover:opacity-90 transition-opacity tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP'TAN ULAŞ</span>
            </a>
          </div>

          {/* Trust Bar Highlights - Sharp Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10 text-xs">
            <div className="bg-[#1A1A1A] border border-white/5 p-3 flex flex-col justify-center">
              <div className="flex items-center text-yellow-400 text-xs mb-1">
                ★★★★★
              </div>
              <div className="font-black text-white text-sm uppercase">4.6 / 5 PUAN</div>
              <div className="text-[10px] text-gray-500 uppercase font-bold">94 Google Yorumu</div>
            </div>

            <div className="bg-[#1A1A1A] border border-white/5 p-3 flex flex-col justify-center">
              <div className="text-red-600 font-black text-xs uppercase mb-1">BEYLİKDÜZÜ</div>
              <div className="font-black text-white text-sm uppercase">KAVAKLI MAHALLESİ</div>
              <div className="text-[10px] text-gray-500 uppercase font-bold">Orhangazi Cd. No:4</div>
            </div>

            <div className="col-span-2 sm:col-span-1 bg-[#1A1A1A] border border-white/5 p-3 flex flex-col justify-center">
              <div className="text-red-600 font-black text-xs uppercase mb-1">USTALAR</div>
              <div className="font-black text-white text-sm uppercase">ADEM & ÖMER USTA</div>
              <div className="text-[10px] text-gray-500 uppercase font-bold">Birebir Usta Hizmeti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
