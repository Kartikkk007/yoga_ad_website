import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';

function App() {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <div className="bg-gradient-to-b from-red-400 to-white">
          <AboutSection />
          <ProgramsSection />
        </div>
      </main>
      {/* Other sections will be added here later */}
    </div>
  );
}

export default App;