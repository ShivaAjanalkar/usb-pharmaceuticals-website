"use client";

import Image from "next/image";
import { asset } from "@/lib/asset";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, SITE } from "@/data/site";

function isCurrent(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="shell topbar__inner">
          <span>{SITE.tagline}</span>
          <Link href="/design-system/">Design system</Link>
        </div>
      </div>

      <header className="masthead">
        <div className="shell masthead__inner">
          <Link
            href="/"
            className="masthead__brand"
            aria-label={`${SITE.name} — home`}
          >
            <Image
              src={asset("/assets/usb-icon-copper.png")}
              alt=""
              width={42}
              height={42}
              style={{ height: 42, width: "auto" }}
              priority
            />
            <span />
            <Image
              src={asset("/assets/usb-wordmark-navy.png")}
              alt={SITE.name}
              width={200}
              height={25}
              style={{ height: 25, width: "auto" }}
              priority
            />
          </Link>

          <nav className="nav" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href, pathname) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <nav className="nav-panel" id="mobile-nav" aria-label="Primary mobile">
            {NAV.map((item) => {
              const current = isCurrent(item.href, pathname);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  <span>{current ? "●" : "→"}</span>
                </Link>
              );
            })}
          </nav>
        )}
      </header>
    </>
  );
}
