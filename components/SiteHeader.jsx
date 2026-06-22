"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SERVICES } from "@/components/data";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);
  const cls = (href) => (pathname === href ? "navlink active" : "navlink");

  return (
    <header className="bar">
      <div className="wrap">
        <Link href="/" className="logo" onClick={close} aria-label="Creative Structures — home">
          <Image src="/images/logo.webp" alt="Creative Structures" width={240} height={60} priority className="logo-img" />
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          <Link href="/" className={cls("/")}>Home</Link>

          <div className="has-dropdown">
            <button className="navlink dd-toggle" aria-haspopup="true">
              What we design <span aria-hidden="true">▾</span>
            </button>
            <div className="dropdown" role="menu">
              {SERVICES.map((s) => (
                <Link key={s.slug} href={`/${s.slug}`} role="menuitem" className="dd-item">
                  {s.nav}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contact" className={cls("/contact")}>Contact</Link>
          <Link href="/#enquire" className="btn">Start your project</Link>
        </nav>

        <button
          className="menu-btn"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          <Link href="/" className="mlink" onClick={close}>Home</Link>
          <p className="mlabel">What we design</p>
          {SERVICES.map((s) => (
            <Link key={s.slug} href={`/${s.slug}`} className="mlink sub" onClick={close}>
              {s.nav}
            </Link>
          ))}
          <Link href="/contact" className="mlink" onClick={close}>Contact</Link>
          <Link href="/#enquire" className="btn" onClick={close} style={{ marginTop: "14px" }}>
            Start your project
          </Link>
        </div>
      )}
    </header>
  );
}
