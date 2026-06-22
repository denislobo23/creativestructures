import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { SERVICES } from "@/components/data";

function Glyph() {
  return (
    <svg className="glyph" viewBox="0 0 24 24" fill="none" stroke="#B5784A" strokeWidth="1.8" aria-hidden="true">
      <path d="M2 8 L12 3 L22 8" />
      <path d="M4 8 V21 M20 8 V21" />
      <path d="M4 11 H20 M4 15 H20 M4 19 H20" stroke="#CBA15B" strokeWidth="1.3" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="mark">
              <Glyph />
              <span>Creative Structures<small>Commissioned outdoor structures</small></span>
            </div>
            <p className="footer-blurb">
              Custom pergolas, patios, pavilions and louvred roofs — designed for your home and matched to a
              vetted maker, Australia-wide.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <p className="footer-h">Explore</p>
            <Link href="/">Home</Link>
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`}>{s.nav}</Link>
            ))}
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="footer-contact">
            <ContactForm />
          </div>
        </div>

        <div className="fine">
          <span>© 2026 Creative Structures. Australia-wide design &amp; build matching.</span>
          <span>A maker-matching service — designs and builds are delivered by independent vetted makers.</span>
        </div>
      </div>
    </footer>
  );
}
