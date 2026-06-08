# Layali Beauty

Monorepo for Layali Beauty platform.

## Structure

- `backend/` — Node.js + Express API (port 3000)
- `frontend/` — React + Vite app (nginx, port 80)

## Database

```bash
DATABASE_URL=postgres://layalibeauty:layalibeauty@layalibeauty_database:5432/layalibeauty?sslmode=disable
```

## EasyPanel deploy

See **[DEPLOY.md](./DEPLOY.md)** for full instructions.

### Quick setup (recommended)

| Service  | Repo | Branch    | Proxy port |
|----------|------|-----------|------------|
| backend  | `layalireal/layalireal` | `backend` | `3000` |
| frontend | `layalireal/layalireal` | `frontend` | `80` |

Build method: **Dockerfile** (default path)

### Backend env vars

```bash
DATABASE_URL=postgres://layalibeauty:layalibeauty@layalibeauty_database:5432/layalibeauty?sslmode=disable
PORT=3000
```

### Frontend env vars

```bash
PORT=80
VITE_API_URL=https://your-backend-domain
```
