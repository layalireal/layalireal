'use client';

import Link from 'next/link';
import { PremiumImagePlaceholder } from '@/components/ui/PremiumImagePlaceholder';
import { Icon } from '@/components/ui/Icon';
import { formatPrice } from '@/lib/theme';
import type { Product } from '@/types/product';
import { useCart } from '@/lib/cart-context';

export function ProductShowcaseCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="overflow-hidden rounded-3xl border border-brand-border bg-brand-card shadow-luxury">
      <div className="relative p-4 pb-0">
        <span className="absolute top-6 right-6 z-10 rounded-full bg-brand-accent/15 px-3 py-1 text-xs font-medium text-brand-primary">
          {product.badgeText} • {product.routineNameLocal}
        </span>
        <Link href={`/products/${product.slug}`}>
          <PremiumImagePlaceholder
            label={product.imageAlt}
            imageUrl={product.imageUrl}
            alt={product.imageAlt}
          />
        </Link>
      </div>
      <div className="space-y-4 p-5">
        <div>
          <Link href={`/products/${product.slug}`}>
            <h3 className="text-lg font-bold leading-8 text-brand-text">{product.name}</h3>
          </Link>
          <p className="mt-2 text-sm leading-7 text-brand-muted">{product.cardSubheadline}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-brand-accent">
          <Icon name="star" className="h-4 w-4 fill-current" />
          <span>
            {product.rating} ({product.reviewsCount} تقييم)
          </span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <p className="text-base font-bold text-brand-text">{formatPrice(product.priceFrom)}</p>
          <button
            type="button"
            onClick={() => addItem(product)}
            className="rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-primary-dark"
          >
            اطلبي COD
          </button>
        </div>
      </div>
    </article>
  );
}
