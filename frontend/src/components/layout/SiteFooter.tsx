import Link from 'next/link';
import { BrandLogo } from '@/components/ui/BrandLogo';
import type { SiteMarketing } from '@/types/marketing';
import { businessConfig } from '@/config/business';

export function SiteFooter({ marketing }: { marketing: SiteMarketing }) {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-brand-border bg-brand-primary-dark text-white">
      <div className="section-shell py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl space-y-4">
            <BrandLogo variant="dark" size="md" />
            <p className="text-sm leading-7 text-white/70">{marketing.footer.description}</p>
            <div className="flex flex-wrap gap-2">
              {marketing.footer.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold text-brand-secondary"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {marketing.footer.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-white/80 transition hover:text-brand-secondary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {year} {businessConfig.brand.nameLocal}. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
