import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';
import Button from '../components/ui/Button';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — Page Not Found | Sky Vibes Cleaning Services Ltd';
  }, []);

  return (
    <section className="py-24 md:py-36 bg-gray-50">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-7xl md:text-9xl font-heading font-bold text-primary-200 mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
          <Button to="/" variant="primary" size="lg">
            <FaHome /> Back to Home
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
