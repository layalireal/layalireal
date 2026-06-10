'use client';

import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { businessConfig } from '@/config/business';
import { useCart } from '@/lib/cart-context';

const EMIRATES = ['دبي', 'أبوظبي', 'الشارقة', 'عجمان', 'أم القيوين', 'رأس الخيمة', 'الفجيرة'];

export function CheckoutModal() {
  const { checkoutOpen, closeCheckout, submitOrder, total } = useCart();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ fullName: '', phone: '', emirate: EMIRATES[0], address: '', notes: '' });

  if (!checkoutOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await submitOrder(form);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40 p-4 sm:items-center">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-brand-border bg-white p-6 shadow-luxury">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-brand-text">تأكيد الطلب — الدفع عند الاستلام</h2>
          <button type="button" onClick={closeCheckout} className="rounded-full p-2 hover:bg-brand-primary-soft">
            <Icon name="close" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            placeholder="الاسم الكامل"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            className="w-full rounded-2xl border border-brand-border bg-brand-background px-4 py-3 text-sm outline-none focus:border-brand-primary"
          />
          <input
            required
            placeholder={`رقم الجوال (${businessConfig.market.phoneCountryCode})`}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-2xl border border-brand-border bg-brand-background px-4 py-3 text-sm outline-none focus:border-brand-primary"
          />
          <select
            value={form.emirate}
            onChange={(e) => setForm({ ...form, emirate: e.target.value })}
            className="w-full rounded-2xl border border-brand-border bg-brand-background px-4 py-3 text-sm outline-none focus:border-brand-primary"
          >
            {EMIRATES.map((emirate) => (
              <option key={emirate} value={emirate}>
                {emirate}
              </option>
            ))}
          </select>
          <textarea
            required
            placeholder="العنوان التفصيلي"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            className="min-h-24 w-full rounded-2xl border border-brand-border bg-brand-background px-4 py-3 text-sm outline-none focus:border-brand-primary"
          />
          <textarea
            placeholder="ملاحظات (اختياري)"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            className="min-h-20 w-full rounded-2xl border border-brand-border bg-brand-background px-4 py-3 text-sm outline-none focus:border-brand-primary"
          />
          <p className="text-sm font-bold text-brand-primary">المجموع: {total} {businessConfig.market.currencySymbol}</p>
          <button type="submit" disabled={loading} className="btn-primary w-full !min-h-0 py-4 disabled:opacity-60">
            {loading ? 'جاري الإرسال...' : 'تأكيد الطلب — الدفع عند الاستلام'}
          </button>
        </form>
      </div>
    </div>
  );
}
