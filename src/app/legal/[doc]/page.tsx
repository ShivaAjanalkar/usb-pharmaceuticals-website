import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHead from "@/components/PageHead";
import { LEGAL_DOCS, getLegalDoc } from "@/data/legal";

type Params = { params: Promise<{ doc: string }> };

export function generateStaticParams() {
  return LEGAL_DOCS.map((d) => ({ doc: d.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { doc } = await params;
  const found = getLegalDoc(doc);
  if (!found) return { title: "Not found" };
  return { title: found.title, description: found.intro };
}

export default async function LegalPage({ params }: Params) {
  const { doc } = await params;
  const found = getLegalDoc(doc);
  if (!found) notFound();

  return (
    <>
      <PageHead kicker={found.kicker} title={found.title} sub={found.intro} />

      <section className="section">
        <div
          className="shell split"
          style={{
            paddingBlock: "clamp(36px, 4vw, 72px)",
            gridTemplateColumns: "minmax(0, 272px) minmax(0, 1fr)",
            alignItems: "start",
          }}
        >
          <div>
            <p
              className="eyebrow"
              style={{ fontSize: 10.5, letterSpacing: ".18em", marginBottom: 14, paddingBottom: 12, borderBottom: "2px solid var(--ink)" }}
            >
              Documents
            </p>
            <div style={{ display: "grid", marginBottom: 30 }}>
              {LEGAL_DOCS.map((d) => (
                <Link
                  key={d.slug}
                  href={`/legal/${d.slug}/`}
                  style={{
                    fontFamily: "var(--display)",
                    fontWeight: 600,
                    fontSize: 15,
                    textDecoration: "none",
                    padding: "11px 0",
                    borderBottom: "1px solid rgba(2,45,61,.13)",
                    color: d.slug === found.slug ? "var(--ink)" : "var(--ink-74)",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  {d.title}
                  <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--gold)" }}>
                    {d.slug === found.slug ? "●" : ""}
                  </span>
                </Link>
              ))}
            </div>

            <p
              className="eyebrow"
              style={{ fontSize: 10.5, letterSpacing: ".18em", marginBottom: 14, paddingBottom: 12, borderBottom: "2px solid var(--ink)" }}
            >
              On this page
            </p>
            <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 9 }}>
              {found.clauses.map(([n, heading]) => (
                <li
                  key={n}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "30px minmax(0, 1fr)",
                    gap: 8,
                    fontSize: 14.5,
                    lineHeight: 1.42,
                    color: "var(--ink-66)",
                  }}
                >
                  <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--gold-deep)" }}>
                    {n}
                  </span>
                  <a href={`#clause-${n}`} style={{ color: "inherit", textDecoration: "none" }}>
                    {heading}
                  </a>
                </li>
              ))}
            </ol>

            <p
              style={{
                marginTop: 26,
                fontFamily: "var(--mono)",
                fontSize: 10.5,
                lineHeight: 1.8,
                letterSpacing: ".04em",
                color: "var(--ink-74)",
                borderTop: "1px solid rgba(2,45,61,.16)",
                paddingTop: 14,
              }}
            >
              Version 0.1 · draft
              <br />
              Effective [DATE — TBC]
              <br />
              Owner [LEGAL CONTACT — TBC]
            </p>
          </div>

          <div className="spine">
            {found.clauses.map(([n, heading, body]) => (
              <article
                key={n}
                id={`clause-${n}`}
                style={{
                  paddingBottom: "clamp(26px, 3vw, 40px)",
                  marginBottom: "clamp(26px, 3vw, 40px)",
                  borderBottom: "1px solid rgba(2,45,61,.13)",
                  scrollMarginTop: 120,
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 12 }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: ".14em", color: "var(--gold-deep)", flex: "none" }}>
                    {n}
                  </span>
                  <h2
                    className="display-s"
                    style={{ fontSize: "clamp(20px, 1.85vw, 27px)", letterSpacing: "-.024em" }}
                  >
                    {heading}
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: "clamp(16px, 1.2vw, 17.5px)",
                    lineHeight: 1.68,
                    margin: 0,
                    maxWidth: "70ch",
                    color: "var(--ink-82)",
                    textWrap: "pretty",
                  }}
                >
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
