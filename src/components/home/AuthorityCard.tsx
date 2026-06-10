import { Icon } from '@/components/ui/Icon';
import type { AuthorityCard as AuthorityCardType } from '@/types/marketing';

export function AuthorityCard({ card }: { card: AuthorityCardType }) {
  return (
    <article className="nama-card p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary-soft text-brand-primary">
        <Icon name={card.icon} className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-extrabold leading-8 text-brand-text">{card.title}</h3>
      <p className="mt-3 text-sm leading-7 text-brand-muted">{card.body}</p>
    </article>
  );
}
