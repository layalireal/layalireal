'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { PremiumImagePlaceholder } from '@/components/ui/PremiumImagePlaceholder';
import { TestimonialCard } from '@/components/home/TestimonialCard';
import { formatPrice, formatPriceFrom } from '@/lib/theme';
import { businessConfig } from '@/config/business';
import type { Product, ProductOffer } from '@/types/product';
import { getLowestOfferPrice } from '@/types/product';
import type { ProductPageMarketing } from '@/types/product-marketing';

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-6 text-center">
      {eyebrow && <p className="text-sm uppercase tracking-[0.2em] text-brand-accent">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl font-bold text-brand-text sm:text-3xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-brand-muted">{subtitle}</p>}
    </div>
  );
}

export function ProductTrustStrip({ items }: { items: ProductPageMarketing['trustStrip'] }) {
  return (
    <div className="rounded-3xl bg-brand-primary p-5 text-white">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.id} className="text-center">
            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent">
              <Icon name={item.icon as 'shield'} className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold">{item.label}</p>
            <p className="mt-1 text-[10px] text-white/70">{item.sublabel}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProblemInsightSection({ product, marketing }: { product: Product; marketing: ProductPageMarketing }) {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <PremiumImagePlaceholder label={product.imageAlts.problemImage} imageUrl={product.images.problemImage} aspect="hero" />
        <div className="mt-4 rounded-2xl bg-brand-primary p-4 text-white">
          <p className="text-sm leading-7">{marketing.problemInsight.stat}</p>
          <p className="mt-2 text-xs text-white/60">{marketing.problemInsight.source}</p>
        </div>
      </div>
    </section>
  );
}

export function ProblemAgitationSection({ marketing }: { marketing: ProductPageMarketing }) {
  return (
    <section className="bg-brand-background px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="تعانين من هالشي؟" subtitle="مشاكل تعرفينها — وحلول مختلفة" />
        <div className="space-y-4">
          {marketing.painCards.map((card) => (
            <div key={card.id} className="overflow-hidden rounded-3xl border border-brand-border bg-brand-card shadow-luxury">
              <div className="flex gap-3 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">✕</span>
                <p className="text-sm leading-7 text-brand-text">{card.pain}</p>
              </div>
              <div className="flex gap-3 bg-brand-primary/5 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">✓</span>
                <p className="text-sm leading-7 text-brand-text">{card.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FailureAlternativesSection({ marketing }: { marketing: ProductPageMarketing }) {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="ليش البدائل العادية ما تنفع؟" />
        <div className="space-y-4">
          {marketing.failureAlternatives.map((alt) => (
            <div key={alt.id} className="rounded-3xl border border-brand-border bg-brand-card p-5 shadow-luxury">
              <div className="flex items-center gap-2">
                <span className="text-red-500">⚠</span>
                <h3 className="font-bold text-brand-text">{alt.name}</h3>
              </div>
              <p className="mt-1 text-sm font-semibold text-red-600">{alt.priceRange}</p>
              <ul className="mt-3 space-y-2">
                {alt.reasons.map((r) => (
                  <li key={r} className="flex gap-2 text-sm text-brand-muted">
                    <span className="text-red-500">✕</span>{r}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MechanismSection({ marketing }: { marketing: ProductPageMarketing }) {
  return (
    <section className="bg-brand-background px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={marketing.mechanism.headline} subtitle={marketing.mechanism.subheadline} />
        <div className="grid gap-4 md:grid-cols-3">
          {marketing.mechanism.points.map((point, i) => (
            <div key={point} className="rounded-2xl border border-brand-border bg-brand-card p-4 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-brand-accent font-bold">
                {i + 1}
              </div>
              <p className="text-sm leading-7 text-brand-text">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExclusionsSection({ marketing }: { marketing: ProductPageMarketing }) {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={marketing.exclusions.headline} />
        <div className="grid gap-3 sm:grid-cols-2">
          {marketing.exclusions.items.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-brand-border bg-brand-card p-4">
              <span className="text-green-600">✓</span>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IngredientBreakdown({ product, marketing }: { product: Product; marketing: ProductPageMarketing }) {
  return (
    <section className="bg-brand-background px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={marketing.ingredients.headline} />
        <PremiumImagePlaceholder label={product.imageAlts.ingredientImage} imageUrl={product.images.ingredientImage} aspect="hero" className="mb-6" />
        <div className="space-y-4">
          {marketing.ingredients.items.map((ing) => (
            <div key={ing.name} className="rounded-2xl border border-brand-border bg-brand-card p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-brand-text">{ing.name}</h3>
                {ing.dosage && <span className="text-xs text-brand-accent">{ing.dosage}</span>}
              </div>
              <p className="mt-2 text-sm text-brand-muted">{ing.benefit}</p>
              {ing.proof && <p className="mt-1 text-xs text-brand-accent">{ing.proof}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AuthoritySection({ product }: { product: Product }) {
  const auth = product.authority;
  if (!auth) return null;
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {auth.certifications.map((cert) => (
            <div key={cert} className="rounded-2xl border border-brand-border bg-brand-card p-4 text-center">
              <p className="font-bold text-brand-primary">{cert}</p>
            </div>
          ))}
        </div>
        <div className="rounded-3xl bg-brand-primary p-6 text-white">
          <p className="text-sm text-brand-accent">رأي اختصاصي</p>
          <p className="mt-4 text-sm leading-8">{auth.expertQuote}</p>
          <p className="mt-4 font-bold">{auth.expertTitle}</p>
        </div>
      </div>
    </section>
  );
}

export function ProofStats({ stats }: { stats: ProductPageMarketing['proofStats'] }) {
  return (
    <section className="bg-brand-background px-4 py-10">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-brand-border bg-brand-card p-4 text-center">
            <p className="text-2xl font-bold text-brand-primary">{stat.value}</p>
            <p className="mt-1 text-xs text-brand-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ResultsTimeline({ product, marketing }: { product: Product; marketing: ProductPageMarketing }) {
  const steps = product.timeline ?? [];
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow={marketing.timelineSection.eyebrow} title={marketing.timelineSection.headline} />
        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={step.label} className="rounded-3xl border border-brand-border bg-brand-card p-5 text-center shadow-luxury">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-accent bg-brand-primary text-lg font-bold text-brand-accent">
                {i + 1}
              </div>
              <h3 className="font-bold">{step.label}</h3>
              <p className="mt-2 text-sm leading-7 text-brand-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductTestimonials({ marketing }: { marketing: ProductPageMarketing }) {
  return (
    <section className="bg-brand-background px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={marketing.testimonialsSection.eyebrow} title={marketing.testimonialsSection.headline} />
        <div className="grid gap-4 md:grid-cols-3">
          {marketing.testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ComparisonSection({ marketing }: { marketing: ProductPageMarketing }) {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={marketing.comparison.headline} subtitle={marketing.comparison.subheadline} />
        <div className="overflow-hidden rounded-3xl border border-brand-border bg-brand-card">
          {marketing.comparison.rows.map((row, i) => (
            <div key={row.id} className={`grid grid-cols-3 gap-2 p-4 text-sm ${i > 0 ? 'border-t border-brand-border' : ''}`}>
              <p className="font-semibold text-brand-text">{row.label}</p>
              <p className="text-green-700">{row.product}</p>
              <p className="text-brand-muted">{row.alternative}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OfferRecap({
  product,
  offer,
  marketing,
  onCta,
}: {
  product: Product;
  offer: ProductOffer;
  marketing: ProductPageMarketing;
  onCta: () => void;
}) {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-3xl bg-brand-primary p-6 text-white">
        <h2 className="text-2xl font-bold">{marketing.offerRecap.headline}</h2>
        <p className="mt-2 text-3xl font-bold text-brand-accent">{formatPrice(offer.price)}</p>
        <ul className="mt-4 space-y-2">
          {marketing.offerRecap.benefits.map((b) => (
            <li key={b} className="flex gap-2 text-sm"><span>✓</span>{b}</li>
          ))}
        </ul>
        <button type="button" onClick={onCta} className="mt-6 w-full rounded-full bg-brand-accent py-4 font-bold text-brand-primary-dark">
          {marketing.ctaTemplate} · {formatPrice(offer.price)}
        </button>
      </div>
    </section>
  );
}

export function GuaranteeSection({ marketing }: { marketing: ProductPageMarketing }) {
  return (
    <section className="bg-brand-background px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-3xl border border-brand-border bg-brand-card p-6 text-center shadow-luxury">
        <h2 className="text-2xl font-bold text-brand-text">{marketing.guarantee.headline}</h2>
        <div className="mt-6 space-y-4">
          {marketing.guarantee.steps.map((step, i) => (
            <div key={step} className="flex items-center gap-3 text-start">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white">{i + 1}</span>
              <p className="text-sm text-brand-muted">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowToUseSection({ marketing }: { marketing: ProductPageMarketing }) {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={marketing.howToUse.headline} subtitle={marketing.howToUse.subheadline} />
        <div className="space-y-4">
          {marketing.howToUse.steps.map((step, i) => (
            <div key={step.title} className="rounded-3xl border border-brand-border bg-brand-card p-5 shadow-luxury">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary text-brand-accent">
                <Icon name="flask" />
              </div>
              <h3 className="font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-brand-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CODDeliverySection({ marketing }: { marketing: ProductPageMarketing }) {
  return (
    <section className="bg-brand-background px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={marketing.codDelivery.headline} subtitle={marketing.codDelivery.subheadline} />
        <div className="space-y-4">
          {marketing.codDelivery.steps.map((step, i) => (
            <div key={step.title} className="rounded-3xl border border-brand-border bg-brand-card p-5">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-accent bg-brand-primary text-brand-accent font-bold">
                {['١', '٢', '٣'][i]}
              </div>
              <h3 className="font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-brand-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DeliveryCitiesSection({ marketing }: { marketing: ProductPageMarketing }) {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-3xl border border-brand-border bg-brand-card p-6">
        <h2 className="text-center text-xl font-bold">{marketing.deliveryCities.headline}</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {marketing.deliveryCities.cities.map((city) => (
            <span key={city} className="rounded-full border border-brand-border bg-brand-background px-3 py-1 text-sm">{city} ✓</span>
          ))}
          <span className="rounded-full bg-brand-primary px-3 py-1 text-sm text-white">+ كل المناطق</span>
        </div>
        <p className="mt-4 text-center text-xs text-brand-muted">
          {marketing.deliveryCities.carriers.join(' • ')}
        </p>
      </div>
    </section>
  );
}

export function ProductFAQ({ marketing }: { marketing: ProductPageMarketing }) {
  return (
    <section className="bg-brand-background px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={marketing.faq.headline} subtitle={marketing.faq.subheadline} />
        <div className="overflow-hidden rounded-3xl border border-brand-border bg-brand-card">
          {marketing.faq.items.map((item, i) => (
            <details key={item.id} className={i > 0 ? 'border-t border-brand-border' : ''} open={i === 0}>
              <summary className="cursor-pointer p-5 font-semibold">{item.question}</summary>
              <p className="px-5 pb-5 text-sm leading-7 text-brand-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelatedProducts({ current, related }: { current: Product; related: Product[] }) {
  if (related.length === 0) return null;
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="منتجات قد تعجبك" />
        <div className="grid gap-4 md:grid-cols-2">
          {related.map((p) => (
            <Link key={p.id} href={`/products/${p.slug}`} className="rounded-3xl border border-brand-border bg-brand-card p-5 shadow-luxury">
              <PremiumImagePlaceholder label={p.shortName} aspect="square" className="mb-4" />
              <h3 className="font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-brand-muted">{p.cardSubheadline}</p>
              <p className="mt-3 font-bold text-brand-primary">{formatPriceFrom(getLowestOfferPrice(p))}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
