import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ProblemSection } from './components/ProblemSection';
import { DifferenceSection } from './components/DifferenceSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { BenefitsSection } from './components/BenefitsSection';
import { StudioExperience } from './components/StudioExperience';
import { AuthoritySection } from './components/AuthoritySection';
import { SocialProofSection } from './components/SocialProofSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { LeadModal } from './components/LeadModal';

export const App: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0D10] text-slate-100 selection:bg-amber-500/20 selection:text-amber-300">
      
      {/* Top Main Navigation Header */}
      <Header onOpenBookingModal={handleOpenBookingModal} />

      {/* Main Content Area */}
      <main id="conteudo-principal" tabIndex={-1} className="flex-1 focus:outline-none">
        {/* 1. Hero with value proposition, badges & visual atmosphere */}
        <Hero onOpenBookingModal={handleOpenBookingModal} />

        {/* 2. Trust metric strip */}
        <TrustBar />

        {/* 3. Problem & Identification (why conventional gyms fail) */}
        <ProblemSection onOpenBookingModal={handleOpenBookingModal} />

        {/* 4. Core Differentials of Studio BS Trainer */}
        <DifferenceSection />

        {/* 5. How it Works (clear 4-step onboarding) */}
        <HowItWorksSection onOpenBookingModal={handleOpenBookingModal} />

        {/* 6. Benefits beyond aesthetics (Health, energy, posture, consistency) */}
        <BenefitsSection />

        {/* 7. Studio Experience & Atmosphere at Carandá Bosque */}
        <StudioExperience />

        {/* 8. Brand Authority & Founder Brunno Schneider (since 2017) */}
        <AuthoritySection />

        {/* 9. Social Proof (Google 4.6 stars, ~59 reviews) */}
        <SocialProofSection />

        {/* 10. Location, Hours, Contact & Interactive Map */}
        <LocationHoursSection />

        {/* 11. FAQ with accurate, verified answers */}
        <FAQSection />

        {/* 12. Final High-Conversion CTA */}
        <CTASection onOpenBookingModal={handleOpenBookingModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Bottom Bar for Mobile Devices */}
      <MobileStickyCTA onOpenBookingModal={handleOpenBookingModal} />

      {/* Modal for direct WhatsApp scheduling inquiry */}
      <LeadModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
      />

    </div>
  );
};

export default App;
