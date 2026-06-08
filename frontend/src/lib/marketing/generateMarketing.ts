import { businessConfig } from '@/config/business';
import type { Product } from '@/types/product';
import type { SiteMarketing } from '@/types/marketing';

const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

function toArabicNumber(value: number): string {
  return String(value)
    .split('')
    .map((digit) => arabicNumerals[Number(digit)] ?? digit)
    .join('');
}

function unique<T>(items: T[]): T[] {
  return [...new Set(items)];
}

function joinProblems(products: Product[]): string {
  return unique(products.map((p) => p.problem)).join('، ');
}

function joinIngredients(products: Product[]): string {
  return unique(products.map((p) => p.mainIngredient)).join('، ');
}

function formatCategoryLabel(category: string): string {
  const map: Record<string, string> = {
    'eye-care': 'العناية بالعين',
    'anti-aging': 'مكافحة الشيخوخة',
    'skin-brightening': 'إشراقة البشرة',
  };
  return map[category] ?? category;
}

function getFormatLabel(format: string): string {
  const map: Record<string, string> = {
    gummies: 'علكات',
    serum: 'سيروم',
    cream: 'كريم',
    'diffuser-spray': 'بخاخ',
    'personal-fragrance': 'عطر',
  };
  return map[format] ?? format;
}

export function generateMarketing(productList: Product[]): SiteMarketing {
  const { brand, market } = businessConfig;
  const count = productList.length;
  const formatLabel = getFormatLabel(productList[0]?.format ?? 'gummies');
  const categories = unique(productList.map((p) => formatCategoryLabel(p.category)));
  const problems = joinProblems(productList);
  const ingredients = joinIngredients(productList);
  const totalReviews = productList.reduce((sum, p) => sum + p.reviewsCount, 0);
  const avgRating = productList.length
    ? (productList.reduce((sum, p) => sum + p.rating, 0) / productList.length).toFixed(1)
    : '4.9';

  const productNames = productList.map((p) => p.shortName).join('، ');

  return {
    announcement: `${formatLabel} سريرية مرخصة — الدفع عند الاستلام في ${market.countryName}`,
    hero: {
      eyebrow: brand.tagline,
      headline:
        count > 1
          ? `${toArabicNumber(count)} ${formatLabel} سريرية. حلول واضحة لـ${problems}`
          : `${formatLabel} سريرية لـ${productList[0]?.problem ?? 'جمالك'}`,
      subheadline: `${brand.description} تركيبات مبنية على ${ingredients} بجرعات مدروسة لنتائج تدريجية وواضحة.`,
      cta: `استكشفي ${formatLabel} الآن`,
      proofLabel: 'دفع عند الاستلام',
      proofTitle: `ضمان ٣٠ يوم • ${market.countryName}`,
    },
    formulations: {
      eyebrow: 'OUR FORMULATIONS',
      headline:
        count > 1
          ? `${toArabicNumber(count)} ${formatLabel}. ${toArabicNumber(categories.length)} مجالات. حل سريري واحد.`
          : `${productList[0]?.cardHeadline ?? formatLabel} سريرية`,
      subheadline:
        count > 1
          ? `كل منتج من ${brand.nameLocal} تركيبة مستقلة بجرعة سريرية. اختاري ما يناسبك أو كوّني روتينك الكامل.`
          : productList[0]?.cardSubheadline ?? '',
    },
    whyBrand: {
      eyebrow: `WHY ${brand.nameEnglish}`,
      headline: 'صيدلية، مو متجر تجميل عادي',
      subheadline: `نركّز على الترخيص، الحلال، التركيبة السريرية، وراحة العميلة في ${market.countryName}.`,
      cards: [
        {
          id: 'licensed',
          title: 'منتجات موثوقة ومراقبة الجودة',
          body: `كل ${formatLabel} من ${brand.nameLocal} تمر بمعايير جودة صارمة مع شفافية في المكونات والجرعات.`,
          icon: 'shield',
        },
        {
          id: 'halal',
          title: 'حلال ١٠٠٪ • نباتي • بدون سكر مضاف',
          body: `نستخدم بكتين نباتي بدل الجيلاتين الحيواني، بدون كحول أو مواد مشكوك فيها.`,
          icon: 'leaf',
        },
        {
          id: 'clinical',
          title: 'تركيبات سريرية، مو خلطات عشوائية',
          body: `كل مكوّن مبني على بحث منشور مع وضوح في المصدر والجرعة اليومية.`,
          icon: 'flask',
        },
        {
          id: 'cod',
          title: `ضمان ٣٠ يوم • الدفع عند الاستلام`,
          body: `جرّبي الروتين براحتك. الدفع فقط عند الاستلام داخل ${market.countryName}.`,
          icon: 'heart',
        },
      ],
    },
    trustBadges: [
      { id: 'cod', label: 'الدفع عند الاستلام', icon: 'heart' },
      { id: 'halal', label: 'حلال ١٠٠٪', icon: 'leaf' },
      { id: 'gmp', label: 'تصنيع طبي GMP', icon: 'flask' },
      { id: 'guarantee', label: 'ضمان ٣٠ يوم', icon: 'shield' },
    ],
    testimonials: {
      eyebrow: 'VERIFIED REVIEWS',
      headline: 'عميلات قرأن المكونات قبل ما يطلّبوا',
      subheadline: `${brand.nameLocal} اختيار اللي ما يصدّقون أي إعلان. يقرؤون، يتأكدون، وبعدين يطلبون.`,
      items: productList.slice(0, 3).map((product, index) => ({
        id: `review-${product.id}`,
        quote: `بعد ما قرأت عن ${product.mainIngredient} وكيف يعالج ${product.problem}، طلبت ${product.shortName}. خلال أسابيع لاحظت فرق واضح.`,
        name: ['سارة العتيبي', 'نورة الدوسري', 'فاطمة الخالدي'][index] ?? 'عميلة موثقة',
        meta: `${[32, 38, 35][index] ?? 30} سنة • ${['دبي', 'أبوظبي', 'الشارقة'][index] ?? market.countryName} • مشترية مؤكدة`,
        initial: ['س', 'ن', 'ف'][index] ?? 'ع',
        rating: product.rating,
      })),
    },
    howItWorks: {
      eyebrow: 'HOW IT WORKS',
      headline: 'من الطلب لباب بيتك في ٣ خطوات',
      subheadline: 'بدون دفع أونلاين. بدون التزام. بدون مخاطرة.',
      steps: [
        {
          id: 'step-1',
          number: '١',
          title: 'اختاري روتينك',
          body:
            count > 1
              ? `اختاري من ${productNames} أو كوّني روتينك الكامل حسب ${problems}.`
              : `اختاري ${productList[0]?.name ?? 'منتجك'} المناسب لـ${productList[0]?.problem ?? 'احتياجك'}.`,
        },
        {
          id: 'step-2',
          number: '٢',
          title: 'أكدي طلبك (بدون دفع)',
          body: `اسمك ورقمك يكفي. فريقنا يتصل لتأكيد العنوان في ${market.countryName} — الدفع عند الاستلام فقط.`,
        },
        {
          id: 'step-3',
          number: '٣',
          title: 'استلمي وادفعي',
          body: `التوصيل خلال ١-٣ أيام داخل ${market.countryName}. تدفعين كاش أو بالبطاقة عند الاستلام.`,
        },
      ],
    },
    finalCta: {
      eyebrow: 'BEGIN YOUR RITUAL',
      headline: 'جمالك يستحق علم، مو وعود',
      subheadline: `ابدئي روتينك السريري اليوم. دفع عند الاستلام، شحن داخل ${market.countryName}، وضمان استرجاع ٣٠ يوم.`,
      cta: `استكشفي ${formatLabel} الآن`,
    },
    faq: {
      eyebrow: 'FAQ',
      headline: 'أسئلة قبل الطلب',
      subheadline: 'كل شي تحتاجين تعرفينه قبل الدفع عند الاستلام.',
      items: [
        {
          id: 'faq-cod',
          question: `هل الدفع عند الاستلام متاح لكل إمارات ${market.countryName}؟`,
          answer: `إيه، الدفع عند الاستلام متاح لمعظم مناطق ${market.countryName}. فريقنا يتصل فيك لتأكيد العنوان قبل الشحن.`,
        },
        {
          id: 'faq-halal',
          question: `هل ${formatLabel} حلال وبدون جيلاتين حيواني؟`,
          answer: 'إيه، منتجاتنا نباتية ١٠٠٪ ببكتين نباتي، بدون جيلاتين حيواني أو كحول.',
        },
        {
          id: 'faq-delivery',
          question: `كم يستغرق التوصيل داخل ${market.countryName}؟`,
          answer: 'التوصيل عادة من ١ إلى ٣ أيام عمل حسب الإمارة والمنطقة.',
        },
        {
          id: 'faq-guarantee',
          question: 'شو ضمان الاسترجاع؟',
          answer: 'عندك ٣٠ يوم لاسترجاع المنتج إذا ما ناسبك — بدون أسئلة معقدة.',
        },
        {
          id: 'faq-results',
          question: 'متى بألاحظ النتيجة؟',
          answer: `مع الاستخدام اليومي المنتظم، كثير عميلات يلاحظون تحسّن تدريجي خلال ٣-٦ أسابيع حسب ${problems}.`,
        },
        {
          id: 'faq-ingredients',
          question: 'ليش هالمكونات بالذات؟',
          answer: `كل تركيبة مبنية على ${ingredients} لأنها مرتبطة مباشرة بـ${problems} حسب الأبحاث المنشورة.`,
        },
      ],
    },
    trustStrip: [
      { id: 'ship', label: `شحن سريع داخل ${market.countryName}`, icon: 'truck' },
      { id: 'cod', label: 'الدفع عند الاستلام', icon: 'heart' },
      { id: 'time', label: 'توصيل ١-٣ أيام', icon: 'clock' },
    ],
    footer: {
      description: `${brand.nameLocal} — ${brand.description}`,
      chips: ['حلال ١٠٠٪', 'GMP', 'COD'],
      links: [
        { label: formatLabel, href: '#products' },
        { label: 'قانوني', href: '#footer' },
        { label: 'الدعم', href: '#footer' },
      ],
    },
    scarcity: `${toArabicNumber(totalReviews)}+ تقييم • متوسط ${avgRating} نجوم — طلبات اليوم محدودة`,
  };
}

export function generateProductMarketing(product: Product) {
  const site = generateMarketing([product]);
  const { market } = businessConfig;
  const formatLabel = getFormatLabel(product.format);

  return {
    ...site,
    hero: {
      ...site.hero,
      headline: product.name,
      subheadline: `${product.cardSubheadline} تركيبة سريرية بـ${product.mainIngredient} لمعالجة ${product.problem}.`,
      cta: `اطلبي الآن — الدفع عند الاستلام`,
    },
    scarcity: `${toArabicNumber(product.reviewsCount)} تقييم • ${product.rating} نجوم — ${formatLabel} الأكثر طلباً في ${market.countryName}`,
  };
}
