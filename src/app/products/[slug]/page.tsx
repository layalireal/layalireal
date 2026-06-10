import { notFound } from 'next/navigation';
import { getProductBySlug, getRelatedProducts, products } from '@/config/products';
import { generateProductPageMarketing } from '@/lib/product-marketing/generateProductPageMarketing';
import { ProductLandingPage } from '@/components/product/ProductLandingPage';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const marketing = generateProductPageMarketing(product);
  const related = getRelatedProducts(product);

  return <ProductLandingPage product={product} marketing={marketing} related={related} />;
}
