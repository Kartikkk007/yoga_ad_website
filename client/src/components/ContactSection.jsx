import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    programInterest: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [id]: '' }));
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
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', programInterest: '', message: '' });
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
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="book-appointment" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          Book Your Appointment
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            className="bg-purple-50 p-6 rounded-lg shadow-xl flex flex-col justify-between"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div>
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Get in Touch</h3>
              <p className="text-base text-gray-700 mb-4">
                Have questions or ready to start your yoga journey? Reach out to us!
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700 text-sm">
                  <Phone className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span>+91 98765 43210 (Mon-Sat, 9 AM - 6 PM)</span>
                </div>
                <div className="flex items-center text-gray-700 text-sm">
                  <Mail className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span>mansi.yoga@example.com</span>
                </div>
                <div className="text-gray-700 text-sm">
                  <p className="font-semibold mb-1">Class Hours:</p>
                  <ul className="list-disc list-inside ml-5">
                    <li>Morning: 6:00 AM - 11:00 AM</li>
                    <li>Evening: 4:00 PM - 8:30 PM</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-5 mt-6">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-500 transition">
                <Phone className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/mansi.yoga" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-500 transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://facebook.com/mansi.yoga" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { id: 'name', type: 'text', label: 'Name', placeholder: 'Your Name' },
                { id: 'email', type: 'email', label: 'Email', placeholder: 'your.email@example.com' },
                { id: 'phone', type: 'tel', label: 'Phone', placeholder: '+91 XXXXXXXXXX' },
              ].map(({ id, type, label, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="text-base text-gray-700">{label}</label>
                  <input
                    id={id}
                    type={type}
                    value={formData[id]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className={`mt-1.5 py-2 px-3 rounded-md border w-full text-sm ${errors[id] ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition`}
                  />
                  {errors[id] && <p className="text-red-500 text-xs mt-1">{errors[id]}</p>}
                </div>
              ))}

              <div>
                <label htmlFor="programInterest" className="text-base text-gray-700">Program Interest</label>
                <select
                  id="programInterest"
                  value={formData.programInterest}
                  onChange={handleChange}
                  className={`mt-1.5 py-2 px-3 rounded-md border w-full text-sm bg-white appearance-none ${errors.programInterest ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition`}
                >
                  <option value="" disabled>Select a program</option>
                  <option value="One-on-One Classes">One-on-One Classes</option>
                  <option value="Online Zoom Classes">Online Zoom Classes</option>
                  <option value="Special Programs">Special Programs</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
                {errors.programInterest && <p className="text-red-500 text-xs mt-1">{errors.programInterest}</p>}
              </div>

              <div>
                <label htmlFor="message" className="text-base text-gray-700">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your yoga goals or questions..."
                  className={`mt-1.5 py-2 px-3 rounded-md border w-full text-sm ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full py-2.5 text-base font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-md shadow-md transition-all duration-300"
              >
                {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {formStatus === 'success' && (
                <p className="text-green-600 text-center text-sm mt-3">Your message has been sent successfully!</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-600 text-center text-sm mt-3">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
