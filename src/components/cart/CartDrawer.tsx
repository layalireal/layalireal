'use client';

import { formatPrice } from '@/lib/theme';
import { Icon } from '@/components/ui/Icon';
import { useCart } from '@/lib/cart-context';

export function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, total, openCheckout } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <button type="button" className="flex-1 bg-black/40" onClick={closeCart} aria-label="إغلاق السلة" />
      <aside className="flex w-full max-w-md flex-col border-r border-brand-border bg-white shadow-luxury">
        <div className="flex items-center justify-between border-b border-brand-border p-5">
          <h2 className="text-xl font-extrabold">السلة</h2>
          <button type="button" onClick={closeCart} className="rounded-full p-2 hover:bg-brand-primary-soft">
            <Icon name="close" />
          </button>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-5">
          {items.length === 0 ? (
            <p className="text-sm text-brand-muted">السلة فارغة</p>
          ) : (
            items.map((item) => (
              <div key={item.cartKey} className="rounded-2xl border border-brand-border bg-brand-background p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-extrabold">{item.offerLabel}</p>
                    <p className="text-sm text-brand-muted">{item.shortName}</p>
                  </div>
                  <button type="button" onClick={() => removeItem(item.cartKey)} className="text-sm text-brand-muted hover:text-brand-primary">
                    حذف
                  </button>
                </div>
                <p className="mt-2 font-extrabold">{formatPrice(item.unitPrice)}</p>
              </div>
            ))
          )}
        </div>
        {items.length > 0 && (
          <div className="space-y-4 border-t border-brand-border p-5">
            <div className="flex justify-between rounded-2xl bg-brand-primary-soft px-4 py-3 font-extrabold">
              <span>المجموع</span>
              <span>{formatPrice(total)}</span>
            </div>
            <button type="button" onClick={openCheckout} className="btn-primary w-full !min-h-0 py-3">
              إتمام الطلب — الدفع عند الاستلام
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
