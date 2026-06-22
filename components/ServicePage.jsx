import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SERVICES, getService } from "@/components/data";

function RelatedStrip({ currentSlug }) {
  const others = SERVICES.filter((s) => s.slug !== currentSlug);
  return (
    <section className="svc-related">
      <div className="wrap">
        <p className="eyebrow">Also explore</p>
        <div className="related-grid">
          {others.map((s) => (
            <Link key={s.slug} href={`/${s.slug}`} className="related-card">
              <span className="ix">{s.ix}</span>
              <strong>{s.nav}</strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicePage({ slug }) {
  const s = getService(slug);
  if (!s) return null;

  return (
    <>
      <section className="svc-hero">
        <div className="wrap">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: s.title }]} />
          <p className="eyebrow" style={{ marginTop: "18px" }}>What we design · {s.nav}</p>
          <h1>{s.title}</h1>
          <p className="svc-tagline">{s.tagline}</p>
        </div>
      </section>

      <section className="svc-body">
        <div className="wrap svc-grid">
          <div className="svc-copy">
            <p>{s.intro}</p>
            <p>{s.body}</p>
            <h2>What&apos;s considered</h2>
            <ul className="svc-features">
              {s.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <Link href="/#enquire" className="btn">Start your project</Link>
          </div>
          <div className="svc-media">
            <div className="svc-img">
              <Image src={`/images/${s.image}.webp`} alt={s.title} fill sizes="(max-width:860px) 100vw, 46vw" />
            </div>
          </div>
        </div>
      </section>

      <RelatedStrip currentSlug={s.slug} />
    </>
  );
}
