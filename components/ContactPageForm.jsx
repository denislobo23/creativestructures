"use client";

import { useState } from "react";

const ENDPOINT = "https://formspree.io/f/mnjkqdlz";

export default function ContactPageForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    try {
      const res = await fetch(ENDPOINT, {
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
      <div className="ok">
        <h3>Message sent.</h3>
        <p>Thanks — we&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="_subject" value="Contact page message — Creative Structures" />
      <input type="text" name="_gotcha" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="field row">
        <div>
          <label htmlFor="cname">Name</label>
          <input id="cname" name="Name" type="text" placeholder="Your name" required />
        </div>
        <div>
          <label htmlFor="cemail">Email</label>
          <input id="cemail" name="Email" type="email" placeholder="you@email.com" required />
        </div>
      </div>

      <div className="field">
        <label htmlFor="csubj">Subject</label>
        <input id="csubj" name="Topic" type="text" placeholder="What's it about?" />
      </div>

      <div className="field">
        <label htmlFor="cmsg">Message</label>
        <textarea id="cmsg" name="Message" placeholder="How can we help?" required />
      </div>

      <button type="submit" className="btn" disabled={sending}>
        {sending ? "Sending…" : "Send message"}
      </button>
      {error && <p className="formnote" style={{ color: "#9a3b2e" }}>{error}</p>}
    </form>
  );
}
