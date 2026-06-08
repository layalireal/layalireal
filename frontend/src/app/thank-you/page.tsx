'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { businessConfig } from '@/config/business';

export default function ThankYouPage() {
  const { lastOrderId } = useCart();

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-16 sm:px-6">
      <div className="w-full max-w-xl rounded-3xl border border-brand-border bg-brand-card p-8 text-center shadow-luxury">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-accent">THANK YOU</p>
        <h1 className="mt-4 text-3xl font-bold text-brand-text">تم استلام طلبك بنجاح</h1>
        <p className="mt-4 text-base leading-8 text-brand-muted">
          فريق {businessConfig.brand.nameLocal} بيتصل فيك قريباً لتأكيد العنوان. الدفع عند الاستلام فقط.
        </p>
        {lastOrderId && (
          <p className="mt-4 rounded-2xl bg-brand-background px-4 py-3 text-sm text-brand-text">
            رقم الطلب: <span className="font-bold">{lastOrderId}</span>
          </p>
        )}
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-brand-primary px-8 py-4 font-semibold text-white"
        >
          رجوع للمتجر
        </Link>
      </div>
    </section>
  );
}
