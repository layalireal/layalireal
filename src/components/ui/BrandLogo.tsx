import Link from 'next/link';
import { businessConfig } from '@/config/business';
import { LayaliLogoMark } from '@/components/ui/LayaliLogoMark';

export function BrandLogo({
  variant = 'light',
  size = 'md',
}: {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}) {
  const { brand } = businessConfig;
  const titleClass = variant === 'dark' ? 'text-white' : 'text-brand-primary';
  const englishClass = variant === 'dark' ? 'text-brand-secondary' : 'text-brand-primary';
  const nameClass = size === 'lg' ? 'text-base sm:text-lg' : 'text-sm sm:text-base';
  const subClass =
    size === 'lg'
      ? 'text-[10px] sm:text-[11px] sm:tracking-[0.2em]'
      : 'text-[9px] sm:text-[10px] sm:tracking-[0.18em]';

  return (
    <Link href="/" className="group flex shrink-0 items-center gap-2.5 sm:gap-3">
      <LayaliLogoMark
        size={size}
        variant={variant}
        className="transition-transform group-hover:scale-[1.04]"
      />
      <div className="block leading-tight">
        <p className={`font-extrabold tracking-tight ${nameClass} ${titleClass}`}>{brand.nameLocal}</p>
        <p className={`font-latin font-bold uppercase tracking-[0.16em] ${englishClass} ${subClass}`}>
          {brand.nameEnglish}
        </p>
      </div>
    </Link>
  );
}
