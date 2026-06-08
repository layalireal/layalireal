'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/cart-context';
import { businessInputs } from '@/config/businessInputs';
import { formatPrice } from '@/lib/theme';
import { PremiumImagePlaceholder } from '@/components/ui/PremiumImagePlaceholder';

export function UpsellModal() {
  const router = useRouter();
  const { upsellOpen, upsellProduct, closeUpsell, acceptUpsell } = useCart();
  const [secondsLeft, setSecondsLeft] = useState<number>(businessInputs.checkout.upsellSeconds);

  const finishUpsell = () => {
    closeUpsell();
    router.push('/thank-you');
  };

  useEffect(() => {
    if (!upsellOpen) return;
    setSecondsLeft(businessInputs.checkout.upsellSeconds);
    const timer = setInterval(() => {
      setSecondsLeft((value) => {
        if (value <= 1) {
          clearInterval(timer);
          finishUpsell();
          return 0;
        }
        return value - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [upsellOpen]);

  if (!upsellOpen || !upsellProduct) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-3xl bg-brand-card p-6 shadow-luxury">
        <p className="text-sm text-brand-accent">عرض خاص قبل الإغلاق • {secondsLeft}ث</p>
        <h3 className="mt-2 text-2xl font-bold text-brand-text">أضيفي {upsellProduct.shortName} لروتينك</h3>
        <p className="mt-2 text-sm leading-7 text-brand-muted">{upsellProduct.cardSubheadline}</p>
        <div className="mt-4">
          <PremiumImagePlaceholder
            label={upsellProduct.imageAlt}
            imageUrl={upsellProduct.imageUrl}
            alt={upsellProduct.imageAlt}
            aspect="square"
          />
        </div>
        <p className="mt-4 font-bold text-brand-text">{formatPrice(upsellProduct.priceFrom)}</p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={finishUpsell}
            className="rounded-full border border-brand-border px-4 py-3 text-sm font-semibold"
          >
            لا شكراً
          </button>
          <button
            type="button"
            onClick={() => {
              acceptUpsell();
              finishUpsell();
            }}
            className="rounded-full bg-brand-primary px-4 py-3 text-sm font-semibold text-white"
          >
            أضيفي COD
          </button>
        </div>
      </div>
    </div>
  );
}
