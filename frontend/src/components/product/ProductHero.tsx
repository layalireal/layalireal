import { PremiumImagePlaceholder } from '@/components/ui/PremiumImagePlaceholder';
import type { Product } from '@/types/product';

export function ProductHeroImage({ product }: { product: Product }) {
  const hasImage = product.images.heroBeforeAfter || product.images.heroProduct;

  if (hasImage) {
    return (
      <PremiumImagePlaceholder
        aspect="hero"
        label={product.imageAlts.heroProduct}
        imageUrl={product.images.heroBeforeAfter || product.images.heroProduct}
        alt={product.imageAlts.heroProduct}
      />
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-brand-accent/30 bg-brand-card shadow-luxury">
      <div className="grid grid-cols-2">
        <div className="flex aspect-[3/4] items-center justify-center bg-brand-muted/10 p-4 text-center">
          <div>
            <p className="text-xs uppercase tracking-wider text-brand-muted">قبل</p>
            <p className="mt-2 text-sm font-medium text-brand-text">{product.problem}</p>
          </div>
        </div>
        <div className="flex aspect-[3/4] items-center justify-center bg-brand-primary/10 p-4 text-center">
          <div>
            <p className="text-xs uppercase tracking-wider text-brand-accent">بعد</p>
            <p className="mt-2 text-sm font-medium text-brand-text">{product.desiredOutcome}</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center">
        <div className="rounded-2xl border-2 border-brand-accent bg-brand-card px-6 py-4 shadow-luxury">
          <p className="text-center text-sm font-bold text-brand-primary">{product.shortName}</p>
          <p className="text-center text-xs text-brand-muted">{product.mainIngredient}</p>
        </div>
      </div>
    </div>
  );
}

export function ProductTrustBadges({ badges }: { badges: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {badges.map((badge) => (
        <div key={badge} className="rounded-xl border border-brand-border bg-brand-card px-2 py-3 text-center text-xs font-medium text-brand-text">
          {badge}
        </div>
      ))}
    </div>
  );
}
