import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Star, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import yog1 from '../assets/yog1.png';

function AboutSection() {
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

  const textContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.4,
        staggerChildren: 0.15,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Variants for the 3D heading effect
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const headingWordVariants = {
    hidden: {
      opacity: 0,
      rotateX: -90,
      y: 50,
      transformOrigin: "bottom center",
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-green-600 mb-2" />,
      title: "Certified Instructor",
      description: "RYT-200 & RYT-500 Certified",
      certificateUrl: "https://placehold.co/800x600/8b5cf6/ffffff?text=Certificate"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600 mb-2" />,
      title: "500+ Students",
      description: "Transformed lives through yoga"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600 mb-2" />,
      title: "5+ Years",
      description: "Professional teaching experience"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600 mb-2" />,
      title: "4.9/5 Rating",
      description: "From satisfied students",
      reviewLink: "#testimonials"
    }
  ];

  const achievementCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const floatingImageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.6,
      },
    },
  };

  // Split the heading into words for the 3D effect
  const headingWords = "About Mansi Sharma".split(' ');

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Animated Heading with 3D effect */}
        <div style={{ perspective: '1000px' }}>
          <motion.h2
            className="text-4xl font-bold text-center text-gray-800 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headingVariants}
          >
            {headingWords.map((word, index) => (
              <motion.span key={index} variants={headingWordVariants} className="inline-block mr-2">
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Mansi Sharma Image (without a containing box) */}
          <motion.div
            className="w-full md:w-1/3 flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <img
              src="https://placehold.co/400x500/ffffff/000000?text=Mansi+Sharma"
              alt="Mansi Sharma"
              className="rounded-lg shadow-xl object-cover w-full h-auto"
            />
          </motion.div>

          {/* Text Content (without a containing box) */}
          <motion.div
            className="w-full md:w-2/3 text-gray-700 leading-relaxed p-0" // Removed background, border, and shadow classes
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textContentVariants}
          >
            <motion.p className="mb-4 text-lg" variants={paragraphVariants}>
              Mansi Sharma is a dedicated and passionate yoga instructor with over 5 years of experience,
              committed to guiding individuals on their journey to holistic well-being. Her approach
              integrates traditional yoga practices with modern understanding, focusing on personalized
              instruction to meet each student's unique needs and goals.
            </motion.p>
            <motion.p className="mb-4 text-lg" variants={paragraphVariants}>
              Having trained extensively in various yoga disciplines, Mansi brings a wealth of knowledge
              in Hatha, Vinyasa, Restorative, and Therapeutic yoga. She believes that yoga is not just
              about physical postures, but a profound path to mental clarity, emotional balance, and
              spiritual growth.
            </motion.p>
            <motion.p className="text-lg" variants={paragraphVariants}>
              Mansi offers both in-person sessions in Rohini and convenient online classes via Zoom,
              making yoga accessible to everyone, regardless of their location. Join her to discover
              the transformative power of yoga and cultivate a healthier, happier you.
            </motion.p>
          </motion.div>
        </div>

        {/* Floating Yog1 Image - Adjusted position */}
        <motion.div
          className="absolute hidden lg:block"
          style={{ top: '20%', left: '10%', width: '400px', height: 'auto' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={floatingImageVariants}
        >
          <img
            src={yog1}
            alt="Yoga Pose Illustration"
            className="rounded-full shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="group bg-white p-6 rounded-lg border border-gray-200 text-center flex flex-col items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl"
              style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
              variants={achievementCardVariants}
              whileHover={{ rotate: [-1.5, 1.5, -1.5, 0], transition: { duration: 0.3 } }}
            >
              <div className="flex-grow flex flex-col items-center justify-center">
                {achievement.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
              {/* Conditionally render the button for the certificate or reviews */}
              {achievement.certificateUrl && (
                <Button
                  variant="outline"
                  className="mt-4 px-4 py-2 text-xs font-semibold bg-gray-50 text-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => window.open(achievement.certificateUrl, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  View Certificate
                </Button>
              )}
              {achievement.reviewLink && (
                <Button
                  variant="outline"
                  className="mt-4 px-4 py-2 text-xs font-semibold bg-gray-50 text-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => handleScrollTo("testimonials")}
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  View Reviews
                </Button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
