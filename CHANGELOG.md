# Changelog

All notable changes to the Zylo marketing site.

## [Unreleased] — 2026-07-13

Brand and typography pass: self-hosted fonts, new logo, Fustat type system.

### Added
- **Logo assets**: `public/zylo.svg` (full-color wordmark) and
  `public/zylo-white.svg` (white variant for dark backgrounds).
- **Self-hosted fonts** (`public/fonts/`): Fustat (variable, 200–800) and
  Poppins (400/500/600/700) as local `.woff2`, declared via `@font-face`
  with `font-display: swap`.

### Changed — Typography
- **Heading font: Syne → Fustat.** `--font-heading` token updated; all
  `.h1`–`.h6` inherit it.
- **Removed Google Fonts CDN** — dropped `<link>` tags and `preconnect` hints
  from `Layout.astro`. Fonts now served from origin: no third-party requests,
  no render-blocking stylesheet.
- **`.h1` resized**: 40→44px mobile, 62→68px desktop. Weight bold → semibold.
- **Flattened body scale**: `.p-xl` is now 20px at all breakpoints (was
  20→24px); `.p-lg` is 18px flat (was 18→20px). Affects every hero paragraph
  plus legal-page body copy.
- Replaced three hardcoded `fontFamily: 'Syne'` inline styles in `Footer.astro`
  with the `font-heading` utility, so the token is the single source of truth.
- Replaced inline `font-size` styles on `Hero` and `FeatureHero` paragraphs
  with the `.p-xl` class.

### Changed — Brand
- **Navbar**: feather icon + "Zylo" text → logo image (24px tall).
- **Footer**: "Zylo.co" text → white logo (32px tall), now links to `/`.
- **Favicon**: replaced generic feather glyph with the Zylo document mark.

### Changed — Pricing page
- Hero copy → "Simple, Transparent Pricing" / "Choose the plan that's right for
  you. No hidden fees. Cancel anytime. Save 2 months with annual billing."
- Plan names (`Free`, `Hobby`, `Growth`, `Business`) resized `.h4` → `.h5`.
- Price figures (`$0`, `$19`, `$49`, `$99`) recolored slate-900 → brand indigo.

### Changed — Misc
- `HowItWorks` step titles: hardcoded 36/42px heading → `.h5` class.
- `.gitignore`: added `.vercel`.

### Removed
- `public/fonts/epilogue-latin.woff2` — unreferenced after the Fustat swap.

## [Unreleased] — 2026-07-02

Transformed the site from a **single-page React SPA** into a **static multi-page
Astro site** — from 1 page (anchor-nav) to 17 routes.

### Architecture
- Migrated **Vite + React SPA → Astro static site** (React runtime removed entirely).
- All `.jsx` components converted to `.astro` (Hero, Features, FAQ, Navbar, Footer,
  MakersMarquee, HowItWorks, WhyZylo, Benefits, Audience, PromoCards, Reveal,
  SectionHeading).
- Pages now pre-rendered HTML with minimal client JS.
- Routing changed from in-page anchors (`#features`, `#why`, `#how`, `#faq`) on one
  document to real file-based routes under `src/pages/`.

### Added — Pages
- **Features** (`/features`), **Pricing** (`/pricing`), **Blog** (`/blog`),
  **About Us** (`/about-us`), **Article** (`/article`).
- **Contact** (`/contact`): form (name, email, message) + technical-question and
  knowledgebase info cards.
- **Docs**: category grid list (`/docs`) and dynamic detail (`/docs/[slug]`, 6 pages)
  with sidebar nav + article + "On this page" TOC.
- **Changelog**: timeline list (`/changelog`) with email subscribe, and dynamic detail
  (`/changelog/[slug]`, 3 pages) with category tag badges, intro, sections with benefit
  lists, callout, and prev/next navigation.
- **Legal** with Zylo-specific content: Privacy Policy (`/privacy-policy`),
  Terms of Service (`/terms-of-service`), Cookie Policy (`/cookie-policy`).

### Added — Data layer
- `src/data/docs.ts` and `src/data/changelog.ts` as single sources of truth driving
  both list cards and `getStaticPaths` route generation.

### Changed
- Navbar + Footer now link to standalone routes; Footer wired to every developed page.
- Consolidated design tokens in `global.css` (Syne headings `.h1`–`.h6`, paragraph
  scale, `.btn-*`, `.container-page`, brand palette, radial-gradient hero pattern).
- Category tag badge colors safelisted via `@source inline(...)`.
- MakersMarquee logo opacity and About Us hero/marquee spacing tweaks.

### Stats
- 89 files changed, +9,892 / −2,446 since the initial single-page commit.
