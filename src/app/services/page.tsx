import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import { ATTRIBUTION } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "What USB does today, what is still in progress, and where a licensed manufacturing partner takes over.",
};

const SERVICES = [
  [
    "Pharmaceutical marketing",
    "Brand ownership, artwork and packaging development, prescriber and channel communication, and field promotion within the limits Indian advertising law sets for prescription products.",
    "Scope today · Portfolio in build · No field force appointed yet",
  ],
  [
    "Portfolio development",
    "Molecule and combination selection against therapeutic need and channel demand, dossier review, dosage-form and pack-size decisions, and lifecycle planning across the catalogue.",
    "Scope today · Active · Twelve combinations selected",
  ],
  [
    "Third-party manufacturing coordination",
    "Identification and qualification of licensed manufacturing partners, specification agreement, production scheduling, and documentation review through to release. USB coordinates manufacturing; USB does not manufacture.",
    "Scope today · Partner qualification in progress",
  ],
  [
    "Distribution and supply",
    "Distributor and stockist appointment, forecast-led replenishment with the manufacturing partner, batch traceability to the point of dispatch, and a defined route for complaints and recall.",
    "Scope today · Channel appointments open",
  ],
  [
    "Business partnerships",
    "In-licensing and out-licensing discussions, co-marketing arrangements, and territory agreements. Terms are still being set, which is the useful time to talk.",
    "Scope today · Open to enquiry",
  ],
];

export default function ServicesPage() {
  return (
    <>
      <PageHead
        kicker="03 · Services"
        title="Five capabilities, described at their real scope."
        sub="What USB does today, what is still in progress, and where a licensed manufacturing partner takes over."
      />

      <section className="section">
        <div className="shell">
          {SERVICES.map(([title, body, scope], i) => (
            <article
              key={title}
              className="service-row"
              style={{
                padding: "clamp(32px, 3.6vw, 56px) 0",
                borderBottom:
                  i === SERVICES.length - 1 ? "none" : "1px solid rgba(2,45,61,.16)",
              }}
            >
              <p className="eyebrow" style={{ fontSize: 12, letterSpacing: ".16em" }}>
                S · {String(i + 1).padStart(2, "0")}
              </p>
              <h2
                className="display-m"
                style={{ fontSize: "clamp(24px, 2.5vw, 36px)", lineHeight: 1.06, letterSpacing: "-.028em" }}
              >
                {title}
              </h2>
              <div>
                <p style={{ fontSize: 16.5, lineHeight: 1.64, margin: "0 0 16px", color: "var(--ink-82)" }}>
                  {body}
                </p>
                <p
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "var(--ink-74)",
                    borderTop: "1px solid var(--rule)",
                    paddingTop: 12,
                    margin: 0,
                  }}
                >
                  {scope}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--mist">
        <div className="shell" style={{ paddingBlock: "clamp(36px, 4vw, 64px)" }}>
          <p className="attribution">
            <span className="notice__label">ATTRIBUTION · </span>
            {ATTRIBUTION}
          </p>
        </div>
      </section>
    </>
  );
}
