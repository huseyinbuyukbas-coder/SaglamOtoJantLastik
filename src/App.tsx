import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickServiceMenu } from './components/QuickServiceMenu';
import { ServicesGrid } from './components/ServicesGrid';
import { SpecialJantSection } from './components/SpecialJantSection';
import { BeforeAfterRimSlider } from './components/BeforeAfterRimSlider';
import { BalansSection } from './components/BalansSection';
import { TireRepairSection } from './components/TireRepairSection';
import { SeasonalTireSection } from './components/SeasonalTireSection';
import { WhyUsSection } from './components/WhyUsSection';
import { MastersSection } from './components/MastersSection';
import { ProblemSolver } from './components/ProblemSolver';
import { GoogleReviews } from './components/GoogleReviews';
import { ServiceProcess } from './components/ServiceProcess';
import { LocationContactSection } from './components/LocationContactSection';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { Footer } from './components/Footer';
import { TireCalculatorModal } from './components/TireCalculatorModal';
import { CallbackModal } from './components/CallbackModal';

export default function App() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  return (
    <div className="bg-[#0f1115] min-h-screen text-slate-100 font-sans selection:bg-red-600 selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <Hero onOpenCallbackModal={() => setIsCallbackOpen(true)} />

      {/* Quick Access Menu Sub-bar */}
      <QuickServiceMenu />

      {/* Problem Solver Diagnostic Selector */}
      <ProblemSolver />

      {/* Main Services Grid */}
      <ServicesGrid />

      {/* Special Jant Section */}
      <SpecialJantSection />

      {/* Before / After Rim Repair Slider */}
      <BeforeAfterRimSlider />

      {/* Balans Ayarı Section */}
      <BalansSection />

      {/* Lastik Tamiri Section */}
      <TireRepairSection />

      {/* Seasonal Tire Change & Lastik Oteli */}
      <SeasonalTireSection />

      {/* Why Us / Neden Sağlam Oto Section */}
      <WhyUsSection />

      {/* Adem Usta & Ömer Usta Section */}
      <MastersSection />

      {/* Google Reviews */}
      <GoogleReviews />

      {/* Service Process Flow */}
      <ServiceProcess />

      {/* Location & Contact Section */}
      <LocationContactSection />

      {/* Footer */}
      <Footer
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenCallback={() => setIsCallbackOpen(true)}
      />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyCTA />

      {/* Modals */}
      <TireCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      <CallbackModal
        isOpen={isCallbackOpen}
        onClose={() => setIsCallbackOpen(false)}
      />
    </div>
  );
}
