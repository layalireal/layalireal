import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic, Inter, Playfair_Display } from 'next/font/google';
import { businessConfig } from '@/config/business';
import { getThemeCssVariables } from '@/lib/theme';
import { CartProvider } from '@/lib/cart-context';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { CheckoutModal } from '@/components/cart/CheckoutModal';
import { UpsellModal } from '@/components/cart/UpsellModal';
import { generateMarketing } from '@/lib/marketing/generateMarketing';
import { products } from '@/config/products';
import './globals.css';

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-latin',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const marketing = generateMarketing(products);
const themeVars = getThemeCssVariables();

export const metadata: Metadata = {
  title: `${businessConfig.brand.nameLocal} | ${businessConfig.brand.nameEnglish}`,
  description: businessConfig.brand.description,
  icons: {
    icon: businessConfig.brand.iconUrl,
    apple: businessConfig.brand.iconUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { market } = businessConfig;

  return (
    <html
      lang={market.language}
      dir={market.direction}
      className={`${ibmArabic.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body className="flex min-h-screen flex-col" style={themeVars as React.CSSProperties}>
        <svg aria-hidden className="absolute h-0 w-0 overflow-hidden" focusable="false">
          <defs>
            <filter id="layali-logo-knockout" colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  1 1 1 0 -1"
              />
            </filter>
          </defs>
        </svg>
        <CartProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter marketing={marketing} />
          <CartDrawer />
          <CheckoutModal />
          <UpsellModal />
        </CartProvider>
      </body>
    </html>
  );
}
