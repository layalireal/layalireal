'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnnouncementBar } from '@/components/home/AnnouncementBar';
import { Icon } from '@/components/ui/Icon';
import { ProductHeroImage, ProductTrustBadges } from '@/components/product/ProductHero';
import { ProductOfferSelector } from '@/components/product/ProductOfferSelector';
import { ProductStickyCTA } from '@/components/product/ProductStickyCTA';
import {
  ProductTrustStrip,
  ProblemInsightSection,
  ProblemAgitationSection,
  FailureAlternativesSection,
  MechanismSection,
  ExclusionsSection,
  IngredientBreakdown,
  AuthoritySection,
  ProofStats,
  ResultsTimeline,
  ProductTestimonials,
  ComparisonSection,
  OfferRecap,
  GuaranteeSection,
  HowToUseSection,
  CODDeliverySection,
  DeliveryCitiesSection,
  ProductFAQ,
  RelatedProducts,
} from '@/components/product/ProductSections';
import { formatPrice, formatPriceFrom } from '@/lib/theme';
import { useCart } from '@/lib/cart-context';
import { trackEvent } from '@/lib/tracking';
import type { Product, ProductOffer } from '@/types/product';
import { getDefaultOffer } from '@/types/product';
import type { ProductPageMarketing } from '@/types/product-marketing';
import { businessConfig } from '@/config/business';
import { generateMarketing } from '@/lib/marketing/generateMarketing';
import { products } from '@/config/products';

interface Props {
  product: Product;
  marketing: ProductPageMarketing;
  related: Product[];
}

export function ProductLandingPage({ product, marketing, related }: Props) {
  const { addOffer } = useCart();
  const defaultOffer = useMemo(() => getDefaultOffer(product), [product]);
  const [selectedOffer, setSelectedOffer] = useState<ProductOffer>(defaultOffer);
  const siteMarketing = useMemo(() => generateMarketing(products), []);

  useEffect(() => {
    trackEvent('ViewContent', {
      product_id: product.id,
      sku: product.sku,
      value: selectedOffer.price,
      currency: businessConfig.market.currency,
    });
  }, [product.id, product.sku, selectedOffer.price]);

  const handleCta = () => {
    addOffer(product, selectedOffer);
  };

  return (
    <div className="pb-28">
      <AnnouncementBar messages={siteMarketing.announcements} />

      <section className="bg-gradient-to-br from-brand-background via-brand-surface-rose to-brand-primary-soft px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-4xl space-y-6">
          <ProductHeroImage product={product} />
          <ProductTrustBadges badges={product.badges} />

          <div className="space-y-4">
            <h1 className="text-2xl leading-tight sm:text-3xl lg:text-4xl">{marketing.painHeadline}</h1>
            <p className="text-base font-medium leading-8 text-brand-muted sm:text-lg">{marketing.painSubheadline}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 text-brand-secondary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-medium text-brand-text">
              {product.rating} ({product.reviewsCount} تقييم)
            </span>
          </div>

          <p className="text-sm font-bold text-brand-secondary">{marketing.scarcity}</p>
          <p className="text-2xl font-extrabold">{formatPriceFrom(selectedOffer.price)}</p>

          <ProductOfferSelector
            product={product}
            title={marketing.offerSelectorTitle}
            selectedId={selectedOffer.id}
            onSelect={setSelectedOffer}
          />

          <button type="button" onClick={handleCta} className="btn-primary w-full">
            {marketing.ctaTemplate} · {formatPrice(selectedOffer.price)}
            <Icon name="arrow" className="h-5 w-5" />
          </button>

          <p className="text-center text-sm text-brand-muted">{businessConfig.cod.paymentLabel}</p>

          <ProductTrustStrip items={marketing.trustStrip} />
        </div>
      </section>

      <ProblemInsightSection product={product} marketing={marketing} />
      <ProblemAgitationSection marketing={marketing} />
      <FailureAlternativesSection marketing={marketing} />
      <MechanismSection marketing={marketing} />
      <ExclusionsSection marketing={marketing} />
      <IngredientBreakdown product={product} marketing={marketing} />
      <AuthoritySection product={product} />
      <ProofStats stats={marketing.proofStats} />
      <ResultsTimeline product={product} marketing={marketing} />
      <ProductTestimonials marketing={marketing} />
      <ComparisonSection marketing={marketing} />
      <OfferRecap product={product} offer={selectedOffer} marketing={marketing} onCta={handleCta} />
      <GuaranteeSection marketing={marketing} />
      <HowToUseSection marketing={marketing} />
      <CODDeliverySection marketing={marketing} />
      <DeliveryCitiesSection marketing={marketing} />
      <ProductFAQ marketing={marketing} />
      <RelatedProducts current={product} related={related} />

      <ProductStickyCTA label={marketing.stickyCtaTemplate} price={selectedOffer.price} onClick={handleCta} />
    </div>
  );
}
