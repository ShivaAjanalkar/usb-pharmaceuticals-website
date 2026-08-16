"use client";

import Image from "next/image";
import { asset } from "@/lib/asset";
import { useRouter, useSearchParams } from "next/navigation";
import { setHcpVerified } from "@/lib/hcp";

/** Only same-origin, in-site paths are accepted as a return destination. */
function safeReturn(raw: string | null): string {
  if (!raw || !raw.startsWith("/") || raw.startsWith("//")) return "/products/";
  return raw;
}

export default function HcpGate() {
  const router = useRouter();
  const params = useSearchParams();
  const back = safeReturn(params.get("return"));

  return (
    <section
      style={{
        background: "var(--ink)",
        color: "var(--paper)",
        minHeight: "72vh",
        display: "grid",
        placeItems: "center",
        padding: "clamp(40px, 6vw, 100px) var(--gutter)",
      }}
    >
      <div
        className="chamfer-20"
        style={{
          width: "100%",
          maxWidth: 760,
          border: "2px solid var(--gold)",
          background: "var(--ink-deep)",
          padding: "clamp(28px, 4vw, 60px)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: "clamp(24px, 3vw, 36px)",
          }}
        >
          <Image
            src={asset("/assets/usb-icon-white.png")}
            alt=""
            width={46}
            height={46}
            style={{ height: 46, width: "auto", opacity: 0.9 }}
          />
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10.5,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "var(--gold)",
              lineHeight: 1.7,
            }}
          >
            Healthcare professional
            <br />
            verification
          </span>
        </div>

        <h1
          className="display-m"
          style={{ fontSize: "clamp(28px, 3.6vw, 46px)", lineHeight: 1.02, marginBottom: 20, maxWidth: "24ch" }}
        >
          Are you a registered healthcare professional?
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 1.25vw, 18px)",
            lineHeight: 1.62,
            margin: "0 0 14px",
            color: "var(--paper-80)",
            maxWidth: "62ch",
            textWrap: "pretty",
          }}
        >
          The section you requested contains prescribing information for products
          classified under Schedules H, H1 and X of the Drugs and Cosmetics
          Rules, 1945. Indian law restricts this content to registered medical
          practitioners, pharmacists and other qualified healthcare
          professionals.
        </p>

        <p
          className="notice notice--light"
          style={{ fontSize: 11.5, margin: "0 0 clamp(26px, 3vw, 38px)", maxWidth: "70ch" }}
        >
          This confirmation cannot be dismissed by clicking outside it. Choose one
          of the two options below.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 26 }}>
          <button
            type="button"
            className="btn btn--accent"
            style={{ fontSize: 16 }}
            onClick={() => {
              setHcpVerified(true);
              router.push(back);
            }}
          >
            Yes — I am a healthcare professional
          </button>
          <button
            type="button"
            className="btn btn--outline-light"
            style={{ fontSize: 16 }}
            onClick={() => {
              setHcpVerified(false);
              router.push("/products/");
            }}
          >
            No — take me back
          </button>
        </div>

        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10.5,
            lineHeight: 1.8,
            letterSpacing: ".04em",
            margin: 0,
            color: "rgba(252,252,250,.5)",
            borderTop: "1px solid rgba(205,166,101,.28)",
            paddingTop: 18,
            maxWidth: "76ch",
          }}
        >
          Confirming professional status is a self-declaration and is recorded for
          this session only. USB Pharmaceuticals Pvt. Ltd. does not use this page
          to promote prescription medicines to the public. If you are a patient or
          caregiver, speak to your prescriber or pharmacist.
        </p>
      </div>
    </section>
  );
}
