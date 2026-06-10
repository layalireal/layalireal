import type { TrustBadge } from '@/types/marketing';

export function TrustBadges({ badges }: { badges: TrustBadge[] }) {
  return (
    <div className="grid max-w-md grid-cols-4 gap-2">
      {badges.map((badge) => (
        <div key={badge.id} className="glass-badge">
          <p className="text-[11px] font-extrabold tracking-tight text-brand-primary sm:text-xs">{badge.label}</p>
          {badge.sublabel && (
            <p className="mt-0.5 text-[10px] font-medium leading-tight text-brand-muted">{badge.sublabel}</p>
          )}
        </div>
      ))}
    </div>
  );
}
