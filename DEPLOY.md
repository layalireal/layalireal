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
| frontend | `frontend`| `/`        | `80` |

If you see **"Commits not found"**, use Option A or reconnect GitHub in EasyPanel Settings.

## Environment variables

### Backend
```env
DATABASE_URL=postgres://layalibeauty:layalibeauty@layalibeauty_database:5432/layalibeauty?sslmode=disable
PORT=3000
```

### Frontend
```env
PORT=80
VITE_API_URL=https://YOUR-BACKEND-DOMAIN
```

`VITE_API_URL` must be set as a **build argument** or env var before build.

## After changing settings

1. Save
2. Click **Deploy**
3. Check logs — `GIT_SHA` should NOT be `3e2a57b` (old README-only commit)
