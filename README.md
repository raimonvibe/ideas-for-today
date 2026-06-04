<p align="center">
  <img src="ideas.png" alt="Ideas for Today — daily activity dashboard" width="100%" />
</p>

<p align="center">
  <strong>🜂 Live site</strong> — <a href="https://example.com"><!-- TODO: replace href with your live URL -->link coming soon</a>
</p>

<h1 align="center">🜔 Ideas of What to Do Today</h1>

<p align="center">
  <em>A warm, tap-friendly dashboard for daily tasks — check off what you did, filter by mood or category, and see your streaks. Everything stays in your browser.</em>
</p>

<p align="center">
  <a href="https://github.com/raimonvibe/ideas-for-today">⎈ Repository</a>
  ·
  <a href="#-what-it-does">⌁ Features</a>
  ·
  <a href="#-stack--crafted-with">⚗ Stack</a>
  ·
  <a href="#-run-locally">▶ Run</a>
</p>

---

## 🜞 What it does

**Ideas of What to Do Today** is a personal habit-style board for the activities you actually care about — YouTube work, Christian projects, business checks, social posts, programming courses, and more.

| Glyph | Meaning |
|:-----:|---------|
| 🜁 | **Today view** — large gradient cards you tap to check off; instant visual feedback with accent rings and checkboxes |
| 🜃 | **Search** — find any task by name without scrolling through dozens of cards |
| 🜄 | **Category filters** — YouTube, Christian, Business, Programming, Social Media, Communication, People, Personal |
| 🜅 | **Overview** — done today, streak, all-time check-offs, active days, and per-day history |
| 🜆 | **Themes** — soft pink/cream light mode and deep forest-green dark mode (linear gradients throughout) |
| 🜇 | **Local only** — `localStorage` persistence; no account, no server, your data stays on your device |

### 📐 Responsive layout

Cards stay on every screen size; only the column count changes:

- **Phone** — 1 column, taller cards, easy taps  
- **Tablet (`md`)** — 2 columns  
- **Desktop (`xl`)** — 3 columns  
- **Wide (`2xl`)** — 4 columns  

The filter bar stays **sticky** while you scroll so search and categories are always one tap away.

---

## ⌁ Stack — crafted with

<p align="center">

[![Next.js](https://img.shields.io/badge/⟨⟩_Next.js_15-000?style=for-the-badge&logo=nextdotjs&logoColor=white&labelColor=111)](https://nextjs.org/docs)
[![React](https://img.shields.io/badge/⚛_React_19-61DAFB?style=for-the-badge&logo=react&logoColor=000&labelColor=0a0a0a)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/τ_TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/〜_Tailwind_3-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Lucide](https://img.shields.io/badge/✦_Lucide_React-F56565?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)
[![next-themes](https://img.shields.io/badge/☾_next--themes-7928CA?style=for-the-badge)](https://github.com/pacocoursey/next-themes)

</p>

| Layer | Role |
|-------|------|
| **Next.js App Router** | Pages, layout, fonts, production builds |
| **TypeScript** | Typed activities, storage, and UI |
| **Tailwind CSS** | Responsive grid, gradients, filters, cards |
| **Lucide React** | Per-activity icons |
| **next-themes** | System-aware light / dark toggle |
| **localStorage** | Daily completion history and streaks |

---

## ▶ Run locally

```bash
git clone https://github.com/raimonvibe/ideas-for-today.git
cd ideas-for-today
npm install
npm run dev
```

Open **http://localhost:3000** — Today is `/`, stats are at `/overview`.

| Script | Purpose |
|--------|---------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

### 🜉 Customize activities

Edit **`src/data/activities.ts`** — change `label`, `icon`, and `categories` for each entry in `ACTIVITIES`.

---

## 🜊 Project structure

```
src/
  app/                 → routes, global styles, layout
  components/          → cards, filters, header, theme toggle
  data/activities.ts   → tasks + categories
  hooks/useAppData.ts  → load / save / toggle state
  lib/storage.ts       → localStorage helpers
```

---

## 📜 License

Released under the **MIT License** — Copyright © 2026 **[raimonvibe](https://github.com/raimonvibe)**.

See [LICENSE](./LICENSE) for the full text.

---

<p align="center">
  <sub>Built with intention · data stays yours · 🜔</sub>
</p>
