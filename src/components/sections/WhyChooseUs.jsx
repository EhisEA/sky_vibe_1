import { motion } from 'framer-motion';
import { FaShieldAlt, FaLeaf, FaClock, FaAward } from 'react-icons/fa';
import SectionHeader from '../ui/SectionHeader';

const pillars = [
  {
    icon: FaShieldAlt,
    title: 'Fully Insured & Vetted',
    description:
      'Every team member is Garda vetted and fully insured, giving you complete peace of mind.',
  },
  {
    icon: FaLeaf,
    title: 'Eco-Friendly Products',
    description:
      'We use non-toxic, environmentally friendly cleaning products safe for your family and pets.',
  },
  {
    icon: FaClock,
    title: 'Reliable & Punctual',
    description:
      'We arrive on time, every time. Consistent, dependable service you can count on week after week.',
  },
  {
    icon: FaAward,
    title: 'Quality Guaranteed',
    description:
      'Not satisfied? We\'ll come back and re-clean at no extra charge. Your satisfaction is our promise.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <SectionHeader
          title="Why Choose Sky Vibes?"
          subtitle="We go above and beyond to deliver a cleaning experience that exceeds your expectations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-50 text-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-2xl" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
