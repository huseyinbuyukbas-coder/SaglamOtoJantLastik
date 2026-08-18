import React from 'react';
import { Disc, CircleDot, Gauge, Wrench, ArrowRight } from 'lucide-react';

export const QuickServiceMenu: React.FC = () => {
  const items = [
    {
      code: 'LSTK',
      title: 'LASTİK SATIŞI',
      desc: 'Sıfır & İkinci El Seçenekleri',
      href: '#hizmetler',
    },
    {
      code: 'JANT',
      title: 'JANT DÜZELTME',
      desc: 'Hassas Pres & Onarım',
      href: '#jant-duzeltme',
    },
    {
      code: 'BLNS',
      title: 'BALANS AYARI',
      desc: 'Titreşimsiz Sürüş Keyfi',
      href: '#balans',
    },
    {
      code: 'TMR',
      title: 'LASTİK TAMİRİ',
      desc: 'Profesyonel Yama İşlemi',
      href: '#tamir',
    }
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {items.map((item, index) => {
          return (
            <a
              key={index}
              href={item.href}
              className="bg-[#1A1A1A] border border-white/10 hover:border-red-600 p-5 flex flex-col justify-center items-center text-center transition-colors group"
            >
              <div className="text-red-600 mb-2 font-black text-sm tracking-widest">{item.code}</div>
              <h3 className="text-xs sm:text-sm font-black uppercase mb-1 text-white group-hover:text-red-500 transition-colors tracking-tight">
                {item.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-gray-400 font-medium">
                {item.desc}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
};
