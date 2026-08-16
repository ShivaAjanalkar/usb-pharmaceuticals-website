import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PrescribingPanel from "@/components/PrescribingPanel";
import { PackDiagram, SegmentIcon } from "@/components/icons";
import { PRODUCTS, getProduct } from "@/data/products";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.brand} — ${product.composition}`,
    description: `${product.composition}. ${product.form}, ${product.pack}. ${product.category}. Published particulars only — no indications or pricing.`,
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const rows: [string, string][] = [
    ["Composition", product.composition],
    ["Dosage form", product.form],
    ["Pack size", product.pack],
    ["Therapeutic category", product.category],
    ["Schedule", product.schedule],
    ["Storage", "[STORAGE STATEMENT]"],
    ["Shelf life", "[MONTHS]"],
  ];

  return (
    <>
      <section className="section section--ink">
        <div className="shell" style={{ paddingBlock: "clamp(28px, 3.4vw, 56px)" }}>
          <Link
            href="/products/"
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "var(--gold)",
              textDecoration: "none",
              display: "inline-block",
              marginBottom: 26,
            }}
          >
            ← Catalogue
          </Link>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <h1
              className="display-l"
              style={{
                fontSize: "clamp(32px, 4.4vw, 66px)",
                lineHeight: 0.98,
                display: "flex",
                alignItems: "center",
                gap: "clamp(14px, 1.6vw, 24px)",
              }}
            >
              <SegmentIcon
                category={product.category}
                size={44}
                className="product-mark"
              />
              {product.brand}
            </h1>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 13,
                letterSpacing: ".1em",
                color: "var(--gold)",
                border: "1px solid rgba(205,166,101,.5)",
                padding: "7px 12px",
              }}
            >
              {product.id}
            </span>
          </div>

          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: 13.5,
              letterSpacing: ".02em",
              margin: "20px 0 0",
              color: "rgba(252,252,250,.7)",
            }}
          >
            {product.composition}
          </p>
        </div>
      </section>

      <section className="section">
        <div
          className="shell split split--even"
          style={{ paddingBlock: "clamp(36px, 4vw, 68px)", alignItems: "start" }}
        >
          <div>
            <p className="eyebrow" style={{ marginBottom: 16 }}>
              Published particulars
            </p>
            <dl className="spec-list">
              {rows.map(([key, value]) => (
                <div key={key} className="spec-row">
                  <dt>{key}</dt>
                  <dd style={value.startsWith("[") ? { color: "var(--ink-74)" } : undefined}>
                    {value}
                  </dd>
                </div>
              ))}
              <div className="spec-row">
                <dt>Reserved names</dt>
                <dd style={{ color: "var(--ink-74)" }}>
                  {product.alternates.join(" · ")}
                </dd>
              </div>
            </dl>

            {/* A diagram of the pack, drawn from the pack data itself — the
                honest alternative to product photography that does not exist
                yet. Captioned so it is never mistaken for artwork. */}
            <figure className="pack-figure">
              <p className="eyebrow" style={{ marginBottom: 18 }}>
                Pack presentation
              </p>
              <PackDiagram
                units={product.units}
                form={product.form}
                className="pack-diagram"
              />
              <figcaption>
                Diagram · {product.pack} · {product.form.toLowerCase()}. Schematic
                only — pack artwork is not final and is not shown here.
              </figcaption>
            </figure>

            <p className="attribution" style={{ margin: "28px 0 0", fontSize: 11.5, lineHeight: 1.75 }}>
              <span className="notice__label">MANUFACTURED BY · </span>
              [MANUFACTURING PARTNER — name, address, manufacturing licence no.]
              Marketed by USB Pharmaceuticals Pvt. Ltd. USB does not own or
              operate a manufacturing facility.
            </p>
          </div>

          <PrescribingPanel slug={product.slug} />
        </div>
      </section>
    </>
  );
}
