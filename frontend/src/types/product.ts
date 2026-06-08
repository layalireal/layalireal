export interface Product {
  id: string;
  slug: string;
  sku: string;
  name: string;
  shortName: string;
  routineNameLocal: string;
  routineNameEnglish: string;
  category: string;
  format: string;
  problem: string;
  mainIngredient: string;
  cardHeadline: string;
  cardSubheadline: string;
  rating: number;
  reviewsCount: number;
  priceFrom: number;
  imageUrl: string;
  imageAlt: string;
  badgeText: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CheckoutFormData {
  fullName: string;
  phone: string;
  emirate: string;
  address: string;
  notes?: string;
}
