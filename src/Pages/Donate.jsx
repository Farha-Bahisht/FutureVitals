import React, { useState } from "react";
import "./Donate.css";

export default function Donate() {
  const [openIndex, setOpenIndex] = useState(null);

 

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

      

        
     
    </div>
  );
}
