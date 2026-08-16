"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconMenu } from "@/components/icons";
import { NAV, SITE } from "@/data/site";
import { asset } from "@/lib/asset";

function isCurrent(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // The masthead condenses once the page has moved under it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile panel on navigation, and on Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <div className="topbar">
        <div className="shell topbar__inner">
          <span>{SITE.tagline}</span>
          <Link href="/design-system/">Design system</Link>
        </div>
      </div>

      <header className="masthead" data-scrolled={scrolled}>
        <div className="shell masthead__inner">
          <Link href="/" className="masthead__brand" aria-label={`${SITE.name} — home`}>
            <Image
              src={asset("/assets/usb-icon-copper.png")}
              alt=""
              width={42}
              height={42}
              style={{ height: scrolled ? 34 : 42, width: "auto" }}
              priority
            />
            <span />
            <Image
              src={asset("/assets/usb-wordmark-navy.png")}
              alt={SITE.name}
              width={200}
              height={25}
              style={{ height: scrolled ? 21 : 25, width: "auto" }}
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
            <IconMenu open={open} size={18} />
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <nav className="nav-panel" id="mobile-nav" aria-label="Primary mobile">
            {NAV.map((item, i) => {
              const current = isCurrent(item.href, pathname);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  style={{ "--i": i } as React.CSSProperties}
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
