import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'; // Adjusted path to card component

function ProgramsSection() {
  const programs = [
    {
      title: 'One-on-One Classes',
      price: '₹2,500/session',
      description: 'Personalized instruction tailored to your specific needs and goals, conducted at your home for maximum comfort and privacy.',
      image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=One-on-One+Yoga',
      details: 'Duration: 60-75 min | Location: Your Home (Rohini & nearby areas)',
    },
    {
      title: 'Online Zoom Classes',
      price: '₹1,000/month',
      description: 'Join live virtual sessions from the comfort of your home. Flexible timings and interactive classes for all levels.',
      image: 'https://placehold.co/600x400/6d28d9/ffffff?text=Online+Yoga',
      details: 'Duration: 60 min | Location: Online via Zoom',
    },
    {
      title: 'Special Programs',
      price: '₹2,000/month',
      description: 'Specialized yoga programs designed for specific needs: Prenatal, Kids, Seniors, and Therapeutic yoga.',
      image: 'https://placehold.co/600x400/a78bfa/ffffff?text=Special+Yoga',
      details: 'Duration: 45-60 min | Location: Online / Personal (as per program)',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Our Yoga Programs
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-semibold text-purple-700">{program.title}</CardTitle>
                  <CardDescription className="text-gray-600">{program.details}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 mb-4">{program.description}</p>
                  <p className="text-3xl font-bold text-purple-800">{program.price}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <p className="text-sm text-gray-500 italic">
                    (Note: These programs are for information only. Please use the "Book" section to inquire.)
                  </p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
