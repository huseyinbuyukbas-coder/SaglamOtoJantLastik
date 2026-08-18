import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Star, MapPin, Wrench } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/businessData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Hizmetlerimiz', href: '#hizmetler' },
    { name: 'Jant Düzeltme', href: '#jant-duzeltme' },
    { name: 'Balans Ayarı', href: '#balans' },
    { name: 'Lastik Tamiri', href: '#tamir' },
    { name: 'Sorun Teşhis', href: '#teshis' },
    { name: 'Ustalarımız', href: '#ustalar' },
    { name: 'Yorumlar', href: '#yorumlar' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#151515] border-b border-white/10 shadow-2xl transition-all">
      {/* Top Banner - Contact & Rating */}
      <div className="bg-[#0F0F0F] border-b border-white/5 text-xs py-2 px-4 text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-gray-300 uppercase tracking-wider text-[11px] font-bold">
              <MapPin className="w-3.5 h-3.5 text-red-600" />
              <span className="hidden sm:inline">Beylikdüzü Kavaklı |</span> Orhangazi Cd. No:4
            </span>
            <div className="h-4 w-[1px] bg-white/10 hidden sm:block"></div>
            <span className="hidden md:flex items-center gap-2">
              <span className="text-yellow-400 text-xs tracking-tight">★★★★★</span>
              <span className="text-white font-bold text-xs">{BUSINESS_INFO.googleRating} / 5</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">({BUSINESS_INFO.googleReviewCount} Google Yorumu)</span>
            </span>
          </div>

          <div className="flex items-center space-x-4 text-xs ml-auto">
            <span className="hidden sm:inline-block text-red-500 bg-red-600/10 border border-red-600/30 px-2 py-0.5 text-[10px] font-black uppercase tracking-widest">
              2017'DEN BERİ BEYLİKDÜZÜ'NDE
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phoneFormatted}`}
              className="text-white hover:text-red-500 font-extrabold tracking-tight flex items-center gap-1.5 transition-colors uppercase"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo - Sleek Interface style */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="bg-red-600 p-2 rounded-sm rotate-3 group-hover:rotate-0 transition-transform shadow-lg shadow-red-600/30">
            <span className="font-black text-xl italic tracking-tighter text-white">SAĞLAM</span>
          </div>
          <div className="flex flex-col leading-none text-xs font-black uppercase">
            <span className="text-white tracking-wider">OTO JANT</span>
            <span className="text-red-600 tracking-wider">LASTİK</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-xs font-black uppercase tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons - Sleek High Contrast */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 text-xs font-black uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WHATSAPP</span>
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phoneFormatted}`}
            className="inline-flex items-center gap-2 bg-white text-black hover:bg-red-600 hover:text-white px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>HEMEN ARA</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 bg-[#1A1A1A] text-white hover:bg-white/10 focus:outline-none border border-white/10"
          aria-label="Menüyü Aç"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-red-600" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#151515] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between p-3 bg-[#1A1A1A] border border-white/10 mb-2">
            <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold">
              <span>★★★★★ 4.6 / 5</span>
              <span className="text-gray-400 text-[10px] uppercase">(94 Google Yorumu)</span>
            </div>
            <span className="text-[10px] text-gray-500 uppercase font-bold">Beylikdüzü</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 bg-[#1A1A1A] border border-white/5 text-gray-200 hover:text-white text-xs font-black uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneFormatted}`}
              className="flex items-center justify-center gap-2 bg-white text-black hover:bg-red-600 hover:text-white py-3 font-black text-xs uppercase tracking-wider transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>HEMEN ARA</span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 font-black text-xs uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
