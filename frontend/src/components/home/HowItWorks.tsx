import { StepCard } from '@/components/home/StepCard';
import type { SiteMarketing } from '@/types/marketing';

export function HowItWorks({ marketing }: { marketing: SiteMarketing }) {
  return (
    <section className="bg-brand-background px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-accent">
            {marketing.howItWorks.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-text">
            {marketing.howItWorks.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-brand-muted">
            {marketing.howItWorks.subheadline}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {marketing.howItWorks.steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
