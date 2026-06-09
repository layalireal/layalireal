import { ProductShowcaseCard } from '@/components/home/ProductShowcaseCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Product } from '@/types/product';
import type { SiteMarketing } from '@/types/marketing';

export function FeaturedProducts({
  products,
  marketing,
}: {
  products: Product[];
  marketing: SiteMarketing;
}) {
  return (
    <section id="products" className="bg-white py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow={marketing.formulations.eyebrow}
          title={marketing.formulations.headline}
          subtitle={marketing.formulations.subheadline}
          className="mb-16"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductShowcaseCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
