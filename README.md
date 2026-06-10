# Layali Beauty — Backend

API backend for Layali Beauty (Node.js + Express + PostgreSQL).

## Environment

Copy `.env.example` to `.env` and adjust values as needed.

```bash
DATABASE_URL=postgres://layalibeauty:layalibeauty@layalibeauty_database:5432/layalibeauty?sslmode=disable
PORT=3000
```

## Run locally

```bash
npm install
npm start
```

## Docker (EasyPanel)

```bash
docker build -t layalibeauty-backend .
docker run -p 3000:3000 --env-file .env layalibeauty-backend
```

## Endpoints

- `GET /` — API info
- `GET /health` — health check with database status
