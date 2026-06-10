'use client';

import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { SiteMarketing } from '@/types/marketing';

export function FAQAccordion({ marketing }: { marketing: SiteMarketing }) {
  const [openId, setOpenId] = useState<string | null>(marketing.faq.items[0]?.id ?? null);

  return (
    <section id="faq" className="bg-white py-24">
      <div className="section-shell max-w-4xl">
        <SectionHeading
          eyebrow={marketing.faq.eyebrow}
          title={marketing.faq.headline}
          subtitle={marketing.faq.subheadline}
          className="mb-12"
        />
        <div className="space-y-3">
          {marketing.faq.items.map((item) => {
            const open = openId === item.id;
            return (
              <div key={item.id} className="overflow-hidden rounded-2xl border border-brand-border bg-brand-card">
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-start"
                >
                  <span className="font-extrabold text-brand-text">{item.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary-soft text-brand-primary">
                    <Icon name={open ? 'close' : 'plus'} className="h-4 w-4" />
                  </span>
                </button>
                {open && <p className="border-t border-brand-border px-5 pb-5 pt-4 text-sm leading-7 text-brand-muted">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
