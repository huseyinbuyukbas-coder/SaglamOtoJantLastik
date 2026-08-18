import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Clock, Heart, ThumbsUp, MapPin, Sparkles } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const reasons = [
    {
      title: "2017'DEN BERİ HİZMET",
      desc: "Beylikdüzü'nde kesintisiz 9 yılı aşkın tecrübe ve güven.",
      icon: Award
    },
    {
      title: "DENEYİMLİ USTALAR",
      desc: "Müşterilerimizin övgüyle bahsettiği Adem Usta & Ömer Usta elinden usta işi.",
      icon: ShieldCheck
    },
    {
      title: "HIZLI SERVİS",
      desc: "Zamanınızı çalmayan, seri ve dikkatli montaj & tamir işlemleri.",
      icon: Clock
    },
    {
      title: "UYGUN FİYAT YAKLAŞIMI",
      desc: "Şeffaf, makul fiyat politikası ve gereksiz masraf çıkarmayan dürüst yaklaşım.",
      icon: ThumbsUp
    },
    {
      title: "DÜRÜST ESNAFLIK",
      desc: "Kurtarılabilir jantı veya tamir edilebilir lastiği yenisiyle değiştirmeye zorlamayan yaklaşım.",
      icon: Heart
    },
    {
      title: "KOLAY ULAŞILABİLİR KONUM",
      desc: "Beylikdüzü Kavaklı Orhangazi Caddesi üzerinde rahat park ve hızlı giriş.",
      icon: MapPin
    }
  ];

  return (
    <section className="py-20 bg-[#0F0F0F] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="mb-3">
            <span className="bg-red-600/20 text-red-500 text-xs font-black px-3 py-1 uppercase tracking-widest border border-red-600/30">
              MÜŞTERİ MEMNUNİYETİ
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white mb-4">
            BİZİ TERCİH EDENLER <span className="text-red-600">NEDEN MEMNUN?</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-medium">
            Google haritalarda 94'ün üzerinde gerçek müşteri değerlendirmesiyle Beylikdüzü'nün en dürüst ve güvenilir otomotiv esnafları arasında.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-[#1A1A1A] p-6 border border-white/5 hover:border-red-600 transition-colors group"
              >
                <div className="w-10 h-10 bg-red-600/20 border border-red-600/30 flex items-center justify-center text-red-500 mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black italic uppercase text-white mb-2 group-hover:text-red-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual Slogan Banner */}
        <div className="bg-[#1A1A1A] p-8 sm:p-12 border-2 border-red-600 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-red-500 font-black uppercase tracking-widest text-xs mb-2 block">
              SAĞLAM OTO JANT LASTİK İLKESİ
            </span>
            <h3 className="text-3xl sm:text-5xl font-black italic uppercase text-white tracking-wider my-2">
              “SAĞLAM İŞ, <span className="text-red-600">SAĞLAM ESNAFLIK.</span>”
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm font-bold uppercase max-w-xl mx-auto mt-4">
              2017'den bu yana Beylikdüzü'nde aracınızı güvenle teslim edebileceğiniz ustalarınız.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
