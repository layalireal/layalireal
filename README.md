# Layali Beauty

Monorepo for Layali Beauty platform.

## Structure

- `backend/` — Node.js + Express API (port 3000)
- `frontend/` — Next.js DTC storefront (COD, UAE/AED, port 3000)

## Database

```bash
DATABASE_URL=postgres://layalibeauty:layalibeauty@layalibeauty_database:5432/layalibeauty?sslmode=disable
```

## EasyPanel deploy

See **[DEPLOY.md](./DEPLOY.md)** for full instructions and troubleshooting.

### Quick setup (recommended)

| Service  | Repo | Branch | Build Path | Proxy port |
|----------|------|--------|------------|------------|
| frontend | `layalireal/layalireal` | `main` | `/frontend` | `3000` |
| backend  | `layalireal/layalireal` | `main` | `/backend` | `3000` |

Build method: **Dockerfile**

After every code push to `main`, click **Deploy** in EasyPanel (frontend service).

### Frontend env vars

```bash
PORT=3000
NEXT_PUBLIC_ORDER_WEBHOOK_URL=
```

### Backend env vars

```bash
DATABASE_URL=postgres://layalibeauty:layalibeauty@layalibeauty_database:5432/layalibeauty?sslmode=disable
PORT=3000
```

## Refresh deploy branches (optional)

If you use the `frontend` / `backend` orphan branches instead of `main` + Build Path:

```bash
./scripts/create-deploy-branches.sh
```
