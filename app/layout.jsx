import "./globals.css";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Creative Structures — Commissioned outdoor structures, Australia-wide",
  description:
    "Custom-designed pergolas, patios, pavilions and louvred roofs. Tell us what you're imagining and we'll match you with a vetted maker who designs and builds it properly — not from a kit.",
  metadataBase: new URL("https://www.creativestructures.com.au"),
  openGraph: {
    title: "Creative Structures — Commissioned outdoor structures",
    description:
      "Bespoke pergolas, patios, pavilions and louvred roofs, designed for your home and matched to a vetted maker.",
    type: "website",
    locale: "en_AU",
    images: ["/images/og.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={`${display.variable} ${body.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
