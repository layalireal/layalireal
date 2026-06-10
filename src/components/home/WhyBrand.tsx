import { AuthorityCard } from '@/components/home/AuthorityCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { SiteMarketing } from '@/types/marketing';

export function WhyBrand({ marketing }: { marketing: SiteMarketing }) {
  return (
    <section id="why" className="bg-brand-background py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow={marketing.whyBrand.eyebrow}
          title={marketing.whyBrand.headline}
          subtitle={marketing.whyBrand.subheadline}
          className="mb-16"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {marketing.whyBrand.cards.map((card) => (
            <AuthorityCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
