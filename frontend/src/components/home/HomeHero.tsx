import Link from 'next/link';
import { PremiumImagePlaceholder } from '@/components/ui/PremiumImagePlaceholder';
import { Icon } from '@/components/ui/Icon';
import { TrustBadges } from '@/components/home/TrustBadges';
import { homeImages } from '@/config/homeImages';
import type { SiteMarketing } from '@/types/marketing';
import { businessConfig } from '@/config/business';

export function HomeHero({ marketing }: { marketing: SiteMarketing }) {
  const { brand } = businessConfig;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-background via-brand-surface-rose to-brand-primary-soft">
      <div className="deco-ring -left-32 -top-32 h-96 w-96" />
      <div className="deco-ring -bottom-32 -right-32 h-96 w-96" />

      <div className="section-shell relative z-10 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 space-y-7 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-brand-primary/5 px-3 py-1.5">
              <Icon name="flask" className="h-4 w-4 text-brand-primary" />
              <span className="text-xs font-bold tracking-wide text-brand-primary sm:text-sm">{marketing.hero.eyebrow}</span>
            </div>

            <h1 className="text-4xl leading-[1.1] lg:text-6xl">
              {marketing.hero.headline}
              {marketing.hero.headlineAccent && (
                <span className="mt-2 block text-brand-primary">{marketing.hero.headlineAccent}</span>
              )}
            </h1>

            <p className="max-w-xl text-lg font-medium leading-relaxed text-brand-muted lg:text-xl">
              {marketing.hero.subheadline}
            </p>

            <TrustBadges badges={marketing.trustBadges} />

            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Link href="#products" className="btn-primary">
                {marketing.hero.cta}
                <Icon name="arrow" className="h-5 w-5" />
              </Link>
              <div className="btn-secondary">
                <Icon name="award" className="h-5 w-5 text-brand-secondary" />
                <span>{marketing.scarcity}</span>
              </div>
            </div>
          </div>

          <div className="relative order-1 flex justify-center lg:order-2">
            <div className="absolute inset-0 scale-125 rounded-full bg-brand-primary/15 blur-3xl" />
            <div className="relative aspect-square w-full max-w-lg overflow-hidden rounded-5xl border-8 border-white bg-brand-surface-rose shadow-2xl">
              <PremiumImagePlaceholder
                aspect="square"
                label={`${brand.nameLocal} — ${brand.tagline}`}
                imageUrl={homeImages.hero}
                alt="ليالي للجمال — طقوس أروما فاخرة للبيت والعناية"
                className="h-full rounded-none border-0 shadow-none"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-brand-border bg-white p-4 shadow-xl">
              <div className="rounded-full bg-brand-primary p-3 text-brand-secondary ring-2 ring-brand-secondary/30">
                <Icon name="shield" className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wide text-brand-muted">
                  {marketing.hero.proofLabel}
                </p>
                <p className="text-sm font-extrabold text-brand-text">{marketing.hero.proofTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
