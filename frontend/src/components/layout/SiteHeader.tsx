'use client';

import { BrandLogo } from '@/components/ui/BrandLogo';
import { Icon } from '@/components/ui/Icon';
import { useCart } from '@/lib/cart-context';

export function SiteHeader() {
  const { openCart, itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/70 bg-brand-card/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <button type="button" className="rounded-full p-2 text-brand-text" aria-label="Menu">
            <Icon name="menu" />
          </button>
          <button
            type="button"
            onClick={openCart}
            className="relative rounded-full p-2 text-brand-text"
            aria-label="Cart"
          >
            <Icon name="bag" />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -left-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-accent px-1 text-[10px] font-bold text-brand-primary-dark">
                {itemCount}
              </span>
            )}
          </button>
        </div>
        <BrandLogo />
      </div>
    </header>
  );
}
