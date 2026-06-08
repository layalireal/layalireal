# EasyPanel — Layali Beauty Deploy Guide

## Problem: `Dockerfile: no such file or directory`

EasyPanel looks for `Dockerfile` at the **root of the cloned repo** by default.
This monorepo keeps Dockerfiles inside `backend/` and `frontend/`.

## Fix (choose ONE option)

### Option A — Use deploy branches (recommended, easiest)

| Service  | Git repo | Branch    | Proxy port |
|----------|----------|-----------|------------|
| backend  | `layalireal/layalireal` | `backend` | `3000` |
| frontend | `layalireal/layalireal` | `frontend` | same as `PORT` env (default `80`) |

Build method: **Dockerfile** (path = `Dockerfile`, default)

### Option B — Use `main` branch with paths

| Service  | Branch | Root path  | Dockerfile path   | Proxy port |
|----------|--------|------------|-------------------|------------|
| backend  | `main` | `backend`  | `Dockerfile`      | `3000` |
| frontend | `main` | `frontend` | `Dockerfile`      | `80` or `PORT` |

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
