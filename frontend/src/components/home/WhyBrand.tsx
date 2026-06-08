import { AuthorityCard } from '@/components/home/AuthorityCard';
import type { SiteMarketing } from '@/types/marketing';

export function WhyBrand({ marketing }: { marketing: SiteMarketing }) {
  return (
    <section className="bg-brand-background px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-accent">
            {marketing.whyBrand.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-text">{marketing.whyBrand.headline}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-brand-muted">
            {marketing.whyBrand.subheadline}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {marketing.whyBrand.cards.map((card) => (
            <AuthorityCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
