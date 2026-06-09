'use client';

import Link from 'next/link';
import { PremiumImagePlaceholder } from '@/components/ui/PremiumImagePlaceholder';
import { Icon } from '@/components/ui/Icon';
import { formatPriceFrom } from '@/lib/theme';
import type { Product } from '@/types/product';
import { getDefaultOffer, getLowestOfferPrice } from '@/types/product';
import { useCart } from '@/lib/cart-context';

export function ProductShowcaseCard({ product }: { product: Product }) {
  const { addOffer } = useCart();
  const defaultOffer = getDefaultOffer(product);

  return (
    <article className="group nama-card h-full overflow-hidden">
      <div className="relative p-4 pb-0">
        <span className="absolute top-6 right-6 z-10 rounded-full border border-brand-primary/15 bg-brand-primary/5 px-3 py-1 text-xs font-bold text-brand-primary">
          {product.routineNameLocal}
        </span>
        <Link href={`/products/${product.slug}`} className="block overflow-hidden rounded-2xl">
          <PremiumImagePlaceholder
            label={product.imageAlts.heroProduct}
            imageUrl={product.images.heroProduct}
            alt={product.imageAlts.heroProduct}
            className="transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </Link>
      </div>
      <div className="space-y-4 p-5">
        <div>
          <p className="text-xs font-bold text-brand-secondary">{product.routineNameEnglish}</p>
          <Link href={`/products/${product.slug}`}>
            <h3 className="mt-1 text-lg font-extrabold leading-8 text-brand-text transition-colors group-hover:text-brand-primary">
              {product.name}
            </h3>
          </Link>
          <p className="mt-2 text-sm leading-7 text-brand-muted">{product.cardSubheadline}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-brand-secondary">
          <Icon name="star" className="h-4 w-4 fill-current" />
          <span className="font-medium">
            {product.rating} ({product.reviewsCount} تقييم)
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-brand-border pt-4">
          <p className="text-base font-extrabold text-brand-text">{formatPriceFrom(getLowestOfferPrice(product))}</p>
          <button type="button" onClick={() => addOffer(product, defaultOffer)} className="btn-primary !min-h-0 px-5 py-3 text-sm">
            اطلبي عند الاستلام
          </button>
        </div>
      </div>
    </article>
  );
}
