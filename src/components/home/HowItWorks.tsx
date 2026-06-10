import { StepCard } from '@/components/home/StepCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { SiteMarketing } from '@/types/marketing';

export function HowItWorks({ marketing }: { marketing: SiteMarketing }) {
  return (
    <section className="bg-brand-background py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow={marketing.howItWorks.eyebrow}
          title={marketing.howItWorks.headline}
          subtitle={marketing.howItWorks.subheadline}
          className="mb-16"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {marketing.howItWorks.steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
