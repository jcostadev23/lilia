# Tailwind Spacing Tokens Migration Guide

This project now defines spacing tokens in `/Users/jcosta24/repos/lilia/src/app/theme.css` using Tailwind v4 `@theme`:

- `--spacing-N: (N * 2px)`
- That means `p-8` = 16px, `gap-10` = 20px, `mt-2` = 4px, etc.

## Goal
Update all Tailwind spacing utilities in the codebase so the final pixel values stay the same, but the **class numbers match the new token scale**.

In short:
- **Old Tailwind default**: `1 => 4px`
- **New tokens**: `1 => 2px`
- Therefore: **new class number = old class number * 2** (for integer spacing keys)

Examples:
- `gap-4` (was 16px) -> `gap-8` (16px)
- `mt-1` (was 4px) -> `mt-2` (4px)
- `p-10` (was 40px) -> `p-20` (40px)

## Step-by-step migration

1. **Scan the project for spacing utilities**
   Use ripgrep to find common spacing classes in `className` strings:
   ```bash
   rg -n "(?:^|\s)(p[trblxy]?|m[trblxy]?|gap|space-[xy]|inset|top|right|bottom|left|translate-[xy])-[0-9]+" /Users/jcosta24/repos/liliabeautysalon/src
   ```

2. **Identify spacing utilities that use numbers**
   Look for utilities like:
   - `p-*`, `px-*`, `py-*`, `pt-*`, `pr-*`, `pb-*`, `pl-*`
   - `m-*`, `mx-*`, `my-*`, `mt-*`, `mr-*`, `mb-*`, `ml-*`
   - `gap-*`, `gap-x-*`, `gap-y-*`
   - `space-x-*`, `space-y-*`
   - `inset-*`, `top-*`, `right-*`, `bottom-*`, `left-*`
   - `translate-x-*`, `translate-y-*`

3. **Update the number by doubling it**
   For each spacing utility with an integer key, multiply the number by `2`.

   Example conversions:
   - `gap-4` -> `gap-8`
   - `mt-1` -> `mt-2`
   - `px-6` -> `px-12`
   - `space-y-8` -> `space-y-16`
   - `inset-12` -> `inset-24`
   - `translate-y-10` -> `translate-y-20`

4. **Handle zero values**
   `-0` stays `-0` (no change).

5. **Handle non-integer or special keys**
   If you find things like `p-0.5` or `gap-[18px]`:
   - Keep arbitrary values as-is (e.g., `gap-[18px]` stays `gap-[18px]`), or
   - Add a new token if it’s a repeat value (for example, add `--spacing-9: 18px` and use `gap-9`).

6. **Check for visual regressions**
   Run the app and compare layouts before/after to confirm pixel values are preserved.

## Quick reference mapping (common defaults)

- `1 (4px)` -> `2`
- `2 (8px)` -> `4`
- `3 (12px)` -> `6`
- `4 (16px)` -> `8`
- `5 (20px)` -> `10`
- `6 (24px)` -> `12`
- `8 (32px)` -> `16`
- `10 (40px)` -> `20`
- `12 (48px)` -> `24`
- `14 (56px)` -> `28`
- `16 (64px)` -> `32`
- `20 (80px)` -> `40`
- `24 (96px)` -> `48`
- `28 (112px)` -> `56`
- `32 (128px)` -> `64`
- `36 (144px)` -> `72`
- `40 (160px)` -> `80`
- `44 (176px)` -> `88`
- `48 (192px)` -> `96`
- `52 (208px)` -> `104`
- `56 (224px)` -> `112`
- `60 (240px)` -> `120`
- `64 (256px)` -> `128`
- `72 (288px)` -> `144`
- `80 (320px)` -> `160`
- `96 (384px)` -> `192`

## Examples

Before:
```tsx
<div className="gap-4 p-6 mt-1" />
```
After:
```tsx
<div className="gap-8 p-12 mt-2" />
```

Before:
```tsx
<div className="px-10 py-4 space-y-8" />
```
After:
```tsx
<div className="px-20 py-8 space-y-16" />
```

## Notes
- If a spacing value exceeds the token set (max is `--spacing-200` = 400px), either add more tokens in `/Users/jcosta24/repos/lilia/src/app/theme.css` or use an arbitrary value like `p-[420px]`.

- The Tailwind `text-*` utilities are mapped to those variables in `tailwind.config.js`.
