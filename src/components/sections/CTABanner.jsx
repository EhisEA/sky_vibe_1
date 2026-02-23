import { motion } from 'framer-motion';
import { FaArrowRight, FaPhone } from 'react-icons/fa';
import Button from '../ui/Button';
import { siteConfig } from '../../constants/siteConfig';

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 md:py-20">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready for a Spotless Space?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch today for a free, no-obligation quote. We&apos;ll have
            your home or office sparkling in no time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="secondary" size="lg">
              Request a Quote <FaArrowRight />
            </Button>
            <Button href={`tel:${siteConfig.phone}`} variant="white" size="lg">
              <FaPhone /> {siteConfig.phone}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
