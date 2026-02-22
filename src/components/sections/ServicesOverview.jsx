import SectionHeader from '../ui/SectionHeader';
import ServiceCard from '../ui/ServiceCard';
import Button from '../ui/Button';
import { services } from '../../constants/services';
import { FaArrowRight } from 'react-icons/fa';

export default function ServicesOverview() {
  const topServices = services.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <SectionHeader
          title="Our Cleaning Services"
          subtitle="From residential deep cleans to commercial office maintenance — we cover it all with care and professionalism."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topServices.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button to="/services" variant="outline" size="lg">
            View All Services <FaArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
