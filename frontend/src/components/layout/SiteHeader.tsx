'use client';

import Link from 'next/link';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { Icon } from '@/components/ui/Icon';
import { businessConfig } from '@/config/business';
import { useCart } from '@/lib/cart-context';

export function SiteHeader() {
  const { openCart, itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white shadow-sm [transform:translateZ(0)]">
      <div className="section-shell">
        <div className="flex h-16 items-center justify-between">
          <BrandLogo />

          <nav className="hidden items-center gap-6 md:flex">
            {businessConfig.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-text transition-colors hover:text-brand-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openCart}
              className="relative rounded-full p-2 transition-colors hover:bg-brand-primary-soft"
              aria-label="Cart"
            >
              <Icon name="bag" className="h-6 w-6 text-brand-text" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -left-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-secondary px-1 text-[10px] font-bold text-brand-primary-dark">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              className="rounded-full p-2 transition-colors hover:bg-brand-primary-soft md:hidden"
              aria-label="Menu"
            >
              <Icon name="menu" className="h-6 w-6 text-brand-text" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
