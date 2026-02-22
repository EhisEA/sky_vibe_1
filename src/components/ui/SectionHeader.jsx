import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle, centered = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-10 md:mb-14 ${centered ? 'text-center' : ''}`}
    >
      <h2
        className={`text-3xl md:text-4xl font-heading font-bold mb-3 ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h2>
      <div className={`w-16 h-1 bg-accent-500 rounded-full mb-4 ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-gray-200' : 'text-gray-600'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
