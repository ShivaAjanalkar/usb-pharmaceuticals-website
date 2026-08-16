import type { Metadata } from "next";
import Octagon from "@/components/Octagon";
import PageHead from "@/components/PageHead";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "USB Pharmaceuticals recruits slowly and describes roles honestly. No positions are open today.",
};

export default function CareersPage() {
  const careersEmail = `careers@${SITE.domain}`;

  return (
    <>
      <PageHead
        kicker="06 · Careers"
        title="We recruit slowly and describe roles honestly."
        sub="No positions are open today. That is a fact about the company, not a gap in this page."
      />

      <section className="section">
        <div
          className="shell section__body split"
          style={{ gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)", alignItems: "start" }}
        >
          <div>
            <p className="lead" style={{ marginBottom: 20, maxWidth: "56ch" }}>
              A small team cannot build a pharmaceutical company alone. We are hiring
              for judgement, not headcount.
            </p>
            <p className="prose" style={{ maxWidth: "64ch" }}>
              The people who do well here are comfortable with documentation,
              uncomfortable with vague claims, and willing to say when something
              is not ready. In a company this young, every hire changes how the
              company works — so we recruit slowly and describe the role honestly.
            </p>
            <p className="prose" style={{ maxWidth: "64ch" }}>
              Expected functions as we grow: quality assurance and regulatory
              affairs, supply chain and planning, field sales and area
              management, medical and product management, finance and compliance.
            </p>
          </div>

          <div
            className="chamfer-16"
            style={{ border: "2px solid var(--ink)", padding: "clamp(24px, 2.8vw, 36px)" }}
          >
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              Apply
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, margin: "0 0 20px", color: "var(--ink-82)" }}>
              Send a CV and a short note on the function you want to own.
              Speculative applications are read.
            </p>
            <a
              href={`mailto:${careersEmail}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                fontFamily: "var(--mono)",
                fontSize: 14,
                letterSpacing: ".02em",
                color: "var(--ink)",
                textDecoration: "none",
                borderBottom: "2px solid var(--gold)",
                paddingBottom: 4,
                wordBreak: "break-all",
              }}
            >
              {careersEmail}
            </a>
            <p
              style={{
                marginTop: 22,
                borderTop: "1px solid rgba(2,45,61,.16)",
                paddingTop: 16,
                fontFamily: "var(--mono)",
                fontSize: 11,
                lineHeight: 1.7,
                letterSpacing: ".04em",
                color: "var(--ink-74)",
              }}
            >
              Response time · within 10 working days
              <br />
              Location · [REGISTERED OFFICE — TBC]
            </p>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="shell section__body">
          <h2 className="display-m" style={{ fontSize: "clamp(24px, 2.5vw, 36px)", marginBottom: "clamp(24px, 3vw, 36px)" }}>
            Current openings
          </h2>
          <div
            className="chamfer-18 empty-state"
            style={{
              border: "2px solid var(--rule-strong)",
              background: "var(--paper)",
              padding: "clamp(32px, 4.6vw, 72px) clamp(24px, 3vw, 48px)",
            }}
          >
            <Octagon size={132} style={{ background: "rgba(205,166,101,.55)" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: 26, color: "var(--gold-deep)" }}>
                00
              </span>
            </Octagon>
            <div>
              <h3
                className="display-s"
                style={{ fontSize: "clamp(21px, 2vw, 28px)", marginBottom: 10 }}
              >
                No positions are open today.
              </h3>
              <p style={{ fontSize: 16.5, lineHeight: 1.62, margin: "0 0 18px", maxWidth: "58ch", color: "var(--ink-78)" }}>
                This is accurate rather than a placeholder — we have not yet
                opened recruitment. When roles open they will be listed here with
                function, location, experience band and reporting line.
              </p>
              <a href={`mailto:${careersEmail}`} className="link-rule">
                Register interest instead{" "}
                <span style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--gold-deep)" }}>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
