import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import ReviewCard from '../components/ui/ReviewCard';
import CTABanner from '../components/sections/CTABanner';
import { reviews } from '../constants/reviews';

export default function Reviews() {
  useEffect(() => {
    document.title = 'Reviews | Sky Vibes Cleaning Services Ltd';
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
            Customer Reviews
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary-100 text-lg max-w-2xl mx-auto"
          >
            Real reviews from real clients. See why families and businesses trust Sky Vibes.
          </motion.p>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="What People Are Saying"
            subtitle="We're proud of the relationships we've built and the results we've delivered."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard
                key={review.id}
                testimonial={review}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
