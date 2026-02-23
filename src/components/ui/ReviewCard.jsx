import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ReviewCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300"
    >
      <FaQuoteLeft className="text-primary-200 text-2xl mb-3" />
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={`text-sm ${
              i < testimonial.rating ? 'text-accent-400' : 'text-gray-200'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="border-t border-gray-100 pt-3">
        <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
        <p className="text-xs text-gray-500">{testimonial.location}</p>
      </div>
    </motion.div>
  );
}
