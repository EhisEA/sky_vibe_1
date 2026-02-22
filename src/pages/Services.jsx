import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import ServiceCard from '../components/ui/ServiceCard';
import CTABanner from '../components/sections/CTABanner';
import { services } from '../constants/services';

export default function Services() {
  useEffect(() => {
    document.title = 'Our Services | Sky Vibes Cleaning Services Ltd';
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary-100 text-lg max-w-2xl mx-auto"
          >
            Comprehensive cleaning solutions for every need — residential, commercial, and specialised.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="What We Offer"
            subtitle="Browse our full range of professional cleaning services designed to meet every requirement."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
