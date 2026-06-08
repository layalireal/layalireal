import type { Metadata } from 'next';
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

const marketing = generateMarketing(products);
const themeVars = getThemeCssVariables();

export const metadata: Metadata = {
  title: `${businessConfig.brand.nameLocal} | ${businessConfig.brand.nameEnglish}`,
  description: businessConfig.brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { market } = businessConfig;

  return (
    <html lang={market.language} dir={market.direction}>
      <body style={themeVars as React.CSSProperties}>
        <CartProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter marketing={marketing} />
          <CartDrawer />
          <CheckoutModal />
          <UpsellModal />
        </CartProvider>
      </body>
    </html>
  );
}
