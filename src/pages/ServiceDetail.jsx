import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheck, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Button from '../components/ui/Button';
import CTABanner from '../components/sections/CTABanner';
import { services } from '../constants/services';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const currentIndex = services.findIndex((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Sky Vibes Cleaning Services Ltd`;
    }
  }, [service]);

  if (!service) {
    return (
      <div className="container-custom py-24 text-center">
        <h1 className="text-3xl font-heading font-bold text-gray-900 mb-4">
          Service Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The service you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button to="/services" variant="primary">
          <FaArrowLeft /> Back to Services
        </Button>
      </div>
    );
  }

  const Icon = service.icon;
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 md:py-20">
        <div className="container-custom">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary-200 hover:text-white text-sm mb-6 transition-colors"
          >
            <FaArrowLeft /> All Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <Icon className="text-3xl text-accent-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white">
              {service.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                {service.description}
              </p>

              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                What&apos;s Included
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {service.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <FaCheck className="text-accent-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button to="/contact" variant="primary" size="lg">
                  Get a Quote for {service.title}
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </motion.div>

            {/* Navigation between services */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between">
              {prevService ? (
                <Link
                  to={`/services/${prevService.slug}`}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 transition-colors"
                >
                  <FaArrowLeft /> {prevService.title}
                </Link>
              ) : <div />}
              {nextService ? (
                <Link
                  to={`/services/${nextService.slug}`}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary-600 transition-colors"
                >
                  {nextService.title} <FaArrowRight />
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
