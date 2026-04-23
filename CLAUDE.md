# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build
npm run lint       # ESLint (next/core-web-vitals)
npm run tw-migration  # Print the Tailwind spacing migration guide
```

Node version: 24.14.0 (see `.nvmrc`). No test framework is configured.

## Architecture

**Lilia Makeup** is a static Next.js 13 portfolio site for a makeup artist. No backend or API calls — all data is hardcoded in `src/app/storage/allData.js` (12 portfolio entries with id, name, description, image paths).

**Stack:** Next.js 13.5 · TypeScript (strict) · Tailwind CSS · MUI 5 (Emotion) · React Icons

**Path alias:** `@/*` maps to `src/*`.

**Key layout:** `src/app/layout.tsx` wraps every page with `<Navbar>` and `<Footer>`. The main landing page is `src/app/page.tsx` → `<MainPage>`. Portfolio lives at `/users/works`, about at `/users`.

**Utility:** `src/lib/utils.ts` exports `cn()` (clsx + tailwind-merge) — use this for all className composition.

## Tailwind Spacing Token System

The project redefines Tailwind's spacing scale via CSS variables in `src/app/theme.css`. The new scale uses `1 unit = 2px` instead of the default `4px`.

**Migration rule: multiply old class values by 2.**
- `gap-4` (old 16px) → `gap-8` (new 16px)
- `p-6` (old 24px) → `p-12` (new 24px)

Tokens are defined from `--spacing-2` to `--spacing-32`. Run `npm run tw-migration` for the full reference table.

## Styling Conventions

- **Fonts:** `Sora` (body) and `Unbounded` (display), loaded via Next.js Google Fonts in `layout.tsx`.
- **Theme:** Dark with aurora gradients (pink/cyan). Global effects are in `src/app/globals.css` (glassmorphism classes `.glass-panel`, `.glass-card`, neon border `.neon-border`).
- MUI and Tailwind coexist — prefer Tailwind for layout/spacing, MUI for interactive components.
