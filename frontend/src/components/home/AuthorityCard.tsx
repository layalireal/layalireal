import { Icon } from '@/components/ui/Icon';
import type { AuthorityCard as AuthorityCardType } from '@/types/marketing';

export function AuthorityCard({ card }: { card: AuthorityCardType }) {
  return (
    <div className="rounded-3xl border border-brand-border bg-brand-card p-6 shadow-luxury">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary text-brand-accent">
        <Icon name={card.icon} className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold leading-8 text-brand-text">{card.title}</h3>
      <p className="mt-3 text-sm leading-7 text-brand-muted">{card.body}</p>
    </div>
  );
}
