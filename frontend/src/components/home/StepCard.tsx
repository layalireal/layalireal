import type { HowItWorksStep } from '@/types/marketing';

export function StepCard({ step }: { step: HowItWorksStep }) {
  return (
    <article className="nama-card p-6 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-secondary bg-brand-primary text-xl font-extrabold text-brand-secondary">
        {step.number}
      </div>
      <h3 className="text-lg font-extrabold text-brand-text">{step.title}</h3>
      <p className="mt-3 text-sm leading-7 text-brand-muted">{step.body}</p>
    </article>
  );
}
