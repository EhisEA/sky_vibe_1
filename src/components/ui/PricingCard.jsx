import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Button from './Button';

export default function PricingCard({ tier, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative rounded-2xl border-2 p-8 transition-all duration-300 ${
        tier.highlighted
          ? 'border-primary-500 bg-white shadow-xl scale-[1.02]'
          : 'border-gray-100 bg-white hover:shadow-lg'
      }`}
    >
      {tier.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
          Most Popular
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
          {tier.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4">{tier.description}</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-heading font-bold text-primary-600">
            {tier.price}
          </span>
          <span className="text-sm text-gray-500">/ {tier.period}</span>
        </div>
      </div>
      <ul className="space-y-3 mb-8">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
            <FaCheck className="text-accent-500 mt-0.5 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        to="/contact"
        variant={tier.highlighted ? 'primary' : 'outline'}
        size="lg"
        className="w-full"
      >
        {tier.cta}
      </Button>
    </motion.div>
  );
}
