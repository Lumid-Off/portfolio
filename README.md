# lumid · portfolio

A minimalist black-and-white personal site. Built with React + Vite, animated with Framer Motion, iconography by Lucide.

> Live: deploy to Vercel in two clicks (see below).

---

## Features

- Clean monochrome aesthetic — glass cards, subtle aurora glow, animated grid
- Hero with avatar, glitch title, status dot, and fast-access buttons
- Devices section with **expandable spec sheets** for every phone in the collection
- OS, IDE, rig, and peripherals sections
- Mobile-first layout, touch-friendly tap targets, reduced-motion support
- Text selection disabled site-wide for a more app-like feel
- Zero runtime dependencies you don't see — only what's used

## Stack

| Layer        | Choice                          |
| ------------ | ------------------------------- |
| Framework    | React 18                        |
| Bundler      | Vite 5                          |
| Animation    | Framer Motion                   |
| Icons        | Lucide React                    |
| Styling      | Vanilla CSS (custom properties) |
| Type system  | JSX (no TypeScript)             |

## Getting started

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
```

Static output lands in `dist/`. Drop it into any static host.

## Deploying to Vercel

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com) → **Add New** → **Project** → import the repo.
3. Vercel auto-detects Vite. Defaults are fine: build = `npm run build`, output = `dist`.
4. Click **Deploy**.

## Avatar

Drop your photo at `public/avatar.jpg` — it loads automatically. If the file is missing, a stylized **L** placeholder shows up instead.

## Project layout

```
src/
├── App.jsx
├── main.jsx
├── styles.css
└── components/
    ├── Hero.jsx          — avatar, name, nicks, CTAs
    ├── Section.jsx       — animated section wrapper
    ├── Projects.jsx      — featured projects
    ├── Stack.jsx         — IDEs / tools
    ├── Systems.jsx       — operating systems
    ├── Devices.jsx       — phone collection (expandable)
    ├── Rig.jsx           — desktop specs
    ├── Peripherals.jsx   — mouse, keyboard, audio
    ├── Footer.jsx
    ├── Background.jsx    — grid + noise + vignette
    ├── FloatingIcons.jsx — ambient floating glyphs
    └── Spotlight.jsx     — cursor-tracking hover glow
```

## License

Personal portfolio. Feel free to use the structure as inspiration; please don't copy avatar, name, or content verbatim.

---

Built by [@lumid-off](https://github.com/lumid-off).
