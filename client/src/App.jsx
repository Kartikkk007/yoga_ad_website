import React, { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import ScheduleSection from './components/ScheduleSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';


function App() {
  const scrollRef = useRef(null);
  const [locomotiveScrollInstance, setLocomotiveScrollInstance] = useState(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.05, // Adjusted to a lower value for an even smoother scroll
      });

      setLocomotiveScrollInstance(scroll);

      const handleResize = () => {
        scroll.update();
      };
      window.addEventListener('resize', handleResize);

      return () => {
        if (scroll) {
          scroll.destroy();
          window.removeEventListener('resize', handleResize);
        }
      };
    }
  }, []);

  return (
    <div className="min-h-screen font-inter">
      {/* Pass the locomotiveScrollInstance to Header */}
      <Header locomotiveScrollInstance={locomotiveScrollInstance} />
      
      {/* This div is the main scroll container for Locomotive Scroll */}
      <main className="pt-16" data-scroll-container ref={scrollRef}>
        <HeroSection />

        {/* The gradient wrapper for the rest of the sections */}
        <div className="bg-gradient-to-b from-green-400 to-white">
          <AboutSection />
          <ProgramsSection />
          <ScheduleSection/>
          <TestimonialsSection/>
          <ContactSection />
        </div>
     
      </main>
    </div>
  );
}

export default App;
