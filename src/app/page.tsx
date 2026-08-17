import Image from "next/image";
import Link from "next/link";
import Entrance from "@/components/Entrance";
import Lattice from "@/components/Lattice";
import Octagon from "@/components/Octagon";
import Reveal from "@/components/Reveal";
import { SegmentIcon } from "@/components/icons";
import { PRODUCTS, SEGMENTS } from "@/data/products";
import { ATTRIBUTION } from "@/data/site";
import { asset } from "@/lib/asset";

const STRENGTHS = [
  [
    "Product selection discipline",
    "Molecules and combinations are chosen against therapeutic need, channel demand and a documented dossier — not against what is cheapest to source.",
  ],
  [
    "Manufacturer qualification",
    "Every manufacturing partner is assessed on licence status, site capability and audit history before a single batch is commissioned.",
  ],
  [
    "Documentation as default",
    "Batch records, certificates of analysis and release approvals are retained per product, per batch, and are retrievable on request.",
  ],
  [
    "Supply reliability",
    "Forecast-led planning with the manufacturing partner, so the stockist is not the person who discovers a shortage.",
  ],
];

const QUALITY_STEPS = [
  "Vendor qualification and licence verification",
  "Specification and artwork approval before production",
  "Batch documentation and certificate-of-analysis review",
  "Release authorisation to trade, recorded per batch",
  "Complaint handling and traceable recall route",
];

export default function HomePage() {
  return (
    <>
      {/* — hero ————————————————————————————————————————————————————— */}
      <section className="section" style={{ position: "relative", overflow: "hidden" }}>
        <Lattice />
        <div
          className="shell"
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.62fr) minmax(0, 1fr)",
          }}
          data-hero
        >
          <Entrance
            style={{
              padding: "clamp(48px, 6.5vw, 104px) clamp(28px, 4vw, 72px) clamp(44px, 5vw, 84px) 0",
              borderRight: "1px solid var(--rule)",
            }}
          >
            <p
              className="eyebrow eyebrow-rule"
              style={{ marginBottom: "clamp(24px, 3vw, 44px)", "--i": 0 } as React.CSSProperties}
            >
              Incorporated in India · Pvt. Ltd.
            </p>
            <h1
              className="display-xl"
              style={{ marginBottom: "clamp(20px, 2.4vw, 34px)", "--i": 1 } as React.CSSProperties}
            >
              USB Pharmaceuticals<span style={{ color: "var(--gold)" }}>.</span>
            </h1>
            <p
              style={
                {
                  "--i": 2,
                  fontFamily: "var(--display)",
                  fontWeight: 500,
                  fontSize: "clamp(19px, 2vw, 30px)",
                  lineHeight: 1.22,
                  letterSpacing: "-.022em",
                  margin: "0 0 clamp(22px, 2.6vw, 36px)",
                  maxWidth: "16ch",
                } as React.CSSProperties
              }
            >
              Universal Science for Better Life
            </p>
            <p
              style={
                {
                  "--i": 3,
                  fontSize: "clamp(17px, 1.3vw, 20px)",
                  lineHeight: 1.6,
                  margin: "0 0 clamp(30px, 3.4vw, 46px)",
                  maxWidth: "56ch",
                  color: "var(--ink-82)",
                  textWrap: "pretty",
                } as React.CSSProperties
              }
            >
              We select, market and supply finished pharmaceutical formulations in
              India — manufactured for us, under our documented quality
              oversight, by qualified third-party manufacturing partners.
            </p>
            <div
              style={
                { "--i": 4, display: "flex", flexWrap: "wrap", gap: 12 } as React.CSSProperties
              }
            >
              <Link href="/products/" className="btn btn--primary">
                View the product catalogue <span className="btn__arrow">→</span>
              </Link>
            </div>
          </Entrance>

          <div
            style={{
              padding: "clamp(36px, 4vw, 72px) 0 clamp(36px, 4vw, 72px) clamp(28px, 4vw, 72px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 32,
            }}
          >
            <div style={{ display: "grid", placeItems: "center", padding: "8px 0" }}>
              <Octagon size="min(100%, 300px)">
                <div style={{ padding: "14%", width: "100%" }}>
                  <Image
                    src={asset("/assets/usb-icon-copper.png")}
                    alt="USB monogram"
                    width={300}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
              </Octagon>
            </div>

            <dl className="spec-list">
              <div className="spec-row">
                <dt>Structure</dt>
                <dd>Private Limited</dd>
              </div>
              <div className="spec-row">
                <dt>Manufacturing</dt>
                <dd style={{ color: "var(--gold-deep)" }}>Third-party, qualified</dd>
              </div>
              <div className="spec-row">
                <dt>Portfolio</dt>
                <dd>
                  {String(PRODUCTS.length).padStart(2, "0")} combinations
                </dd>
              </div>
              <div className="spec-row">
                <dt>Markets</dt>
                <dd>India · [EXPORT TBC]</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* — 01 the company ——————————————————————————————————————————— */}
      <Reveal className="section">
        <div className="shell section__body">
          <div className="split">
            <div>
              <p className="eyebrow" style={{ marginBottom: 14 }}>
                01 · The company
              </p>
              <h2 className="display-m">A company built to be audited</h2>
            </div>
            <div className="spine">
              <p
                style={{
                  fontSize: "clamp(18px, 1.45vw, 22px)",
                  lineHeight: 1.55,
                  margin: "0 0 20px",
                  maxWidth: "62ch",
                  textWrap: "pretty",
                }}
              >
                USB Pharmaceuticals Pvt. Ltd. is a new Indian pharmaceutical
                company formed by professionals with working experience across
                formulation selection, regulatory documentation, quality
                assurance, distribution and field marketing.
              </p>
              <p className="prose" style={{ maxWidth: "66ch" }}>
                We are deliberately narrow. We do not own a plant and do not claim
                to. What we own is the selection of the molecule, the
                qualification of the manufacturer, the documentation trail behind
                every batch we release, and the reliability of supply to the
                channel. Those are the four things a partner is actually buying
                from a marketing company, so those are the four things we are
                built around.
              </p>
              <p className="prose" style={{ maxWidth: "66ch" }}>
                Everything on this site that is not yet decided is shown as an
                empty slot rather than filled with something plausible. That is a
                deliberate choice: a partner reading this should be able to tell
                exactly what exists today.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* — 02 capability ———————————————————————————————————————————— */}
      <Reveal className="section section--mist">
        <div className="shell section__body">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
              marginBottom: "clamp(28px, 3.4vw, 52px)",
            }}
          >
            <h2 className="display-m">Four core strengths</h2>
            <p className="eyebrow">02 · Capability</p>
          </div>
          <div className="hairline-grid hairline-grid--4" data-stagger>
            {STRENGTHS.map(([title, body], i) => (
              <article key={title} className="tile">
                <span className="tile__index">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display-s">{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      {/* — 03 portfolio ————————————————————————————————————————————— */}
      <Reveal className="section">
        <div className="shell section__body">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
              marginBottom: 10,
            }}
          >
            <h2 className="display-m">Therapeutic segments</h2>
            <p className="eyebrow">03 · Portfolio</p>
          </div>
          <p
            className="data muted"
            style={{ margin: "0 0 clamp(24px, 3vw, 40px)", fontSize: 12 }}
          >
            Eight segments, {PRODUCTS.length} combinations under development.
            Segments are named pharmacologically — never by indication.
          </p>

          <div className="hairline-grid hairline-grid--4 hairline-grid--mist" data-stagger>
            {SEGMENTS.map((segment) => (
              <div
                key={segment.name}
                className="segment-tile"
                style={{
                  padding: "clamp(18px, 2vw, 26px)",
                  minHeight: 186,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <Octagon size={56} style={{ background: "rgba(205,166,101,.55)" }}>
                  <SegmentIcon
                    category={segment.name}
                    size={28}
                    className="segment-icon"
                  />
                </Octagon>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--display)",
                      fontWeight: 600,
                      fontSize: 17,
                      letterSpacing: "-.018em",
                      lineHeight: 1.18,
                    }}
                  >
                    {segment.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10.5,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--ink-74)",
                      marginTop: 6,
                    }}
                  >
                    {String(segment.count).padStart(2, "0")}{" "}
                    {segment.count === 1 ? "combination" : "combinations"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* — 04 business model ———————————————————————————————————————— */}
      <Reveal className="section section--ink" >
        <div className="shell" style={{ paddingBlock: "clamp(44px, 5.4vw, 96px)" }}>
          <div className="split">
            <div>
              <p className="eyebrow eyebrow--gold" style={{ marginBottom: 14 }}>
                04 · Business model
              </p>
              <div style={{ width: 44, height: 2, background: "var(--gold)" }} />
            </div>
            <div>
              <h2
                className="display-m"
                style={{
                  fontSize: "clamp(26px, 3.4vw, 52px)",
                  lineHeight: 1.04,
                  margin: "0 0 clamp(22px, 2.6vw, 36px)",
                  maxWidth: "30ch",
                  textWrap: "balance",
                }}
              >
                USB Pharmaceuticals does not manufacture. We market, and we are
                accountable for what we market.
              </h2>

              <div
                className="hairline-grid hairline-grid--2"
                style={{ background: "var(--gold-rule)", marginBottom: 26 }}
              >
                <div style={{ background: "var(--ink)", padding: "clamp(20px, 2.2vw, 30px)" }}>
                  <p className="eyebrow eyebrow--gold" style={{ fontSize: 10.5, letterSpacing: ".17em", marginBottom: 12 }}>
                    What USB does
                  </p>
                  <ul style={{ margin: 0, paddingLeft: 18, fontSize: 16, lineHeight: 1.62, color: "rgba(252,252,250,.86)" }}>
                    <li>Selects and develops the product portfolio</li>
                    <li>Qualifies and appoints manufacturing partners</li>
                    <li>Holds the brand, artwork and marketing responsibility</li>
                    <li>Reviews batch documentation and authorises release to trade</li>
                    <li>Manages distribution, stockists and field promotion</li>
                  </ul>
                </div>
                <div style={{ background: "var(--ink)", padding: "clamp(20px, 2.2vw, 30px)" }}>
                  <p
                    className="eyebrow"
                    style={{ fontSize: 10.5, letterSpacing: ".17em", marginBottom: 12, color: "rgba(252,252,250,.5)" }}
                  >
                    What our partners do
                  </p>
                  <ul style={{ margin: 0, paddingLeft: 18, fontSize: 16, lineHeight: 1.62, color: "rgba(252,252,250,.7)" }}>
                    <li>Own and operate the licensed manufacturing site</li>
                    <li>Hold the manufacturing licence for each product</li>
                    <li>Manufacture, test and certify each batch</li>
                    <li>Issue the certificate of analysis</li>
                  </ul>
                </div>
              </div>

              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  lineHeight: 1.7,
                  letterSpacing: ".02em",
                  color: "var(--gold)",
                  margin: 0,
                  borderTop: "1px solid var(--gold-rule)",
                  paddingTop: 18,
                  maxWidth: "74ch",
                }}
              >
                {ATTRIBUTION}
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* — 05 quality ——————————————————————————————————————————————— */}
      <Reveal className="section">
        <div
          className="shell section__body split split--even"
          style={{ alignItems: "start" }}
        >
          <div>
            <p className="eyebrow" style={{ marginBottom: 14 }}>
              05 · Quality
            </p>
            <h2 className="display-m" style={{ marginBottom: 20 }}>
              Quality is a paper trail, not a promise
            </h2>
            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.62,
                margin: "0 0 24px",
                color: "var(--ink-82)",
                maxWidth: "54ch",
                textWrap: "pretty",
              }}
            >
              We hold no certifications of our own yet, and we will not display
              any until they are issued and verifiable. What we can show is the
              process we follow before a product reaches a shelf.
            </p>
            <Link href="/quality/" className="link-rule">
              Read the quality approach{" "}
              <span style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--gold-deep)" }}>→</span>
            </Link>
          </div>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", borderTop: "2px solid var(--ink)" }}>
            {QUALITY_STEPS.map((step, i) => (
              <li
                key={step}
                style={{
                  display: "grid",
                  gridTemplateColumns: "46px minmax(0, 1fr)",
                  gap: 16,
                  padding: "16px 0",
                  borderBottom:
                    i === QUALITY_STEPS.length - 1 ? "none" : "1px solid var(--rule)",
                }}
              >
                <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--gold-deep)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: 16, lineHeight: 1.5 }}>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      {/* — 06 call to action ———————————————————————————————————————— */}
      <Reveal className="section section--mist">
        <div className="shell" style={{ paddingBlock: "clamp(48px, 6vw, 104px)" }}>
          <h2
            className="display-m"
            style={{
              fontSize: "clamp(30px, 4.4vw, 68px)",
              letterSpacing: "-.036em",
              margin: "0 0 clamp(20px, 2.4vw, 32px)",
              maxWidth: "26ch",
              textWrap: "balance",
            }}
          >
            If you manufacture, distribute or prescribe — talk to us early.
          </h2>
          <p
            style={{
              fontSize: 17.5,
              lineHeight: 1.6,
              margin: "0 0 clamp(26px, 3vw, 40px)",
              maxWidth: "56ch",
              color: "var(--ink-82)",
            }}
          >
            We are at the stage where partnership terms are still being set. That
            is the useful moment to be in the conversation.
          </p>
          <Link href="/contact/" className="btn btn--primary" style={{ fontSize: 16, padding: "17px 26px" }}>
            Contact USB Pharmaceuticals <span className="btn__arrow">→</span>
          </Link>
        </div>
      </Reveal>
    </>
  );
}
