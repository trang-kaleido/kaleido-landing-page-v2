# Architecture

## Stack
- Pure HTML5 + CSS + vanilla JS — no framework, no build step
- Inline `<style>` blocks in every page (design tokens duplicated per file)
- Vercel static hosting (`buildCommand: null`, `outputDirectory: "."`)
- `cleanUrls: true` → `/en/index.html` served at `/en`

## Directory layout
```
/
├── index.html              language selector (root entry point)
├── en/
│   └── index.html          English landing page
├── vi/
│   └── index.html          Vietnamese landing page
├── kaleido_tokens.css      design-token CSS reference (not imported anywhere)
├── vercel.json             static hosting config
├── test/
│   └── smoke.js            basic smoke test
└── dev reference (not served as product pages):
    hexagon_preview.html
    kaleido_symbols.html
    kaleido_six_forces_icons.html
```

## Page anatomy (en/ and vi/)
Each landing page is a single self-contained HTML file:
1. **Canvas layer** (`#canvas-layer`) — fixed, full-viewport, drifting question text
2. **Sections** — `#hero`, `#trap`, `#wound`, `#medicine`, `#beat32`, `#arrival`, `#one-idea`, `#for-example`, `#release`
3. **Hex diagram** (`#hex-svg`) — SVG, animates on scroll in the `#beat32` section
4. **Scroll reveal** — `IntersectionObserver` adds `.visible` class to `.reveal` elements

## Language selector (index.html)
- Paper (`#F5F1EC`) background, not dark canvas
- Hex SVG mark (three concentric hexagons + signal-blue dot)
- Ghost IELTS questions scattered in background via JS (opacity ~0.028)
- Stacked choices: hover fills row with `#111236`, language text turns paper

## Design tokens (inline in every page)
See `CLAUDE.md` for the token table. `kaleido_tokens.css` is a standalone reference only.

## Routing
| URL | File |
|-----|------|
| `kaleido.study` | `index.html` |
| `kaleido.study/en` | `en/index.html` |
| `kaleido.study/vi` | `vi/index.html` |
