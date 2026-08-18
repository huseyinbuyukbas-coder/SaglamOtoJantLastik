import React from 'react';
import { Phone, MessageCircle, MapPin, Wrench, ShieldCheck, Heart, Star, Disc } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/businessData';

interface FooterProps {
  onOpenCalculator: () => void;
  onOpenCallback: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCalculator, onOpenCallback }) => {
  return (
    <footer className="bg-[#090909] text-gray-400 text-xs border-t border-white/10 pt-16 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Bio */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-600 text-white flex items-center justify-center font-black">
                S
              </div>
              <div>
                <span className="block font-black italic text-lg tracking-wider text-white leading-none">
                  SAĞLAM OTO
                </span>
                <span className="block text-[9px] font-black text-gray-400 uppercase tracking-widest">
                  JANT & LASTİK SERVİSİ
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 font-medium leading-relaxed mb-4">
              2017’den beri Beylikdüzü Kavaklı’da jant düzeltme, lastik tamiri, balans ayarı, sıfır lastik-jant satışı ve lastik saklama oteli hizmetleri.
            </p>

            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold bg-[#151515] p-2 border border-white/10 inline-flex">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>4,6 / 5 Google Puanı (94 Yorum)</span>
            </div>
          </div>

          {/* Col 2: Hizmetler */}
          <div>
            <h4 className="text-sm font-black italic uppercase text-white tracking-wider mb-4 border-l-2 border-red-600 pl-2">
              HIZLI BAĞLANTILAR
            </h4>
            <ul className="space-y-2 text-xs font-bold uppercase">
              <li>
                <a href="#hizmetler" className="hover:text-red-500 transition-colors">Hizmetlerimiz</a>
              </li>
              <li>
                <a href="#jant-duzeltme" className="hover:text-red-500 transition-colors">Jant Düzeltme & Kaynak</a>
              </li>
              <li>
                <a href="#tamir" className="hover:text-red-500 transition-colors">Lastik Tamiri</a>
              </li>
              <li>
                <a href="#balans" className="hover:text-red-500 transition-colors">Balans Ayarı</a>
              </li>
              <li>
                <a href="#teshis" className="hover:text-red-500 transition-colors">Aracınızda Hangi Sorun Var?</a>
              </li>
              <li>
                <a href="#ustalar" className="hover:text-red-500 transition-colors">Adem Usta & Ömer Usta</a>
              </li>
              <li>
                <a href="#yorumlar" className="hover:text-red-500 transition-colors">Müşteri Yorumları</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Practical Tools */}
          <div>
            <h4 className="text-sm font-black italic uppercase text-white tracking-wider mb-4 border-l-2 border-red-600 pl-2">
              MÜŞTERİ ARAÇLARI
            </h4>
            <div className="space-y-2">
              <button
                onClick={onOpenCalculator}
                className="w-full text-left p-3 bg-[#151515] hover:bg-white hover:text-black border border-white/10 text-xs flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Disc className="w-4 h-4 text-red-600 group-hover:text-black" />
                  <span className="font-black uppercase">Lastik Ebadı Sorgula</span>
                </div>
                <span className="text-red-500 group-hover:text-black text-[10px] font-black">ÖLÇÜ AL →</span>
              </button>

              <button
                onClick={onOpenCallback}
                className="w-full text-left p-3 bg-[#151515] hover:bg-[#25D366] hover:text-white border border-white/10 text-xs flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white" />
                  <span className="font-black uppercase">Ustadan Fiyat İste</span>
                </div>
                <span className="text-[#25D366] group-hover:text-white text-[10px] font-black">FORM →</span>
              </button>
            </div>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-sm font-black italic uppercase text-white tracking-wider mb-4 border-l-2 border-red-600 pl-2">
              İLETİŞİM & ADRES
            </h4>
            <div className="space-y-3 text-xs font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneFormatted}`} className="text-white font-black text-xs hover:text-red-500">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-black uppercase hover:underline">
                  WhatsApp Mesaj Hattı
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500">
          <div>
            © 2017 - {new Date().getFullYear()} <strong className="text-white">SAĞLAM OTO JANT LASTİK</strong>. Tüm Hakları Saklıdır. Beylikdüzü / İstanbul.
          </div>
          <div className="flex items-center gap-2 text-gray-400 font-black italic uppercase">
            <span>“Sağlam iş, sağlam esnaflık.”</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
