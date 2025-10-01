import React from "react";
import "./GetInvolved.css";

export default function GetInvolved() {
  return (
    <div className="getinvolved">
      <h2 className="getinvolved-title">Get Involved</h2>
      <p className="getinvolved-subtitle">You Can Make a Difference</p>

      <div className="getinvolved-grid">
        {/* Volunteer */}
        <div className="getinvolved-card">
          <img src="/images/volunteer.jpg" alt="Volunteer" />
          <div className="getinvolved-card-content">
            <h3>Volunteer</h3>
            <p>
              Share your skills, time, and passion to support our mission of
              health equity. Every effort makes an impact.
            </p>
            <a
              href="https://forms.gle/your-google-form"
              target="_blank"
              rel="noreferrer"
              className="getinvolved-btn"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Start a Chapter */}
        <div className="getinvolved-card">
          <img src="/images/chapter.jpg" alt="Start a Chapter" />
          <div className="getinvolved-card-content">
            <h3>Start a Chapter</h3>
            <p>
              Bring FutureVitals to your community! Start a chapter and help
              expand access to resources and opportunities.
            </p>
            <a
              href="https://forms.gle/your-google-form"
              target="_blank"
              rel="noreferrer"
              className="getinvolved-btn"
            >
              Apply Now
            </a>
          </div>
        </div>

        {/* Partner */}
        <div className="getinvolved-card">
          <img src="/images/partner.jpg" alt="Partner" />
          <div className="getinvolved-card-content">
            <h3>Partner</h3>
            <p>
              Collaborate with us! We welcome organizations, schools, and
              professionals who share our vision of equity.
            </p>
            <a
              href="https://forms.gle/your-google-form"
              target="_blank"
              rel="noreferrer"
              className="getinvolved-btn"
            >
              Partner With Us
            </a>
          </div>
        </div>

        {/* Attend an Event */}
        <div className="getinvolved-card">
          <img src="/images/event.jpg" alt="Attend an Event" />
          <div className="getinvolved-card-content">
            <h3>Attend an Event</h3>
            <p>
              Join us at events and workshops that bring communities together
              and raise awareness for health equity.
            </p>
            <a
              href="https://forms.gle/your-google-form"
              target="_blank"
              rel="noreferrer"
              className="getinvolved-btn"
            >
              Register
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Google Form Section */}
      <div className="form-section">
        <h3>Want to get started right away?</h3>
        <p>Fill out our quick form and join the FutureVitals movement today.</p>
        <a
          href="https://forms.gle/your-google-form"
          target="_blank"
          rel="noreferrer"
          className="getinvolved-btn"
        >
          Open Form
        </a>
      </div>
    </div>
  );
}
