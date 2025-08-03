import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // For hamburger and close icons
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import { Button } from './ui/button'; // Shadcn UI Button

// Helper function to generate a gradient background for the logo
const getGradientBackground = () => {
  return {
    backgroundImage: 'linear-gradient(to right, #a78bfa, #8b5cf6, #6d28d9)', // Purple gradient
  };
};

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation links data
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Book', href: '#book-appointment' },
  ];

  // Function to handle smooth scrolling and close mobile menu
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  // Framer Motion variants for the mobile menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -50, transition: { duration: 0.3 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.2 } },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 shadow-md backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl"
            style={getGradientBackground()}
          >
            M
          </div>
          <span className="text-xl font-semibold text-gray-800">Mansi Sharma Yoga</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Button
              key={link.name}
              variant="link"
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-base font-medium"
              onClick={() => handleScrollTo(link.href.substring(1))} // Remove '#' for ID
            >
              {link.name}
            </Button>
          ))}
          {/* Contact Information (Desktop) */}
          <a href="tel:+919876543210" className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-300">
            +91 98765 43210
          </a>
          <span className="text-gray-400 hidden lg:inline">|</span> {/* Hide on smaller screens if space is tight */}
          <a href="mailto:mansi.yoga@example.com" className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-300 hidden lg:inline">
            mansi.yoga@example.com
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle mobile menu</span>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Content (Custom Implementation with Framer Motion) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-0 w-full bg-white bg-opacity-95 shadow-lg overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="flex flex-col items-center space-y-4 px-4 py-4"> {/* Added py-4 here */}
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  className="w-full justify-center text-lg text-gray-800 hover:bg-purple-50 hover:text-purple-700 py-3"
                  onClick={() => handleScrollTo(link.href.substring(1))}
                >
                  {link.name}
                </Button>
              ))}
              {/* Contact Info in Mobile Menu */}
              <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-600 flex flex-col items-center space-y-2 w-full">
                <a href="tel:+919876543210" className="hover:text-purple-600 transition-colors duration-300">
                  Phone: +91 98765 43210
                </a>
                <a href="mailto:mansi.yoga@example.com" className="hover:text-purple-600 transition-colors duration-300">
                  Email: mansi.yoga@example.com
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
