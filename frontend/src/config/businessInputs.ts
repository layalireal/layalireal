export const businessInputs = {
  brand: {
    nameLocal: 'ليالي للجمال',
    nameEnglish: 'LAYALI BEAUTY',
    tagline: 'جمالك يبدأ من الداخل',
    description: 'صيدلية تجميل إماراتية. تركيبات سريرية، حلال، ومدعومة بأبحاث منشورة.',
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
    webhookUrl: process.env.NEXT_PUBLIC_ORDER_WEBHOOK_URL ?? '',
    upsellSeconds: 12,
    codOnly: true,
  },
} as const;

export type BusinessInputs = typeof businessInputs;
