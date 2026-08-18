import React, { useState } from 'react';
import { X, Phone, MessageCircle, Wrench, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/businessData';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Jant Düzeltme');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const waMsg = `Merhaba Adem Usta, Ben ${name || 'Müşteri'}. Telefonum: ${phone}. ${service} hizmeti için görüşmek istiyorum.`;
      window.open(getWhatsAppUrl(waMsg), '_blank');
      setSubmitted(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-[#1A1A1A] p-6 sm:p-8 border-2 border-red-600 text-white shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#151515] text-gray-400 hover:text-white border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-red-500 font-black uppercase text-xs tracking-wider mb-2">
          <Wrench className="w-4 h-4" />
          <span>USTAYA ULAŞIN</span>
        </div>

        <h3 className="text-2xl font-black italic uppercase text-white mb-2">
          USTADAN BİLGİ & FİYAT ALIN
        </h3>

        <p className="text-gray-400 text-xs font-medium mb-6 leading-relaxed">
          Adem Usta veya Ömer Usta ile doğrudan görüşmek için bilgilerinizi girin veya tek tıkla arayın.
        </p>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto border border-[#25D366]/30">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-black italic text-white uppercase">YÖNLENDİRİLİYORSUNUZ...</h4>
            <p className="text-xs text-gray-400 font-medium">WhatsApp üzerinden ustamız mesajınızı bekliyor.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-black text-gray-300 uppercase mb-1">Adınız Soyadınız</label>
              <input
                type="text"
                required
                placeholder="Örn: Ahmet Yılmaz"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white text-xs font-medium focus:border-red-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-gray-300 uppercase mb-1">Telefon Numaranız</label>
              <input
                type="tel"
                required
                placeholder="05XX XXX XX XX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white text-xs font-medium focus:border-red-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-gray-300 uppercase mb-1">Hizmet Türü</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-[#151515] border border-white/10 px-4 py-3 text-white text-xs font-medium focus:border-red-600 outline-none"
              >
                <option value="Jant Düzeltme & Onarım">Jant Düzeltme & Onarım</option>
                <option value="Lastik Tamiri">Lastik Tamiri</option>
                <option value="Balans Ayarı">Balans Ayarı</option>
                <option value="Lastik Değişimi">Lastik Değişimi</option>
                <option value="Sıfır Lastik Satışı">Sıfır Lastik Satışı</option>
                <option value="Sıfır / İkinci El Jant">Jant Satışı</option>
                <option value="Lastik Oteli">Lastik Oteli Saklama</option>
                <option value="Yol Yardım">Yol Yardım</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#25D366] text-white py-3.5 px-4 font-black uppercase tracking-wider text-xs hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>USTAYA WHATSAPP’TAN MESAJ AT</span>
            </button>

            <div className="pt-2 text-center">
              <span className="text-xs text-gray-400 block mb-2 font-black uppercase">veya doğrudan arayın:</span>
              <a
                href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                className="inline-flex items-center justify-center gap-2 text-white hover:text-red-500 font-black text-base uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4 text-red-600" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
