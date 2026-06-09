import Image from 'next/image';
import Link from 'next/link';
import { businessConfig } from '@/config/business';

export function BrandLogo({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const { brand } = businessConfig;
  const titleClass = variant === 'dark' ? 'text-white' : 'text-brand-text';

  return (
    <Link href="/" className="group flex shrink-0 items-center gap-2.5">
      {brand.logoUrl ? (
        <Image
          src={brand.logoUrl}
          alt={brand.nameLocal}
          width={44}
          height={44}
          className="h-11 w-11 object-contain drop-shadow-sm transition-transform group-hover:scale-105"
        />
      ) : (
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary text-brand-secondary shadow-primary ring-2 ring-brand-secondary/30">
          <span className="text-sm font-extrabold">{brand.nameEnglish.charAt(0)}</span>
        </div>
      )}
      <div className="block leading-tight">
        <p className={`text-sm font-extrabold tracking-tight sm:text-base ${titleClass}`}>{brand.nameLocal}</p>
        <p className="font-latin text-[9px] font-bold uppercase tracking-[0.16em] text-brand-secondary sm:text-[10px] sm:tracking-[0.18em]">
          {brand.nameEnglish}
        </p>
      </div>
    </Link>
  );
}
