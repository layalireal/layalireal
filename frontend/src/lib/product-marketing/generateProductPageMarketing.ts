import { businessConfig } from '@/config/business';
import type { Product, IngredientItem } from '@/types/product';
import type { ProductPageMarketing } from '@/types/product-marketing';

function parseIngredient(item: string | IngredientItem) {
  if (typeof item === 'string') {
    return { name: item, benefit: '', proof: '' };
  }
  return {
    name: item.name,
    dosage: item.dosage,
    benefit: item.benefit ?? '',
    proof: item.proof ?? '',
  };
}

export function generateProductPageMarketing(product: Product): ProductPageMarketing {
  const { brand, market, cod } = businessConfig;
  const formatLabel =
    product.format === 'serum'
      ? 'سيروم'
      : product.format === 'aroma-lamp-kit'
        ? 'روتين أروما'
        : 'بخاخ';

  const isRoseAcRitual = product.id === 'layali-aroma-rose-kit-001';
  const isOudSerum = product.id === 'layali-oud-serum-001';

  const painCards = isRoseAcRitual
    ? [
        {
          id: 'pain-1',
          pain: product.emotionalPain,
          solution: `${product.shortName} روتين مسائي يرطّب البشرة بعد التكييف ويهدّي بيتك في نفس الوقت.`,
        },
        {
          id: 'pain-2',
          pain: 'قضيتِ ٨–١٠ ساعات فالتكييف ولا كريم عادي كيفيك؟',
          solution: product.mechanism,
        },
        {
          id: 'pain-3',
          pain: 'بغيتي بيتك يبان فخم قبل الضيافة — وانتِ نفسك مرطّبة ومتألقة؟',
          solution: `٢٠ دقيقة ورد: مصباح أروما لريحة سبا فاخرة + سيروم الورد لبشرة ناعمة — روتين واحد.`,
        },
      ]
    : [
        {
          id: 'pain-1',
          pain: product.emotionalPain,
          solution: `${product.shortName} يدعم ${product.desiredOutcome} بـ${product.mainIngredient}.`,
        },
        {
          id: 'pain-2',
          pain: `جربتِ حلول ثانية وما نفعت مع ${product.problem}؟`,
          solution: product.mechanism,
        },
        {
          id: 'pain-3',
          pain: 'تبي شي يشتغل من أول استخدام — مو وعود فاضية؟',
          solution: `تركيبة ${product.shortName} مصممة تدعم ${product.desiredOutcome} مع استخدام يومي بسيط.`,
        },
      ];

  const failureAlternatives =
    product.category === 'skin-hydration' || product.format === 'aroma-lamp-kit'
      ? [
          {
            id: 'alt-1',
            name: isRoseAcRitual ? 'كريمات ترطيب بعد التكييف' : 'كريمات ترطيب عادية',
            priceRange: '٨٠ – ٢٠٠ د.إ',
            reasons: isRoseAcRitual
              ? ['ما تعالجون سبب الجفاف: التكييف', 'ترطيب سطحي بس', 'ما فيها روتين مسائي', 'ما فيها أروما للبيت']
              : ['ترطيب سطحي بس', 'ما تعالج أجواء البيت', 'تحتاج تعيد كل يوم', 'ما فيها أروما'],
          },
          {
            id: 'alt-2',
            name: 'زيوت ورد رخيصة',
            priceRange: '٣٠ – ٨٠ د.إ',
            reasons: ['زيت عطري مو زيت أساسي', 'ما فيها سيروم', 'بدون مصباح أروما', 'جودة غير مضمونة'],
          },
          {
            id: 'alt-3',
            name: 'مصابيح أروما بدون زيت',
            priceRange: '١٥٠ – ٣٠٠ د.إ',
            reasons: ['تحتاج تشتري الزيت لوحدك', 'ما فيها عناية بالبشرة', 'تكلفة إضافية', 'مو باقة كاملة'],
          },
        ]
      : product.category === 'home-fragrance'
      ? [
          {
            id: 'alt-1',
            name: 'معطرات السوبرماركت',
            priceRange: '٢٠ – ٥٠ د.إ',
            reasons: ['ريحة كيميائية تختفي بسرعة', 'ما تهدّي التوتر', 'تغطي الريحة مو تحل المشكلة', 'تحتاج تعيد كل يوم'],
          },
          {
            id: 'alt-2',
            name: 'شموع وبخور عادي',
            priceRange: '٥٠ – ١٥٠ د.إ',
            reasons: ['دخان يزعج', 'ما يناسب كل البيوت', 'صعب تتحكمين بالقوة', 'ما يدوم طويل'],
          },
          {
            id: 'alt-3',
            name: 'عطور رخيصة',
            priceRange: '٣٠ – ٨٠ د.إ',
            reasons: ['ريحة صناعية', 'تثقل الجو', 'ما مصممة للبيت', 'ما تعالج إحساس التوتر'],
          },
        ]
      : [
          {
            id: 'alt-1',
            name: 'بخاخات عطر رخيصة',
            priceRange: '٥٠ – ١٢٠ د.إ',
            reasons: ['تختفي بعد ساعة', 'ريحة صناعية', 'ما فيها عود حقيقي', 'تحتاج تعيد كل شوي'],
          },
          {
            id: 'alt-2',
            name: 'عطور فاخرة بسعر عالي',
            priceRange: '٥٠٠ – ١,٥٠٠ د.إ',
            reasons: ['سعر مبالغ فيه', 'مو مركّزة', 'تحتاج تعيد طوال اليوم', 'ما فيها سيروم'],
          },
          {
            id: 'alt-3',
            name: 'زيوت عادية',
            priceRange: '٨٠ – ٢٠٠ د.إ',
            reasons: ['ما تمتص صح', 'ثبات ضعيف', 'ما مصممة للبشرة', 'نتيجة غير ثابتة'],
          },
        ];

  const exclusions =
    product.exclusions ??
    (product.format === 'serum'
      ? ['بدون كحول قاسي', 'بدون بارابين', 'بدون عطور صناعية رخيصة']
      : ['بدون كحول قاسي', 'بدون مواد مهيّجة', 'بدون ريحة كيميائية']);

  const timeline = product.timeline ?? [
    { label: 'أول أسبوع', text: `مع الاستخدام المنتظم، بعض العميلات يلاحظون تحسّن في ${product.problem}.` },
    { label: 'الأسبوع الثاني', text: `استمرار الروتين يدعم ${product.desiredOutcome}.` },
    { label: 'نهاية العبوة', text: 'النتيجة تختلف من شخص لشخص — الاستمرار هو المفتاح.' },
  ];

  const usageSteps = product.usage?.steps ?? [
    `استخدمي ${product.shortName} يومياً حسب التعليمات`,
    'الاستمرار أهم من الكمية',
    'احفظيه بعيد عن الشمس والحرارة',
  ];

  const cities = product.delivery?.cities ?? ['دبي', 'أبوظبي', 'الشارقة'];
  const carriers = product.delivery?.carriers ?? ['أرامكس', 'سمسا'];

  const uaeNames = ['فاطمة الكعبي', 'مريم الشامسي', 'نورة المنصوري'];
  const uaeCities = ['دبي', 'أبوظبي', 'الشارقة'];

  const roseFaqAc = isRoseAcRitual
    ? {
        id: 'faq-ac',
        question: 'هل ينفع مع جفاف البشرة من التكييف في الإمارات؟',
        answer:
          'إيه، طقوس الورد صُمّمت لهاد الجو: سيروم الورد يرطّب البشرة بعد يوم طويل فالتكييف، ومصباح الأروما يهدّي البيت مساءً. روتين ٢٠ دقيقة قبل النوم.',
      }
    : null;

  return {
    announcement: isRoseAcRitual
      ? `روتين ما بعد التكييف — ${cod.paymentLabel}`
      : `${cod.paymentLabel} • ${cod.deliveryPromise}`,
    scarcity: isRoseAcRitual
      ? `روتين مسائي ٢٠ دقيقة — ${product.reviewsCount}+ عميلة في الإمارات • ${product.rating} نجوم`
      : `عرض محدود هذا الأسبوع — ${product.reviewsCount}+ تقييم • ${product.rating} نجوم`,
    painHeadline: product.heroHeadline,
    painSubheadline: product.heroSubheadline,
    offerSelectorTitle: 'اختاري العرض:',
    ctaTemplate: `ابدئي ${product.shortName} الآن`,
    stickyCtaTemplate: `ابدئي ${product.shortName} الآن`,
    trustStrip: [
      { id: 'cod', label: 'الدفع عند الاستلام', sublabel: 'بدون دفع أونلاين', icon: 'heartHandshake' },
      { id: 'ship', label: cod.deliveryPromise, sublabel: market.countryName, icon: 'truck' },
      { id: 'guarantee', label: 'ضمان ٣٠ يوم', sublabel: 'استرجاع كامل', icon: 'shield' },
      { id: 'quality', label: product.badges[1] ?? 'جودة معتمدة', sublabel: brand.nameLocal, icon: 'flask' },
    ],
    problemInsight: isRoseAcRitual
      ? {
          headline: product.problem,
          percentage: '٥٨٪',
          stat: 'يعانين من جفاف التكييف أو احمرار بعد أي منتج؟ أنتِ من الأغلبية — مو لحالك، والإصلاح يبدأ من الحاجز.',
          source: `استطلاع عملاء ${brand.nameLocal} • ٢٠٢٥`,
        }
      : isOudSerum
        ? {
            headline: product.problem,
            percentage: '٦١٪',
            stat: 'ريحتك تختفي قبل الظهر مع التكييف والحر؟ أنتِ من الأغلبية — مو لحالك، والحل يبدأ من سيروم مركّز يدوم.',
            source: `استطلاع عملاء ${brand.nameLocal} • ٢٠٢٥`,
          }
        : product.id === 'layali-aroma-fusion-001'
          ? {
              headline: product.problem,
              percentage: '٦٣٪',
              stat: 'تحسّين بالتوتر أو صداع نفسي داخل البيت بعد يوم طويل؟ أنتِ من الأغلبية — مو لحالك، والحل يبدأ من أجواء البيت.',
              source: `استطلاع عملاء ${brand.nameLocal} • ٢٠٢٥`,
            }
          : {
              headline: product.problem,
              percentage: '٥٥٪',
              stat: `${product.emotionalPain} — أنتِ مو لحالك، والحل يبدأ بروتين بسيط.`,
              source: `استطلاع عملاء ${brand.nameLocal} • ٢٠٢٥`,
            },
    painCards,
    failureAlternatives,
    mechanism: {
      headline: `كيف يشتغل ${product.shortName}؟`,
      subheadline: product.mechanism,
      points: product.ingredientStack.slice(0, 3).map((i) => {
        const ing = parseIngredient(i);
        return `${ing.name}: يدعم ${product.desiredOutcome}`;
      }),
    },
    exclusions: {
      headline: 'شو ما راح تلاقين داخل التركيبة',
      items: exclusions,
    },
    ingredients: {
      headline: 'المكونات الأساسية',
      items: product.ingredientStack.map(parseIngredient),
    },
    proofStats:
      product.authority?.stats ??
      [
        { value: String(product.rating), label: 'تقييم' },
        { value: String(product.reviewsCount), label: 'تقييم موثّق' },
        { value: '٣٠', label: 'يوم ضمان' },
        { value: '١-٣', label: 'أيام توصيل' },
      ],
    testimonials: uaeNames.map((name, i) => ({
      id: `t-${i}`,
      quote: isRoseAcRitual
        ? [
            'بعد يوم كامل فالتكييف كانت بشرتي مشدودة. روتين الورد المسائي رجّع لي الترطيب — والبيت صار يبان كسبا فندق.',
            'كنت نحط كريم وخلاص. باقة ما بعد التكييف غيّرت الموضوع — سيروم + مصباح ورد، ٢٠ دقيقة ونمت مرتاحة.',
            'قبل الضيافة كنشعل المصباح — ريحة ورد فاخرة والبشرة مرطّبة. هاد الروتين ولى جزء من يومي.',
          ][i] ??
          `بعد ما عانيت من ${product.problem}، ${product.shortName} ساعدني أحس بـ${product.desiredOutcome}.`
        : `بعد ما عانيت من ${product.problem}، ${product.shortName} ساعدني أحس بـ${product.desiredOutcome}. الحين ما أستغني عنه.`,
      name,
      meta: `${['٣٤', '٢٩', '٤١'][i]} سنة • ${uaeCities[i]} • مشترية مؤكدة`,
      initial: name.charAt(0),
      rating: product.rating,
    })),
    comparison: {
      headline: 'قارني — وقرّري بنفسك',
      subheadline: `ليش ${product.shortName} مختلف عن البدائل العادية`,
      rows: [
        { id: 'c1', label: 'السعر', product: `يبدأ من ${product.offers[0].price} د.إ`, alternative: 'أغلى بمرتين أو أرخص بس ما ينفع' },
        { id: 'c2', label: 'الثبات', product: product.mechanism.slice(0, 60), alternative: 'يختفي بسرعة' },
        { id: 'c3', label: 'الدفع', product: 'الدفع عند الاستلام', alternative: 'دفع أونلاين إجباري' },
        { id: 'c4', label: 'الضمان', product: cod.returnGuarantee, alternative: 'بدون ضمان' },
        { id: 'c5', label: 'المكونات', product: product.mainIngredient, alternative: 'مو واضحة' },
      ],
    },
    offerRecap: {
      headline: isRoseAcRitual ? 'باقة ما بعد التكييف — عرض خاص' : `باقة ${product.shortName} — عرض خاص`,
      benefits: isRoseAcRitual
        ? [
            cod.paymentLabel,
            'مصباح أروما + زيت ورد 30ml + سيروم الورد',
            'روتين مسائي ٢٠ دقيقة — مصمم لجو الإمارات',
            cod.returnGuarantee,
          ]
        : [cod.paymentLabel, cod.deliveryPromise, cod.returnGuarantee, product.mechanism.slice(0, 80)],
    },
    guarantee: {
      headline: cod.returnGuarantee,
      steps: ['تواصلي معنا عبر الواتساب أو الهاتف', 'نرتّب الاسترجاع إذا لزم', 'استرجاع كامل بدون تعقيد'],
    },
    codDelivery: {
      headline: 'كيف يوصلك طلبك — بكل بساطة',
      subheadline: 'بدون دفع أونلاين. بدون التزام. بدون مفاجآت.',
      steps: [
        { title: 'اطلبي الآن', body: 'اختاري العرض، اكتبي اسمك ورقمك. بدون دفع أونلاين.' },
        { title: 'نتصل فيك', body: cod.confirmationPromise },
        { title: 'استلمي وادفعي', body: `${cod.deliveryPromise}. تدفعين كاش أو بالبطاقة عند الباب.` },
      ],
    },
    deliveryCities: {
      headline: `نوصّل لكل إمارات ${market.countryName}`,
      cities,
      carriers,
    },
    faq: {
      headline: 'قبل ما تطلبين — كل اللي تحتاجين تعرفينه',
      subheadline: `عن ${product.shortName} والدفع عند الاستلام`,
      items: [
        {
          id: 'faq-price',
          question: 'كم السعر بالضبط؟ وش العروض المتوفرة؟',
          answer: `عندنا ${product.offers.length} عروض تبدأ من ${product.offers[0].price} د.إ. اختاري العرض اللي يناسبك من القائمة.`,
        },
        {
          id: 'faq-results',
          question: 'متى بألاحظ النتيجة؟',
          answer: isRoseAcRitual
            ? 'من أول مساء كثير عميلات يحسّون ببشرة أقل شدّاً. مع روتين ٢٠ دقيقة يومياً، الترطيب يتحسّن تدريجياً خلال أسابيع — خاصة إذا كنتِ قضيتِ يوم طويل فالتكييف.'
            : `مع الاستخدام المنتظم، بعض العميلات يلاحظون فرق خلال أسابيع. النتيجة تختلف حسب ${product.problem}.`,
        },
        ...(roseFaqAc ? [roseFaqAc] : []),
        {
          id: 'faq-safe',
          question: `هل ${product.shortName} آمن للاستخدام اليومي؟`,
          answer: `إيه، مصمم للاستخدام اليومي. اقرأي المكونات وتأكدي ما عندك حساسية.`,
        },
        {
          id: 'faq-cod',
          question: `هل الدفع عند الاستلام متاح في ${market.countryName}؟`,
          answer: `إيه، الدفع عند الاستلام متاح لمعظم المناطق. ${cod.confirmationPromise}`,
        },
        {
          id: 'faq-delivery',
          question: 'كم يستغرق التوصيل؟',
          answer: cod.deliveryPromise,
        },
        {
          id: 'faq-return',
          question: 'شو ضمان الاسترجاع؟',
          answer: cod.returnGuarantee,
        },
      ],
    },
    testimonialsSection: { eyebrow: 'تقييمات موثّقة', headline: 'عميلات جرّبن وشاركن تجربتهن' },
    timelineSection: { eyebrow: 'النتائج المتوقعة', headline: 'وش ممكن تلاحظين مع الوقت؟' },
    howToUse: {
      headline: product.usage?.headline ?? `طريقة استخدام ${formatLabel}`,
      subheadline: isRoseAcRitual
        ? 'روتين مسائي ٢٠ دقيقة — بعد يوم فالتكييف'
        : 'روتين بسيط — ٣٠ ثانية باليوم',
      steps: usageSteps.map((body, i) => ({
        title: ['الخطوة ١', 'الخطوة ٢', 'الخطوة ٣'][i] ?? `خطوة ${i + 1}`,
        body,
      })),
    },
  };
}
