import React from 'react';
import { Warehouse, Repeat, ShieldCheck, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { getWhatsAppUrl, BUSINESS_INFO } from '../data/businessData';
import hotelImage from '../assets/images/tire_hotel_storage_1787080344607.jpg';

export const SeasonalTireSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#111111] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Part 1: Mevsimsel Değişim */}
        <div className="bg-[#1A1A1A] p-8 sm:p-12 border border-white/10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="mb-4">
                <span className="bg-red-600/20 text-red-500 text-xs font-black px-3 py-1 uppercase tracking-widest border border-red-600/30">
                  YAZLIK & KIŞLIK DEĞİŞİM
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white mb-4">
                MEVSİM DEĞİŞTİĞİNDE <span className="text-red-600">LASTİKLERİNİZİ HAZIRLAYIN</span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed font-medium">
                Yazlık ve kışlık lastik değişim işlemlerinizi Jant çizmeyen hassas sökme-takma makinelerimiz ve uzman ekibimizle gerçekleştirelim.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={getWhatsAppUrl('Merhaba, yazlık/kışlık lastik değişimi yaptırmak istiyorum. Fiyat ve randevu bilgisi alabilir miyim?')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-500 text-white px-6 py-3.5 text-xs font-black uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>LASTİK DEĞİŞİMİ İÇİN ULAŞ</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                  className="bg-white text-black hover:bg-red-600 hover:text-white px-6 py-3.5 text-xs font-black uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#151515] p-6 border border-white/5">
              <div className="space-y-3 text-xs text-gray-300 font-bold uppercase">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Jant çizmeyen plastik başlıklı makineler</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Hassas subap kontrolü</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Değişim sonrası bilgisayarlı balans kontrolü</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Hızlı ve sıra beklemeden teslimat</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Part 2: Lastik Oteli */}
        <div className="bg-[#1A1A1A] p-8 sm:p-12 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative border border-white/10 overflow-hidden">
                <img
                  src={hotelImage}
                  alt="Sağlam Oto Lastik Oteli Depo Saklama"
                  referrerPolicy="no-referrer"
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white font-black px-3 py-1 text-xs uppercase tracking-widest border border-white/10">
                  GÜVENLİ SAKLAMA OTELİ
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="mb-4">
                <span className="bg-[#25D366]/20 text-[#25D366] text-xs font-black px-3 py-1 uppercase tracking-widest border border-[#25D366]/30">
                  LASTİK SAKLAMA OTELİ
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tight text-white mb-4">
                LASTİKLERİNİZİ <span className="text-[#25D366]">BİZ SAKLAYALIM</span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed font-medium">
                Mevsimsel lastik değişimlerinde kullanmadığınız lastikleriniz için lastik saklama oteli hizmetimizden yararlanabilirsiniz. Evinizde veya balkonunuzda yer kaplamadan ideal koşullarda muhafaza edin.
              </p>

              <div className="space-y-2 mb-8 text-xs text-gray-300 font-bold uppercase">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Güneş görmeyen, nem kontrollü kapalı muhafaza alanı</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Kişiye özel etiketleme ve barkod takibi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Değişim zamanı geldiğinde hazır bekleme</span>
                </div>
              </div>

              <a
                href={getWhatsAppUrl('Merhaba, lastik saklama oteli ücreti ve koşulları hakkında bilgi almak istiyorum.')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3.5 text-xs font-black uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                <Warehouse className="w-4 h-4" />
                <span>LASTİK OTELİ BİLGİSİ AL</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
