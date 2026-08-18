import React, { useState } from 'react';
import { SERVICES, getWhatsAppUrl } from '../data/businessData';
import {
  Disc,
  CircleDot,
  Repeat,
  Wrench,
  ShieldAlert,
  Zap,
  Gauge,
  Warehouse,
  BatteryCharging,
  Truck,
  MessageCircle,
  Phone
} from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'lastik' | 'jant' | 'bakim' | 'diger'>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Disc': return Disc;
      case 'CircleDot': return CircleDot;
      case 'Repeat': return Repeat;
      case 'Wrench': return Wrench;
      case 'ShieldAlert': return ShieldAlert;
      case 'Zap': return Zap;
      case 'Gauge': return Gauge;
      case 'Warehouse': return Warehouse;
      case 'BatteryCharging': return BatteryCharging;
      case 'Truck': return Truck;
      default: return Wrench;
    }
  };

  const filteredServices = activeTab === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeTab);

  return (
    <section id="hizmetler" className="py-20 bg-[#111111] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="mb-3">
            <span className="bg-red-600/20 text-red-500 text-xs font-black px-3 py-1 uppercase tracking-widest border border-red-600/30">
              HİZMET YELPAZEMİZ
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tight text-white mb-4">
            ARACINIZ İÇİN İHTİYACINIZ OLAN <span className="text-red-600">HER ŞEY</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-medium">
            Lastik ve jant konusunda satıştan tamire, ayardan saklamaya kadar tüm çözümler Beylikdüzü’nde tek noktada.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {[
            { id: 'all', label: 'TÜM HİZMETLER' },
            { id: 'lastik', label: 'OTO LASTİK' },
            { id: 'jant', label: 'JANT İŞLEMLERİ' },
            { id: 'bakim', label: 'BALANS & BAKIM' },
            { id: 'diger', label: 'OTELLER & YOL YARDIM' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider transition-all border ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-[#1A1A1A] text-gray-400 border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Services - Sleek Interface Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredServices.map((service) => {
            const IconComponent = getIcon(service.iconName);
            const waUrl = getWhatsAppUrl(`Merhaba, ${service.title} hizmetiniz hakkında bilgi ve fiyat almak istiyorum.`);

            return (
              <div
                key={service.id}
                className="bg-[#1A1A1A] border border-white/5 hover:border-red-600 p-6 flex flex-col justify-between transition-colors group"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-red-600/20 border border-red-600/30 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 bg-red-600/20 text-red-500 border border-red-600/30">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-black italic uppercase tracking-tight text-white group-hover:text-red-500 transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-xs font-bold mb-2">
                    "{service.shortDesc}"
                  </p>

                  <p className="text-gray-400 text-xs leading-relaxed mb-6 font-medium">
                    {service.fullDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#151515] hover:bg-[#25D366] text-white hover:text-white py-2.5 px-3 text-xs font-black uppercase tracking-wider text-center transition-colors border border-white/5"
                  >
                    FİYAT SOR
                  </a>
                  <a
                    href="tel:+905343500065"
                    className="p-2.5 bg-white text-black hover:bg-red-600 hover:text-white transition-colors"
                    title="Hemen Ara"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
