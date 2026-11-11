# CATOPUMA

Next.js 16 + React 19 + Tailwind v4 + shadcn/ui starter. pnpm only.

## Commands

- `pnpm dev` / `pnpm build`
- `pnpm typecheck && pnpm lint && pnpm format:check` must pass before commit
- The user runs the dev server; do not start one or run `pnpm build` while it is running without saying so

## Conventions

- Tailwind v4 syntax only: `bg-linear-to-*`, `shadow-xs`/`shadow-sm`, `rounded-xs`/`rounded-sm`, `outline-hidden`, `shrink-0`. No `tailwind.config`, no `@apply` outside `globals.css`
- Colors come from tokens in `app/globals.css` (`bg-background`, `text-muted-foreground`, ...). Do not add raw hex or `zinc-*` in new code
- `components/ui/*` is shadcn output. Change it by re-running the shadcn CLI, not by hand
- File names are kebab-case. Route-private code lives in `_`-prefixed folders next to the page
- Use `next/link` and `next/image` (register remote hosts in `next.config.ts`)
- Keep source files under 800 lines; split by feature

## Dependencies

pnpm enforces a minimum release age. Never add `minimumReleaseAgeExclude` to get a fresh version; pin the newest version that passes.
Deferred major: TypeScript 7 (breaks eslint-config-next / typescript-eslint, which still need the TS 5 API). Stay on TypeScript 5.9 until they support it.
