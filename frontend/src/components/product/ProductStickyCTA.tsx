'use client';

import { formatPrice } from '@/lib/theme';

interface Props {
  label: string;
  price: number;
  onClick: () => void;
}

export function ProductStickyCTA({ label, price, onClick }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-brand-border bg-brand-card/95 p-4 backdrop-blur-md">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-4 text-base font-bold text-white shadow-luxury"
      >
        <span>↑</span>
        <span>{label} · {formatPrice(price)}</span>
      </button>
    </div>
  );
}
