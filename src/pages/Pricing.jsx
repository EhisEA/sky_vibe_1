import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import PricingCard from '../components/ui/PricingCard';
import CTABanner from '../components/sections/CTABanner';
import { pricingTiers } from '../constants/pricing';

export default function Pricing() {
  useEffect(() => {
    document.title = 'Pricing | Sky Vibes Cleaning Services Ltd';
  }, []);

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 md:py-20">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary-100 text-lg max-w-2xl mx-auto"
          >
            Choose the cleaning package that suits your needs. No hidden fees, no surprises.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Our Packages"
            subtitle="All packages include eco-friendly products, insured & vetted staff, and our satisfaction guarantee."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <PricingCard key={tier.id} tier={tier} index={index} />
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-sm text-gray-500 mt-10 max-w-xl mx-auto"
          >
            Prices are indicative and may vary based on property size and condition.
            Contact us for a tailored quote specific to your needs.
          </motion.p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
