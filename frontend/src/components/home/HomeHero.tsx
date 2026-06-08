import Link from 'next/link';
import { PremiumImagePlaceholder } from '@/components/ui/PremiumImagePlaceholder';
import { Icon } from '@/components/ui/Icon';
import { TrustBadges } from '@/components/home/TrustBadges';
import type { SiteMarketing } from '@/types/marketing';
import { businessInputs } from '@/config/businessInputs';

export function HomeHero({ marketing }: { marketing: SiteMarketing }) {
  const { brand } = businessInputs;

  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
        <div className="order-2 space-y-6 lg:order-1">
          <p className="text-sm font-medium text-brand-accent">{marketing.hero.eyebrow}</p>
          <h1 className="text-3xl font-bold leading-tight text-brand-text sm:text-4xl lg:text-5xl">
            {marketing.hero.headline}
          </h1>
          <p className="text-base leading-8 text-brand-muted sm:text-lg">
            {marketing.hero.subheadline}
          </p>
          <TrustBadges badges={marketing.trustBadges} />
          <div className="space-y-3">
            <Link
              href="#products"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-4 text-base font-semibold text-white transition hover:bg-brand-primary-dark sm:w-auto"
            >
              {marketing.hero.cta}
              <Icon name="arrow" className="h-5 w-5 rotate-180" />
            </Link>
            <p className="rounded-full bg-brand-accent/15 px-4 py-2 text-center text-sm text-brand-text">
              {marketing.scarcity}
            </p>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <PremiumImagePlaceholder
            aspect="hero"
            label={`${brand.nameLocal} — ${brand.tagline}`}
            imageUrl={brand.logoUrl}
            alt={brand.nameLocal}
          />
          <div className="absolute bottom-4 left-4 max-w-[220px] rounded-2xl border border-brand-border bg-brand-card p-4 shadow-luxury">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-brand-accent">
              <Icon name="shield" className="h-5 w-5" />
            </div>
            <p className="text-xs uppercase tracking-wider text-brand-accent">
              {marketing.hero.proofLabel}
            </p>
            <p className="mt-1 text-sm font-semibold text-brand-text">{marketing.hero.proofTitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
