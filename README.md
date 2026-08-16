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
