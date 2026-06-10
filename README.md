# Layali Beauty — Frontend

Premium dynamic DTC storefront (COD only) built with Next.js, React, and Tailwind.

## Config

Edit these files only — the whole site adapts automatically:

- `src/config/businessInputs.ts` — brand, UAE market, theme colors
- `src/config/products.ts` — unlimited products

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Docker (EasyPanel)

| Setting | Value |
|---------|-------|
| Branch | `main` |
| Build Path | `/frontend` |
| Proxy port | `3000` |

```bash
docker build -t layalibeauty-frontend .
docker run -p 3000:3000 layalibeauty-frontend
```

## COD flow

Cart → Checkout popup → Upsell (12s) → Thank you → webhook

Set `NEXT_PUBLIC_ORDER_WEBHOOK_URL` to send orders to your sheet/webhook.
