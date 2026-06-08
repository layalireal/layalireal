import { Icon } from '@/components/ui/Icon';

export function AnnouncementBar({ text }: { text: string }) {
  return (
    <div className="bg-brand-primary px-4 py-2.5 text-center text-sm text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2">
        <Icon name="shield" className="h-4 w-4 text-brand-accent" />
        <span>{text}</span>
      </div>
    </div>
  );
}
