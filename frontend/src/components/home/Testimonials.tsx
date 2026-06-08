import { TestimonialCard } from '@/components/home/TestimonialCard';
import type { SiteMarketing } from '@/types/marketing';

export function Testimonials({ marketing }: { marketing: SiteMarketing }) {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-accent">
            {marketing.testimonials.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-text">
            {marketing.testimonials.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-brand-muted">
            {marketing.testimonials.subheadline}
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {marketing.testimonials.items.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
