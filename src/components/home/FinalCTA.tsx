import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import type { SiteMarketing } from '@/types/marketing';

export function FinalCTA({ marketing }: { marketing: SiteMarketing }) {
  return (
    <section className="section-shell py-16">
      <div className="relative overflow-hidden rounded-4xl bg-brand-primary px-6 py-14 text-center text-white sm:px-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full border border-white/10" />
        <p className="eyebrow mb-4 !text-brand-secondary">{marketing.finalCta.eyebrow}</p>
        <h2 className="text-3xl text-white sm:text-4xl">{marketing.finalCta.headline}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/80">{marketing.finalCta.subheadline}</p>
        <Link href="#products" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-brand-secondary px-8 py-4 text-base font-extrabold text-brand-primary-dark transition hover:opacity-90">
          {marketing.finalCta.cta}
          <Icon name="arrow" className="h-5 w-5" />
        </Link>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {marketing.finalCta.chips.map((chip) => (
            <span key={chip} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
