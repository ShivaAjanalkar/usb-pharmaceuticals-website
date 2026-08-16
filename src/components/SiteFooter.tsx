import Image from "next/image";
import { asset } from "@/lib/asset";
import Link from "next/link";
import { FOOTER_COLUMNS, SITE } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__cols">
          <div>
            <Image
              src={asset("/assets/usb-horizontal-white.png")}
              alt={SITE.name}
              width={290}
              height={64}
              style={{ width: "min(100%, 290px)", height: "auto", marginBottom: 20 }}
            />
            <p
              className="eyebrow eyebrow--gold"
              style={{ letterSpacing: ".16em", marginBottom: 16 }}
            >
              {SITE.tagline}
            </p>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                margin: 0,
                color: "var(--paper-66)",
                maxWidth: "40ch",
              }}
            >
              A pharmaceutical marketing company. Products are manufactured by
              licensed third-party manufacturing partners.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.head}>
              <p className="footer__head">{col.head}</p>
              <div className="footer__links">
                {col.links.map((link) => (
                  <Link key={link.href + link.label} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="footer__base">
          <p>
            © {new Date().getFullYear()} {SITE.name} All rights reserved.
            Information on this site is intended for business and professional
            audiences and is not medical advice. Prescription medicines are
            supplied only against a valid prescription from a registered medical
            practitioner.
          </p>
          <Link
            href="/legal/privacy/"
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "var(--gold)",
              borderBottom: "1px solid rgba(205,166,101,.5)",
              paddingBottom: 2,
              whiteSpace: "nowrap",
            }}
          >
            Privacy · Terms · Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
