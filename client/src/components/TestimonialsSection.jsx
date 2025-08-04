import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react'; // For star rating

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Singh',
      role: 'Software Engineer',
      rating: 5,
      feedback: 'Mansi\'s online classes have been a game-changer for my daily routine. Her clear instructions and calming presence make every session a joy. I feel more energetic and focused!',
      photo: 'https://placehold.co/100x100/a78bfa/ffffff?text=Priya', // Placeholder
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      role: 'Business Owner',
      rating: 5,
      feedback: 'The personalized sessions at home are incredibly convenient. Mansi understands my body\'s needs and tailors each practice. My back pain has significantly reduced.',
      photo: 'https://placehold.co/100x100/6d28d9/ffffff?text=Rahul', // Placeholder
    },
    {
      id: 3,
      name: 'Ananya Sharma',
      role: 'Homemaker',
      rating: 5,
      feedback: 'I joined the prenatal yoga program, and it has been a blessing. Mansi\'s gentle guidance helped me stay active and relaxed throughout my pregnancy. Highly recommend!',
      photo: 'https://placehold.co/100x100/8b5cf6/ffffff?text=Ananya', // Placeholder
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section id="testimonials" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          What Our Students Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2 }}
              className="flex justify-center"
            >
              <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-purple-200"
                />
                <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-purple-600 mb-3">{testimonial.role}</p>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.feedback}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
