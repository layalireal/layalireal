import { publicAsset } from '@/lib/publicAsset';

const brandLogo = publicAsset('ChatGPT Image Jun 10, 2026, 02_17_51 AM.png');

export const businessConfig = {
  brand: {
    nameLocal: 'ليالي للجمال',
    nameEnglish: 'LAYALI BEAUTY',
    tagline: 'صيدلية الجمال الإماراتية',
    description: 'عطور وأروما فاخرة من دبي. تركيبات مدروسة لبيت أهدأ وبشرة أنعم.',
    logoUrl: brandLogo,
    iconUrl: brandLogo,
  },
  market: {
    countryName: 'الإمارات العربية المتحدة',
    countryCode: 'AE',
    language: 'ar',
    direction: 'rtl' as const,
    currency: 'AED',
    currencySymbol: 'د.إ',
    phoneCountryCode: '+971',
    phoneExample: '50 123 4567',
  },
  cod: {
    enabled: true,
    paymentLabel: 'الدفع عند الاستلام — بدون دفع أونلاين',
    deliveryPromise: 'توصيل ١-٣ أيام لكل إمارات الدولة',
    confirmationPromise: 'فريقنا يتصل فيك لتأكيد الطلب قبل الشحن',
    returnGuarantee: 'ضمان استرجاع ٣٠ يوم — جرّبي براحتك',
  },
  design: {
    primaryColor: '#134E3A',
    primarySoftColor: '#E8EFE9',
    primaryDarkColor: '#0F2922',
    secondaryColor: '#C8A55C',
    secondarySoftColor: '#F5EDD8',
    accentColor: '#C8A55C',
    backgroundColor: '#FBF8F2',
    surfaceColor: '#FFFFFF',
    surfaceRoseColor: '#F5F0E5',
    cardColor: '#FFFFFF',
    textColor: '#1A2E22',
    mutedTextColor: '#5F6B62',
    borderColor: '#E5DFCD',
    successColor: '#2D6A4F',
  },
  checkout: {
    upsellSeconds: 12,
  },
  nav: [
    { label: 'المنتجات', href: '#products' },
    { label: 'ليش ليالي؟', href: '#why' },
    { label: 'التجارب', href: '#reviews' },
    { label: 'الأسئلة', href: '#faq' },
  ],
} as const;

export type BusinessConfig = typeof businessConfig;
