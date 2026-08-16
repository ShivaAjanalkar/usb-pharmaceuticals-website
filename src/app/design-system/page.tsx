import type { Metadata } from "next";
import Octagon from "@/components/Octagon";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = {
  title: "Tokens & components",
  description:
    "Six colours, three typefaces, one geometry. The token and component sheet behind the USB Pharmaceuticals site.",
  robots: { index: false },
};

const SWATCHES = [
  ["ink", "#022D3D", "Body text, dark sections, footer, rules"],
  ["gold", "#CDA665", "Brand accent — rules, marks, borders. Never body text."],
  ["gold-deep", "#6E4F1C", "The only gold permitted for words on light grounds"],
  ["paper", "#FCFCFA", "Page ground"],
  ["mist", "#EEF1F2", "Alternate sections, cards, table rows"],
  ["signal", "#2F6F68", "Functional only — links, form focus, active states"],
];

const SCALE: [string, string, string, number, string][] = [
  ["Display XL", "clamp(42px, 6.6vw, 100px)", "var(--display)", 600, "Hero"],
  ["Display L", "clamp(30px, 4.4vw, 68px)", "var(--display)", 600, "Poster statement"],
  ["Display M", "clamp(28px, 3.1vw, 46px)", "var(--display)", 600, "Section heading"],
  ["Display S", "20px", "var(--display)", 600, "Card heading"],
  ["Lead", "clamp(19px, 1.55vw, 24px)", "var(--serif)", 400, "Opening paragraph"],
  ["Body", "17px", "var(--serif)", 400, "Long-form prose"],
  ["Data", "13px", "var(--mono)", 400, "All product particulars"],
  ["Eyebrow", "11px", "var(--mono)", 400, "Section labels, uppercase .2em"],
];

const box = {
  border: "2px solid var(--ink)",
  padding: "clamp(20px, 2.4vw, 32px)",
} as const;

export default function DesignSystemPage() {
  return (
    <>
      <PageHead
        kicker="Handover"
        title="Tokens & components"
        sub="Six colours, three typefaces, one geometry. Everything on the site is assembled from what is on this page — including the chamfer and the octagonal mask."
      />

      <section className="section">
        <div
          className="shell"
          style={{ paddingBlock: "clamp(36px, 4vw, 68px)", display: "grid", gap: "clamp(28px, 3.4vw, 52px)" }}
        >
          <div>
            <h2 className="display-m" style={{ fontSize: "clamp(22px, 2.2vw, 30px)", marginBottom: 20 }}>
              Colour
            </h2>
            <div className="hairline-grid hairline-grid--3">
              {SWATCHES.map(([name, hex, role]) => (
                <div key={name}>
                  <div
                    style={{
                      background: hex,
                      height: 96,
                      borderBottom: name === "paper" ? "1px solid rgba(2,45,61,.2)" : "none",
                    }}
                  />
                  <div style={{ padding: "14px 16px 18px" }}>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 12.5, letterSpacing: ".06em" }}>
                      {name}
                    </div>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--gold-deep)", marginTop: 3 }}>
                      {hex}
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(2,45,61,.7)", marginTop: 9 }}>
                      {role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="display-m" style={{ fontSize: "clamp(22px, 2.2vw, 30px)", marginBottom: 20 }}>
              Type scale
            </h2>
            <div style={box}>
              {SCALE.map(([name, size, family, weight, use], i) => (
                <div
                  key={name}
                  className="split"
                  style={{
                    gridTemplateColumns: "132px minmax(0, 1fr) 150px",
                    gap: 20,
                    alignItems: "baseline",
                    padding: "18px 0",
                    borderBottom: i === SCALE.length - 1 ? "none" : "1px solid var(--rule)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10.5,
                      letterSpacing: ".14em",
                      textTransform: "uppercase",
                      color: "var(--gold-deep)",
                    }}
                  >
                    {name}
                  </span>
                  <span
                    style={{
                      fontFamily: family,
                      fontWeight: weight,
                      fontSize: size,
                      letterSpacing: family === "var(--display)" ? "-.03em" : 0,
                      lineHeight: 1.1,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    Universal Science
                  </span>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 10.5, lineHeight: 1.6, color: "var(--ink-74)" }}>
                    {use}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="split split--even" style={{ gap: "clamp(20px, 2.4vw, 36px)" }}>
            <div>
              <h2 className="display-m" style={{ fontSize: "clamp(22px, 2.2vw, 30px)", marginBottom: 20 }}>
                Geometry
              </h2>
              <div style={{ ...box, display: "grid", gap: 24 }}>
                <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
                  <Octagon size={96} style={{ flex: "none" }} />
                  <div>
                    <div style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: 17, letterSpacing: "-.018em" }}>
                      Octagonal mask
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        lineHeight: 1.7,
                        color: "var(--ink-66)",
                        marginTop: 6,
                        wordBreak: "break-all",
                      }}
                    >
                      clip-path: polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%)
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.55, color: "rgba(2,45,61,.7)", marginTop: 8 }}>
                      Double outline: 2px gold, 3px paper, 1px gold at 50%. Every
                      portrait, photograph and partner logo.
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 20,
                    alignItems: "center",
                    flexWrap: "wrap",
                    borderTop: "1px solid var(--rule)",
                    paddingTop: 24,
                  }}
                >
                  <div
                    className="chamfer-12"
                    style={{ width: 120, height: 72, background: "var(--mist)", border: "2px solid var(--ink)", flex: "none" }}
                  />
                  <div>
                    <div style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: 17, letterSpacing: "-.018em" }}>
                      Chamfer
                    </div>
                    <div style={{ fontFamily: "var(--mono)", fontSize: 11, lineHeight: 1.7, color: "var(--ink-66)", marginTop: 6 }}>
                      6px chips · 7px fields · 9–10px buttons · 12–20px cards
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.55, color: "rgba(2,45,61,.7)", marginTop: 8 }}>
                      Nothing on this site has a rounded corner. Radius is always
                      0; corners are cut at 45°.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="display-m" style={{ fontSize: "clamp(22px, 2.2vw, 30px)", marginBottom: 20 }}>
                Spacing
              </h2>
              <div style={{ ...box, display: "grid", gap: 12 }}>
                {[4, 8, 12, 16, 24, 32, 48, 72, 104].map((n) => (
                  <div
                    key={n}
                    style={{ display: "grid", gridTemplateColumns: "52px minmax(0, 1fr)", gap: 14, alignItems: "center" }}
                  >
                    <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--gold-deep)" }}>{n}</span>
                    <span style={{ height: 10, width: n, maxWidth: "100%", background: "var(--ink)", display: "block" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="display-m" style={{ fontSize: "clamp(22px, 2.2vw, 30px)", marginBottom: 20 }}>
              Controls
            </h2>
            <div style={{ ...box, display: "grid", gap: 26 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
                <span className="btn btn--primary">
                  Primary <span className="btn__arrow">→</span>
                </span>
                <span className="btn btn--secondary">Secondary</span>
                <span className="link-rule">Text link</span>
                <span className="btn btn--accent">Accent (on ink only)</span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, borderTop: "1px solid var(--rule)", paddingTop: 22 }}>
                {["All", "Tablet", "Softgel capsule", "Combi-kit"].map((t, i) => (
                  <span key={t} className="chip" aria-pressed={i === 1}>
                    {t}
                  </span>
                ))}
              </div>

              <div
                className="split split--even"
                style={{ gap: 18, borderTop: "1px solid var(--rule)", paddingTop: 22 }}
              >
                <div className="field">
                  <label htmlFor="ds-a">Text field</label>
                  <input className="control" id="ds-a" type="text" placeholder="Placeholder" readOnly />
                </div>
                <div className="field">
                  <label htmlFor="ds-b">Focus state</label>
                  <input
                    className="control"
                    id="ds-b"
                    type="text"
                    placeholder="Signal teal, 1px inset"
                    readOnly
                    style={{ borderColor: "var(--signal)", boxShadow: "inset 0 0 0 1px var(--signal)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
