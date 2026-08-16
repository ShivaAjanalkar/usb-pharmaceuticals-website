"use client";

import Link from "next/link";
import { useHcpVerified } from "@/lib/hcp";

const HCP_FIELDS = [
  "Indications",
  "Dosage and administration",
  "Contraindications",
  "Warnings and precautions",
  "Adverse reactions",
  "Drug interactions",
  "Use in special populations",
  "Pack insert (PDF)",
];

export default function PrescribingPanel({ slug }: { slug: string }) {
  const verified = useHcpVerified();

  return (
    <div
      className="chamfer-16"
      style={{
        border: "2px solid var(--ink)",
        background: "var(--mist)",
        padding: "clamp(24px, 2.8vw, 40px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
        <div
          className="oct"
          style={{
            width: 30,
            height: 30,
            background: "var(--gold)",
            display: "grid",
            placeItems: "center",
            flex: "none",
          }}
        >
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 13,
              color: "var(--ink)",
              fontWeight: 600,
            }}
          >
            {verified ? "✓" : "!"}
          </span>
        </div>
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10.5,
            letterSpacing: ".16em",
            textTransform: "uppercase",
            color: "var(--gold-deep)",
          }}
        >
          {verified ? "Access granted" : "Restricted section"}
        </span>
      </div>

      <h2
        className="display-s"
        style={{ fontSize: "clamp(21px, 2vw, 28px)", marginBottom: 14 }}
      >
        Prescribing information
      </h2>

      {verified ? (
        <>
          <p style={{ fontSize: 16, lineHeight: 1.64, margin: "0 0 18px", color: "var(--ink-82)" }}>
            Verified as a healthcare professional. The following fields become
            available once the medical content is written and signed off.
          </p>
          <dl className="spec-list" style={{ borderTopWidth: 1, borderTopColor: "rgba(2,45,61,.2)" }}>
            {HCP_FIELDS.map((field) => (
              <div key={field} className="spec-row">
                <dt style={{ fontFamily: "var(--serif)", fontSize: 15.5, letterSpacing: 0, textTransform: "none", color: "var(--ink)" }}>
                  {field}
                </dt>
                <dd
                  style={{
                    fontSize: 10.5,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "rgba(2,45,61,.45)",
                  }}
                >
                  Content pending
                </dd>
              </div>
            ))}
          </dl>
        </>
      ) : (
        <>
          <p style={{ fontSize: 16, lineHeight: 1.64, margin: "0 0 20px", color: "var(--ink-82)" }}>
            Indications, dosage, contraindications, warnings and interactions are
            available to registered healthcare professionals only. This is a
            legal restriction under the Drugs and Magic Remedies (Objectionable
            Advertisements) Act, 1954 — not a marketing gate.
          </p>
          <Link
            className="btn btn--primary"
            href={{ pathname: "/hcp/", query: { return: `/products/${slug}/` } }}
          >
            Confirm professional status <span className="btn__arrow">→</span>
          </Link>
        </>
      )}
    </div>
  );
}
