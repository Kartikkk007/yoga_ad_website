import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'; // 'Whatsapp' has been removed, Phone icon is available

// Helper function for logo gradient (re-used from Header)
const getGradientBackground = () => {
  return {
    backgroundImage: 'linear-gradient(to right, #a78bfa, #8b5cf6, #6d28d9)', // Purple gradient
  };
};

function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Book Appointment', href: '#book-appointment' },
  ];

  const programListings = [
    'One-on-One Classes',
    'Online Zoom Classes',
    'Special Programs (Prenatal, Kids, Seniors, Therapeutic)',
  ];

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.footer
      id="footer"
      className="bg-gray-800 text-gray-300 py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Information */}
        <div className="col-span-1">
          <div className="flex items-center mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl mr-2"
              style={getGradientBackground()}
            >
              M
            </div>
            <span className="text-2xl font-semibold text-white">Mansi Sharma Yoga</span>
          </div>
          <p className="text-sm leading-relaxed">
            Guiding you towards holistic well-being through personalized and transformative yoga practices.
          </p>
        </div>

        {/* Quick Navigation Links */}
        <div className="col-span-1">
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleScrollTo(link.href.substring(1))}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm text-left"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Program Listings */}
        <div className="col-span-1">
          <h4 className="text-lg font-semibold text-white mb-4">Our Programs</h4>
          <ul className="space-y-2">
            {programListings.map((program, index) => (
              <li key={index} className="text-gray-300 text-sm">
                {program}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details & Social Media */}
        <div className="col-span-1">
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-sm">
              <Phone className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center text-sm">
              <Mail className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0" />
              <span>mansi.yoga@example.com</span>
            </div>
            <div className="flex items-start text-sm">
              <MapPin className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0 mt-1" />
              <span>Rohini, Delhi, India</span>
            </div>
          </div>
          <div className="flex space-x-4">
            {/* Replaced Whatsapp with Phone icon and colored it green to represent WhatsApp */}
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-500 transition-colors duration-300">
              <Phone className="h-6 w-6" />
            </a>
            <a href="https://instagram.com/mansi.yoga" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition-colors duration-300">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://facebook.com/mansi.yoga" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600 transition-colors duration-300">
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright and Tagline */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Mansi Sharma Yoga. All rights reserved.</p>
        <p className="mt-2">Made with ❤️ for wellness and peace</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
