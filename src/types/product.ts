export interface ProductOffer {
  id: string;
  quantity: number;
  label: string;
  subtitle: string;
  price: number;
  compareAtPrice?: number;
  badge?: string;
  defaultSelected?: boolean;
}

export interface ProductUpsell {
  enabled: boolean;
  price: number;
  label: string;
  subtitle: string;
  targetProductId?: string;
}

export interface IngredientItem {
  name: string;
  dosage?: string;
  benefit?: string;
  proof?: string;
}

export interface TimelineItem {
  label: string;
  text: string;
}

export interface AuthorityConfig {
  certifications: string[];
  expertTitle: string;
  expertQuote: string;
  stats: { value: string; label: string }[];
}

export interface DeliveryConfig {
  cities: string[];
  carriers: string[];
}

export interface UsageConfig {
  headline: string;
  steps: string[];
}

export interface ProductImages {
  heroBeforeAfter: string;
  heroProduct: string;
  problemImage: string;
  ingredientImage: string;
  authorityImage: string;
  lifestyleImage: string;
  testimonialImage: string;
  comparisonImage: string;
}

export interface ProductImageAlts {
  heroBeforeAfter: string;
  heroProduct: string;
  problemImage: string;
  ingredientImage: string;
  authorityImage: string;
  lifestyleImage: string;
  testimonialImage: string;
  comparisonImage: string;
}

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
  targetCustomer: string;
  problem: string;
  emotionalPain: string;
  desiredOutcome: string;
  mainIngredient: string;
  ingredientStack: (string | IngredientItem)[];
  mechanism: string;
  cardHeadline: string;
  cardSubheadline: string;
  heroHeadline: string;
  heroSubheadline: string;
  rating: number;
  reviewsCount: number;
  badges: string[];
  offers: ProductOffer[];
  upsell: ProductUpsell;
  exclusions?: string[];
  authority?: AuthorityConfig;
  timeline?: TimelineItem[];
  usage?: UsageConfig;
  delivery?: DeliveryConfig;
  images: ProductImages;
  imageAlts: ProductImageAlts;
  relatedProductIds?: string[];
}

export interface CartItem {
  cartKey: string;
  productId: string;
  productName: string;
  shortName: string;
  sku: string;
  offerId: string;
  offerLabel: string;
  quantity: number;
  unitPrice: number;
}

export interface CheckoutFormData {
  fullName: string;
  phone: string;
  emirate: string;
  address: string;
  notes?: string;
}

export function getLowestOfferPrice(product: Product): number {
  return Math.min(...product.offers.map((o) => o.price));
}

export function getDefaultOffer(product: Product): ProductOffer {
  return (
    product.offers.find((o) => o.defaultSelected) ??
    product.offers[1] ??
    product.offers[0]
  );
}

export function getOfferSavings(offer: ProductOffer): number | null {
  if (!offer.compareAtPrice || offer.compareAtPrice <= offer.price) return null;
  return offer.compareAtPrice - offer.price;
}
