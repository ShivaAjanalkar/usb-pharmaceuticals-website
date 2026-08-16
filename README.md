# USB Pharmaceuticals Pvt. Ltd. — corporate website

Corporate credibility site for USB Pharmaceuticals Pvt. Ltd. (*Universal Science
for Better Life*), an Indian pharmaceutical **marketing** company. Built from the
approved design direction and logo kit; product data comes from the internal
Brand Portfolio workbook.

This is a B2B site, not a pharmacy and not a patient-facing brand site. Its
audiences, in priority order: manufacturing partners and CDMOs, distributors and
stockists, healthcare professionals, job applicants, and regulators.

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 16, App Router, React 19 | Static export, file-based routing, per-page metadata |
| Language | TypeScript (strict) | The product catalogue is typed data, not markup |
| Styling | Hand-authored CSS design system (`src/app/globals.css`) | The design is chamfer/clip-path geometry throughout; a utility framework would fight it |
| Fonts | `next/font` — Instrument Sans, Source Serif 4, IBM Plex Mono | Self-hosted, no layout shift, no external font requests |
| Hosting | GitHub Pages via GitHub Actions | Free tier, no runtime needed — every route is prerendered |

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out
npm run typecheck
```

## Design system

Six colour tokens, three typefaces, one geometry. All defined as CSS custom
properties in `src/app/globals.css` and documented at `/design-system`.

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#022D3D` | Body text, dark sections, footer, rules |
| `--gold` | `#CDA665` | Brand accent — rules, marks, borders. **Never** body text |
| `--gold-deep` | `#6E4F1C` | The only gold permitted for words on light grounds |
| `--paper` | `#FCFCFA` | Page ground |
| `--mist` | `#EEF1F2` | Alternate sections, cards, table rows |
| `--signal` | `#2F6F68` | Functional only — links, form focus, active states |

Typography inverts the usual pairing: a grotesque for display, a serif for
prose, and **monospace for every piece of product data**. A composition string
is data, so it is set like data.

**Nothing on this site has a rounded corner.** Radius is always `0`; corners are
cut at 45° with `clip-path`, derived from the octagonal monogram. Portraits,
photo slots and partner logos sit inside `.oct-frame`, which reproduces the
logo's double outline.

## The graphic system (instead of photography)

The brief rules out stock photography of labs, pills and doctors, and the
company has no facility to photograph and no product to shoot. So the imagery
is drawn, not sourced — all of it in `src/components/icons.tsx` and
`src/components/Lattice.tsx`:

- **Eight therapeutic segment marks**, one per category, on a 48 grid built
  from 90°/45° lines and true circles. 1.5 stroke, mitred joins, butt caps —
  the same vocabulary as the monogram. They appear on the home segment tiles,
  in the catalogue's first column, on catalogue cards, and beside each product
  title, so the portfolio can be sorted by shape before a word is read.
- **Pack diagrams**, generated from each product's own `units` and `form`. The
  number of wells *is* the pack size and the well shape follows the dosage
  form, so `Estraval` draws a 7×4 blister and `Pregnill-Kit` draws one large
  well plus four behind a divider. Every diagram is captioned as a schematic —
  it is never presented as pack artwork.
- **An octagonal lattice** behind the home hero, masked to a soft falloff at
  low opacity, giving the empty half of the page texture without pretending to
  be a photograph.
- **The DNA helix as a rule.** Two hairline strands tiled down the left gutter
  of long-form pages (`.spine`), at low opacity — the structural spine the
  brief asked for, never a floating illustration.

## Motion, and the visibility contract

One easing curve, one duration scale, no bounce, no parallax, no scroll-jacking.
The budget is what the brief allows: one orchestrated load sequence on the home
hero, scroll-reveal on section openers, and micro-interactions on controls.
There is deliberately **no cross-page transition**.

The rule that matters is in `globals.css`:

> Nothing in the motion layer may make content *visible*; it may only animate
> content that is already visible by default.

Every hidden state sits behind a `data-armed` attribute that JavaScript sets at
runtime, and only once it has confirmed it can also unset it (`src/lib/motion.ts`
checks reduced-motion **and** `document.visibilityState`). This is not
theoretical — three real failure modes were found and fixed building it:

1. `animation-fill-mode: both` on the element wrapping all page content held it
   at `opacity: 0` until the animation ran. CSS animations do not advance in a
   background tab, so opening the site in a new tab left **the entire page
   blank**. The transition was removed outright.
2. `IntersectionObserver` only notifies on threshold crossings, so a section
   carried from below the fold to above it in one frame — an in-page anchor, a
   restored scroll position, a fast trackpad flick — produced no callback and
   stayed invisible for good. `Reveal` uses a scroll check that cannot miss.
3. A section armed while the tab is visible and then backgrounded would freeze
   mid-transition. `Reveal` listens for `visibilitychange` and shows immediately.

Net effect: no JS, throttled rAF, a background tab, a stalled animation, or
`prefers-reduced-motion` — the page still reads in full.

## Regulatory constraints baked into the code

These are not styling decisions — changing them has legal consequences in India.

1. **The public catalogue publishes composition, strength, dosage form, pack
   size and therapeutic category only.** No indications, no efficacy claims, no
   comparative statements, no MRP. Enforced by the `Product` type in
   `src/data/products.ts` — there is no field to put an indication in.
2. **Therapeutic categories are named pharmacologically, never by indication**
   ("Combined hormonal preparations", not "Contraception"). Section 3 of the
   Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954 restricts
   public advertisement referring to conception and miscarriage.
3. **Prescribing information sits behind an HCP gate** (`/hcp`) that cannot be
   dismissed by clicking away. Status is a self-declaration held in
   `sessionStorage` for the session only — never persisted, never used to
   identify a visitor.
4. **USB is never conflated with its manufacturers.** The attribution line in
   `src/data/site.ts` appears on the home page, the services page and every
   product record.
5. **No certification badges are rendered anywhere** — not even as placeholders.
   `/quality` designs the slot and labels it "awaiting verification".
6. **Placeholder discipline.** Values that are genuinely undecided render as
   visible `[BRACKETED]` slots rather than plausible fiction. Search the repo
   for `TBC` to find every one.

## Content still to be supplied

| What | Where |
|---|---|
| Domain, and the four routed inboxes | `src/data/site.ts` → `SITE.domain` |
| Registered office address, CIN, phone, WhatsApp number | `src/data/site.ts` |
| Eight founder names, designations, bios and 1:1 portraits (800×800 min) | `src/app/team/page.tsx`, `src/app/about/page.tsx` |
| Manufacturing partner name, address and licence number per product | `src/app/products/[slug]/page.tsx` |
| Storage statement and shelf life per product | `src/data/products.ts` |
| Legal effective dates, retention periods, jurisdiction | `src/data/legal.ts` |
| Google Maps embed | `src/app/contact/page.tsx` |

The enquiry form has no server behind it — a static host cannot receive a POST.
Rather than fake a submission, it composes the enquiry and hands it to the
visitor's mail client, addressed to the inbox that owns the enquiry type. Swap
`src/components/EnquiryForm.tsx` for a real endpoint once mail routing exists.

## Deployment

Pushing to `main` builds a static export and publishes it to GitHub Pages via
`.github/workflows/deploy.yml`. The workflow sets `NEXT_PUBLIC_BASE_PATH` to the
repository name, since a project site is served from a subpath.

To move to a custom domain: add a `CNAME` file to `public/`, point the DNS
record at GitHub Pages, and drop the `NEXT_PUBLIC_BASE_PATH` env var from the
workflow so the site builds at the root.
