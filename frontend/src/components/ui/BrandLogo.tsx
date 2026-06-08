import { businessConfig } from '@/config/business';

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  const { brand } = businessConfig;

  return (
    <div className="flex items-center gap-3">
      {brand.iconUrl || brand.logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.iconUrl || brand.logoUrl}
          alt={brand.nameLocal}
          className="h-10 w-10 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-brand-accent shadow-luxury">
          <span className="text-sm font-bold">{brand.nameEnglish.charAt(0)}</span>
        </div>
      )}
      {!compact && (
        <div className="text-start">
          <p className="text-sm font-semibold text-brand-text">{brand.nameLocal}</p>
          <p className="text-[11px] tracking-[0.2em] text-brand-accent">{brand.nameEnglish}</p>
        </div>
      )}
    </div>
  );
}
