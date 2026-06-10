import { products } from '@/config/products';
import { generateMarketing } from '@/lib/marketing/generateMarketing';
import { AnnouncementBar } from '@/components/home/AnnouncementBar';
import { HomeHero } from '@/components/home/HomeHero';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { WhyBrand } from '@/components/home/WhyBrand';
import { Testimonials } from '@/components/home/Testimonials';
import { HowItWorks } from '@/components/home/HowItWorks';
import { FinalCTA } from '@/components/home/FinalCTA';
import { FAQAccordion } from '@/components/home/FAQAccordion';
import { TrustStrip } from '@/components/home/TrustStrip';

export function HomePage() {
  const marketing = generateMarketing(products);

  return (
    <>
      <AnnouncementBar messages={marketing.announcements} />
      <HomeHero marketing={marketing} />
      <FeaturedProducts products={products} marketing={marketing} />
      <WhyBrand marketing={marketing} />
      <Testimonials marketing={marketing} />
      <HowItWorks marketing={marketing} />
      <FinalCTA marketing={marketing} />
      <FAQAccordion marketing={marketing} />
      <TrustStrip badges={marketing.trustStrip} />
    </>
  );
}
