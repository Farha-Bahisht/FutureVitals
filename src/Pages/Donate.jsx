import React, { useState } from "react";
import "./Donate.css";

export default function Donate() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="donate-page">
      {/* Hero Section */}
      <section className="donate-hero">
        <div className="donate-text">
          <h1>
            To help future doctors  <br />
            
          </h1>
          <p>
            Thank you for considering a donation to <strong>FutureVitals</strong>.
            Without your support, our organization would not be able to accomplish
            its yearly goals. If you have any questions or are interested in
            sponsoring our organization, please refer to the FAQ or contact us at{" "}
            <a href="Futurevitals.info@gmail.com">Futurevitals.info@gmail.com</a>.
          </p>
          <a
            href="https://your-donate-link.com"
            target="_blank"
            rel="noreferrer"
            className="donate-btn"
          >
            Donate
          </a>
        </div>

        <div className="donate-illustration">
          <img src="/assets/donate.png" alt="Donation illustration" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-intro">
          We know that donating to FutureVitals may bring up some questions.
          Below you can find answers to the most common ones.
        </p>

        <div className="faq-grid">
          <div
            className={`faq-card ${openIndex === 0 ? "open" : ""}`}
            onClick={() => toggleFAQ(0)}
          >
            <h3>01. Can I earmark a donation?</h3>
            <p>
              Yes. You can specify exactly where you’d like your donation
              to go under our programs. Please add a comment when making a donation.
            </p>
          </div>

          <div
            className={`faq-card ${openIndex === 1 ? "open" : ""}`}
            onClick={() => toggleFAQ(1)}
          >
            <h3>02. How do I sponsor?</h3>
            <p>
              Sponsorships are always welcome! FutureVitals has several
              levels of sponsorship and would love to hear your ideas.
              Please contact us at{" "}
              <a href="mailto:Futurevitals.info@gmail.com">Futurevitals.info@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
