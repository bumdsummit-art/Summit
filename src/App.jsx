import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyJoinSection from './components/WhyJoinSection';
import EventHighlightsSection from './components/EventHighlightsSection';
import SpeakersSection from './components/SpeakersSection';
import SponsorshipSection from './components/SponsorshipSection';
import PartnersCollaborationSection from './components/PartnersCollaborationSection';
import JoinMovementSection from './components/JoinMovementSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#f9572a] selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyJoinSection />
        <EventHighlightsSection />
        <SpeakersSection />
        <SponsorshipSection />
        <PartnersCollaborationSection />
        <JoinMovementSection />
      </main>
      <Footer />
    </div>
  );
}
