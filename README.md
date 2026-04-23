# Lilia Makeup — Portfolio Website

A luxurious, dark-themed portfolio site for makeup artist **Lilia Dionísio**, built with Next.js 14, TypeScript, and Tailwind CSS. The site showcases her makeup artistry work through a responsive gallery, a bio page, and a dynamic detail view for each portfolio entry.

---

## Live Features

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section with CTA buttons, stats bar (clients · experience · satisfaction), and featured content cards |
| Portfolio | `/users/works` | Responsive 3-column gallery grid with 3:4 cover images, cinematic gradient overlay, and hover info panel |
| Work Detail | `/users/works/[id]` | Dynamic page per work with image gallery and description |
| About | `/users` | Artist bio with personal photos and makeup philosophy |
| Error | `/error` | Fallback page with animated loader and carousel |

---

## Tech Stack

| Technology | Version | Role |
|------------|---------|------|
| Next.js | 14.2 | Framework (App Router) |
| React | 18.2 | UI runtime |
| TypeScript | 5.2 | Type safety (strict mode) |
| Tailwind CSS | 3.3 | Utility-first styling |
| clsx + tailwind-merge | latest | Class composition |
| React Icons | 4.11 | Social media icons |
| Node.js | 24.14 | Runtime (see `.nvmrc`) |

---

## Project Structure

```
lilia/
├── public/
│   └── images/
│       ├── lilia/          # Artist personal photos
│       ├── workpic/        # Portfolio work images
│       ├── fatima/         # Client work photos
│       ├── laura/          # Client work photos
│       └── background_pic/ # Section backgrounds
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home entry point → <MainPage>
│   │   ├── layout.tsx            # Root layout (Navbar + Footer + fonts)
│   │   ├── globals.css           # Global styles and component classes
│   │   ├── theme.css             # Custom CSS spacing variables
│   │   ├── error/
│   │   │   └── page.tsx          # Error fallback page
│   │   ├── components/
│   │   │   ├── MainPage.tsx      # Hero section + featured cards
│   │   │   ├── Profilepic.tsx    # Optimized image wrapper
│   │   │   ├── Description.tsx   # Text description component
│   │   │   ├── Details.tsx       # Detail text variant
│   │   │   ├── Loader.tsx        # Animated spinner
│   │   │   ├── Slide.tsx         # Auto-rotating carousel (client)
│   │   │   ├── ErrorPage.tsx     # 404 display component
│   │   │   ├── navbar.tsx        # Sticky navigation bar
│   │   │   ├── Footer.tsx        # Footer with social links
│   │   │   ├── workpic.tsx       # Portfolio gallery grid
│   │   │   ├── MyBio/
│   │   │   │   └── index.tsx     # About page content sections
│   │   │   ├── card/
│   │   │   │   ├── main-card.tsx   # Grid layout wrapper
│   │   │   │   └── neon-card.tsx   # Glassmorphism card with neon border
│   │   │   └── sections/
│   │   │       └── main-sections.tsx # Glass panel section wrapper
│   │   ├── users/
│   │   │   ├── page.tsx          # About/bio page
│   │   │   ├── works/
│   │   │   │   └── page.tsx      # Portfolio gallery page
│   │   │   └── [main]/
│   │   │       └── page.jsx      # Dynamic work detail page
│   │   └── storage/
│   │       └── allData.js        # Portfolio data (hardcoded)
│   └── lib/
│       └── utils.ts              # cn() utility function
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Run linter
npm run lint

# Print Tailwind spacing migration guide
npm run tw-migration
```

> **Requires Node 24.14.0.** Use `nvm use` if you have nvm installed.

---

## Architecture Decisions

### Static Data Layer

All portfolio content lives in a single file — [`src/app/storage/allData.js`](src/app/storage/allData.js) — as a plain JavaScript array. There is no backend, database, or CMS. This keeps the project zero-dependency on external services and fully deployable as a static export.

```js
// allData.js — portfolio entry shape
{
  id: 1,
  name: "Teresa",
  description: "...",
  details: "...",          // Portuguese description
  image1: "/images/...",   // primary image
  image2: ["/images/..."]  // gallery array
}
```

To add a new work, append an object to the array and drop the images in `public/images/`.

### Utility: `cn()`

All class composition uses the `cn()` helper from [`src/lib/utils.ts`](src/lib/utils.ts), which combines `clsx` and `tailwind-merge` to safely merge Tailwind classes without conflicts:

```typescript
import { cn } from "@/lib/utils";

// tailwind-merge resolves conflicting classes automatically
<div className={cn("p-4 text-sm", className, isActive && "bg-pink-500")} />
```

Never concatenate Tailwind classes with template literals — use `cn()` to avoid specificity issues.

### Custom Spacing Scale

[`src/app/theme.css`](src/app/theme.css) redefines Tailwind's spacing via CSS variables with **`1 unit = 2px`** (default is 4px). All spacing values are doubled compared to standard Tailwind.

```css
/* theme.css */
:root {
  --spacing-4: 8px;   /* Tailwind default would be 16px */
  --spacing-8: 16px;  /* Tailwind default would be 32px */
}
```

**Migration rule:** multiply old class values by 2.
- `gap-4` (old 16px) → `gap-8` (new 16px)
- `p-6` (old 24px) → `p-12` (new 24px)

Run `npm run tw-migration` for the full reference table.

### Component Rendering Strategy

Components are Server Components by default (Next.js 14 App Router). Client Components are only used when browser APIs or React hooks are needed:

```tsx
// Slide.tsx — must be a Client Component because it uses useState + setInterval
"use client";

export function Slide() {
  const [current, setCurrent] = useState(0);
  // auto-rotates every 5 seconds
}
```

Everything else renders on the server, keeping the JS bundle lean.

### Reusable Layout Primitives

Three layout primitives compose the page structure:

- **`MainCard`** — Responsive grid wrapper (1-col mobile → 2-col desktop)
- **`MainSections`** — Glass-panel content block (applies `.glass-card` + padding)
- **`NeonCard`** — Visual card with neon glow border and optional background image

```tsx
// Typical page section composition
<MainCard>
  <NeonCard backgroundImage="/images/bg.jpg">
    <MainSections>
      <Description description="..." />
    </MainSections>
  </NeonCard>
</MainCard>
```

---

## Styling System

### Global Component Classes

Defined in [`src/app/globals.css`](src/app/globals.css) via Tailwind's `@layer components`:

| Class | Effect |
|-------|--------|
| `.glass-panel` | Glassmorphism with gradient + backdrop blur |
| `.glass-card` | Glass card variant (lighter) |
| `.neon-border` | Animated neon-pulse glow border (pink/cyan, `neon-pulse` keyframe) |
| `.tilt-card` | 3D perspective hover tilt |
| `.bg-aurora` | Radial + linear aurora gradient background |
| `.text-glow` | Pink/cyan text shadow glow |
| `.text-gradient` | Pink → fuchsia → violet gradient text fill |
| `.dot-grid` | Subtle dot-pattern overlay (40px grid, white @ 5.5% opacity) |
| `.orb` | Blurred floating orb (`blur(80px)`, `orb-float` keyframe) |
| `.orb--pink` | Pink variant of `.orb` |
| `.orb--cyan` | Cyan variant of `.orb` |
| `.orb--purple` | Purple variant of `.orb` (used in MainPage hero) |

### Fonts

Loaded via Next.js Google Fonts in [`layout.tsx`](src/app/layout.tsx):

- **Sora** — body text
- **Unbounded** — display/headings

Applied as CSS variables (`--font-body`, `--font-display`) and mapped to Tailwind's `font-body` / `font-display` utilities.

---

## Portfolio Data

The gallery is driven by [`src/app/storage/allData.js`](src/app/storage/allData.js). Current entries:

| # | Name |
|---|------|
| 1 | Teresa |
| 2 | Jane |
| 3 | Fatima |
| 4 | Emily |
| 5 | Michaela |
| 6 | Madalena |
| 7 | Laura |
| 8 | Ava |
| 9 | Ely |
| 10 | Lily |
| 11 | Sophia |

---

## Key Components Reference

### `Profilepic`

Thin wrapper around `next/image` with consistent styling:

```tsx
<Profilepic
  src="/images/lilia/main.jpg"
  alt="Lilia Dionísio"
  priority // set on above-the-fold images
/>
```

### `NeonCard`

```tsx
<NeonCard backgroundImage="/images/background_pic/pexel.jpg">
  {children}
</NeonCard>
```

Renders a glass card with the animated `.neon-border` glow. When `backgroundImage` is provided, two overlay layers are rendered: a dark cinematic gradient (always visible) and a pink/purple/cyan tint that fades in on hover (`group-hover:opacity-100`).

### `Loader`

```tsx
<Loader size="medium" /> // "small" | "medium" | "large"
```

Animated nested-ring spinner with gradient glow. Used on error and loading states.

---

## Navigation

The sticky `Navbar` includes:
- Logo + "Lilia Makeup" / "Artistry Studio" brand link (→ `/`)
- Horizontal nav links (hidden on mobile): Início · Portfólio · Sobre
- Social icons (hidden on small screens) with hover brand colors:
  - Facebook → `hover:text-blue-400`
  - Instagram → `hover:text-pink-400`
  - TikTok → `hover:text-white`
  - WhatsApp → `hover:text-emerald-400`
- **"Reservar" CTA button** (hidden on mobile) — links directly to WhatsApp booking

The `Footer` is a 3-column grid:
- **Brand** — tagline + short description
- **Navegação** — links to Início, Portfólio, Sobre
- **Contacto** — social icon set + "Fazer Marcação" WhatsApp pill button
- Bottom bar with copyright and credit line

---

## Contributing / Extending

1. **Add portfolio work:** Append to `allData.js`, drop images in `public/images/`.
2. **New page:** Create `src/app/<route>/page.tsx` — layout wraps automatically.
3. **New component:** Place in `src/app/components/`, use `cn()` for all classNames.
4. **New spacing:** Follow the `1 unit = 2px` convention; check `theme.css` for available tokens.

---

*Portfolio site for Lilia Dionísio — built by [jcostadev23](https://github.com/jcostadev23)*
