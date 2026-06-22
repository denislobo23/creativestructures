"use client";

import { useState } from "react";

// ▸ Formspree endpoint. Shared with the project brief form — both messages land
//   in the same inbox, distinguished by their _subject line.
const CONTACT_ENDPOINT = "https://formspree.io/f/mnjkqdlz";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (CONTACT_ENDPOINT.includes("YOUR_FORM_ID")) {
      setError("Form isn't connected yet — add your Formspree endpoint in components/ContactForm.jsx.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Couldn't reach the server. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="footer-ok">
        <strong>Thanks — message sent.</strong>
        <span>We&apos;ll get back to you shortly.</span>
      </div>
    );
  }

  return (
    <form className="footer-form" onSubmit={handleSubmit} noValidate>
      <p className="footer-form-title">Send us a message</p>
      <input type="hidden" name="_subject" value="Contact message — Creative Structures" />
      <input type="text" name="_gotcha" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="f-row">
        <input name="Name" type="text" placeholder="Your name" aria-label="Your name" required />
        <input name="Email" type="email" placeholder="Email" aria-label="Email" required />
      </div>
      <textarea name="Message" placeholder="How can we help?" aria-label="Message" required />
      <button type="submit" className="btn" disabled={sending}>
        {sending ? "Sending…" : "Send message"}
      </button>
      {error && <p className="footer-form-err">{error}</p>}
    </form>
  );
}
