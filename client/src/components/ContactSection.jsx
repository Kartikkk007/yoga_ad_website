import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react'; // 'Whatsapp' has been removed
// We will use the Phone icon as an alternative for the WhatsApp link, or you can use a custom SVG.

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    programInterest: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(''); // 'idle', 'loading', 'success', 'error'
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [id]: '' })); // Clear error on change
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.programInterest) newErrors.programInterest = 'Please select a program.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setFormStatus('error');
      return;
    }

    setFormStatus('loading');
    // Simulate API call for now. This is a frontend-only implementation.
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', programInterest: '', message: '' }); // Clear form
    } catch (error) {
      setFormStatus('error');
      console.error('Form submission failed:', error);
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="book-appointment" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          Book Your Appointment
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="bg-purple-50 p-8 rounded-lg shadow-xl flex flex-col justify-between"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div>
              <h3 className="text-3xl font-bold text-purple-800 mb-6">Get in Touch</h3>
              <p className="text-lg text-gray-700 mb-4">
                Have questions or ready to start your yoga journey? Reach out to us!
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700 text-lg">
                  <Phone className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                  <span>+91 98765 43210 (Available: Mon-Sat, 9 AM - 6 PM)</span>
                </div>
                <div className="flex items-center text-gray-700 text-lg">
                  <Mail className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                  <span>mansi.yoga@example.com (Response within 24 hours)</span>
                </div>
                <div className="text-gray-700 text-lg">
                  <p className="font-semibold mb-1">Class Hours:</p>
                  <ul className="list-disc list-inside ml-6">
                    <li>Morning: 6:00 AM - 11:00 AM</li>
                    <li>Evening: 4:00 PM - 8:30 PM</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6 mt-8">
              {/* Replaced Whatsapp with Phone icon and colored it green to represent WhatsApp */}
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-500 transition-colors duration-300">
                <Phone className="h-8 w-8" />
              </a>
              <a href="https://instagram.com/mansi.yoga" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-500 transition-colors duration-300">
                <Instagram className="h-8 w-8" />
              </a>
              <a href="https://facebook.com/mansi.yoga" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                <Facebook className="h-8 w-8" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-50 p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-lg text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-2 p-3 rounded-md border w-full ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="text-lg text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-2 p-3 rounded-md border w-full ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="text-lg text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`mt-2 p-3 rounded-md border w-full ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200`}
                  placeholder="+91 XXXXXXXXXX"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="programInterest" className="text-lg text-gray-700">Program Interest</label>
                <div className="relative">
                  <select
                    id="programInterest"
                    value={formData.programInterest}
                    onChange={handleChange}
                    className={`mt-2 p-3 rounded-md border w-full bg-white appearance-none ${errors.programInterest ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200`}
                  >
                    <option value="" disabled>Select a program</option>
                    <option value="One-on-One Classes">One-on-One Classes</option>
                    <option value="Online Zoom Classes">Online Zoom Classes</option>
                    <option value="Special Programs">Special Programs</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
                {errors.programInterest && <p className="text-red-500 text-sm mt-1">{errors.programInterest}</p>}
              </div>

              <div>
                <label htmlFor="message" className="text-lg text-gray-700">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`mt-2 p-3 rounded-md border w-full ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200`}
                  placeholder="Tell us about your yoga goals or questions..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3 text-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-md shadow-lg transition-all duration-300 transform hover:scale-[1.01]"
                disabled={formStatus === 'loading'}
              >
                {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {formStatus === 'success' && (
                <p className="text-green-600 text-center mt-4">Your message has been sent successfully!</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-600 text-center mt-4">Failed to send message. Please try again later.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
