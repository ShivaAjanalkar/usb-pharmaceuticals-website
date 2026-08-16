"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CATEGORIES, FORMS, LETTERS, PRODUCTS } from "@/data/products";

const ALL = "All";

export default function Catalogue() {
  const [category, setCategory] = useState<string>(ALL);
  const [form, setForm] = useState<string>(ALL);
  const [letter, setLetter] = useState<string>(ALL);
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        (category === ALL || p.category === category) &&
        (form === ALL || p.form === form) &&
        (letter === ALL || p.letter === letter) &&
        (!q ||
          p.brand.toLowerCase().includes(q) ||
          p.composition.toLowerCase().includes(q) ||
          p.id.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.form.toLowerCase().includes(q)),
    );
  }, [category, form, letter, query]);

  const reset = () => {
    setCategory(ALL);
    setForm(ALL);
    setLetter(ALL);
    setQuery("");
  };

  const filterRow = (
    label: string,
    value: string,
    options: readonly string[],
    onSelect: (v: string) => void,
  ) => (
    <div className="filters__row">
      <span>{label}</span>
      <div className="filters__chips">
        {[ALL, ...options].map((option) => (
          <button
            key={option}
            type="button"
            className="chip"
            aria-pressed={value === option}
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <section className="section">
      <div className="shell" style={{ paddingBlock: "clamp(32px, 3.6vw, 60px)" }}>
        <div className="filters">
          <div className="filters__bar">
            <span>Filter catalogue</span>
            <input
              type="search"
              className="filters__search"
              value={query}
              placeholder="Search brand, composition, category…"
              aria-label="Search the catalogue"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div style={{ padding: "0 16px 4px" }}>
            {filterRow("Category", category, CATEGORIES, setCategory)}
            {filterRow("Dosage form", form, FORMS, setForm)}
            {filterRow("A–Z", letter, LETTERS, setLetter)}
          </div>

          <div className="filters__foot">
            <span>
              {String(rows.length).padStart(2, "0")} of{" "}
              {String(PRODUCTS.length).padStart(2, "0")} records
            </span>
            <button type="button" className="reset" onClick={reset}>
              Reset filters
            </button>
          </div>
        </div>

        <div className="catalogue-table">
          <table>
            <caption>
              Permitted fields only — no indications, efficacy claims or pricing
            </caption>
            <thead>
              <tr>
                <th style={{ width: 56 }}>#</th>
                <th>Brand</th>
                <th>Composition</th>
                <th>Form</th>
                <th>Pack</th>
                <th>Category</th>
                <th>Schedule</th>
                <th style={{ textAlign: "right" }}>Record</th>
              </tr>
            </thead>
            <tbody>
              {rows.length ? (
                rows.map((p) => (
                  <tr key={p.id}>
                    <td style={{ color: "var(--gold-deep)" }}>{p.letter}</td>
                    <td>{p.brand}</td>
                    <td style={{ minWidth: 260 }}>{p.composition}</td>
                    <td>{p.form}</td>
                    <td>{p.pack}</td>
                    <td>{p.category}</td>
                    <td>
                      <span
                        className="schedule-tag"
                        data-otc={p.schedule === "Non-scheduled"}
                      >
                        {p.schedule}
                      </span>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <Link href={`/products/${p.slug}/`}>{p.id} →</Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={8}
                    style={{
                      padding: "56px 16px",
                      textAlign: "center",
                      color: "var(--ink-74)",
                    }}
                  >
                    No records match these filters. Reset to see all{" "}
                    {PRODUCTS.length}.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="catalogue-cards">
          {rows.map((p) => (
            <Link key={p.id} href={`/products/${p.slug}/`}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--display)",
                    fontWeight: 600,
                    fontSize: 17,
                    letterSpacing: "-.018em",
                  }}
                >
                  {p.brand}
                </span>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    color: "var(--gold-deep)",
                  }}
                >
                  {p.id}
                </span>
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  color: "var(--ink-74)",
                }}
              >
                {p.composition}
              </div>
              <dl className="spec-list" style={{ borderTopWidth: 1 }}>
                {(
                  [
                    ["Form", p.form],
                    ["Pack", p.pack],
                    ["Category", p.category],
                    ["Schedule", p.schedule],
                  ] as const
                ).map(([k, v]) => (
                  <div key={k} className="spec-row">
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
