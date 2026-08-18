import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/businessData';

export const LocationContactSection: React.FC = () => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${BUSINESS_INFO.name} ${BUSINESS_INFO.address}`)}`;

  return (
    <section id="iletisim" className="py-20 bg-[#0F0F0F] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="mb-3">
            <span className="bg-red-600/20 text-red-500 text-xs font-black px-3 py-1 uppercase tracking-widest border border-red-600/30">
              ULAŞIM & ADRES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white mb-4">
            BEYLİKDÜZÜ’NDE <span className="text-red-600">KOLAY ULAŞIM</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-medium">
            Aracınız için doğru çözümü birlikte bulalım. Sorularınız veya randevu için hemen arayın veya konum alın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 bg-[#1A1A1A] p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-black italic uppercase text-white mb-6">
                İLETİŞİM BİLGİLERİMİZ
              </h3>

              <div className="space-y-6 text-xs font-medium">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-red-600/20 text-red-500 flex items-center justify-center shrink-0 border border-red-600/30">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] uppercase font-black block mb-0.5">ADRESİMİZ</span>
                    <p className="text-white font-bold leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                    <span className="text-xs text-red-500 font-bold mt-1 inline-block">
                      Beylikdüzü Kavaklı’da kolay ulaşılabilir konum.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-red-600/20 text-red-500 flex items-center justify-center shrink-0 border border-red-600/30">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] uppercase font-black block mb-0.5">TELEFON</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                      className="text-white text-base font-black hover:text-red-500 transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/30">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] uppercase font-black block mb-0.5">WHATSAPP HATTI</span>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] text-xs font-black uppercase hover:underline"
                    >
                      WhatsApp Mesajı Gönder (Tıkla)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#151515] text-gray-400 flex items-center justify-center shrink-0 border border-white/10">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] uppercase font-black block mb-0.5">ÇALIŞMA SAATLERİ</span>
                    <p className="text-gray-200 text-xs font-bold">
                      Pazartesi - Cumartesi: 08:30 - 20:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="pt-6 mt-6 border-t border-white/10 space-y-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                className="w-full bg-red-600 hover:bg-red-500 text-white py-3.5 px-4 font-black uppercase tracking-wider text-xs transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>HEMEN ARA: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-3.5 px-4 font-black uppercase tracking-wider text-xs hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP'TAN YAZ</span>
              </a>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-black hover:bg-red-600 hover:text-white py-3.5 px-4 font-black uppercase tracking-wider text-xs transition-colors inline-flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>YOL TARİFİ AL (GOOGLE MAPS)</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Preview Column */}
          <div className="lg:col-span-7 bg-[#1A1A1A] border border-white/10 overflow-hidden shadow-2xl relative min-h-[400px] flex flex-col justify-between">
            <div className="p-4 bg-[#151515] border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-sm font-black italic text-white uppercase block">
                  SAĞLAM OTO JANT LASTİK KONUMU
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  Orhangazi Cd. No:4, Kavaklı, Beylikdüzü
                </span>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-500 text-white px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
              >
                <span>Haritalarda Aç</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Map Iframe */}
            <div className="w-full h-full min-h-[350px] relative bg-black">
              <iframe
                title="Sağlam Oto Jant Lastik Beylikdüzü Harita Konumu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.3!2d28.6420!3d40.9880!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzE2LjgiTiAyOMKwMzgnMzEuMiJF!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              ></iframe>
            </div>

            <div className="p-3 bg-[#151515] text-xs text-gray-400 font-medium text-center border-t border-white/10">
              Beylikdüzü ve çevresinden rahatlıkla ulaşabileceğiniz merkezi konum.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
