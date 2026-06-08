import { businessInputs } from '@/config/businessInputs';

export function getThemeCssVariables(): Record<string, string> {
  const { design } = businessInputs;
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
  const { currencySymbol } = businessInputs.market;
  return `يبدأ من ${amount} ${currencySymbol}`;
}
