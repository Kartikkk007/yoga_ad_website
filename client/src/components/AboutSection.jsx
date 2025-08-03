import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Star } from 'lucide-react'; // Import the new icons
import yog1 from '../assets/yog1.png'; // Import the yog1 image

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
        staggerChildren: 0.15, // Stagger paragraphs
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-green-600 mb-2" />,
      title: "Certified Instructor",
      description: "RYT-200 & RYT-500 Certified"
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
      description: "From satisfied students"
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
        delay: 0.6, // Delay after main content
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden"> {/* Added relative and overflow-hidden */}
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          About Mansi Sharma
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Image Placeholder */}
          <motion.div
            className="w-full md:w-1/3 flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <img
              src="https://placehold.co/400x500/8b5cf6/ffffff?text=Mansi+Sharma"
              alt="Mansi Sharma"
              className="rounded-lg shadow-xl object-cover w-full h-auto"
            />
          </motion.div>

          {/* Text Content with Engraved Box Effect and Framer Motion */}
          <motion.div
            className="w-full md:w-2/3 text-gray-700 leading-relaxed bg-white p-8 rounded-lg border border-gray-200 shadow-lg"
            style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06), 0 4px 6px rgba(0,0,0,0.1)' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textContentVariants} // Apply variants to parent div
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

     {/* Floating Yog1 Image - Positioned on the left and made larger */}
        <motion.div
          className="absolute hidden lg:block" // Hidden on smaller screens, visible on large
          style={{ top: '30%', left: '5%', width: '300px', height: 'auto' }} // Adjusted position to left and increased width
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
              className="bg-white p-6 rounded-lg border border-gray-200 text-center flex flex-col items-center justify-center"
              style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06), 0 4px 6px rgba(0,0,0,0.1)' }}
              variants={achievementCardVariants}
            >
              {achievement.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{achievement.title}</h3>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
