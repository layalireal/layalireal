import Image from 'next/image';
import Link from 'next/link';
import { businessConfig } from '@/config/business';

const frameSizes = {
  sm: 'h-10 w-10',
  md: 'h-11 w-11 sm:h-12 sm:w-12',
  lg: 'h-12 w-12 sm:h-14 sm:w-14',
} as const;

const zoomScales = {
  sm: 'scale-[4.2]',
  md: 'scale-[4.5]',
  lg: 'scale-[4.8]',
} as const;

export function BrandLogo({
  variant = 'light',
  size = 'md',
}: {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}) {
  const { brand } = businessConfig;
  const titleClass = variant === 'dark' ? 'text-white' : 'text-brand-text';
  const nameClass = size === 'lg' ? 'text-base sm:text-lg' : 'text-sm sm:text-base';
  const subClass =
    size === 'lg'
      ? 'text-[10px] sm:text-[11px] sm:tracking-[0.2em]'
      : 'text-[9px] sm:text-[10px] sm:tracking-[0.18em]';

  const markBg = variant === 'dark' ? 'bg-brand-primary-dark' : 'bg-brand-primary';
  const ringClass =
    variant === 'dark' ? 'ring-brand-secondary/25' : 'ring-brand-secondary/35';

  return (
    <Link href="/" className="group flex shrink-0 items-center gap-3">
      {brand.logoUrl ? (
        <div
          className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full ${markBg} shadow-primary ring-1 ${ringClass} ${frameSizes[size]} transition-transform group-hover:scale-105`}
        >
          <Image
            src={brand.logoUrl}
            alt={brand.nameLocal}
            width={112}
            height={112}
            className={`${zoomScales[size]} max-w-none object-contain mix-blend-screen`}
            priority={size === 'lg'}
            unoptimized
          />
        </div>
      ) : (
        <div
          className={`flex items-center justify-center rounded-full bg-brand-primary text-brand-secondary shadow-primary ring-2 ring-brand-secondary/30 ${frameSizes[size]}`}
        >
          <span className="text-lg font-extrabold">{brand.nameEnglish.charAt(0)}</span>
        </div>
      )}
      <div className="block leading-tight">
        <p className={`font-extrabold tracking-tight ${nameClass} ${titleClass}`}>{brand.nameLocal}</p>
        <p className={`font-latin font-bold uppercase tracking-[0.16em] text-brand-secondary ${subClass}`}>
          {brand.nameEnglish}
        </p>
      </div>
    </Link>
  );
}
