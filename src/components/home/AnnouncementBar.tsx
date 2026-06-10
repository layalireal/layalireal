'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@/components/ui/Icon';

const icons = ['shield', 'heartHandshake', 'truck'] as const;

export function AnnouncementBar({ messages }: { messages: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (messages.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <div className="relative overflow-hidden bg-brand-primary text-white">
      <div className="section-shell py-3">
        <div className="relative flex h-8 items-center justify-center">
          {messages.map((text, i) => {
            const active = i === index;
            return (
              <div
                key={text}
                className={`absolute inset-x-0 flex items-center justify-center gap-2 px-2 text-center text-[11px] font-bold transition-all duration-500 sm:text-sm ${
                  active ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
                }`}
              >
                <Icon name={icons[i % icons.length]} className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                <span className="whitespace-normal leading-tight">{text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
