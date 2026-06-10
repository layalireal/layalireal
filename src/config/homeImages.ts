import { publicAsset } from '@/lib/publicAsset';

/** Home-page-only assets (not used on product landing pages). */

export const homeImages = {
  hero: publicAsset('ChatGPT Image Jun 9, 2026, 11_46_50 PM.png'),
  productCards: {
    'layali-aroma-fusion-001': publicAsset('ChatGPT Image Jun 9, 2026, 11_46_18 PM.png'),
    'layali-aroma-rose-kit-001': publicAsset('ChatGPT Image Jun 9, 2026, 11_45_44 PM.png'),
  },
} as const;

export function getHomeProductCardImage(productId: string): string | undefined {
  return homeImages.productCards[productId as keyof typeof homeImages.productCards];
}
