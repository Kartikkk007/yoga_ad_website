import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProgramsSection from "./components/ProgramsSection";
import ScheduleSection from "./components/ScheduleSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 2, // Adjust speed globally
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen font-inter">
      <Header />
      <main
        className="pt-16"
        data-scroll-container
        ref={scrollRef}
      >
        <HeroSection />
        <div className="bg-gradient-to-b from-green-400 to-white">
          <AboutSection />
          <ProgramsSection />
          <ScheduleSection />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
