import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button'; // Shadcn UI Button, path adjusted

// Import carousel images from assets
import carousel1 from '../assets/carousal1.png'; // Ensure this path is correct
import carousel2 from '../assets/carousal2.png'; // Ensure this path is correct
import carousel3 from '../assets/carousal3.png'; // Ensure this path is correct

function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselImages = [carousel1, carousel2, carousel3];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        (prevIndex + 1) % carouselImages.length
      );
    }, 5000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Slightly faster stagger
        delayChildren: 0.5,   // Delay before children start animating
      },
    },
  };

  const headlineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring", // Use spring physics for a subtle bounce
        damping: 10,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const buttonGroupVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15, // Stagger buttons individually
        delayChildren: 0.8,    // Delay buttons after text
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };


  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Autoplaying Carousel Background */}
      <div className="absolute inset-0 w-full h-full">
        {carouselImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Yoga Carousel ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === activeIndex ? 'opacity-30' : 'opacity-0' // Low opacity for background effect
            }`}
          />
        ))}
        {/* Dark overlay over carousel for better text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 p-8 max-w-4xl mx-auto text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg"
          variants={headlineVariants}
        >
          Transform Your Life with Yoga by Mansi Sharma
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 opacity-90 drop-shadow-md"
          variants={itemVariants}
        >
          Personalized sessions available in Rohini and online – embark on your wellness journey today.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          variants={buttonGroupVariants}
        >
          <motion.div variants={buttonVariants}>
            <Button
              className="px-8 py-3 text-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => handleScrollTo('schedule')}
            >
              Join a Class
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants}>
            <Button
              className="px-8 py-3 text-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://wa.me/919876543210', '_blank')} // Replace with Mansi's WhatsApp number
            >
              Contact Now (WhatsApp)
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants}>
            <Button
              className="px-8 py-3 text-lg font-semibold bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => alert('Demo video placeholder. This would open a video modal.')} // Placeholder for video
            >
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
