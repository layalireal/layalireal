import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import type { SiteMarketing } from '@/types/marketing';

export function FinalCTA({ marketing }: { marketing: SiteMarketing }) {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brand-primary px-6 py-10 text-center text-white sm:px-10">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full border border-white" />
            <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full border border-white" />
          </div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-accent">
            {marketing.finalCta.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{marketing.finalCta.headline}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/85">
            {marketing.finalCta.subheadline}
          </p>
          <Link
            href="#products"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-base font-semibold text-brand-primary-dark transition hover:opacity-90"
          >
            {marketing.finalCta.cta}
            <Icon name="arrow" className="h-5 w-5 rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
