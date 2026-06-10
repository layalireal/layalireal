'use client';

import { formatPrice } from '@/lib/theme';
import { Icon } from '@/components/ui/Icon';

export function ProductStickyCTA({
  label,
  price,
  onClick,
}: {
  label: string;
  price: number;
  onClick: () => void;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-border bg-white/95 p-4 backdrop-blur-md">
      <button type="button" onClick={onClick} className="btn-primary w-full">
        <span>{label}</span>
        <span>· {formatPrice(price)}</span>
        <Icon name="arrow" className="h-5 w-5" />
      </button>
    </div>
  );
}
