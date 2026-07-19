# Zylo — Home Page Design Spec

> Marketing home / landing page for **Zylo** (documentation SaaS).
> Stack: **Tailwind CSS** · Icons: **Lucide** · Font: **Poppins** · Primary: **Indigo 600** · Spacing: **8px system**

---

## 1. Design Tokens

### Color

| Role | Token | Hex | Tailwind | Notes |
|------|-------|-----|----------|-------|
| Primary | `--color-primary` | `#4F46E5` | `indigo-600` | Brand, primary CTA, links |
| Primary Hover | `--color-primary-hover` | `#4338CA` | `indigo-700` | CTA hover/active |
| Primary Subtle | `--color-primary-subtle` | `#EEF2FF` | `indigo-50` | Tints, icon bg, badges |
| Foreground | `--color-fg` | `#0F172A` | `slate-900` | Headings, body |
| Muted FG | `--color-fg-muted` | `#475569` | `slate-600` | Secondary text |
| Faint FG | `--color-fg-faint` | `#94A3B8` | `slate-400` | Captions, meta |
| Background | `--color-bg` | `#FFFFFF` | `white` | Page base |
| Surface Alt | `--color-bg-alt` | `#F8FAFC` | `slate-50` | Alternating sections |
| Border | `--color-border` | `#E2E8F0` | `slate-200` | Dividers, card edge |
| Success | `--color-success` | `#16A34A` | `green-600` | Check marks, status |
| Warning | `--color-warning` | `#D97706` | `amber-600` | — |
| Destructive | `--color-destructive` | `#DC2626` | `red-600` | — |
| Ring (focus) | `--color-ring` | `#4F46E5` | `indigo-600` | 2px focus ring + 2px offset |

Contrast: `slate-900` on `white` = 17:1 · `indigo-600` text on `white` = 5.9:1 (AA) · white on `indigo-600` = 4.5:1 (AA). All pass.

### Typography — Poppins

Load: `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');`
`font-display: swap`. Weights: 400 body · 500 labels · 600 headings · 700 hero.

Format below: **`px / line-height`** → Tailwind `text-[..]/[..]`.

#### Headings (Poppins, 600–700, tracking -0.02em on H1–H3)

| Token | Size / LH | px | Tailwind | Use |
|-------|-----------|----|----------|-----|
| Heading 1 | 62 / 125% | 62 / 77.5 | `text-[62px] leading-[1.25]` | Hero headline |
| Heading 2 | 52 / 120% | 52 / 62.4 | `text-[52px] leading-[1.2]` | Section titles |
| Heading 3 | 42 / 130% | 42 / 54.6 | `text-[42px] leading-[1.3]` | Sub-section |
| Heading 4 | 36 / 120% | 36 / 43.2 | `text-[36px] leading-[1.2]` | Feature block title |
| Heading 5 | 30 / 130% | 30 / 39 | `text-[30px] leading-[1.3]` | Card title (large) |
| Heading 6 | 24 / 130% | 24 / 31.2 | `text-2xl leading-[1.3]` | Card title |

#### Display (overline / eyebrow labels, Poppins 600, uppercase, tracking +0.08em)

| Token | Size / LH | Tailwind | Use |
|-------|-----------|----------|-----|
| Display 1 | 16 / 120% | `text-base leading-[1.2]` | Eyebrow above H2 |
| Display 2 | 18 / 130% | `text-lg leading-[1.3]` | Stat / emphasis label |

#### Paragraphs (Poppins 400)

| Token | Size / LH | Tailwind | Use |
|-------|-----------|----------|-----|
| Extra Large | 24 / 150% | `text-2xl leading-[1.5]` | Hero subhead |
| Large | 20 / 150% | `text-xl leading-[1.5]` | Section intro |
| Medium | 18 / 150% | `text-lg leading-[1.5]` | Feature body |
| Regular | 16 / 150% | `text-base leading-[1.5]` | Default body |
| Lite | 14 / 130% | `text-sm leading-[1.3]` | Captions, footer, meta |

Line length: cap body at **65–75ch** (`max-w-[65ch]`).

### Spacing — 8px system

`4(0.5×) · 8 · 16 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128`
Tailwind: `1 2 3 4 5 6 8 10 12 16 20 24 32`. Use multiples of 8 only (4 = half-step for icon gaps).

| Tier | Value | Use |
|------|-------|-----|
| Inline gap | 8 / 16 | icon↔label, chip padding |
| Component pad | 24 / 32 | card interior |
| Block gap | 48 / 64 | between cards/rows |
| Section pad (Y) | 96 desktop / 64 mobile | `py-24 md:py-32` |
| Container | `max-w-7xl mx-auto px-6 md:px-8` | 1280px content |

### Radius / Elevation

- Radius: `rounded-lg` (8px) cards, `rounded-xl` (12px) feature cards/preview, `rounded-full` pills.
- Shadow scale (consistent, no random values):
  - `shadow-sm` — borders/inputs
  - `shadow-md` — cards on hover
  - `shadow-lg` — floating CTA, popovers
  - `shadow-xl` — hero product preview

### Icons — Lucide

Stroke `1.5`, sizes `16 / 20 / 24` (sm/md/lg). One family, outline only. Icon-in-tile: 24px Lucide centered in 48px `indigo-50` `rounded-lg` tile. Icon-only buttons require `aria-label`.

---

## 2. Page Structure (Feature-Rich Showcase)

```
Navbar (sticky)
 └ Hero            ── "Beautiful Docs. Written by Anyone." + Start Free + trust + maker line
 └ Audience        ── "Built for Teams Without a Docs Team" (3 personas)
 └ Benefits        ── "Docs That Work as Hard as You Do" (3 benefits)
 └ How it works    ── "How Zylo Works" (4 steps)
 └ Features        ── "Key Features for Better Docs" (4 groups) + Explore CTA
 └ Why Zylo     ── "Why Zylo?" (5 reasons, incl. Backed by a Trusted Team)
 └ FAQ             ── 6 Q&A accordion
 └ Final CTA band  ── "Start Writing Today" + Start Free
Footer             ── zylo.co
```

CTA ladder: Navbar `Start Free` · Hero `Start Free` · Features `Explore the Full Features List` · Final band `Start Free`. One **primary** CTA per view; rest secondary.

---

## 3. Sections (with final copy)

### 3.1 Navbar — sticky, `h-16`, `bg-white/80 backdrop-blur border-b border-slate-200`
- Left: Lucide `Feather` (indigo-600) + **Zylo** wordmark (Poppins 700, 20px).
- Center: Features · Why Zylo · Pricing · FAQ (Paragraph Regular, slate-600 → hover slate-900). Anchor links to sections.
- Right: `Sign in` (ghost) + **`Start Free`** (primary, `bg-indigo-600 text-white rounded-lg px-4 h-10`).
- Mobile (<768px): Lucide `Menu` → full-screen sheet. Targets ≥44px. Active link `text-indigo-600`.

### 3.2 Hero — `py-24 md:py-32`, centered, max-w-3xl + product preview below
- **Headline** (Heading 1, slate-900, 2 lines): **Beautiful Docs.** / **Written by Anyone.** (line 2 can use `text-indigo-600` for emphasis).
- Subhead (Paragraph XL, slate-600, max-w-2xl): *Create, update, and publish beautiful documentation with AI. No code, no hassle.*
- CTA: **`Start Free`** primary (h-12 px-6, Lucide `ArrowRight` 20px). `cursor-pointer`, hover indigo-700, 200ms.
- Trust line (Paragraph Lite, slate-400): `Free plan · No credit card required · Bring your own AI key` (separators = middots, or Lucide `Check` green-600 before each).
- Maker line (Paragraph Lite, slate-400, mt-8): "Trusted by teams at" + generic wordmark logos (grayscale text, opacity-70).
- Product preview: app screenshot `rounded-xl shadow-xl border border-slate-200`, `aspect-[16/10]`, width/height declared (CLS), eager load.

### 3.3 Audience — "Built for Teams Without a Docs Team" · `bg-slate-50 py-24`
- Eyebrow (Display 1) optional · **Heading 2** (centered): Built for Teams Without a Docs Team.
- Intro (Paragraph Large, slate-600, max-w-2xl, centered): *You don't need developers. You don't need markdown. Just your ideas. Zylo is made for people who need great documentation but don't write code, like:*
- Persona row: `grid sm:grid-cols-3 gap-8`. Each = Lucide icon tile + label (Heading 6):
  - `Package` → **Product teams**
  - `Megaphone` → **Marketing teams**
  - `Rocket` → **Founders & support teams**
- (Source uses `→` arrows; render as icon tiles, not literal arrows.)

### 3.4 Benefits — "Docs That Work as Hard as You Do" · `bg-white py-24`
- Heading 2 centered + mb-16.
- `grid md:grid-cols-3 gap-8`. Card `p-8 rounded-xl border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition`:
  - icon tile (indigo-50, Lucide 24px) → Heading 6 → Paragraph Medium (slate-600).
  - `PenLine` — **Write the Way You Think** — Turn rough notes and screenshots into clean, structured documentation.
  - `Globe` — **Publish Without the Hassle** — No code, no setup. Your docs go live on a beautiful site instantly.
  - `Sparkles` — **Faster Writing with AI** — Draft, rewrite, and translate in seconds with AI built in.

### 3.5 How it works — "How Zylo Works" · `bg-slate-50 py-24`
- Heading 2 centered.
- 4 steps, `grid sm:grid-cols-2 lg:grid-cols-4 gap-8`. Numbered `01–04` (Display 2, indigo-600) + step title (Heading 6). Connecting line/chevrons on desktop (slate-200, Lucide `ChevronRight`):
  - **01 Create your space** · **02 Write with AI** · **03 Customize your site** · **04 Publish and share**

### 3.6 Features — "Key Features for Better Docs" · `bg-white py-24`
- Heading 2 centered + mb-16.
- `grid md:grid-cols-2 gap-8`. Larger feature cards `p-8 rounded-xl border border-slate-200`. Each = icon tile + Heading 5 title + bullet list (Lucide `Check` green-600, Paragraph Regular slate-600):
  - `MousePointerClick` **Visual Editor** — No code or markdown needed · Write like a doc, publish like a pro · Drag, drop, and format with ease
  - `Bot` **AI Assistant** — Rewrite, shorten, expand, simplify · Update docs from screenshots · Translate into multiple languages · Bring your own AI key
  - `Globe` **Beautiful Published Sites** — Modern, fast, mobile-ready output · Custom domain and branding · Light and dark modes
  - `BrainCircuit` **Made for the AI Era** — Copy any page for ChatGPT or Claude · AI chat on your published site · Clean structure AI tools can read
- CTA (centered, mt-16): **`Explore the Full Features List`** secondary outline button + Lucide `ArrowRight`.

### 3.7 Why Zylo — "Why Zylo?" · `bg-slate-50 py-24`
- Heading 2 + intro (Paragraph Large, slate-600, centered, max-w-2xl): *Most doc tools are built for developers or cost a fortune. Zylo is built for everyone, at a price that makes sense.*
- `grid md:grid-cols-2 lg:grid-cols-3 gap-8`. Card = icon tile + Heading 6 + Paragraph Medium:
  - `Code2` **No Code Needed** — A visual editor anyone can use. Write docs like you write a note.
  - `Palette` **Beautiful Output, Zero Design Work** — Every site looks pro by default. No theme tweaking, no CSS.
  - `KeyRound` **AI on Your Terms** — Use our AI or bring your own key. You stay in control of cost and privacy.
  - `Tag` **A Price That Fits** — Start free. Paid plans from **$19/mo**, not $300. (price = Display 2 / tabular-nums)
  - `BadgeCheck` **Backed by a Trusted Team** — 200K+ users and 10+ years of shipping. Zylo is built to last. *(span 2 cols or featured tint `bg-indigo-50 border-indigo-200`)*

### 3.8 FAQ — "Frequently Asked Questions" · `bg-white py-24`
- Heading 2 centered + max-w-3xl accordion (single-column, `divide-y divide-slate-200`).
- Each row: `<button>` Heading 6 question + Lucide `ChevronDown` (rotate 180° on open, 200ms) → Paragraph Regular answer (slate-600). `aria-expanded`, keyboard operable, one open at a time optional.
  1. **Do I need to know how to code?** — No. Zylo uses a visual editor anyone can use. No markdown or code required.
  2. **Can I use my own AI provider?** — Yes. Bring your own AI key on any plan for full control over cost and privacy.
  3. **Is Zylo really free?** — Yes. There is a free plan with no expiry and no credit card required.
  4. **Can I use my own domain?** — Yes. Connect a custom domain and publish your docs anywhere.
  5. **Will my docs work with AI tools like ChatGPT?** — Yes. Copy any page for ChatGPT or Claude, and add an AI chat to your site.
  6. **What happens to my docs if I cancel?** — Your content stays yours. You can export it anytime.

### 3.9 Final CTA band — "Start Writing Today" · `bg-indigo-600 py-24 text-center`
- **Heading 2** (white): Start Writing Today.
- Subhead (Paragraph Large, indigo-100): *Your next doc is 10 minutes away.*
- **`Start Free`** white button (text indigo-600, h-12 px-6) + Lucide `ArrowRight`.

### 3.10 Footer — `bg-slate-900 text-slate-400 py-16`
- Wordmark (Lucide `Feather` + Zylo, white) + tagline.
- Link columns: Product · Resources · Company · Legal (Lite, hover white).
- Bottom row (border-t border-slate-800 pt-8): **zylo.co** (Lite) + social Lucide icons (`Github`, `Twitter`, `Linkedin`) with `aria-label`, ≥44px targets.

---

## 4. Interaction & Motion

- Transitions **150–300ms**, `ease-out` enter / `ease-in` exit. Transform/opacity only — never width/height/top.
- Buttons: hover bg shift + `active:scale-[0.98]`. Cards: `hover:-translate-y-0.5 hover:shadow-md`.
- Section reveal: fade-up 16px, stagger 40ms, one-shot on scroll. Respect `prefers-reduced-motion: reduce` → disable transforms.
- Focus: visible `ring-2 ring-indigo-600 ring-offset-2` on all interactive elements. Never remove outline.
- Animate max 1–2 elements per view.

---

## 5. Responsive

Breakpoints: `375 · 768 (md) · 1024 (lg) · 1440`. Mobile-first, no horizontal scroll, `min-h-dvh` not `100vh`.

| Element | Mobile <768 | Desktop ≥1024 |
|---------|-------------|----------------|
| Hero H1 | scale to `text-[40px] leading-[1.2]` | `text-[62px]` |
| Section pad | `py-16` | `py-24/32` |
| Grids | 1 col | 2–3 col |
| Container pad | `px-6` | `px-8` |
| Navbar | hamburger sheet | inline links |

Body text ≥16px on mobile (avoids iOS zoom). Gutters widen on larger widths.

---

## 6. Accessibility Checklist

- [ ] Heading order h1→h6, no skips (one h1 = hero).
- [ ] Contrast ≥4.5:1 body, ≥3:1 large text — verified above.
- [ ] All icon-only buttons + social links have `aria-label`.
- [ ] Keyboard: tab order = visual order; skip-to-content link.
- [ ] Focus rings visible everywhere; zoom not disabled (`viewport` meta).
- [ ] `prefers-reduced-motion` respected.
- [ ] Images: width/height set (CLS<0.1), WebP/AVIF, lazy below fold.
- [ ] Color never sole signal (pair check-mark with text).
- [ ] Touch targets ≥44px.

---

## 7. Tailwind Config Snippet

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: { sans: ['Poppins', 'ui-sans-serif', 'system-ui'] },
      colors: {
        brand: { DEFAULT: '#4F46E5', hover: '#4338CA', subtle: '#EEF2FF' },
      },
      borderRadius: { lg: '8px', xl: '12px' },
      maxWidth: { container: '1280px' },
    },
  },
};
```

CSS layer for the exact type scale:

```css
@layer components {
  .h1 { @apply font-semibold text-[62px] leading-[1.25] tracking-[-0.02em] text-slate-900; }
  .h2 { @apply font-semibold text-[52px] leading-[1.2]  tracking-[-0.02em] text-slate-900; }
  .h3 { @apply font-semibold text-[42px] leading-[1.3]  text-slate-900; }
  .h4 { @apply font-semibold text-[36px] leading-[1.2]  text-slate-900; }
  .h5 { @apply font-semibold text-[30px] leading-[1.3]  text-slate-900; }
  .h6 { @apply font-semibold text-2xl   leading-[1.3]  text-slate-900; }
  .display-1 { @apply font-semibold text-base leading-[1.2] tracking-[0.08em] uppercase text-indigo-600; }
  .display-2 { @apply font-semibold text-lg  leading-[1.3] text-indigo-600; }
  .p-xl { @apply text-2xl  leading-[1.5] text-slate-600; }
  .p-lg { @apply text-xl   leading-[1.5] text-slate-600; }
  .p-md { @apply text-lg   leading-[1.5] text-slate-600; }
  .p-rg { @apply text-base leading-[1.5] text-slate-700; }
  .p-lt { @apply text-sm   leading-[1.3] text-slate-400; }
}
```
