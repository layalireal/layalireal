'use client';

import { useCart } from '@/lib/cart-context';
import { Icon } from '@/components/ui/Icon';
import { formatPrice } from '@/lib/theme';
import { businessConfig } from '@/config/business';

export function CartDrawer() {
  const { items, isOpen, closeCart, openCheckout, removeItem, total } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button type="button" className="absolute inset-0 bg-black/40" onClick={closeCart} aria-label="Close" />
      <aside className="absolute top-0 left-0 h-full w-full max-w-md overflow-y-auto bg-brand-card p-5 shadow-luxury">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">السلة</h2>
          <button type="button" onClick={closeCart} className="rounded-full p-2"><Icon name="close" /></button>
        </div>
        {items.length === 0 ? (
          <p className="text-brand-muted">السلة فاضية</p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.cartKey} className="rounded-2xl border border-brand-border p-4">
                <p className="font-semibold">{item.offerLabel}</p>
                <p className="text-sm text-brand-muted">{item.productName}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold">{formatPrice(item.unitPrice)}</span>
                  <button type="button" onClick={() => removeItem(item.cartKey)} className="text-sm text-brand-muted">حذف</button>
                </div>
              </div>
            ))}
            <div className="rounded-2xl bg-brand-background p-4">
              <div className="flex justify-between font-bold">
                <span>المجموع</span>
                <span>{formatPrice(total)}</span>
              </div>
              <p className="mt-2 text-xs text-brand-muted">{businessConfig.cod.paymentLabel}</p>
            </div>
            <button type="button" onClick={openCheckout} className="w-full rounded-full bg-brand-primary py-4 font-semibold text-white">
              إتمام الطلب COD
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
