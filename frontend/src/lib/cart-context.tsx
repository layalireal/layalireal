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
import type { CartItem, CheckoutFormData, Product } from '@/types/product';

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  checkoutOpen: boolean;
  upsellOpen: boolean;
  upsellProduct: Product | null;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
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

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [upsellOpen, setUpsellOpen] = useState(false);
  const [upsellProduct, setUpsellProduct] = useState<Product | null>(null);
  const [lastOrderId, setLastOrderId] = useState<string | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setItems(JSON.parse(raw) as CartItem[]);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((product: Product, quantity = 1) => {
    setItems((current) => {
      const existing = current.find((item) => item.product.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...current, { product, quantity }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((current) => current.filter((item) => item.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems((current) =>
      current.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    );
  }, [removeItem]);

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.product.priceFrom * item.quantity, 0),
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
        createdAt: new Date().toISOString(),
      };

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
      setItems([]);

      const upsell = products.find(
        (product) => !items.some((item) => item.product.id === product.id),
      );
      if (upsell) {
        setUpsellProduct(upsell);
        setUpsellOpen(true);
        return { orderId, hasUpsell: true };
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
      upsellProduct,
      addItem,
      removeItem,
      updateQuantity,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      openCheckout: () => {
        setIsOpen(false);
        setCheckoutOpen(true);
      },
      closeCheckout: () => setCheckoutOpen(false),
      closeUpsell: () => setUpsellOpen(false),
      acceptUpsell: () => {
        if (upsellProduct) addItem(upsellProduct, 1);
        setUpsellOpen(false);
      },
      total,
      itemCount,
      submitOrder,
      lastOrderId,
    }),
    [
      items,
      isOpen,
      checkoutOpen,
      upsellOpen,
      upsellProduct,
      addItem,
      removeItem,
      updateQuantity,
      total,
      itemCount,
      submitOrder,
      lastOrderId,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
