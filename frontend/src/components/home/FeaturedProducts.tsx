import { ProductShowcaseCard } from '@/components/home/ProductShowcaseCard';
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
    <section id="products" className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-accent">
            {marketing.formulations.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-text sm:text-4xl">
            {marketing.formulations.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-brand-muted">
            {marketing.formulations.subheadline}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductShowcaseCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
