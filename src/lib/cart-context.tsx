'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { products } from '@/config/products';
import { businessConfig } from '@/config/business';
import type { CartItem, CheckoutFormData, Product, ProductOffer } from '@/types/product';
import { trackEvent } from '@/lib/tracking';

interface UpsellState {
  product: Product;
  price: number;
  label: string;
  subtitle: string;
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  checkoutOpen: boolean;
  upsellOpen: boolean;
  upsell: UpsellState | null;
  addOffer: (product: Product, offer: ProductOffer) => void;
  removeItem: (cartKey: string) => void;
  openCart: () => void;
  closeCart: () => void;
  openCheckout: () => void;
  closeCheckout: () => void;
  closeUpsell: () => void;
  acceptUpsell: () => void;
  total: number;
  itemCount: number;
  submitOrder: (form: CheckoutFormData) => Promise<{ orderId: string; hasUpsell: boolean }>;
  lastOrderId: string | null;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = 'layali-cart';

function makeCartKey(productId: string, offerId: string) {
  return `${productId}:${offerId}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [upsellOpen, setUpsellOpen] = useState(false);
  const [upsell, setUpsell] = useState<UpsellState | null>(null);
  const [lastOrderId, setLastOrderId] = useState<string | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setItems(JSON.parse(raw) as CartItem[]);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addOffer = useCallback((product: Product, offer: ProductOffer) => {
    const cartKey = makeCartKey(product.id, offer.id);
    setItems((current) => {
      const existing = current.find((item) => item.cartKey === cartKey);
      if (existing) {
        return current.map((item) =>
          item.cartKey === cartKey ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [
        ...current,
        {
          cartKey,
          productId: product.id,
          productName: product.name,
          shortName: product.shortName,
          sku: product.sku,
          offerId: offer.id,
          offerLabel: offer.label,
          quantity: 1,
          unitPrice: offer.price,
        },
      ];
    });
    trackEvent('AddToCart', {
      product_id: product.id,
      sku: product.sku,
      offer_id: offer.id,
      quantity: offer.quantity,
      value: offer.price,
      currency: businessConfig.market.currency,
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((cartKey: string) => {
    setItems((current) => current.filter((item) => item.cartKey !== cartKey));
  }, []);

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
    [items],
  );

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const submitOrder = useCallback(
    async (form: CheckoutFormData) => {
      const orderId = `LB-${Date.now()}`;
      const payload = {
        orderId,
        paymentMethod: 'COD',
        customer: form,
        items,
        total,
        currency: businessConfig.market.currency,
        createdAt: new Date().toISOString(),
      };

      trackEvent('Purchase', {
        order_id: orderId,
        value: total,
        currency: businessConfig.market.currency,
      });

      const webhook = process.env.NEXT_PUBLIC_ORDER_WEBHOOK_URL;
      if (webhook) {
        await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      setLastOrderId(orderId);
      setCheckoutOpen(false);
      const orderedItems = [...items];
      setItems([]);

      const lastProduct = products.find((p) => p.id === orderedItems[0]?.productId);
      if (lastProduct?.upsell.enabled) {
        const target = lastProduct.upsell.targetProductId
          ? products.find((p) => p.id === lastProduct.upsell.targetProductId)
          : lastProduct;
        if (target) {
          setUpsell({
            product: target,
            price: lastProduct.upsell.price,
            label: lastProduct.upsell.label,
            subtitle: lastProduct.upsell.subtitle,
          });
          setUpsellOpen(true);
          trackEvent('UpsellView', { product_id: target.id, value: lastProduct.upsell.price });
          return { orderId, hasUpsell: true };
        }
      }

      return { orderId, hasUpsell: false };
    },
    [items, total],
  );

  const value = useMemo(
    () => ({
      items,
      isOpen,
      checkoutOpen,
      upsellOpen,
      upsell,
      addOffer,
      removeItem,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      openCheckout: () => {
        trackEvent('InitiateCheckout', { value: total, currency: businessConfig.market.currency });
        setIsOpen(false);
        setCheckoutOpen(true);
      },
      closeCheckout: () => setCheckoutOpen(false),
      closeUpsell: () => {
        trackEvent('UpsellSkipped');
        setUpsellOpen(false);
      },
      acceptUpsell: () => {
        if (upsell) {
          const offer = upsell.product.offers[0];
          if (offer) {
            addOffer(upsell.product, { ...offer, price: upsell.price, label: upsell.label });
          }
          trackEvent('UpsellAccepted', { product_id: upsell.product.id, value: upsell.price });
        }
        setUpsellOpen(false);
      },
      total,
      itemCount,
      submitOrder,
      lastOrderId,
    }),
    [items, isOpen, checkoutOpen, upsellOpen, upsell, addOffer, removeItem, total, itemCount, submitOrder, lastOrderId],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
