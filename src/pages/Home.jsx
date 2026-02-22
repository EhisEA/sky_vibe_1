import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import ServicesOverview from '../components/sections/ServicesOverview';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import QuickTestimonials from '../components/sections/QuickTestimonials';
import CTABanner from '../components/sections/CTABanner';

export default function Home() {
  useEffect(() => {
    document.title = 'Sky Vibes Cleaning Services Ltd | Professional Cleaning in Ireland';
  }, []);

  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <QuickTestimonials />
      <CTABanner />
    </>
  );
}
