# hyunkimsite

Personal site by Hyun Kim. Built with Next.js 15 (App Router, Turbopack) +
Tailwind CSS v4 + TypeScript.

## Stack
- Next.js 15 (App Router)
- Tailwind CSS v4
- TypeScript (strict)
- framer-motion (animation, layout transitions)
- lucide-react (icons)
- Inter Variable / JetBrains Mono via `next/font`

## Develop

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

## Build

```bash
pnpm build
pnpm start
```

## Layout

- `src/app/` — App Router entry, root layout, global styles
- `src/components/` — sections (`hero/`, `solutions/`, `tracks/`, `developer/`,
  `content-hub/`, …) and shared UI (`ui/`, `nav/`, `footer/`)
- `src/content/copy.ts` — single source of truth for marketing copy
- `src/lib/` — `cn`, scroll-reveal helper

## Deploy

Connected to Vercel — pushes to `main` deploy automatically.
