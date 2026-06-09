# EasyPanel — دليل سريع (عربي)

الموقع واقف؟ جرّب **الطريقة 1** أولاً. إلا ما خدمش الـ build فالسيرفر، استعمل **الطريقة 2** (صورة جاهزة).

---

## الطريقة 1 — Git + Dockerfile (عادي)

### الإعدادات (انسخيها كما هي)

| الحقل | القيمة |
|-------|--------|
| المصدر | GitHub `layalireal/layalireal` |
| Branch | `frontend` |
| Build Path | `/` |
| Build method | **Dockerfile** |
| Dockerfile | `Dockerfile` |
| Proxy port | **3000** |

### Environment (مهم)

```env
PORT=3000
HOSTNAME=0.0.0.0
```

**ما تحطيش** `NODE_ENV=production` فوق.

### الخطوات

1. **Stop** الخدمة
2. **Deploy**
3. استنى 5–10 دقائق
4. **Domains** → port **3000**
5. افتح https://layalibeauty.store

### إلا Branch `frontend` ما خدمش

| الحقل | القيمة |
|-------|--------|
| Branch | `main` |
| Build Path | `/frontend` |

---

## الطريقة 2 — صورة جاهزة (الأحسن إلا الـ build كيفشل) ⭐

GitHub Actions كيبني الصورة فالسحابة — السيرفر ديالك ما كيبني والو.

### الإعدادات

1. EasyPanel → خدمة **frontend**
2. **Source** → غيّر من Git إلى **Docker Image**
3. Image:

```
ghcr.io/layalireal/layalireal-frontend:latest
```

4. Proxy port: **3000**
5. Environment:

```env
PORT=3000
HOSTNAME=0.0.0.0
```

6. **Deploy**

> أول مرة: سير لـ GitHub → Actions → شوف workflow **Build frontend Docker image** خاصو يكون أخضر (بعد push لـ main).

### إلا الصورة private

GitHub → Packages → layalireal-frontend → Package settings → Change visibility to **Public**

---

## 502 Bad Gateway — حل سريع

1. الخدمة **frontend** (ماشي backend)
2. Status = **Running** (أخضر)
3. Domains → port **3000**
4. Stop → Deploy

---

## شنو تصلّي ليا إلا باقي ما خدمش

صورة من **Build logs** (آخر 20 سطر) + واش كتستعمل Git ولا Docker Image.
