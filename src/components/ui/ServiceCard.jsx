import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/services/${service.slug}`}
        className="block bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full"
      >
        <div className="w-14 h-14 bg-primary-50 text-primary-500 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
          <Icon className="text-2xl" />
        </div>
        <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {service.description}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:text-accent-500 transition-colors">
          Learn more <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>
    </motion.div>
  );
}
