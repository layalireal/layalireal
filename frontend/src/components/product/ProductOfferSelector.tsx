'use client';

import type { Product, ProductOffer } from '@/types/product';
import { getOfferSavings } from '@/types/product';
import { formatPrice } from '@/lib/theme';

interface Props {
  product: Product;
  title: string;
  selectedId: string;
  onSelect: (offer: ProductOffer) => void;
}

export function ProductOfferSelector({ product, title, selectedId, onSelect }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-extrabold text-brand-text">{title}</h2>
      <div className="space-y-3">
        {product.offers.map((offer) => {
          const selected = offer.id === selectedId;
          const savings = getOfferSavings(offer);
          return (
            <button
              key={offer.id}
              type="button"
              onClick={() => onSelect(offer)}
              className={`relative w-full rounded-2xl border-2 p-4 text-start transition ${
                selected ? 'border-brand-primary bg-brand-primary-soft shadow-card' : 'border-brand-border bg-brand-card hover:border-brand-primary/30'
              }`}
            >
              {offer.badge && (
                <span className="absolute -top-3 right-4 rounded-full bg-brand-secondary px-3 py-0.5 text-xs font-extrabold text-brand-primary-dark">
                  {offer.badge}
                </span>
              )}
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="font-extrabold text-brand-text">{offer.label}</p>
                  <p className="mt-1 text-sm text-brand-muted">{offer.subtitle}</p>
                  {savings && (
                    <p className="mt-2 text-sm font-bold text-brand-success">وفّري {formatPrice(savings)}</p>
                  )}
                </div>
                <div className="text-end">
                  <p className="text-xl font-extrabold text-brand-text">{formatPrice(offer.price)}</p>
                  <div
                    className={`mt-2 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                      selected ? 'border-brand-primary bg-brand-primary' : 'border-brand-border'
                    }`}
                  >
                    {selected && <div className="h-2 w-2 rounded-full bg-white" />}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
