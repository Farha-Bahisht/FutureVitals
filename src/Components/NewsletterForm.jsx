import React, { useState } from "react";
import "./NewsletterForm.css";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:4000/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(" Subscribed successfully!");
        setEmail("");
      } else {
        setMessage( (data.error || "Something went wrong"));
      }
    } catch (err) {
      setMessage("Server error. Try again later.");
    }

    setLoading(false);
  };

  const handleUnsubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`http://localhost:4000/api/newsletter/unsubscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(" Unsubscribed successfully.");
        setEmail("");
      } else {
        setMessage((data.error || "Could not unsubscribe"));
      }
    } catch (err) {
      setMessage(" Server error. Try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="newsletter">
      <form onSubmit={handleSubscribe} className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Please wait..." : "Subscribe"}
        </button>
      </form>

      {message && <p className="newsletter-message">{message}</p>}

      <p className="unsubscribe">
        <a href="#" onClick={handleUnsubscribe}>
          Unsubscribe
        </a>
      </p>
    </div>
  );
}
