import type { Metadata } from "next";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = {
  title: "Quality",
  description:
    "Our quality philosophy, six standing commitments, and an honest, empty certifications slot.",
};

const COMMITMENTS = [
  ["Quality-conscious product selection", "Products enter the portfolio on the strength of the molecule, the dossier and the manufacturer — never on landed cost alone."],
  ["Qualified manufacturing partnerships", "Licence status, site capability, testing facilities and audit history are assessed and recorded before any product is commissioned."],
  ["Regulatory compliance", "Labelling, packaging, promotion and schedule handling follow the Drugs and Cosmetics Act, 1940 and the Drugs and Magic Remedies Act, 1954."],
  ["Documentation and traceability", "Batch records, certificates of analysis and release approvals are retained per product and per batch, and produced on request."],
  ["Reliable supply", "Forecasts are shared with manufacturing partners ahead of demand so that continuity, not firefighting, is the normal state."],
  ["Continuous improvement", "Complaints, deviations and market feedback are reviewed on a fixed cycle and fed back into selection and partner assessment."],
];

const CERT_SLOTS = [
  ["ISO", "Management system"],
  ["WHO-GMP", "Partner site standard"],
  ["FSSAI", "Nutraceutical licence"],
  ["Drug licence", "Marketing / sale"],
];

export default function QualityPage() {
  return (
    <>
      <PageHead
        kicker="04 · Quality"
        title="Quality is a paper trail, not a promise."
        sub="Our quality philosophy, six standing commitments, and an honest, empty certifications slot."
      />

      <section className="section">
        <div className="shell section__body split">
          <p className="eyebrow">Philosophy</p>
          <div className="spine">
            <p className="lead" style={{ marginBottom: 20, maxWidth: "58ch" }}>
              A marketing company cannot inspect quality into a product at the
              end. It can only decide who makes it, on what specification, and
              what evidence it accepts before release.
            </p>
            <p className="prose">
              That is the whole of our quality function, and it is deliberately
              unglamorous: choose carefully, verify licences, agree
              specifications in writing, read the batch paperwork, and keep it.
              Where we hold responsibility we describe it precisely. Where
              responsibility sits with a licensed manufacturing partner, we name
              that too.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="shell section__body">
          <h2 className="display-m" style={{ marginBottom: "clamp(26px, 3vw, 44px)" }}>
            Six commitments
          </h2>
          <div className="hairline-grid hairline-grid--2">
            {COMMITMENTS.map(([title, body], i) => (
              <article key={title} style={{ padding: "clamp(24px, 2.8vw, 40px)" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 12,
                      color: "var(--gold-deep)",
                      letterSpacing: ".16em",
                    }}
                  >
                    Q{String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ flex: 1, height: 1, background: "rgba(2,45,61,.16)" }} />
                </div>
                <h3
                  className="display-s"
                  style={{ fontSize: "clamp(19px, 1.6vw, 24px)", marginBottom: 10 }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.62, margin: 0, color: "var(--ink-78)" }}>
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell section__body">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap",
              marginBottom: 10,
            }}
          >
            <h2 className="display-m" style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}>
              Certifications
            </h2>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "var(--gold-deep)",
                border: "1px solid rgba(205,166,101,.55)",
                padding: "5px 10px",
              }}
            >
              Awaiting verification
            </span>
          </div>
          <p style={{ fontSize: 16.5, lineHeight: 1.62, margin: "0 0 26px", maxWidth: "70ch", color: "var(--ink-78)" }}>
            No certification marks are displayed on this site. Certifications held
            by our manufacturing partners belong to those partners and are not
            ours to show. Any certification issued to USB Pharmaceuticals Pvt.
            Ltd. will appear here with its issuing body, scope, certificate
            number and validity dates — and not before.
          </p>

          <div
            className="hairline-grid hairline-grid--4"
            style={{ background: "none", gap: "clamp(14px, 1.6vw, 24px)" }}
          >
            {CERT_SLOTS.map(([label, sub], i) => (
              <div
                key={label}
                className="chamfer-12"
                style={{
                  border: "2px dashed var(--rule-strong)",
                  background: "var(--mist)",
                  padding: "clamp(18px, 2vw, 26px)",
                  minHeight: 168,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 14,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10.5,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "var(--gold-deep)",
                  }}
                >
                  Slot {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--display)",
                      fontWeight: 600,
                      fontSize: 17,
                      letterSpacing: "-.018em",
                      color: "var(--ink-74)",
                    }}
                  >
                    {label}
                  </div>
                  <div style={{ fontSize: 14, color: "var(--ink-74)", marginTop: 4 }}>{sub}</div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: "var(--ink-74)",
                      marginTop: 12,
                    }}
                  >
                    Not held · not displayed
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
