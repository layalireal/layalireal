import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/config/products';
import { generateProductMarketing } from '@/lib/marketing/generateMarketing';
import { PremiumImagePlaceholder } from '@/components/ui/PremiumImagePlaceholder';
import { Icon } from '@/components/ui/Icon';
import { formatPrice } from '@/lib/theme';
import { ProductPageClient } from '@/components/product/ProductPageClient';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const marketing = generateProductMarketing(product);

  return (
    <div className="px-4 py-8 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <PremiumImagePlaceholder
          label={product.imageAlt}
          imageUrl={product.imageUrl}
          alt={product.imageAlt}
          aspect="product"
        />
        <div className="space-y-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-brand-muted">
            <Icon name="arrow" className="h-4 w-4" />
            رجوع للرئيسية
          </Link>
          <span className="inline-flex rounded-full bg-brand-accent/15 px-3 py-1 text-xs font-medium text-brand-primary">
            {product.badgeText} • {product.routineNameLocal}
          </span>
          <h1 className="text-3xl font-bold leading-tight text-brand-text sm:text-4xl">
            {product.name}
          </h1>
          <p className="text-base leading-8 text-brand-muted">{marketing.hero.subheadline}</p>
          <div className="flex items-center gap-2 text-brand-accent">
            <Icon name="star" className="h-5 w-5 fill-current" />
            <span>
              {product.rating} ({product.reviewsCount} تقييم)
            </span>
          </div>
          <p className="text-sm text-brand-muted">{marketing.scarcity}</p>
          <p className="text-2xl font-bold text-brand-text">{formatPrice(product.priceFrom)}</p>
          <ProductPageClient product={product} cta={marketing.hero.cta} />
        </div>
      </div>
    </div>
  );
}
