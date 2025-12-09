import React from "react";
import "./Donate.css";

export default function Donate() {
  return (
    <div className="donate-page">
      {/* Hero Section */}
      <section className="donate-hero">
        {/* Pink Text Box */}
        <div className="donate-text-box">
          <h1>To help future doctors</h1>
          <p>
            Thank you for considering a donation to <strong>FutureVitals</strong>.
            Without your support, our organization would not be able to accomplish
            its yearly goals. If you have any questions or are interested in
            sponsoring our organization, please refer to the FAQ or contact us at{" "}
            <a href="mailto:Futurevitals.info@gmail.com">Futurevitals.info@gmail.com</a>.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf1uojvpb8uofP4a67JQaSmE1nb4xTqz-B-k7Oq0wCYpwtoFQ/viewform?usp=header"
            target="_blank"
            rel="noreferrer"
            className="donate-btn"
          >
            Donate
          </a>
        </div>

        {/* Illustration */}
        <div className="donate-image">
          <img src="/assets/donate.png" alt="Donation illustration" />
        </div>
      </section>
    </div>
  );
}
