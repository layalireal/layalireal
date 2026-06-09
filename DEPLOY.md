# EasyPanel — Layali Beauty Deploy Guide

## Problem: ma t9drch tdir Deploy / bouton ma khdemch

Try these in order (frontend service):

### 1. Reconnect GitHub

EasyPanel → **frontend** → **Source** → disconnect repo → connect again `layalireal/layalireal` → Branch **`main`**.

### 2. Stuck on "Building" or Deploy greyed out

1. **Stop** the service (if running)
2. Wait 30 seconds
3. **Settings** → confirm Branch `main`, Build Path `/frontend`, port **3000**
4. Click **Deploy** again

### 3. Build Path empty or `/` only

If your EasyPanel version has no Build Path field, use either:

| Option | Branch | Build Path | Notes |
|--------|--------|------------|-------|
| A | `frontend` | `/` | Orphan branch (see below) |
| B | `main` | `/` | Uses root `Dockerfile` (frontend only) |

Proxy port must still be **3000**.

### 4. Force a fresh build after push

```bash
# On your machine or after agent push — triggers new commit on main
git pull origin main
```

Then EasyPanel → **Deploy** (or enable **Auto Deploy** on push).

### 5. Build fails in logs

| Log message | Fix |
|-------------|-----|
| `Dockerfile: no such file` | Build Path = `/frontend` OR branch `frontend` with path `/` |
| `npm ci` / lockfile error | Use branch `main` (latest), redeploy |
| `EADDRINUSE` / health fail | Env `PORT=3000`, proxy port **3000** |
| `Commits not found` | Branch `main` + Build Path `/frontend` (not `frontend` branch) |

### 6. Site works but old design / 2 products only

Old container still running. **Stop** → **Deploy** → wait for `Ready`. Test: `/products/aroma-rose-ritual-kit` must load (not 404).

---

## Recommended setup (use this)

| Service  | Branch | Build Path | Proxy port | Build method |
|----------|--------|------------|------------|--------------|
| **frontend** | `main` | `/frontend` | **3000** | Dockerfile |
| backend  | `main` | `/backend` | 3000 | Dockerfile |

The storefront is **Next.js** (not Vite). The container listens on **port 3000**.

---

## Problem: `Dockerfile: no such file or directory`

EasyPanel looks for `Dockerfile` at the **root** of the cloned repo by default.
This monorepo keeps Dockerfiles inside `backend/` and `frontend/`.

**Fix:** set **Build Path** to `/frontend` (frontend service) or `/backend` (backend service).

---

## Problem: deploy succeeds but site is old / missing new products

1. EasyPanel → frontend → **Branch** must be `main` (not `frontend` unless you ran `./scripts/create-deploy-branches.sh` after the latest push)
2. **Build Path** = `/frontend`
3. Click **Deploy** again after `git push` to `main`
4. In build logs, confirm the commit is recent (not `3e2a57b` or old Vite commits)

**Verify live:** open `/products/aroma-rose-ritual-kit` — if 404, the server is still on an old build.

---

## Problem: Error 502 / 522 / 525 on layalibeauty.store

| Error | Cause | Fix |
|-------|-------|-----|
| **502** | Wrong proxy port | EasyPanel domain proxy → **3000** (not 80) |
| **522** | Origin not reachable | Frontend service not running, or wrong VPS IP in Cloudflare |
| **525** | SSL mismatch | Cloudflare SSL mode → **Full** |

### Checklist

1. **Cloudflare DNS** → A record `@` and `www` → your VPS IP (e.g. `187.124.12.89`)
2. **Cloudflare SSL** → **Full** (EasyPanel has HTTPS on origin)
3. Remove **Namecheap URL Forward** if enabled (conflicts with Cloudflare)
4. **EasyPanel → frontend → Domains** → `layalibeauty.store` + `www.layalibeauty.store`, proxy port **3000**
5. **EasyPanel → frontend** status **Running** (green)
6. **Build Path** = `/frontend`, **Branch** = `main`

---

## Alternative: deploy branches

Only if Build Path does not work in your EasyPanel version:

| Service  | Branch    | Build Path | Proxy port |
|----------|-----------|------------|------------|
| backend  | `backend` | `/`        | 3000 |
| frontend | `frontend`| `/`        | 3000 |

Or on branch **`main`** with Build Path **`/`** — root `Dockerfile` builds the storefront only.

Regenerate branches after code changes:

```bash
./scripts/create-deploy-branches.sh
git push origin backend frontend
```

If you see **"Commits not found"**, use `main` + Build Path instead.

---

## Environment variables

### Frontend (required for storefront)

```env
PORT=3000
NEXT_PUBLIC_ORDER_WEBHOOK_URL=
```

### Backend

```env
DATABASE_URL=postgres://layalibeauty:layalibeauty@layalibeauty_database:5432/layalibeauty?sslmode=disable
PORT=3000
```

---

## After changing settings

1. **Save**
2. Click **Deploy**
3. Watch logs until `Ready` / container starts on port 3000
4. Test: `https://layalibeauty.store` and `https://layalibeauty.store/products/aroma-rose-ritual-kit`

---

## Local Docker test (before EasyPanel)

```bash
cd frontend
docker build -t layalibeauty-frontend .
docker run -p 3000:3000 layalibeauty-frontend
```

Open http://localhost:3000
