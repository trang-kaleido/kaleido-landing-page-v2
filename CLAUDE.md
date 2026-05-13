# Kaleido — IELTS Writing Task 2

## What this is
Static marketing/landing site for a Kaleido IELTS Writing Task 2 course.
Live at **kaleido.study** (Vercel, auto-deploys from `main`).

## Stack
- Pure HTML5 + inline CSS + vanilla JS — no framework, no build step
- Vercel static hosting: `buildCommand: null`, `cleanUrls: true`, `trailingSlash: false`
- Google Fonts: Cormorant Garamond (display serif) + DM Mono (mono UI)

## Site structure
```
/index.html          language selector (paper bg, hex mark, EN/VI stacked choices)
/en/index.html       English landing page (dark canvas, animated hex + questions)
/vi/index.html       Vietnamese landing page (same structure as EN)
/kaleido_tokens.css  design-token reference — CSS is inline in each page
```

## Design system
| Token | Value | Use |
|-------|-------|-----|
| `--ink` | `#111236` | Dark background, text on paper |
| `--paper` | `#F5F1EC` | Light background, text on ink |
| `--signal` | `#5B6FA6` | Accent blue |
| `--serif` | Cormorant Garamond | Headlines, body |
| `--mono` | DM Mono | Labels, kickers, UI chrome |

Vertex hues (hex diagram): material `#C9A87C`, progress `#A8C0B8`, collective `#B89BC0`, preservation `#C8BFA2`, sustainable `#9BB4C9`, individual `#C99B9B`.

## Dev reference files (not deployed)
`hexagon_preview.html`, `kaleido_symbols.html`, `kaleido_six_forces_icons.html`

## Rules
- No build tools. Edit HTML/CSS/JS directly.
- CSS stays inline per page — don't move to external files unless asked.
- Don't split pages into components.
- Match existing design language for any new UI. Check token table above.
- Deploy: `git push kaleido main`
- Docs: `.claude/docs/` — read `index.md` first, then the matched file.
