import React from 'react';
import { GOOGLE_REVIEWS, BUSINESS_INFO } from '../data/businessData';
import { Star, Quote, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';

export const GoogleReviews: React.FC = () => {
  return (
    <section id="yorumlar" className="py-20 bg-[#0F0F0F] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="mb-3">
            <span className="bg-red-600/20 text-red-500 text-xs font-black px-3 py-1 uppercase tracking-widest border border-red-600/30">
              GERÇEK MÜŞTERİ DENEYİMLERİ
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white mb-4">
            MÜŞTERİLERİMİZ <span className="text-red-600">NE DİYOR?</span>
          </h2>

          {/* Overall Score Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-[#1A1A1A] p-4 border border-white/10 mt-2">
            <div className="flex items-center gap-1 text-amber-400">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <div>
              <span className="text-lg font-black text-white mr-2">{BUSINESS_INFO.googleRating} / 5</span>
              <span className="text-gray-400 text-xs font-medium">({BUSINESS_INFO.googleReviewCount} Doğrulanmış Google Haritalar Yorumu)</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#1A1A1A] p-6 border border-white/5 flex flex-col justify-between hover:border-white/20 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 border border-[#25D366]/20">
                    GOOGLE
                  </span>
                </div>

                <p className="text-gray-300 text-xs italic font-medium leading-relaxed mb-4">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-black italic text-white text-sm uppercase">
                    {review.author}
                  </div>
                  <div className="text-[10px] text-gray-400 font-medium">
                    {review.date || 'Doğrulanmış Müşteri'}
                  </div>
                </div>

                <div className="w-6 h-6 bg-[#151515] border border-white/10 flex items-center justify-center text-gray-400 text-xs font-black">
                  G
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice on Authenticity */}
        <div className="mt-8 text-xs text-gray-400 font-medium flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
          <span>Yorumlar işletmenin Google Haritalar profilindeki gerçek müşteri değerlendirmeleridir.</span>
        </div>

      </div>
    </section>
  );
};
