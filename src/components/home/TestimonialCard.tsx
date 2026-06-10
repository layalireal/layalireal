import { Icon } from '@/components/ui/Icon';
import type { Testimonial } from '@/types/marketing';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="nama-card flex h-full flex-col p-6">
      <Icon name="quote" className="mb-4 h-8 w-8 text-brand-secondary/60" />
      <p className="flex-1 text-sm leading-8 text-brand-text">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3 border-t border-brand-border pt-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-lg font-extrabold text-brand-secondary">
          {testimonial.initial}
        </div>
        <div>
          <p className="font-extrabold text-brand-text">{testimonial.name}</p>
          <p className="text-xs text-brand-muted">{testimonial.meta}</p>
        </div>
      </div>
    </article>
  );
}
