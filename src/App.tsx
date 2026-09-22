import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { DifferenceSection } from "./components/DifferenceSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { StudioExperience } from "./components/StudioExperience";
import { AuthoritySection } from "./components/AuthoritySection";
import { SocialProofSection } from "./components/SocialProofSection";
import { LocationHoursSection } from "./components/LocationHoursSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { MobileStickyCTA } from "./components/MobileStickyCTA";
import { LeadModal } from "./components/LeadModal";
import { MotionSystem } from "./components/MotionSystem";

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const openBooking = () => setIsBookingModalOpen(true);
  return (
    <>
      <MotionSystem />
      <div id="topo" />
      <Header onOpenBookingModal={openBooking} />
      <main id="conteudo-principal" tabIndex={-1}>
        <Hero onOpenBookingModal={openBooking} />
        <StudioExperience />
        <DifferenceSection />
        <BenefitsSection />
        <HowItWorksSection onOpenBookingModal={openBooking} />
        <AuthoritySection />
        <SocialProofSection />
        <LocationHoursSection />
        <FAQSection />
        <CTASection onOpenBookingModal={openBooking} />
      </main>
      <Footer />
      <MobileStickyCTA onOpenBookingModal={openBooking} />
      <LeadModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
}
