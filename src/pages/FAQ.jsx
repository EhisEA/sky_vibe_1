import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import AccordionItem from '../components/ui/AccordionItem';
import CTABanner from '../components/sections/CTABanner';
import { faqs } from '../constants/faq';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    document.title = 'FAQ | Sky Vibes Cleaning Services Ltd';
  }, []);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

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
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary-100 text-lg max-w-2xl mx-auto"
          >
            Got questions? We&apos;ve got answers. Find everything you need to know below.
          </motion.p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Common Questions"
            subtitle="If you can't find what you're looking for, don't hesitate to contact us directly."
          />
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
