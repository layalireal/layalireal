'use client';

import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import type { SiteMarketing } from '@/types/marketing';

export function FAQAccordion({ marketing }: { marketing: SiteMarketing }) {
  const [openId, setOpenId] = useState<string | null>(marketing.faq.items[0]?.id ?? null);

  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-accent">{marketing.faq.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-text">{marketing.faq.headline}</h2>
          <p className="mt-4 text-base leading-8 text-brand-muted">{marketing.faq.subheadline}</p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-brand-border bg-brand-card shadow-luxury">
          {marketing.faq.items.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className={index > 0 ? 'border-t border-brand-border' : ''}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-start"
                >
                  <span className="font-semibold text-brand-text">{item.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                    <Icon name={isOpen ? 'close' : 'plus'} className="h-4 w-4" />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-7 text-brand-muted">{item.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
