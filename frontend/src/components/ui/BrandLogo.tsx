import Link from 'next/link';
import { businessConfig } from '@/config/business';

const markSizes = {
  sm: { frame: 'h-9 w-9', zoom: '440%' },
  md: { frame: 'h-10 w-10 sm:h-11 sm:w-11', zoom: '460%' },
  lg: { frame: 'h-11 w-11 sm:h-12 sm:w-12', zoom: '480%' },
} as const;

export function BrandLogo({
  variant = 'light',
  size = 'md',
}: {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}) {
  const { brand } = businessConfig;
  const { frame, zoom } = markSizes[size];
  const titleClass = variant === 'dark' ? 'text-white' : 'text-brand-primary';
  const englishClass = variant === 'dark' ? 'text-brand-secondary' : 'text-brand-primary';
  const nameClass = size === 'lg' ? 'text-base sm:text-lg' : 'text-sm sm:text-base';
  const subClass =
    size === 'lg'
      ? 'text-[10px] sm:text-[11px] sm:tracking-[0.2em]'
      : 'text-[9px] sm:text-[10px] sm:tracking-[0.18em]';
  const logoFilter =
    variant === 'light'
      ? 'url(#layali-logo-knockout) brightness(0) saturate(100%) invert(27%) sepia(35%) saturate(1500%) hue-rotate(115deg) brightness(0.95) contrast(1.05)'
      : 'url(#layali-logo-knockout)';

  return (
    <Link href="/" className="group flex shrink-0 items-center gap-2.5 sm:gap-3">
      {brand.logoUrl ? (
        <div
          className={`shrink-0 bg-transparent ${frame} transition-transform group-hover:scale-[1.03]`}
          style={{
            filter: logoFilter,
            backgroundImage: `url(${brand.logoUrl})`,
            backgroundSize: `${zoom} auto`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
          role="img"
          aria-label={brand.nameLocal}
        />
      ) : (
        <div
          className={`flex items-center justify-center rounded-full bg-brand-primary text-brand-secondary ring-2 ring-brand-secondary/30 ${frame}`}
        >
          <span className="text-sm font-extrabold">{brand.nameEnglish.charAt(0)}</span>
        </div>
      )}
      <div className="block leading-tight">
        <p className={`font-extrabold tracking-tight ${nameClass} ${titleClass}`}>{brand.nameLocal}</p>
        <p className={`font-latin font-bold uppercase tracking-[0.16em] ${englishClass} ${subClass}`}>
          {brand.nameEnglish}
        </p>
      </div>
    </Link>
  );
}
