'use client';

import type { Product } from '@/types/product';
import { useCart } from '@/lib/cart-context';

export function ProductPageClient({ product, cta }: { product: Product; cta: string }) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      onClick={() => addItem(product)}
      className="w-full rounded-full bg-brand-primary px-6 py-4 text-base font-semibold text-white transition hover:bg-brand-primary-dark sm:w-auto"
    >
      {cta}
    </button>
  );
}
