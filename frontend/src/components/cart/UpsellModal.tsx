'use client';

import { useEffect, useState } from 'react';
import { PremiumImagePlaceholder } from '@/components/ui/PremiumImagePlaceholder';
import { formatPrice } from '@/lib/theme';
import { businessConfig } from '@/config/business';
import { useCart } from '@/lib/cart-context';

export function UpsellModal() {
  const { upsellOpen, upsell, closeUpsell, acceptUpsell } = useCart();
  const [secondsLeft, setSecondsLeft] = useState<number>(businessConfig.checkout.upsellSeconds);

  const finish = () => {
    closeUpsell();
  };

  useEffect(() => {
    if (!upsellOpen) return;
    setSecondsLeft(businessConfig.checkout.upsellSeconds);
    const timer = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(timer);
          closeUpsell();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [upsellOpen, closeUpsell]);

  if (!upsellOpen || !upsell) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-3xl border border-brand-border bg-white p-6 text-center shadow-luxury">
        <p className="text-xs font-bold text-brand-secondary">عرض محدود · {secondsLeft} ثانية</p>
        <h3 className="mt-2 text-2xl font-extrabold">{upsell.label}</h3>
        <p className="mt-2 text-sm text-brand-muted">{upsell.subtitle}</p>
        <div className="mx-auto mt-4 max-w-[200px]">
          <PremiumImagePlaceholder label={upsell.product.shortName} aspect="square" />
        </div>
        <p className="mt-4 text-xl font-extrabold">{formatPrice(upsell.price)}</p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button type="button" onClick={finish} className="rounded-2xl border border-brand-border py-3 text-sm font-bold">
            لا شكراً
          </button>
          <button
            type="button"
            onClick={() => {
              acceptUpsell();
              finish();
            }}
            className="rounded-2xl bg-brand-primary py-3 text-sm font-bold text-white"
          >
            أضيفي للطلب
          </button>
        </div>
      </div>
    </div>
  );
}
