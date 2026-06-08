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

Both services need a **Dockerfile at the build root**. Use this repo with a **source path** per service:

| Service  | Git repo | Source path | Port |
|----------|----------|-------------|------|
| backend  | `layalireal/layalireal` | `backend` | 3000 |
| frontend | `layalireal/layalireal` | `frontend` | 80 |

### Backend env vars

```bash
DATABASE_URL=postgres://layalibeauty:layalibeauty@layalibeauty_database:5432/layalibeauty?sslmode=disable
PORT=3000
```

### Frontend build arg

```bash
VITE_API_URL=https://your-backend-domain
```

> **Note:** `layalireal/backend` and `layalireal/frontend` repos are separate. If EasyPanel points to those repos, push code there and set each repo as the git source with root path `/`.
