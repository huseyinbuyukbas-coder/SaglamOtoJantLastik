import React, { useState } from 'react';
import { Disc, HelpCircle, MessageCircle, X, Search, Check } from 'lucide-react';
import { getWhatsAppUrl } from '../data/businessData';

interface TireCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TireCalculatorModal: React.FC<TireCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [width, setWidth] = useState('205');
  const [ratio, setRatio] = useState('55');
  const [rimSize, setRimSize] = useState('16');
  const [season, setSeason] = useState('Yazlık');

  if (!isOpen) return null;

  const tireSizeFull = `${width}/${ratio} R${rimSize} ${season}`;
  const waMsg = `Merhaba Adem Usta, ${tireSizeFull} ebadında sıfır/ikinci el lastik stoğunuz ve fiyatınız var mıdır?`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-[#1A1A1A] p-6 sm:p-8 border-2 border-red-600 text-white shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#151515] text-gray-400 hover:text-white border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-red-500 font-black uppercase text-xs tracking-wider mb-2">
          <Disc className="w-4 h-4" />
          <span>LASTİK EBADI & STOK SORGULAMA</span>
        </div>

        <h3 className="text-2xl font-black italic uppercase text-white mb-2">
          LASTİK ÖLÇÜNÜZÜ BELİRLEYİN
        </h3>

        <p className="text-gray-400 text-xs font-medium mb-6 leading-relaxed">
          Lastiğinizin yanak kısmındaki kodlama örneği: <strong className="text-red-500 font-black">205 / 55 R16</strong>. Kendi ebadınızı seçerek Adem Usta'dan fiyat isteyin.
        </p>

        {/* Tire Size Selectors */}
        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">TABAN GENİŞLİĞİ</label>
              <select
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="w-full bg-[#151515] border border-white/10 px-3 py-2 text-white font-mono text-xs font-bold focus:border-red-600 outline-none"
              >
                {['175', '185', '195', '205', '215', '225', '235', '245', '255', '265', '275'].map((w) => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">YANAK ORANI</label>
              <select
                value={ratio}
                onChange={(e) => setRatio(e.target.value)}
                className="w-full bg-[#151515] border border-white/10 px-3 py-2 text-white font-mono text-xs font-bold focus:border-red-600 outline-none"
              >
                {['40', '45', '50', '55', '60', '65', '70', '75'].map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">JANT ÇAPI (R)</label>
              <select
                value={rimSize}
                onChange={(e) => setRimSize(e.target.value)}
                className="w-full bg-[#151515] border border-white/10 px-3 py-2 text-white font-mono text-xs font-bold focus:border-red-600 outline-none"
              >
                {['13', '14', '15', '16', '17', '18', '19', '20', '21'].map((rim) => (
                  <option key={rim} value={rim}>R{rim}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">MEVSİM TİPİ</label>
            <div className="grid grid-cols-3 gap-2">
              {['Yazlık', 'Kışlık', '4 Mevsim'].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setSeason(m)}
                  className={`py-2 px-3 text-xs font-black uppercase transition-colors ${
                    season === m
                      ? 'bg-red-600 text-white'
                      : 'bg-[#151515] text-gray-400 border border-white/10 hover:text-white'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Result Badge */}
        <div className="bg-[#151515] p-4 border border-white/10 text-center mb-6">
          <span className="text-[10px] text-gray-400 uppercase block font-black">SEÇİLEN LASTİK ÖLÇÜNÜZ</span>
          <span className="text-xl font-mono font-black text-red-500 tracking-wider">
            {width} / {ratio} R{rimSize} ({season})
          </span>
        </div>

        {/* Action Button */}
        <a
          href={getWhatsAppUrl(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] text-white py-3.5 px-4 font-black uppercase tracking-wider text-xs hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>STOK VE FİYAT SOR (WHATSAPP)</span>
        </a>

      </div>
    </div>
  );
};
