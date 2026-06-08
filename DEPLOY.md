# EasyPanel — Layali Beauty Deploy Guide

## Problem: `Dockerfile: no such file or directory`

EasyPanel looks for `Dockerfile` at the **root of the cloned repo** by default.
This monorepo keeps Dockerfiles inside `backend/` and `frontend/`.

## Fix (choose ONE option)

### Option A — `main` branch + Build Path (most reliable)

| Service  | Branch | Build Path | Proxy port |
|----------|--------|------------|------------|
| backend  | `main` | `/backend` | `3000` |
| frontend | `main` | `/frontend` | `80` |

Build method: **Dockerfile**

### Option B — Deploy branches

| Service  | Branch    | Build Path | Proxy port |
|----------|-----------|------------|------------|
| backend  | `backend` | `/`        | `3000` |
| frontend | `frontend`| `/`        | `3000` |

If you see **"Commits not found"**, use Option A or reconnect GitHub in EasyPanel Settings.

## Environment variables

### Backend
```env
DATABASE_URL=postgres://layalibeauty:layalibeauty@layalibeauty_database:5432/layalibeauty?sslmode=disable
PORT=3000
```

### Frontend
```env
PORT=3000
NEXT_PUBLIC_ORDER_WEBHOOK_URL=
```

## Cloudflare Error 522 / 525

If you see **Error 522** or **525** on `layalibeauty.store`:

1. **Cloudflare DNS** → A record `@` and `www` → `187.124.12.89` (your VPS IP)
2. **Cloudflare SSL** → mode **Full** (EasyPanel has HTTPS on origin)
3. **Remove Namecheap URL Forward** on the domain (conflicts with Cloudflare)
4. **EasyPanel → frontend → Domains** → add `layalibeauty.store` + `www.layalibeauty.store`, proxy port **3000**
5. **EasyPanel → frontend** must be **Running** (green) — redeploy if needed
6. **Build Path** = `/frontend`, branch = `main`

## After changing settings

1. Save
2. Click **Deploy**
3. Check logs — `GIT_SHA` should NOT be `3e2a57b` (old README-only commit)
