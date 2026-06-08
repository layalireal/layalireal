import { Icon } from '@/components/ui/Icon';
import type { TrustBadge } from '@/types/marketing';

export function TrustBadges({ badges }: { badges: TrustBadge[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {badges.map((badge) => (
        <div
          key={badge.id}
          className="rounded-2xl border border-brand-border bg-brand-card px-3 py-4 text-center shadow-luxury"
        >
          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
            <Icon name={badge.icon} className="h-5 w-5" />
          </div>
          <p className="text-xs font-medium text-brand-text sm:text-sm">{badge.label}</p>
        </div>
      ))}
    </div>
  );
}
