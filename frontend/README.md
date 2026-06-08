# Layali Beauty — Frontend

React + Vite frontend for Layali Beauty.

## Environment

```bash
VITE_API_URL=https://your-backend-url
```

## Run locally

```bash
npm install
npm run dev
```

## Docker (EasyPanel)

```bash
docker build -t layalibeauty-frontend --build-arg VITE_API_URL=https://api.example.com .
docker run -p 8080:80 layalibeauty-frontend
```
