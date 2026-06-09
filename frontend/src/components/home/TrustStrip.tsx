import { Icon } from '@/components/ui/Icon';
import type { TrustBadge } from '@/types/marketing';

export function TrustStrip({ badges }: { badges: TrustBadge[] }) {
  return (
    <section className="border-t border-brand-border bg-brand-primary-soft py-8">
      <div className="section-shell">
        <div className="grid gap-4 sm:grid-cols-3">
          {badges.map((badge) => (
            <div key={badge.id} className="flex items-center gap-3 rounded-2xl border border-brand-border bg-white px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary text-brand-secondary">
                <Icon name={badge.icon} className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-brand-text">{badge.label}</p>
                {badge.sublabel && <p className="text-xs text-brand-muted">{badge.sublabel}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
