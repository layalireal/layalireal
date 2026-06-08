type TrackingPayload = Record<string, string | number | boolean | undefined>;

export function trackEvent(eventName: string, payload: TrackingPayload = {}) {
  if (typeof window === 'undefined') return;

  const eventId = `${eventName}-${Date.now()}`;

  // Meta Pixel / TikTok / Snapchat hooks can listen here
  window.dispatchEvent(
    new CustomEvent('layali:track', {
      detail: { eventName, eventId, ...payload },
    }),
  );

  if (process.env.NODE_ENV === 'development') {
    console.info('[track]', eventName, payload);
  }
}
