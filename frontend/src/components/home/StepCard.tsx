import type { HowItWorksStep } from '@/types/marketing';

export function StepCard({ step }: { step: HowItWorksStep }) {
  return (
    <div className="rounded-3xl border border-brand-border bg-brand-card p-6 text-center shadow-luxury">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-accent bg-brand-primary text-xl font-bold text-brand-accent">
        {step.number}
      </div>
      <h3 className="text-lg font-bold text-brand-text">{step.title}</h3>
      <p className="mt-3 text-sm leading-7 text-brand-muted">{step.body}</p>
    </div>
  );
}
