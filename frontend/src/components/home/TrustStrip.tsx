import { Icon } from '@/components/ui/Icon';
import type { TrustBadge } from '@/types/marketing';

export function TrustStrip({ badges }: { badges: TrustBadge[] }) {
  return (
    <section className="px-4 pb-12 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="flex items-center gap-4 rounded-3xl border border-brand-border bg-brand-card p-5 shadow-luxury"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
              <Icon name={badge.icon} className="h-5 w-5" />
            </div>
            <p className="text-sm font-medium leading-7 text-brand-text">{badge.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
