import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import ScheduleSection from './components/ScheduleSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AdminScheduleSection from './components/AdminScheduleSection'; // New admin component

// A wrapper component for the user-facing website sections
const UserSite = () => (
  <>
    <Header />
    <main className="pt-16">
      <HeroSection />
      <div className="bg-gradient-to-b from-green-400 to-white">
        <AboutSection />
        <ProgramsSection />
        <ScheduleSection/>
        <TestimonialsSection/>
        <ContactSection />
        <Footer />
      </div>
    </main>
  </>
);

function App() {
  return (
    <div className="min-h-screen font-inter">
      <Router>
        <Routes>
          {/* Main User-facing website route */}
          <Route path="/" element={<UserSite />} />
          
          {/* Admin Schedule Editor route */}
          <Route path="/admin" element={<AdminScheduleSection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
