export const businessConfig = {
  brand: {
    nameLocal: 'ليالي للجمال',
    nameEnglish: 'LAYALI BEAUTY',
    tagline: 'راحة البيت تبدأ من الريحة',
    description: 'عطور وبخاخات منزلية فاخرة من دبي. تركيبات مدروسة لبيت أهدأ وأنعم.',
    logoUrl: '',
    iconUrl: '',
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
    primaryColor: '#1B4332',
    primaryDarkColor: '#0F2922',
    accentColor: '#B59A6D',
    backgroundColor: '#F7F4EB',
    cardColor: '#FFFFFF',
    textColor: '#1A2E26',
    mutedTextColor: '#5C6B64',
    borderColor: '#E6DDD0',
  },
  checkout: {
    upsellSeconds: 12,
  },
} as const;

export type BusinessConfig = typeof businessConfig;
