import {
  ShieldCheck,
  Leaf,
  FlaskConical,
  Heart,
  HeartHandshake,
  Truck,
  Clock,
  Menu,
  ShoppingBag,
  ArrowLeft,
  Quote,
  Plus,
  X,
  Star,
  Award,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import type { TrustBadge, AuthorityCard } from '@/types/marketing';

export type IconName =
  | TrustBadge['icon']
  | AuthorityCard['icon']
  | 'menu'
  | 'bag'
  | 'arrow'
  | 'quote'
  | 'plus'
  | 'close'
  | 'star'
  | 'award'
  | 'sparkles'
  | 'heartHandshake';

const iconMap: Record<IconName, LucideIcon> = {
  shield: ShieldCheck,
  leaf: Leaf,
  flask: FlaskConical,
  heart: Heart,
  heartHandshake: HeartHandshake,
  truck: Truck,
  clock: Clock,
  menu: Menu,
  bag: ShoppingBag,
  arrow: ArrowLeft,
  quote: Quote,
  plus: Plus,
  close: X,
  star: Star,
  award: Award,
  sparkles: Sparkles,
};

export function Icon({
  name,
  className = 'h-5 w-5',
}: {
  name: IconName;
  className?: string;
}) {
  const Lucide = iconMap[name];
  return <Lucide className={className} strokeWidth={2} aria-hidden />;
}
