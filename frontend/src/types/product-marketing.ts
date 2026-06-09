import type { FaqItem, Testimonial } from '@/types/marketing';

export interface PainCard {
  id: string;
  pain: string;
  solution: string;
}

export interface FailureAlternative {
  id: string;
  name: string;
  priceRange: string;
  reasons: string[];
}

export interface ComparisonRow {
  id: string;
  label: string;
  product: string;
  alternative: string;
}

export interface ProductPageMarketing {
  announcement: string;
  scarcity: string;
  painHeadline: string;
  painSubheadline: string;
  offerSelectorTitle: string;
  ctaTemplate: string;
  stickyCtaTemplate: string;
  trustStrip: { id: string; label: string; sublabel: string; icon: string }[];
  problemInsight: { headline: string; percentage: string; stat: string; source: string };
  painCards: PainCard[];
  failureAlternatives: FailureAlternative[];
  mechanism: { headline: string; subheadline: string; points: string[] };
  exclusions: { headline: string; items: string[] };
  ingredients: { headline: string; items: { name: string; dosage?: string; benefit: string; proof: string }[] };
  proofStats: { value: string; label: string }[];
  testimonials: Testimonial[];
  comparison: { headline: string; subheadline: string; rows: ComparisonRow[] };
  offerRecap: { headline: string; benefits: string[] };
  guarantee: { headline: string; steps: string[] };
  codDelivery: { headline: string; subheadline: string; steps: { title: string; body: string }[] };
  deliveryCities: { headline: string; cities: string[]; carriers: string[] };
  faq: { headline: string; subheadline: string; items: FaqItem[] };
  testimonialsSection: { eyebrow: string; headline: string };
  timelineSection: { eyebrow: string; headline: string };
  howToUse: { headline: string; subheadline: string; steps: { title: string; body: string }[] };
}
