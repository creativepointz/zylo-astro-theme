# Zylo — Astro Docs & SaaS Marketing Theme

A polished, multi-page marketing theme for documentation tools, SaaS products, and dev-tool startups. Built with [Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and [Lucide](https://lucide.dev) icons.

```sh
npm create astro@latest -- --template creativepointz/zylo-astro-theme
```

*(Update the template path above once this repo is published — see [Submitting to the Astro catalog](#submitting-to-the-astro-catalog) below.)*

## ✨ Features

- **11 pages, fully wired**: home, features, pricing, about, contact, blog, article, docs (listing + detail), changelog (timeline + detail), and legal pages (privacy, terms, cookies).
- **Static, fast, zero client-side framework** — plain Astro components, minimal inline JS (mobile nav, scroll-reveal, marquee).
- **Tailwind CSS v4** with a documented design-token system (colors, type scale, spacing, radius — see `DESIGN-home.md`).
- **`[...lang]` routing scaffold** ready for internationalization — ships English-only today with unprefixed URLs (`/`, `/pricing`), but adding a language is a one-line change to `src/config/language.json`.
- **`@/` path aliases** (`@/components/*`, `@/layouts/*`, `@/lib/*`, `@/styles/*`) instead of relative `../../` imports.
- **Content-driven docs & changelog**: both sections are powered by simple typed data files (`src/lib/data/docs.ts`, `src/lib/data/changelog.ts`) — add an entry, get a new page for free via `getStaticPaths`.
- **Accessible by default**: skip-to-content link, semantic headings, visible focus rings, `aria-label`s on icon-only controls, `prefers-reduced-motion` respected.
- **astro-icon + Lucide** for all iconography — swap or extend the icon set freely.

## 🚀 Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   ├── fonts/                  # self-hosted Fustat + Poppins .woff2
│   ├── home/, features/        # page-specific images
│   └── zylo*.svg            # wordmark logos
├── src/
│   ├── config/
│   │   └── language.json       # i18n locale list
│   ├── layouts/
│   │   ├── Base.astro          # <html> shell: head, header, footer, global scripts
│   │   └── components/
│   │       ├── global/         # Navbar, Footer (site chrome)
│   │       ├── sections/       # homepage/page sections (Hero, Features, Pricing, …)
│   │       └── widgets/        # small reusable pieces (SectionHeading, Reveal)
│   ├── lib/
│   │   ├── data/                # docs.ts, changelog.ts — typed content sources
│   │   └── utils/
│   │       └── i18nUtils.ts     # generatePaths() / generateEntryPaths() for [...lang]
│   ├── pages/
│   │   └── [...lang]/           # every route lives here (see i18n note above)
│   │       ├── index.astro
│   │       ├── docs/
│   │       │   ├── index.astro
│   │       │   └── [single].astro
│   │       ├── changelog/
│   │       │   ├── index.astro
│   │       │   └── [single].astro
│   │       └── …                # about-us, pricing, contact, features, legal pages
│   └── styles/
│       └── globals.css          # Tailwind v4 entry + design tokens
├── astro.config.mjs
├── tsconfig.json                 # @/ path aliases
└── package.json
```

Any Astro component in `src/pages/[...lang]/` maps to a route. See [Astro's project structure guide](https://docs.astro.build/en/basics/project-structure/) for the general conventions this theme follows.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                             |
| :------------------------ | :-------------------------------------------------- |
| `npm install`              | Installs dependencies                              |
| `npm run dev`               | Starts local dev server at `localhost:4321`        |
| `npm run build`             | Build your production site to `./dist/`            |
| `npm run preview`           | Preview your build locally, before deploying       |
| `npm run astro ...`         | Run CLI commands like `astro add`, `astro check`   |
| `npm run astro -- --help`   | Get help using the Astro CLI                       |

## 🎨 Customizing

- **Content**: doc categories and changelog posts live in `src/lib/data/docs.ts` and `src/lib/data/changelog.ts` — edit the arrays, the routes regenerate automatically.
- **Design tokens**: colors, type scale, spacing, and component classes (`.btn-*`, `.h1`–`.h6`, `.p-*`) are defined in `src/styles/globals.css` and documented in `DESIGN-home.md`.
- **Logos**: the "Trusted by teams at" marquee (`src/layouts/components/sections/MakersMarquee.astro`) ships with generic placeholder wordmarks — swap in your own customer/partner logos.
- **Legal pages**: `privacy-policy.astro`, `terms-of-service.astro`, and `cookie-policy.astro` contain sample copy with a `[Your Company Name]` placeholder. **Have these reviewed by your own counsel before publishing** — they are a starting point, not legal advice.
- **i18n**: add a language by adding an entry to `src/config/language.json`; `generatePaths()` in `src/lib/utils/i18nUtils.ts` picks it up automatically for every static page.

## Submitting to the Astro catalog

This theme is structured to follow [Astro's documented project conventions](https://docs.astro.build/en/basics/project-structure/) (standard `src/pages`, `src/layouts`, `src/components` layout; clean `astro.config.mjs`; no secrets or analytics IDs committed). To list it on the [Astro Themes catalog](https://astro.build/themes/):

1. Push this repo to GitHub (public).
2. Deploy a live demo (Netlify, Vercel, Cloudflare Pages, etc.) and add the URL to this README and to `homepage` in `package.json`.
3. Sign in at [portal.astro.build](https://portal.astro.build) with GitHub and use **Submit a theme** to fill in the title, description, category tags, and preview screenshots.
4. Note: new theme submissions are occasionally paused by the Astro team while they prepare the catalog for a new major version — check the portal for current status before submitting.

## License

[MIT](./LICENSE) — free to use for personal and commercial projects. Attribution appreciated but not required.
