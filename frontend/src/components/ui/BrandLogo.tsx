import Image from 'next/image';
import Link from 'next/link';
import { businessConfig } from '@/config/business';

export function BrandLogo({
  variant = 'light',
  size = 'md',
}: {
  variant?: 'light' | 'dark';
  size?: 'md' | 'lg';
}) {
  const { brand } = businessConfig;
  const titleClass = variant === 'dark' ? 'text-white' : 'text-brand-text';
  const iconClass =
    size === 'lg'
      ? 'h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]'
      : 'h-14 w-14 sm:h-16 sm:w-16';
  const iconPx = size === 'lg' ? 72 : 64;
  const nameClass = size === 'lg' ? 'text-base sm:text-lg' : 'text-sm sm:text-base';
  const subClass =
    size === 'lg'
      ? 'text-[10px] sm:text-[11px] sm:tracking-[0.2em]'
      : 'text-[9px] sm:text-[10px] sm:tracking-[0.18em]';

  return (
    <Link href="/" className="group flex shrink-0 items-center gap-3">
      {brand.logoUrl ? (
        <Image
          src={brand.logoUrl}
          alt={brand.nameLocal}
          width={iconPx}
          height={iconPx}
          className={`${iconClass} shrink-0 object-contain transition-transform group-hover:scale-105 ${
            variant === 'dark' ? 'mix-blend-lighten' : 'mix-blend-screen'
          }`}
          priority={size === 'lg'}
        />
      ) : (
        <div
          className={`${iconClass} flex items-center justify-center rounded-full bg-brand-primary text-brand-secondary shadow-primary ring-2 ring-brand-secondary/30`}
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
