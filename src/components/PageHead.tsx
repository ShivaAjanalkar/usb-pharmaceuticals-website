import type { ReactNode } from "react";

export default function PageHead({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: ReactNode;
  sub?: string;
}) {
  return (
    <section className="section section--ink">
      <div className="shell" style={{ paddingBlock: "clamp(40px, 5vw, 88px)" }}>
        <p
          className="eyebrow eyebrow--gold eyebrow-rule"
          style={{ marginBottom: "clamp(18px, 2.2vw, 30px)" }}
        >
          {kicker}
        </p>
        <h1 className="display-l" style={{ maxWidth: "20ch" }}>
          {title}
        </h1>
        {sub && (
          <p
            style={{
              fontSize: "clamp(17px, 1.35vw, 21px)",
              lineHeight: 1.58,
              margin: "22px 0 0",
              maxWidth: "58ch",
              color: "var(--paper-72)",
              textWrap: "pretty",
            }}
          >
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
