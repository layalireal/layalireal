import { TestimonialCard } from '@/components/home/TestimonialCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { SiteMarketing } from '@/types/marketing';

export function Testimonials({ marketing }: { marketing: SiteMarketing }) {
  return (
    <section id="reviews" className="bg-white py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow={marketing.testimonials.eyebrow}
          title={marketing.testimonials.headline}
          subtitle={marketing.testimonials.subheadline}
          className="mb-16"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {marketing.testimonials.items.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
