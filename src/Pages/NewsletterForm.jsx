// src/Components/NewsletterForm.jsx
import React, { useState } from "react";
import "./NewsletterForm.css";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf1uojvpb8uofP4a67JQaSmE1nb4xTqz-B-k7Oq0wCYpwtoFQ/viewform?usp=header";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Optional: open your Google Form in a new tab
    if (typeof window !== "undefined") {
      window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
    }

    // Clear the email field
    setEmail("");
  };

  return (
    <div className="newsletter">
      <div className="newsletter-inner">
        <h2 className="newsletter-heading">Stay Updated</h2>
        <p className="newsletter-text">
          Sign up to receive updates about FutureVitals projects, events, and
          opportunities to get involved.
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <label className="newsletter-label" htmlFor="newsletter-email">
            Email address
          </label>
          <div className="newsletter-input-row">
            <input
              id="newsletter-email"
              type="email"
              className="newsletter-input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-button">
              Sign Up
            </button>
          </div>
        </form>

        {submitted && (
          <p className="newsletter-message">
            Thanks for your interest! A form has opened in a new tab where you
            can complete your subscription.
          </p>
        )}

        <p className="newsletter-footer">
          Prefer to manage it directly?{" "}
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="newsletter-link"
          >
            Open the form here.
          </a>
        </p>
      </div>
    </div>
  );
}
