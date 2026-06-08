import { Icon } from '@/components/ui/Icon';
import type { Testimonial } from '@/types/marketing';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="rounded-3xl border border-brand-border bg-brand-card p-6 shadow-luxury">
      <div className="mb-4 flex items-center justify-between">
        <Icon name="quote" className="h-8 w-8 text-brand-accent/70" />
        <div className="flex items-center gap-1 text-brand-accent">
          {Array.from({ length: 5 }).map((_, index) => (
            <Icon key={index} name="star" className="h-4 w-4 fill-current" />
          ))}
        </div>
      </div>
      <p className="text-sm leading-8 text-brand-text">{testimonial.quote}</p>
      <div className="mt-6 flex items-center justify-between gap-3">
        <div>
          <p className="font-semibold text-brand-text">{testimonial.name}</p>
          <p className="text-xs text-brand-muted">{testimonial.meta}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-lg font-bold text-brand-accent">
          {testimonial.initial}
        </div>
      </div>
    </article>
  );
}
