import { businessInputs } from '@/config/businessInputs';

interface PremiumImagePlaceholderProps {
  label: string;
  aspect?: 'square' | 'hero' | 'product';
  imageUrl?: string;
  alt?: string;
  className?: string;
}

const aspectMap = {
  square: 'aspect-square',
  hero: 'aspect-[4/5] sm:aspect-[16/11]',
  product: 'aspect-[4/5]',
};

export function PremiumImagePlaceholder({
  label,
  aspect = 'product',
  imageUrl,
  alt,
  className = '',
}: PremiumImagePlaceholderProps) {
  if (imageUrl) {
    return (
      <div className={`overflow-hidden rounded-3xl bg-brand-card ${aspectMap[aspect]} ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt={alt ?? label} className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-brand-border bg-gradient-to-br from-brand-card to-brand-background ${aspectMap[aspect]} ${className}`}
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-brand-accent/40" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full border border-brand-primary/20" />
      </div>
      <div className="relative flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary text-brand-accent">
          <span className="text-xl font-semibold">
            {businessInputs.brand.nameEnglish.charAt(0)}
          </span>
        </div>
        <p className="max-w-[16rem] text-sm text-brand-muted">{label}</p>
      </div>
    </div>
  );
}
