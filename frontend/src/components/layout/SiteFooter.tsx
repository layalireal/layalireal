import { BrandLogo } from '@/components/ui/BrandLogo';
import type { SiteMarketing } from '@/types/marketing';
import { businessInputs } from '@/config/businessInputs';

export function SiteFooter({ marketing }: { marketing: SiteMarketing }) {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-brand-border bg-brand-card px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl space-y-4">
            <BrandLogo />
            <p className="text-sm leading-7 text-brand-muted">{marketing.footer.description}</p>
            <div className="flex flex-wrap gap-2">
              {marketing.footer.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-brand-border bg-brand-background px-3 py-1 text-xs font-medium text-brand-primary"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {marketing.footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-brand-text hover:text-brand-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-brand-muted">
          © {year} {businessInputs.brand.nameLocal}. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
