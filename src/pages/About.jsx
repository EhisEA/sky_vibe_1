import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaHandshake, FaHeart, FaUsers } from 'react-icons/fa';
import SectionHeader from '../components/ui/SectionHeader';
import CTABanner from '../components/sections/CTABanner';

const values = [
  {
    icon: FaHandshake,
    title: 'Trust & Transparency',
    description: 'We build lasting relationships through honest communication, fair pricing, and reliable service every single time.',
  },
  {
    icon: FaHeart,
    title: 'Care & Compassion',
    description: 'We treat every home and business as if it were our own, with attention to detail and genuine care for our clients.',
  },
  {
    icon: FaUsers,
    title: 'Community First',
    description: 'As a local business, we\'re proud to serve our neighbours in Portlaoise, Dublin, and Kildare and give back to our community.',
  },
  {
    icon: FaBullseye,
    title: 'Excellence in Everything',
    description: 'From training our staff to choosing our products, we pursue the highest standards in every aspect of our work.',
  },
];

export default function About() {
  useEffect(() => {
    document.title = 'About Us | Sky Vibes Cleaning Services Ltd';
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
            About Sky Vibes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary-100 text-lg max-w-2xl mx-auto"
          >
            Your trusted local cleaning partner, serving homes and businesses across Ireland.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Our Story"
              subtitle="How a passion for cleanliness became a thriving business."
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg mx-auto text-gray-600 space-y-4"
            >
              <p>
                Sky Vibes Cleaning Services Ltd was founded with a simple belief: everyone
                deserves to live and work in a clean, healthy environment. What started as a
                small, family-run operation in Portlaoise has grown into one of the most
                trusted cleaning companies serving the Midlands, Dublin, and Kildare.
              </p>
              <p>
                Our journey began when we noticed a gap in the market for truly reliable,
                high-quality cleaning services that treated every job — big or small — with
                the same level of care and professionalism. We set out to fill that gap, and
                today we&apos;re proud to serve hundreds of happy clients.
              </p>
              <p>
                Every member of our team is handpicked, Garda vetted, and trained to our
                exacting standards. We invest in eco-friendly products and the latest
                cleaning techniques to deliver results that speak for themselves.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom text-center">
          <SectionHeader
            title="Our Mission"
            subtitle="To deliver exceptional cleaning services that enhance the well-being and comfort of every space we touch."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              We strive to be Ireland&apos;s most trusted cleaning company by combining
              professional expertise with genuine care. Our mission is to make
              professional cleaning accessible, reliable, and environmentally
              responsible — so you can focus on what matters most while we take care
              of the rest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide everything we do."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-accent-50 text-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
