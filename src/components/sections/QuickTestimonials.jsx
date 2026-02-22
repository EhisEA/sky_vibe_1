import SectionHeader from '../ui/SectionHeader';
import TestimonialCard from '../ui/TestimonialCard';
import Button from '../ui/Button';
import { testimonials } from '../../constants/testimonials';
import { FaArrowRight } from 'react-icons/fa';

export default function QuickTestimonials() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Don't just take our word for it — hear from the homes and businesses we've helped shine."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button to="/testimonials" variant="outline" size="lg">
            Read All Reviews <FaArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
