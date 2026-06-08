'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/cart-context';
import { businessConfig } from '@/config/business';
import { formatPrice } from '@/lib/theme';
import { PremiumImagePlaceholder } from '@/components/ui/PremiumImagePlaceholder';

export function UpsellModal() {
  const router = useRouter();
  const { upsellOpen, upsell, closeUpsell, acceptUpsell } = useCart();
  const [secondsLeft, setSecondsLeft] = useState<number>(businessConfig.checkout.upsellSeconds);

  const finish = () => {
    closeUpsell();
    router.push('/thank-you');
  };

  useEffect(() => {
    if (!upsellOpen) return;
    setSecondsLeft(businessConfig.checkout.upsellSeconds);
    const timer = setInterval(() => {
      setSecondsLeft((v) => {
        if (v <= 1) {
          clearInterval(timer);
          finish();
          return 0;
        }
        return v - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [upsellOpen]);

  if (!upsellOpen || !upsell) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-3xl bg-brand-card p-6 shadow-luxury">
        <p className="text-sm text-brand-accent">عرض خاص • {secondsLeft}ث</p>
        <h3 className="mt-2 text-2xl font-bold">{upsell.label}</h3>
        <p className="mt-2 text-sm text-brand-muted">{upsell.subtitle}</p>
        <div className="mt-4">
          <PremiumImagePlaceholder label={upsell.product.shortName} aspect="square" />
        </div>
        <p className="mt-4 font-bold">{formatPrice(upsell.price)}</p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button type="button" onClick={finish} className="rounded-full border border-brand-border py-3 text-sm font-semibold">لا شكراً</button>
          <button type="button" onClick={() => { acceptUpsell(); finish(); }} className="rounded-full bg-brand-primary py-3 text-sm font-semibold text-white">أضيفي COD</button>
        </div>
      </div>
    </div>
  );
}
