import type { Metadata } from "next";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who USB Pharmaceuticals is, why it was founded, and exactly what the company does and does not do.",
};

const VALUES = [
  ["Patient safety first", "Where a commercial decision and a safety decision conflict, the safety decision is not negotiable."],
  ["Documented, not asserted", "If a claim cannot be produced on paper when asked, we do not make it."],
  ["Regulatory literacy", "Indian pharmaceutical law is a design constraint on how we work, not a compliance chore at the end."],
  ["Honest scope", "We describe what we do and name what we do not do. We do not manufacture, and we say so on every page."],
  ["Supply as a duty", "A stockout in a chronic therapy is a clinical event, not an inventory error."],
  ["Partnership over transaction", "Manufacturers and distributors are held to standards and treated as long-term counterparties."],
];

export default function AboutPage() {
  return (
    <>
      <PageHead
        kicker="01 · About"
        title="A company designed to be checked, not admired."
        sub="Who USB Pharmaceuticals is, why it was founded, and exactly what the company does and does not do."
      />

      <section className="section">
        <div className="shell section__body split">
          <p className="eyebrow">Company overview</p>
          <div className="spine">
            <p className="lead" style={{ marginBottom: 22 }}>
              USB Pharmaceuticals Pvt. Ltd. was incorporated in India as a
              pharmaceutical marketing company. The name expands to Universal
              Science for Better Life.
            </p>
            <p className="prose">
              The company was founded by professionals who had each spent
              years inside the Indian pharmaceutical trade — in formulation
              selection, quality assurance, regulatory documentation,
              distribution and field marketing — and who kept meeting the same
              failure. A product would reach the market with a good molecule
              behind it and no discipline around it: no traceable vendor
              qualification, no retained batch documentation, no forecast, and no
              one accountable when supply stopped.
            </p>
            <p className="prose">
              USB was founded to operate the other way round. We start from the
              documentation and work outward. Before a product is commissioned,
              the manufacturing partner&rsquo;s licence is verified, the
              specification is agreed in writing, and the release process is
              defined. Nothing goes to trade on trust alone.
            </p>
            <p className="prose">
              We are early. The portfolio is being assembled, the manufacturing
              partnerships are being qualified, and the certifications that will
              eventually sit on this site have not been issued. We would rather
              state that plainly to a partner than pad the page.
            </p>
            <p className="prose">
              What is settled is the structure: a private limited company, a
              third-party manufacturing model, and an Indian domestic market
              focus with export capability to follow.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="shell section__body">
          <div className="hairline-grid hairline-grid--2 hairline-grid--mist">
          <div style={{ padding: "clamp(24px, 3vw, 44px)" }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>
              Vision
            </p>
            <p
              style={{
                fontFamily: "var(--display)",
                fontWeight: 500,
                fontSize: "clamp(21px, 2.1vw, 30px)",
                lineHeight: 1.24,
                letterSpacing: "-.024em",
                margin: 0,
                maxWidth: "26ch",
              }}
            >
              To make well-documented, dependably supplied medicine the ordinary
              standard rather than the exception.
            </p>
          </div>
          <div style={{ padding: "clamp(24px, 3vw, 44px)" }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>
              Mission
            </p>
            <p
              style={{
                fontFamily: "var(--display)",
                fontWeight: 500,
                fontSize: "clamp(21px, 2.1vw, 30px)",
                lineHeight: 1.24,
                letterSpacing: "-.024em",
                margin: 0,
                maxWidth: "26ch",
              }}
            >
              To select the right formulations, qualify the right manufacturers,
              and keep the channel supplied without surprises.
            </p>
          </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell section__body">
          <h2 className="display-m" style={{ marginBottom: "clamp(26px, 3vw, 44px)" }}>
            Six values
          </h2>
          <div className="hairline-grid hairline-grid--3">
            {VALUES.map(([title, body], i) => (
              <div key={title} style={{ padding: "clamp(22px, 2.4vw, 32px)", minHeight: 200 }}>
                <p className="tile__index" style={{ marginBottom: 12 }}>
                  V{i + 1}
                </p>
                <h3
                  className="display-s"
                  style={{ fontSize: 20, letterSpacing: "-.02em", marginBottom: 8 }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.58, margin: 0, color: "rgba(2,45,61,.76)" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell section__body split split--even">
          <div>
            <p className="eyebrow eyebrow--gold" style={{ marginBottom: 16 }}>
              Business model
            </p>
            <p
              style={{
                fontFamily: "var(--display)",
                fontWeight: 500,
                fontSize: "clamp(20px, 1.9vw, 28px)",
                lineHeight: 1.26,
                letterSpacing: "-.024em",
                margin: "0 0 18px",
              }}
            >
              Pharmaceutical marketing plus third-party and contract manufacturing
              coordination.
            </p>
            <p style={{ fontSize: 16.5, lineHeight: 1.64, margin: 0, color: "var(--paper-72)", maxWidth: "52ch" }}>
              USB holds the brand and the commercial relationship. Licensed
              manufacturing partners hold the plant and the manufacturing
              licence. Both roles are named on every product record.
            </p>
          </div>
          <div>
            <p className="eyebrow eyebrow--gold" style={{ marginBottom: 16 }}>
              Markets
            </p>
            <dl className="spec-list spec-list--light">
              <div className="spec-row">
                <dt>Primary</dt>
                <dd>India — domestic trade</dd>
              </div>
              <div className="spec-row">
                <dt>Channel</dt>
                <dd>Distributors · stockists · retail</dd>
              </div>
              <div className="spec-row">
                <dt>States</dt>
                <dd style={{ color: "var(--gold)" }}>[STATE LIST — TBC]</dd>
              </div>
              <div className="spec-row">
                <dt>Export</dt>
                <dd style={{ color: "var(--gold)" }}>Planned — not yet active</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
