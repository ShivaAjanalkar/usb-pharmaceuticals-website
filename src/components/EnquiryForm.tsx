"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/data/site";

const TYPES = ["General", "Business", "Partnership", "Careers"] as const;
type EnquiryType = (typeof TYPES)[number];

const INBOX: Record<EnquiryType, string> = {
  General: "info",
  Business: "business",
  Partnership: "partners",
  Careers: "careers",
};

/**
 * The site is statically hosted and has no server to receive a POST. Rather
 * than fake a submission, the form composes the enquiry and hands it to the
 * visitor's mail client, addressed to the inbox that owns the enquiry type.
 * Swap this for a real endpoint once mail routing exists.
 */
export default function EnquiryForm() {
  const [type, setType] = useState<EnquiryType>("General");
  const [handed, setHanded] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const to = `${INBOX[type]}@${SITE.domain}`;
    const subject = `${type} enquiry — ${data.get("name") || "website"}`;
    const body = [
      `Enquiry type: ${type}`,
      `Name: ${data.get("name")}`,
      `Organisation: ${data.get("organisation") || "—"}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "—"}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setHanded(to);
  }

  return (
    <div className="panel">
      <p className="eyebrow" style={{ marginBottom: 8 }}>
        Enquiry form
      </p>
      <h2
        className="display-m"
        style={{ fontSize: "clamp(24px, 2.5vw, 34px)", lineHeight: 1.05, marginBottom: 24 }}
      >
        Send us something specific
      </h2>

      {handed ? (
        <div
          className="chamfer-12"
          style={{
            border: "2px solid var(--signal)",
            background: "var(--paper)",
            padding: "clamp(24px, 3vw, 36px)",
          }}
        >
          <p
            className="eyebrow"
            style={{ color: "var(--signal)", letterSpacing: ".16em", marginBottom: 12 }}
          >
            Handed to your mail client
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.6, margin: "0 0 18px" }}>
            Your enquiry has been composed and addressed to{" "}
            <span className="data">{handed}</span>. Send it from your mail client
            and a named person replies within two working days — not an
            autoresponder.
          </p>
          <button type="button" className="reset" onClick={() => setHanded(null)}>
            Write another
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} style={{ display: "grid", gap: 18 }}>
          <div className="field">
            <label htmlFor="enquiry-type">Enquiry type</label>
            <div className="filters__chips" id="enquiry-type">
              {TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  className="chip"
                  aria-pressed={type === t}
                  onClick={() => setType(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="hairline-grid hairline-grid--2" style={{ background: "none", gap: 18 }}>
            <div className="field" style={{ background: "none" }}>
              <label htmlFor="name">Name</label>
              <input className="control" id="name" name="name" type="text" required placeholder="Full name" />
            </div>
            <div className="field" style={{ background: "none" }}>
              <label htmlFor="organisation">Organisation</label>
              <input className="control" id="organisation" name="organisation" type="text" placeholder="Company or institution" />
            </div>
          </div>

          <div className="hairline-grid hairline-grid--2" style={{ background: "none", gap: 18 }}>
            <div className="field" style={{ background: "none" }}>
              <label htmlFor="email">Email</label>
              <input className="control" id="email" name="email" type="email" required placeholder="name@company.com" />
            </div>
            <div className="field" style={{ background: "none" }}>
              <label htmlFor="phone">Phone</label>
              <input
                className="control"
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91"
                style={{ fontFamily: "var(--mono)", fontSize: 14 }}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              className="control"
              id="message"
              name="message"
              rows={5}
              required
              placeholder="What do you need from us, and by when?"
            />
            <span className="field__hint">
              Plain detail is more useful than a formal letter
            </span>
          </div>

          <label
            style={{
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
              fontSize: 14.5,
              lineHeight: 1.55,
              color: "rgba(2,45,61,.76)",
            }}
          >
            <input
              type="checkbox"
              required
              style={{ marginTop: 3, width: 17, height: 17, accentColor: "var(--signal)", flex: "none" }}
            />
            <span>
              I understand this form is not for reporting a medical emergency or
              seeking medical advice.
            </span>
          </label>

          <button type="submit" className="btn btn--primary" style={{ justifySelf: "start", fontSize: 16, padding: "16px 24px" }}>
            Send enquiry <span className="btn__arrow">→</span>
          </button>
        </form>
      )}
    </div>
  );
}
