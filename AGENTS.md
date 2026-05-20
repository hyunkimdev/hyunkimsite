# Project Notes

## Purpose
- Personal site for Hyun Kim, built with Next.js App Router, TypeScript, Tailwind CSS v4, GSAP, and Framer Motion.

## Key Paths
- `src/app/` — App Router entry, root layout, and global styles.
- `src/components/hero/` — landing hero and letter-explosion animation.
- `src/components/` — page sections and shared UI.
- `src/content/copy.ts` — marketing copy source.

## Commands
- `pnpm dev` — start local development server on `http://localhost:3000`.
- `pnpm typecheck` — run TypeScript checks.
- `pnpm build` — production build.

## Guidance
- Prefer existing component and Tailwind patterns before adding abstractions.
- For version-sensitive framework or animation behavior, verify local package types/docs or official documentation before editing.
