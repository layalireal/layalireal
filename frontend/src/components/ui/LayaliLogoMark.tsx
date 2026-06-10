const sizes = {
  sm: 'h-9 w-9',
  md: 'h-10 w-10 sm:h-11 sm:w-11',
  lg: 'h-11 w-11 sm:h-12 sm:w-12',
} as const;

export function LayaliLogoMark({
  size = 'md',
  variant = 'light',
  className = '',
}: {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  className?: string;
}) {
  const ringOpacity = variant === 'dark' ? 0.35 : 0.22;
  const emerald = '#134E3A';
  const gold = '#C8A55C';

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizes[size]} shrink-0 ${className}`}
      aria-hidden
    >
      <circle cx="24" cy="24" r="22.5" stroke={gold} strokeOpacity={ringOpacity} strokeWidth="0.75" />
      <path
        d="M31.5 24c0-7.2-5.4-12.8-12.2-13.8 4.8 2.2 7.9 7.1 7.9 12.5s-3.1 10.3-7.9 12.5c6.8-1 12.2-6.6 12.2-13.8Z"
        fill={emerald}
        stroke={gold}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path
        d="M27.2 20.4 28.1 23.1l2.9.2-2.2 1.7.8 2.8-2.5-1.6-2.5 1.6.8-2.8-2.2-1.7 2.9-.2.9-2.7Z"
        fill={gold}
      />
    </svg>
  );
}
