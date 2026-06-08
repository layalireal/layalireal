import { businessConfig } from '@/config/business';

export function getThemeCssVariables(): Record<string, string> {
  const { design } = businessConfig;
  return {
    '--color-primary': design.primaryColor,
    '--color-primary-dark': design.primaryDarkColor,
    '--color-accent': design.accentColor,
    '--color-background': design.backgroundColor,
    '--color-card': design.cardColor,
    '--color-text': design.textColor,
    '--color-muted': design.mutedTextColor,
    '--color-border': design.borderColor,
  };
}

export function formatPrice(amount: number): string {
  const { currencySymbol } = businessConfig.market;
  return `${amount} ${currencySymbol}`;
}

export function formatPriceFrom(amount: number): string {
  return `يبدأ من ${formatPrice(amount)}`;
}
