import type { TrustBadge, AuthorityCard } from '@/types/marketing';

type IconName = TrustBadge['icon'] | AuthorityCard['icon'] | 'menu' | 'bag' | 'arrow' | 'quote' | 'plus' | 'close' | 'star';

const paths: Record<IconName, string> = {
  shield: 'M12 2l8 3v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V5l8-3z',
  leaf: 'M12 2C8 8 4 10 4 16c4-2 6-4 8-8 2 4 4 6 8 8 0-6-4-8-8-14z',
  flask: 'M10 2h4l1 7-4 8-4-8 1-7zm0 11h4',
  heart: 'M12 20s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z',
  truck: 'M3 6h11v9H3V6zm12 2h3l2 3v4h-5V8zM7 18a2 2 0 1 0 0 .01M17 18a2 2 0 1 0 0 .01',
  clock: 'M12 8v5l3 2M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z',
  menu: 'M4 7h16M4 12h16M4 17h16',
  bag: 'M7 7V5a5 5 0 0 1 10 0v2h2l-1 14H6L5 7h2zm3-2a3 3 0 0 1 6 0v2H10V5z',
  arrow: 'M5 12h12M13 6l6 6-6 6',
  quote: 'M7 8h4a2 2 0 0 1 2 2v5H7V8zm8 0h4a2 2 0 0 1 2 2v5h-6V8z',
  plus: 'M12 5v14M5 12h14',
  close: 'M6 6l12 12M18 6L6 18',
  star: 'M12 3l2.8 6.5L22 10.5l-5 4.5 1.5 7L12 18.5 5.5 22 7 15 2 10.5l7.2-1L12 3z',
};

export function Icon({
  name,
  className = 'h-5 w-5',
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d={paths[name]} />
    </svg>
  );
}
