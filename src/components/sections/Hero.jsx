import { motion } from 'framer-motion';
import { FaArrowRight, FaPhone } from 'react-icons/fa';
import Button from '../ui/Button';
import { siteConfig } from '../../constants/siteConfig';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-400/20 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container-custom relative z-10 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Trusted Across {siteConfig.areas.join(', ')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6"
          >
            Professional Cleaning{' '}
            <span className="text-accent-400">You Can Trust</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-100 leading-relaxed mb-8 max-w-2xl"
          >
            From deep cleans to after-builders cleanup, Sky Vibes delivers
            spotless results for homes and businesses across Ireland. Fully
            insured, Garda vetted staff you can rely on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button to="/contact" variant="secondary" size="lg">
              Get a Free Quote <FaArrowRight />
            </Button>
            <Button href={`tel:${siteConfig.phone}`} variant="white" size="lg">
              <FaPhone /> Call Us Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-primary-200"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-400 rounded-full" />
              Fully Insured
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-400 rounded-full" />
              Garda Vetted
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-400 rounded-full" />
              Eco-Friendly Products
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
