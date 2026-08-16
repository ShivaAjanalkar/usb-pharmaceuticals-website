import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Sans, Source_Serif_4 } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { SITE } from "@/data/site";
import "./globals.css";

const display = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.shortName}`,
  },
  description: SITE.description,
  icons: { icon: `${base}/assets/usb-favicon-180.png`, apple: `${base}/assets/usb-appicon-512.png` },
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${display.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <SiteHeader />
          <main style={{ flex: 1 }}>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
