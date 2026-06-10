const sizes = {
  sm: 'h-9 w-9',
  md: 'h-10 w-10 sm:h-11 sm:w-11',
  lg: 'h-11 w-11 sm:h-12 sm:w-12',
} as const;

const PETAL_ROTATIONS = [0, 60, 120, 180, 240, 300] as const;

export function LayaliLogoMark({
  size = 'md',
  variant = 'light',
  className = '',
}: {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  className?: string;
}) {
  const innerRingOpacity = variant === 'dark' ? 0.38 : 0.28;
  const emerald = '#134E3A';
  const emeraldLight = '#1A5C45';
  const gold = '#C8A55C';

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizes[size]} shrink-0 ${className}`}
      aria-hidden
    >
      <circle cx="24" cy="24" r="21.5" fill={emerald} stroke={gold} strokeWidth="1.35" />
      <circle
        cx="24"
        cy="24"
        r="17.5"
        fill="none"
        stroke={gold}
        strokeOpacity={innerRingOpacity}
        strokeWidth="0.7"
      />
      <g transform="translate(24 24)" stroke={gold} strokeWidth="0.85" fill={emeraldLight}>
        {PETAL_ROTATIONS.map((rotation) => (
          <g key={rotation} transform={`rotate(${rotation})`}>
            <ellipse cx="0" cy="-8.5" rx="4.2" ry="7.8" />
          </g>
        ))}
      </g>
      <circle cx="24" cy="24" r="4.2" fill={gold} />
      <circle cx="24" cy="24" r="1.6" fill={emerald} />
    </svg>
  );
}
