import type { Product } from '@/types/product';
import { getLowestOfferPrice } from '@/types/product';

export const products: Product[] = [
  {
    id: 'layali-aroma-fusion-001',
    slug: 'aroma-fusion-home',
    sku: 'LB-AROMA-001',
    name: 'أروما فيوجن — ريحة بيت تهدّي التوتر',
    shortName: 'أروما فيوجن',
    routineNameLocal: 'روتين الراحة',
    routineNameEnglish: 'Calm Home Routine',
    category: 'home-fragrance',
    format: 'diffuser-spray',
    targetCustomer: 'سيدات الإمارات اللي يحسّون بالتوتر والصداع النفسي في البيت',
    problem: 'التوتر والصداع النفسي داخل البيت',
    emotionalPain: 'البيت المفروض يكون مكان راحة، بس الريحة والتوتر يخلّونك ما ترتاحين',
    desiredOutcome: 'بيت أهدأ، ريحة فاخرة، ونفسية أهدأ بعد يوم طويل',
    mainIngredient: 'مزيج عطري فاخر مستوحى من دبي',
    ingredientStack: [
      { name: 'عود دبي', benefit: 'عمق ودفء يعطي إحساس فخامة وراحة', proof: 'من أشهر روائح الخليج' },
      { name: 'مسك أبيض', benefit: 'نعومة وهدوء يدعم أجواء مريحة', proof: 'يستخدم في بيوت فاخرة' },
      { name: 'زهور بيضاء', benefit: 'إحساس نظافة وصفاء في الجو', proof: 'رائحة خفيفة ما تثقل' },
    ],
    mechanism: 'الرائحة تؤثر مباشرة على الجهاز العصبي — أروما فيوجن مصمم يهدّي أجواء البيت ويخفف إحساس التوتر',
    cardHeadline: 'ريحة تهدّي البيت بعد يوم متعب',
    cardSubheadline: 'مزيج عطري فاخر لبيت أهدأ وأنعم — بدون دفع أونلاين',
    heroHeadline: 'البيت فيه توتر وصداع نفسي؟ — السبب ممكن يكون الجو مو الريحة الصح',
    heroSubheadline:
      'أروما فيوجن يدعم أجواء أهدأ في البيت بمزيج عطري فاخر مستوحى من دبي. ريحة تهدّي، مو بس تغطي.',
    rating: 4.9,
    reviewsCount: 487,
    badges: ['الدفع عند الاستلام', 'صنع في دبي', '٣٠ يوم ضمان', 'شحن كل الإمارات'],
    offers: [
      {
        id: 'one',
        quantity: 1,
        label: 'أروما فيوجن فقط',
        subtitle: 'بخاخ واحد — شهر من الراحة',
        price: 299,
        compareAtPrice: 349,
        badge: '',
      },
      {
        id: 'two',
        quantity: 2,
        label: 'أروما فيوجن + سيروم عود دبي',
        subtitle: 'الباقة الأكثر طلباً — بيت + عناية',
        price: 379,
        compareAtPrice: 498,
        badge: 'الأكثر اختياراً',
        defaultSelected: true,
      },
      {
        id: 'three',
        quantity: 3,
        label: 'أروما فيوجن + ٢ سيروم عود دبي',
        subtitle: 'باقة كاملة — وفّري أكثر',
        price: 499,
        compareAtPrice: 697,
        badge: 'أكبر توفير',
      },
    ],
    upsell: {
      enabled: true,
      price: 199,
      label: 'أضيفي سيروم عود دبي',
      subtitle: 'عناية فاخرة تكمّل ريحة البيت',
      targetProductId: 'layali-oud-serum-001',
    },
    exclusions: ['بدون كحول قاسي', 'بدون مواد مهيّجة', 'بدون عطور صناعية رخيصة', 'بدون مواد حيوانية'],
    authority: {
      certifications: ['صنع في الإمارات', 'جودة معتمدة', 'مكونات مدروسة', 'تغليف فاخر'],
      expertTitle: 'خبيرة عطور منزلية — دبي',
      expertQuote:
        'الرائحة المناسبة في البيت تغيّر المزاج خلال دقائق. مزيج أروما فيوجن مصمم يهدّي الأجواء بدون ما يكون ثقيل أو مزعج.',
      stats: [
        { value: '+1,200', label: 'عميلة راضية في الإمارات' },
        { value: '4.9', label: 'تقييم متوسط' },
        { value: '30', label: 'يوم ضمان' },
        { value: '1-3', label: 'أيام توصيل' },
      ],
    },
    timeline: [
      { label: 'أول استخدام', text: 'كثير عميلات يحسّون بفرق في أجواء البيت من أول يوم — ريحة أهدأ وأنعم.' },
      { label: 'الأسبوع الأول', text: 'مع الاستخدام اليومي، البيت يصير مكان ترتاحين فيه أكثر بعد الشغل والتوتر.' },
      { label: 'نهاية الشهر', text: 'روتين ثابت يدعم نفسية أهدأ — النتيجة تختلف من شخص لشخص.' },
    ],
    usage: {
      headline: 'أبسط روتين للبيت',
      steps: [
        'رشّي ٢-٣ بخات في الصالة أو غرفة النوم بعد التنظيف',
        'استخدميه يومياً — خصوصاً بعد يوم متعب',
        'للأجواء الأقوى: رشّي على الوسائد أو الستائر من مسافة',
      ],
    },
    delivery: {
      cities: ['دبي', 'أبوظبي', 'الشارقة', 'عجمان', 'أم القيوين', 'رأس الخيمة', 'الفجيرة'],
      carriers: ['Aramex', 'SMSA', 'Quiqup'],
    },
    images: {
      heroBeforeAfter: '',
      heroProduct: '',
      problemImage: '',
      ingredientImage: '',
      authorityImage: '',
      lifestyleImage: '',
      testimonialImage: '',
      comparisonImage: '',
    },
    imageAlts: {
      heroBeforeAfter: 'قبل وبعد أجواء البيت مع أروما فيوجن',
      heroProduct: 'بخاخ أروما فيوجن',
      problemImage: 'توتر وصداع نفسي في البيت',
      ingredientImage: 'مكونات أروما فيوجن',
      authorityImage: 'خبيرة عطور منزلية',
      lifestyleImage: 'بيت هادئ ومرتب',
      testimonialImage: 'عميلة راضية',
      comparisonImage: 'مقارنة المنتجات',
    },
    relatedProductIds: ['layali-oud-serum-001'],
  },
  {
    id: 'layali-oud-serum-001',
    slug: 'oud-dubai-serum',
    sku: 'LB-OUD-001',
    name: 'سيروم عود دبي — عناية فاخرة كل يوم',
    shortName: 'سيروم العود',
    routineNameLocal: 'روتين العود',
    routineNameEnglish: 'Oud Routine',
    category: 'personal-fragrance',
    format: 'serum',
    targetCustomer: 'رجال ونساء الإمارات اللي يبون ريحة عود فاخرة تدوم',
    problem: 'الريحة العادية ما تدوم وما تعطي إحساس فخامة',
    emotionalPain: 'تبي ريحة عود دبي الحقيقية — مو عطر رخيص يختفي بعد ساعة',
    desiredOutcome: 'ريحة عود فاخرة تدوم وتعطيك ثقة طول اليوم',
    mainIngredient: 'عود دبي أصلي',
    ingredientStack: [
      { name: 'عود دبي', dosage: 'مركز', benefit: 'عمق وثبات يدوم ساعات', proof: 'من أجود أنواع العود' },
      { name: 'زيت جوز الهند', benefit: 'يحسّن الامتصاص ويثبت الرائحة', proof: 'قاعدة طبيعية ناعمة' },
      { name: 'مسك', benefit: 'نعومة ودفء يكمّل العود', proof: 'طبقة أساس فاخرة' },
    ],
    mechanism: 'سيروم مركّز يمتص على البشرة ويطلق رائحة عود تدريجية — مو بخاخ عادي يتبخر بسرعة',
    cardHeadline: 'عود دبي يدوم — مو بس ساعة',
    cardSubheadline: 'سيروم مركّز بريحة فاخرة — الدفع عند الاستلام',
    heroHeadline: 'ريحتك تختفي قبل الظهر؟ — السبب مو العود، السبب التركيبة',
    heroSubheadline:
      'سيروم عود دبي مركّز يدعم ثبات الرائحة ويعطيك إحساس فخامة يدوم. مصمم للي يبون عود حقيقي مو عطر سريع.',
    rating: 4.8,
    reviewsCount: 356,
    badges: ['الدفع عند الاستلام', 'عود دبي أصلي', '٣٠ يوم ضمان', 'شحن سريع'],
    offers: [
      {
        id: 'one',
        quantity: 1,
        label: 'سيروم واحد',
        subtitle: '٣٠ مل — يكفي شهر',
        price: 199,
        compareAtPrice: 249,
        badge: '',
      },
      {
        id: 'two',
        quantity: 2,
        label: 'سيرومين عود دبي',
        subtitle: 'وفّري — واحد لك وواحد هدية',
        price: 279,
        compareAtPrice: 498,
        badge: 'الأكثر اختياراً',
        defaultSelected: true,
      },
      {
        id: 'three',
        quantity: 3,
        label: '٣ سيرومات عود دبي',
        subtitle: 'باقة العائلة — أكبر توفير',
        price: 399,
        compareAtPrice: 747,
        badge: 'أكبر توفير',
      },
    ],
    upsell: {
      enabled: true,
      price: 299,
      label: 'أضيفي أروما فيوجن للبيت',
      subtitle: 'ريحة بيت تهدّي التوتر — عرض خاص',
      targetProductId: 'layali-aroma-fusion-001',
    },
    exclusions: ['بدون كحول قاسي', 'بدون عطور صناعية رخيصة', 'بدون مواد حيوانية', 'بدون بارابين'],
    authority: {
      certifications: ['صنع في الإمارات', 'عود أصلي', 'تركيبة مركّزة', 'تغليف فاخر'],
      expertTitle: 'خبير عطور — دبي',
      expertQuote:
        'الفرق بين السيروم والبخاخ العادي هو الثبات. سيروم عود دبي مصمم يطلق الرائحة تدريجياً — هذي سر الفخامة.',
      stats: [
        { value: '+900', label: 'عميل راضي' },
        { value: '4.8', label: 'تقييم' },
        { value: '30', label: 'يوم ضمان' },
        { value: '1-3', label: 'أيام توصيل' },
      ],
    },
    timeline: [
      { label: 'أول استخدام', text: 'الرائحة تبدأ خفيفة وتتعمق خلال دقائق — ثبات يختلف حسب البشرة.' },
      { label: 'الأسبوع الأول', text: 'مع الاستخدام اليومي، كثير عملاء يلاحظون ثبات أطول مقارنة بالبخاخات العادية.' },
      { label: 'نهاية العبوة', text: 'روتين ثابت يعطيك ريحة عود تعرفك — النتيجة تختلف من شخص لشخص.' },
    ],
    usage: {
      headline: 'طريقة الاستخدام',
      steps: [
        'قطرة أو قطرتين على نقاط النبض — المعصم والرقبة',
        'لا تفركي بقوة — خلّي السيروم يمتص طبيعي',
        'استخدميه يومياً للثبات الأفضل',
      ],
    },
    delivery: {
      cities: ['دبي', 'أبوظبي', 'الشارقة', 'عجمان', 'أم القيوين', 'رأس الخيمة', 'الفجيرة'],
      carriers: ['Aramex', 'SMSA', 'Quiqup'],
    },
    images: {
      heroBeforeAfter: '',
      heroProduct: '',
      problemImage: '',
      ingredientImage: '',
      authorityImage: '',
      lifestyleImage: '',
      testimonialImage: '',
      comparisonImage: '',
    },
    imageAlts: {
      heroBeforeAfter: 'قبل وبعد استخدام سيروم العود',
      heroProduct: 'سيروم عود دبي',
      problemImage: 'ريحة تختفي بسرعة',
      ingredientImage: 'مكونات سيروم العود',
      authorityImage: 'خبير عطور',
      lifestyleImage: 'رجل بريحة عود فاخرة',
      testimonialImage: 'عميل راضي',
      comparisonImage: 'مقارنة السيروم والبخاخ',
    },
    relatedProductIds: ['layali-aroma-fusion-001'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product): Product[] {
  const ids = product.relatedProductIds ?? [];
  return products.filter((p) => ids.includes(p.id) && p.id !== product.id);
}

/** @deprecated use getLowestOfferPrice */
export function getProductPriceFrom(product: Product): number {
  return getLowestOfferPrice(product);
}
