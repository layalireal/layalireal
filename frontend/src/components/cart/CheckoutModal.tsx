'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/cart-context';
import { Icon } from '@/components/ui/Icon';
import { businessInputs } from '@/config/businessInputs';

const emirates = ['دبي', 'أبوظبي', 'الشارقة', 'عجمان', 'أم القيوين', 'رأس الخيمة', 'الفجيرة'];

export function CheckoutModal() {
  const router = useRouter();
  const { checkoutOpen, closeCheckout, submitOrder, total, items } = useCart();
  const [loading, setLoading] = useState(false);
  const { market } = businessInputs;

  if (!checkoutOpen) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setLoading(true);
    try {
      const result = await submitOrder({
        fullName: String(formData.get('fullName') ?? ''),
        phone: String(formData.get('phone') ?? ''),
        emirate: String(formData.get('emirate') ?? ''),
        address: String(formData.get('address') ?? ''),
        notes: String(formData.get('notes') ?? ''),
      });
      if (!result.hasUpsell) router.push('/thank-you');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/50 p-4 sm:items-center">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-brand-card p-6 shadow-luxury">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-brand-text">تأكيد الطلب COD</h2>
            <p className="text-sm text-brand-muted">بدون دفع أونلاين — تدفعين عند الاستلام</p>
          </div>
          <button type="button" onClick={closeCheckout} className="rounded-full p-2">
            <Icon name="close" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            name="fullName"
            placeholder="الاسم الكامل"
            className="w-full rounded-2xl border border-brand-border bg-brand-background px-4 py-3"
          />
          <input
            required
            name="phone"
            placeholder={`${market.phoneCountryCode} ${market.phoneExample}`}
            className="w-full rounded-2xl border border-brand-border bg-brand-background px-4 py-3"
          />
          <select
            required
            name="emirate"
            defaultValue=""
            className="w-full rounded-2xl border border-brand-border bg-brand-background px-4 py-3"
          >
            <option value="" disabled>
              اختاري الإمارة
            </option>
            {emirates.map((emirate) => (
              <option key={emirate} value={emirate}>
                {emirate}
              </option>
            ))}
          </select>
          <textarea
            required
            name="address"
            rows={3}
            placeholder="العنوان التفصيلي"
            className="w-full rounded-2xl border border-brand-border bg-brand-background px-4 py-3"
          />
          <textarea
            name="notes"
            rows={2}
            placeholder="ملاحظات (اختياري)"
            className="w-full rounded-2xl border border-brand-border bg-brand-background px-4 py-3"
          />

          <div className="rounded-2xl bg-brand-background p-4 text-sm text-brand-muted">
            <p>
              {items.length} منتج • {total} {market.currencySymbol}
            </p>
            <p className="mt-2">فريقنا بيتصل فيك لتأكيد العنوان قبل الشحن.</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-brand-primary px-6 py-4 font-semibold text-white disabled:opacity-60"
          >
            {loading ? 'جاري الإرسال...' : 'أكدي الطلب — COD'}
          </button>
        </form>
      </div>
    </div>
  );
}
