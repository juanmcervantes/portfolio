# juanm-portfolio · Paper OS

Personal portfolio of Juan Cervantes, built as **Paper OS** — a desktop operating
system cut out of construction paper. Design system fuses two references:

- **thestrokes.com** — the retro-OS metaphor: menu bar with a live clock, draggable
  windows with title bars, joke popups, bitmap chrome typography.
- **South Park** — the material: flat construction-paper colors, hand-cut wobbly
  edges (SVG `feTurbulence` + `feDisplacementMap`), hard layered-paper shadows,
  stop-motion `steps(2)` wobble animations.

## Stack

Vite + vanilla TypeScript + hand-written CSS. No UI framework, no CSS framework,
no tracking. The window manager is ~150 lines ([src/wm.ts](src/wm.ts)).
Trilingual (EN/ES/PT) via a ~40-line i18n engine ([src/i18n.ts](src/i18n.ts)):
English lives in `index.html` (SEO + no-JS fallback), dictionaries only override.

Typefaces: [VT323](https://fonts.google.com/specimen/VT323) (OS chrome) and
[Luckiest Guy](https://fonts.google.com/specimen/Luckiest+Guy) (display), self-hosted
via Fontsource.

## Develop

```sh
npm install
npm run dev      # dev server
npm run build    # typecheck + static build in dist/
```

## Deploy (GitHub Pages)

Push to GitHub, enable Pages → "GitHub Actions" in repo settings; the workflow in
`.github/workflows/deploy.yml` builds and publishes `dist/` on every push to `main`.
`vite.config.ts` uses `base: './'` so the build works under any repo path.
