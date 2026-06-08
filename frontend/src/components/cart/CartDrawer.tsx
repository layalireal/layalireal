'use client';

import { useCart } from '@/lib/cart-context';
import { Icon } from '@/components/ui/Icon';
import { formatPrice } from '@/lib/theme';
import { businessInputs } from '@/config/businessInputs';

export function CartDrawer() {
  const { items, isOpen, closeCart, openCheckout, removeItem, updateQuantity, total } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button type="button" className="absolute inset-0 bg-black/40" onClick={closeCart} aria-label="Close cart" />
      <aside className="absolute top-0 left-0 h-full w-full max-w-md overflow-y-auto bg-brand-card p-5 shadow-luxury">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-brand-text">السلة</h2>
          <button type="button" onClick={closeCart} className="rounded-full p-2">
            <Icon name="close" />
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-brand-muted">السلة فاضية. اختاري منتج للبدء.</p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="rounded-2xl border border-brand-border p-4">
                <p className="font-semibold text-brand-text">{item.product.shortName}</p>
                <p className="mt-1 text-sm text-brand-muted">{formatPrice(item.product.priceFrom)}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="h-8 w-8 rounded-full border border-brand-border"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="h-8 w-8 rounded-full border border-brand-border"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.product.id)}
                    className="text-sm text-brand-muted"
                  >
                    حذف
                  </button>
                </div>
              </div>
            ))}
            <div className="rounded-2xl bg-brand-background p-4">
              <div className="flex items-center justify-between font-bold text-brand-text">
                <span>المجموع</span>
                <span>
                  {total} {businessInputs.market.currencySymbol}
                </span>
              </div>
              <p className="mt-2 text-xs text-brand-muted">الدفع عند الاستلام فقط — COD</p>
            </div>
            <button
              type="button"
              onClick={openCheckout}
              className="w-full rounded-full bg-brand-primary px-6 py-4 font-semibold text-white"
            >
              إتمام الطلب COD
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
