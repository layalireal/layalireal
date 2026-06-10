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
  const frameClass =
    size === 'lg'
      ? 'h-[4.25rem] w-[4.25rem] sm:h-20 sm:w-20'
      : 'h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]';
  const zoomClass = size === 'lg' ? 'w-[430%] max-w-none' : 'w-[400%] max-w-none';
  const iconPx = size === 'lg' ? 80 : 72;
  const nameClass = size === 'lg' ? 'text-base sm:text-lg' : 'text-sm sm:text-base';
  const subClass =
    size === 'lg'
      ? 'text-[10px] sm:text-[11px] sm:tracking-[0.2em]'
      : 'text-[9px] sm:text-[10px] sm:tracking-[0.18em]';
  const blendClass = variant === 'dark' ? 'mix-blend-lighten' : 'mix-blend-screen';

  return (
    <Link href="/" className="group flex shrink-0 items-center gap-3">
      {brand.logoUrl ? (
        <div className={`relative shrink-0 overflow-hidden ${frameClass}`} aria-hidden>
          <Image
            src={brand.logoUrl}
            alt=""
            width={iconPx}
            height={iconPx}
            className={`absolute left-1/2 top-1/2 h-auto -translate-x-1/2 -translate-y-1/2 object-contain ${zoomClass} ${blendClass} transition-transform group-hover:scale-110`}
            priority={size === 'lg'}
          />
        </div>
      ) : (
        <div
          className={`${frameClass} flex items-center justify-center rounded-full bg-brand-primary text-brand-secondary shadow-primary ring-2 ring-brand-secondary/30`}
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
      {brand.logoUrl ? <span className="sr-only">{brand.nameLocal}</span> : null}
    </Link>
  );
}
