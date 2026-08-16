import type { Metadata } from "next";
import Octagon from "@/components/Octagon";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Eight founders, eight accountabilities. Profiles are being finalised and will be published in full before launch.",
};

export default function TeamPage() {
  return (
    <>
      <PageHead
        kicker="05 · Our team"
        title="Eight founders, eight accountabilities."
        sub="Profiles are being finalised. The structure of each profile is set; the content is not yet supplied."
      />

      <section className="section">
        <div className="shell section__body">
          <p
            style={{
              fontSize: "clamp(18px, 1.5vw, 22px)",
              lineHeight: 1.55,
              margin: "0 0 8px",
              maxWidth: "62ch",
              textWrap: "pretty",
            }}
          >
            USB Pharmaceuticals was founded by eight professionals, each
            accountable for a defined function. Profiles are being finalised and
            will be published in full — including designation and a written bio —
            before launch.
          </p>
          <p className="data muted" style={{ margin: "0 0 clamp(28px, 3.4vw, 48px)", fontSize: 12 }}>
            08 profiles reserved · none supplied
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "clamp(20px, 2.4vw, 36px)",
            }}
            data-founders="full"
          >
            {Array.from({ length: 8 }, (_, i) => {
              const n = String(i + 1).padStart(2, "0");
              return (
                <div key={n}>
                  <Octagon>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 22, color: "var(--gold-deep)" }}>
                      {n}
                    </span>
                  </Octagon>
                  <div style={{ marginTop: 14, borderTop: "1px solid rgba(2,45,61,.18)", paddingTop: 10 }}>
                    <div
                      style={{
                        fontFamily: "var(--display)",
                        fontWeight: 600,
                        fontSize: 17,
                        letterSpacing: "-.015em",
                        color: "var(--ink-74)",
                      }}
                    >
                      Founder {n}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 10,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "var(--ink-74)",
                        marginTop: 5,
                      }}
                    >
                      Name pending
                    </div>
                    <p
                      style={{
                        fontSize: 14.5,
                        lineHeight: 1.6,
                        color: "var(--ink-74)",
                        margin: "12px 0 0",
                        borderLeft: "1px solid rgba(205,166,101,.5)",
                        paddingLeft: 12,
                      }}
                    >
                      Bio slot — 80 to 150 words. Function owned, years in trade,
                      professional qualification. No claims that require evidence
                      we do not hold.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
