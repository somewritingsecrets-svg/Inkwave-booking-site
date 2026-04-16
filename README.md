# 🌊 InkWave Edits — Booking Website

An ocean-themed, cinematic booking website for the editing service brand **InkWave Edits**.

---

## 📁 File Structure

```
inkwave/
├── server.js           ← Express backend (Node.js)
├── package.json
├── bookings.json       ← Auto-created on first booking (JSON "database")
└── public/
    ├── index.html      ← Full frontend (landing + packages + booking)
    └── admin.html      ← Admin panel (all bookings)
```

---

## 🚀 Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v16 or higher

### Steps

```bash
# 1. Enter the project folder
cd inkwave

# 2. Install dependencies (just Express)
npm install

# 3. Start the server
npm start
```

Server starts at → **http://localhost:3000**

---

## 🔗 Pages

| URL | Description |
|-----|-------------|
| `http://localhost:3000` | Main website (landing + booking) |
| `http://localhost:3000/admin` | Admin panel — view/delete all bookings |

---

## ✨ Features

- **Ocean canvas background** — animated waves + floating particles
- **Water ripple loader** — plays on first load
- **Sound toggle** — synthesized ocean ambience (Web Audio API, no files needed)
- **1 slot per day** — enforced on both frontend + backend
- **JSON persistence** — bookings survive server restarts
- **Admin panel** — see all bookings with stats, delete any slot
- **Mobile-first** — fully responsive for Instagram audiences
- **Scroll reveal animations** — smooth entrance for each section

---

## 📦 Packages Shown

| Package | Price | Duration |
|---------|-------|----------|
| Ink Wave | ₹599 | Up to 60s reel |
| Dreamy Dive | ₹1299 | Up to 3 min cinematic |

*(Edit prices/descriptions in `public/index.html` → packages section)*

---

## 🎨 Customisation

- **Brand name / tagline** → `index.html` hero section
- **Prices** → `.pkg-price` in packages section
- **Genres** → `<select id="fGenre">` in booking form
- **Colours** → CSS variables at top of `<style>` in `index.html`
- **Admin password** *(optional)* → add basic auth middleware in `server.js`

---

## 🔒 Security Note

The `/admin` route has no password by default. For production, add basic auth:

```js
// npm install express-basic-auth
const basicAuth = require('express-basic-auth');
app.use('/admin', basicAuth({ users: { admin: 'yourpassword' }, challenge: true }));
```

---

*Built with love and ocean energy 🌊*
