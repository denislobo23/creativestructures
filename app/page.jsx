import Image from "next/image";
import Link from "next/link";
import BriefForm from "@/components/BriefForm";
import { SERVICES } from "@/components/data";

const STEPS = [
  { n: "STEP 01", title: "Tell us the brief", text: "A few minutes describing the project, your budget range and your postcode. The more you tell us, the better the match." },
  { n: "STEP 02", title: "We match a maker", text: "We connect you with a vetted local designer-builder who works in your structure type and is taking on projects in your area." },
  { n: "STEP 03", title: "They design & quote", text: "You deal directly with the maker for concepts, drawings and a fixed quote. No obligation to go ahead." },
];

const PROJECTS = [
  { img: "project-1", title: "Arched poolside pergola", meta: "Custom hardwood · resort-style alfresco" },
  { img: "project-2", title: "Coastal outdoor room", meta: "Double-height void · indoor–outdoor flow" },
  { img: "project-3", title: "Monochrome pavilion", meta: "Layered timber · sculptural shadow" },
];

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow reveal d1">Custom outdoor architecture</p>
          <h1 className="reveal d2">Outdoor structures, <em>designed</em> — not assembled.</h1>
          <p className="lede reveal d3">
            Bespoke pergolas, patios, pavilions and louvred roofs, drawn for your home and your light.
            Tell us what you&apos;re imagining and we&apos;ll match you with a vetted maker who designs and builds it properly.
          </p>
          <div className="cta-row reveal d4">
            <a href="#enquire" className="btn">Design my project</a>
            <a href="#work" className="btn ghost">See what we design</a>
          </div>
          <div className="meta reveal d4">
            <span><b>Australia-wide</b> network of makers</span>
            <span><b>Commissioned</b> work only — no flat-pack</span>
            <span><b>Free</b> to brief, no obligation</span>
          </div>
        </div>
      </section>

      <section className="thesis">
        <div className="wrap">
          <div>
            <div className="line" />
            <h2>A kit comes in a box. A structure is drawn for one place.</h2>
          </div>
          <p>
            We don&apos;t do off-the-shelf. Every project starts as a brief — your house, your aspect, the way the
            afternoon sun falls — and is designed around it. The difference is in the proportions, the joinery and the
            materials, and it&apos;s the difference you live with for twenty years.
          </p>
        </div>
      </section>

      <section className="block" id="work">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">What we design</p>
            <h2>Structures, considered from the ground up.</h2>
            <p>Whatever the brief, we match it to a maker who works in that discipline. Click through for what each involves.</p>
          </div>
          <div className="grid">
            {SERVICES.map((s) => (
              <Link className="card" key={s.slug} href={`/${s.slug}`}>
                <div className="card-img">
                  <Image src={`/images/${s.image}.webp`} alt={s.title} fill sizes="(max-width:560px) 100vw, (max-width:900px) 50vw, 33vw" />
                </div>
                <div className="card-body">
                  <span className="ix">{s.ix}</span>
                  <h3>{s.title}</h3>
                  <p>{s.card}</p>
                  <span className="card-link">Explore {s.nav} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="block process">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">How it works</p>
            <h2>From idea to quote, in three steps.</h2>
            <p>One brief, the right maker, a real design. No call centre, no pressure.</p>
          </div>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.n}>
                <span className="n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block craft">
        <div className="wrap">
          <div>
            <p className="eyebrow">Why commissioned</p>
            <h2>The details a catalogue can&apos;t reach.</h2>
            <p>
              Flat-pack saves money on the day and costs you on every day after. Commissioned work is where the real
              value sits — in choices made for your site, not for a warehouse.
            </p>
            <ul>
              <li>Proportions set to your house, not a standard sheet size</li>
              <li>Hardwoods and powder-coated steel chosen for your climate</li>
              <li>Concealed fixings and joinery, not exposed brackets</li>
              <li>Engineered and certified for wind, span and council</li>
              <li>Finished to blend with existing roofs, eaves and lines</li>
            </ul>
          </div>
          <div className="swatch">
            <Image src="/images/craft-slats.webp" alt="Spotted gum timber slats casting raking light" fill sizes="(max-width:820px) 100vw, 50vw" />
            <span>Spotted gum · raking light</span>
          </div>
        </div>
      </section>

      <section className="block gallery">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow">Recently commissioned</p>
            <h2>A few built briefs.</h2>
            <p>Every one designed for its site — indicative of the work our makers deliver across Australia.</p>
          </div>
          <div className="gal-grid">
            {PROJECTS.map((p) => (
              <figure className="gal" key={p.img}>
                <div className="gal-img">
                  <Image src={`/images/${p.img}.webp`} alt={p.title} fill sizes="(max-width:760px) 100vw, 33vw" />
                </div>
                <figcaption>
                  <strong>{p.title}</strong>
                  <span>{p.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="block enquire" id="enquire">
        <div className="wrap">
          <div className="intro">
            <p className="eyebrow">Start your project</p>
            <h2>Tell us what you&apos;re imagining.</h2>
            <p>
              Share the brief below and we&apos;ll match you with the right maker. It&apos;s free, there&apos;s no
              obligation, and you&apos;ll only ever deal directly with the person who&apos;d build it.
            </p>
            <p className="assure">
              We pass your brief to one matched maker in your area — not a list of strangers. Your details aren&apos;t
              sold on or used for spam.
            </p>
          </div>
          <div>
            <BriefForm />
          </div>
        </div>
      </section>
    </>
  );
}
