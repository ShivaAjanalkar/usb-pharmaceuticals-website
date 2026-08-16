import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import PageHead from "@/components/PageHead";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Four routed inboxes, one enquiry form, a named reply within two working days.",
};

const ROUTES = [
  ["General", "info", "Anything that is not covered below"],
  ["Business", "business", "Distributors, stockists, channel appointment"],
  ["Partnership", "partners", "Manufacturing partners, CDMOs, licensing"],
  ["Careers", "careers", "Applications and speculative CVs"],
];

export default function ContactPage() {
  return (
    <>
      <PageHead
        kicker="07 · Contact"
        title="Four routed inboxes, one form, a named reply."
        sub="Send the enquiry to the function that owns it and you will get an answer from a person within two working days."
      />

      <section className="section">
        <div
          className="shell section__body split split--wide"
          style={{ alignItems: "start" }}
        >
          <div>
            <p className="eyebrow" style={{ marginBottom: 18 }}>
              Registered office
            </p>
            <div
              style={{
                borderTop: "2px solid var(--ink)",
                padding: "18px 0 22px",
                borderBottom: "1px solid rgba(2,45,61,.16)",
                marginBottom: 26,
              }}
            >
              <p style={{ fontFamily: "var(--mono)", fontSize: 13.5, lineHeight: 1.9, margin: 0, color: "rgba(2,45,61,.85)" }}>
                {SITE.address.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
                <span className="muted">CIN · {SITE.cin}</span>
              </p>
            </div>

            <p className="eyebrow" style={{ marginBottom: 14 }}>
              Routed enquiries
            </p>
            <div style={{ borderTop: "2px solid var(--ink)" }}>
              {ROUTES.map(([label, box, note]) => (
                <div
                  key={label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1fr) auto",
                    gap: 16,
                    alignItems: "baseline",
                    padding: "15px 0",
                    borderBottom: "1px solid var(--rule)",
                  }}
                >
                  <div>
                    <div style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: 16, letterSpacing: "-.016em" }}>
                      {label}
                    </div>
                    <div style={{ fontSize: 14.5, color: "var(--ink-66)", marginTop: 3 }}>{note}</div>
                  </div>
                  <a
                    href={`mailto:${box}@${SITE.domain}`}
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 12.5,
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(47,111,104,.4)",
                      paddingBottom: 2,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {box}@{SITE.domain}
                  </a>
                </div>
              ))}
            </div>

            <p className="eyebrow" style={{ margin: "28px 0 14px" }}>
              Direct
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <a
                href="tel:+91"
                className="chamfer-8"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  border: "2px solid var(--rule-strong)",
                  padding: "11px 16px",
                  fontFamily: "var(--mono)",
                  fontSize: 13,
                  color: "var(--ink)",
                  textDecoration: "none",
                }}
              >
                {SITE.phone}
              </a>
              <a
                href={SITE.whatsapp}
                className="chamfer-8"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  border: "2px solid rgba(47,111,104,.5)",
                  padding: "11px 16px",
                  fontFamily: "var(--mono)",
                  fontSize: 13,
                  color: "var(--signal)",
                  textDecoration: "none",
                }}
              >
                WhatsApp click-to-chat
              </a>
            </div>
          </div>

          <EnquiryForm />
        </div>
      </section>

      <section className="section section--mist">
        <div className="shell" style={{ paddingBlock: "clamp(36px, 4vw, 64px)" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap",
              marginBottom: 18,
            }}
          >
            <h2 className="display-m" style={{ fontSize: "clamp(22px, 2.2vw, 30px)" }}>
              Location
            </h2>
            <span className="data muted" style={{ fontSize: 11 }}>
              Google Maps embed pending registered address
            </span>
          </div>
          <div
            className="chamfer-16"
            style={{
              border: "2px solid var(--rule-strong)",
              background: "var(--paper)",
              aspectRatio: "21 / 7",
              minHeight: 220,
              display: "grid",
              placeItems: "center",
              backgroundImage:
                "linear-gradient(rgba(2,45,61,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(2,45,61,.05) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          >
            <div style={{ textAlign: "center", display: "grid", gap: 10, justifyItems: "center" }}>
              <div className="oct" style={{ width: 40, height: 40, background: "var(--gold)" }} />
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--ink-74)",
                }}
              >
                Google Maps embed · address pending
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
