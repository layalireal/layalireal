export interface TrustBadge {
  id: string;
  label: string;
  icon: 'shield' | 'leaf' | 'flask' | 'heart' | 'truck' | 'clock';
}

export interface AuthorityCard {
  id: string;
  title: string;
  body: string;
  icon: 'shield' | 'leaf' | 'flask' | 'heart';
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  meta: string;
  initial: string;
  rating: number;
}

export interface HowItWorksStep {
  id: string;
  number: string;
  title: string;
  body: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SiteMarketing {
  announcement: string;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    cta: string;
    proofLabel: string;
    proofTitle: string;
  };
  formulations: {
    eyebrow: string;
    headline: string;
    subheadline: string;
  };
  whyBrand: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    cards: AuthorityCard[];
  };
  trustBadges: TrustBadge[];
  testimonials: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    items: Testimonial[];
  };
  howItWorks: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    steps: HowItWorksStep[];
  };
  finalCta: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    cta: string;
  };
  faq: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    items: FaqItem[];
  };
  trustStrip: TrustBadge[];
  footer: {
    description: string;
    chips: string[];
    links: { label: string; href: string }[];
  };
  scarcity: string;
}
