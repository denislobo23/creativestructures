"use client";

import { useState } from "react";

// ▸ Formspree endpoint for the project brief form.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjkqdlz";

export default function BriefForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // Not configured yet → let the user know rather than failing silently.
    if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      setError(
        "Form isn't connected yet — add your Formspree endpoint in components/BriefForm.jsx."
      );
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong sending your brief. Please try again.");
      }
    } catch {
      setError("Couldn't reach the server. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="ok">
        <h3>Brief received.</h3>
        <p>
          Thanks — we&apos;ll match you with the right maker and be in touch shortly.
          Keep an eye on your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="_subject" value="New project brief — Creative Structures" />
      <input type="text" name="_gotcha" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="field">
        <label htmlFor="ptype">Project type</label>
        <select id="ptype" name="Project type" required defaultValue="">
          <option value="" disabled>Choose one…</option>
          <option>Custom pergola</option>
          <option>Patio / verandah</option>
          <option>Pavilion / outdoor room</option>
          <option>Louvred / opening roof</option>
          <option>Screening / privacy</option>
          <option>Carport / entry</option>
          <option>Poolside structure</option>
          <option>Something else</option>
        </select>
      </div>

      <div className="field row">
        <div>
          <label htmlFor="budget">Budget range</label>
          <select id="budget" name="Budget" required defaultValue="">
            <option value="" disabled>Select…</option>
            <option>Under $15k</option>
            <option>$15k – $30k</option>
            <option>$30k – $50k</option>
            <option>$50k – $80k</option>
            <option>$80k+</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeframe">Timeframe</label>
          <select id="timeframe" name="Timeframe" required defaultValue="">
            <option value="" disabled>Select…</option>
            <option>As soon as possible</option>
            <option>1 – 3 months</option>
            <option>3 – 6 months</option>
            <option>6 – 12 months</option>
            <option>Just exploring</option>
          </select>
        </div>
      </div>

      <div className="field row">
        <div>
          <label htmlFor="postcode">Postcode</label>
          <input id="postcode" name="Postcode" inputMode="numeric" pattern="[0-9]{4}" maxLength={4} placeholder="3000" required />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="Phone" type="tel" placeholder="0400 000 000" required />
        </div>
      </div>

      <div className="field row">
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="Name" type="text" placeholder="Your name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="Email" type="email" placeholder="you@email.com" required />
        </div>
      </div>

      <div className="field">
        <label htmlFor="details">About the project</label>
        <textarea id="details" name="Details" placeholder="What are you picturing? Rough size, materials, where it sits on the property, anything that helps…" />
      </div>

      <button type="submit" className="btn" disabled={sending}>
        {sending ? "Sending…" : "Send my brief"}
      </button>

      {error && (
        <p className="formnote" style={{ color: "#9a3b2e" }}>{error}</p>
      )}
      <p className="formnote">No cost · no obligation · matched to one local maker</p>
    </form>
  );
}
