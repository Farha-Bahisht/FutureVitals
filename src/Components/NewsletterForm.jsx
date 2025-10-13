import React, { useState } from "react";
import "./NewsletterForm.css";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // 🚧 handleSubscribe temporarily disabled
  /*
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
        setMessage("Subscribed successfully!");
        setEmail("");
      } else {
        setMessage(data.error || "Something went wrong");
      }
    } catch (err) {
      setMessage("Server error. Try again later.");
    }

    setLoading(false);
  };
  */

  return (
    <div className="newsletter">
      {/* 🚧 Subscription form temporarily disabled */}
      {/*
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
      */}

      {message && <p className="newsletter-message">{message}</p>}

      <p className="unsubscribe">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf1uojvpb8uofP4a67JQaSmE1nb4xTqz-B-k7Oq0wCYpwtoFQ/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsubscribe
        </a>
      </p>
    </div>
  );
}
