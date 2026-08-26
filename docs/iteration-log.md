# Iteration log

## 2026-08-26 — Dante's Inferno sprint

- **Problem:** 50-minute judged landing page. One heat control must drive the whole site; Pride inverts to cold.
- **Reason:** Figma board is a photo dump of whole/exploded burgers, not separate layers. Masking a composite would fake the gimmick.
- **Scope:** Vite + React + TS + Tailwind v4. CSS/SVG burger. Five sections only. No cart, maps API, or animation library.
- **Risks:** Sticky slider covering mobile content. Keyboard lag if heat colour transitions are slow. Pride moment lost if it uses the same timing as 1–6.
- **Cut:** Concentric ring decoration behind the burger. Slider already names the rings.
- **Verification:** `npm run check` pass. `npm run lint` pass. `npm run build` pass. Browser: heat 1/6/7, Pride freeze, burger explode, 375px. Dock waits until slider slot has been seen once.
