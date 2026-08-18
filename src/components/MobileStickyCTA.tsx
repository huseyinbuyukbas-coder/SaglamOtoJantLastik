import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/businessData';

export const MobileStickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0F0F0F] border-t border-white/10 p-2 px-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${BUSINESS_INFO.phoneFormatted}`}
          className="flex items-center justify-center gap-2 bg-red-600 active:bg-red-700 text-white py-3 font-black text-xs uppercase tracking-wider"
        >
          <Phone className="w-4 h-4" />
          <span>HEMEN ARA</span>
        </a>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] active:opacity-80 text-white py-3 font-black text-xs uppercase tracking-wider"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WHATSAPP</span>
        </a>
      </div>
    </div>
  );
};
