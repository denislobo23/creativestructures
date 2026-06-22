import Breadcrumbs from "@/components/Breadcrumbs";
import ContactPageForm from "@/components/ContactPageForm";

export const metadata = {
  title: "Contact — Creative Structures",
  description: "Get in touch about a custom outdoor structure, or ask us anything.",
};

export default function ContactPage() {
  return (
    <section className="block contact-page">
      <div className="wrap">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

        <div className="contact-head">
          <p className="eyebrow" style={{ marginTop: "18px" }}>Contact</p>
          <h1>Get in touch.</h1>
          <p>
            Tell us about a project or ask a question — we&apos;ll point you to the right maker, or just
            answer. If you&apos;re ready to brief a build in detail, the project form on the home page captures
            more to work with.
          </p>
        </div>

        <div className="contact-grid">
          <ContactPageForm />
          <aside className="contact-aside">
            <p className="eyebrow">What happens next</p>
            <ul>
              <li>We read your message and match it to the right maker in your area.</li>
              <li>You hear back — usually within a couple of business days.</li>
              <li>No call centre, no spam, and we don&apos;t on-sell your details.</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
