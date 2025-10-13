import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Aboutus.css";

export default function AboutUs() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/api/aboutus").then((res) => {
      setAbout(res.data);
    });
  }, []);

  if (!about) return <p>Loading...</p>;

  return (
    <div className="about">
      {/* WHO WE ARE SECTION */}
      <section className="who-we-are">
        <div className="who-text">
          <h2>{about.whoWeAre?.title || "Who We Are"}</h2>
          <p>{about.whoWeAre?.text || "..."}</p>
        </div>
        <div className="who-illustration">
          <img
            src={about.whoWeAre?.image || "/images/team-illustration.svg"}
            alt="Who We Are Illustration"
          />
        </div>

        {/* 🌊 Wave SVG */}
        <div className="wave">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L48,192C96,160,192,96,288,85.3C384,75,480,117,576,144C672,171,768,181,864,170.7C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="mission-vision">
        <h2>What We Stand For</h2>
        <p className="subtitle">
          Educate, Inspire, Impact or Learn, Lead, Change
        </p>
        <div className="mv-grid">
          <div className="mv-card">
            <h3>{about.mission?.title || "Our Mission"}</h3>
            <p>{about.mission?.text || ""}</p>
            
          </div>
          <div className="mv-card">
            <h3>{about.vision?.title || "Our Vision"}</h3>
            <p>{about.vision?.text || ""}</p>
            
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="programs">
        <h2>What We Do</h2>

        {about.programs.map((program, i) => (
          <div key={i} className={`program ${i % 2 === 1 ? "reverse" : ""}`}>
            <div className="program-text">
              <h3>{program.title}</h3>
              <p>{program.text}</p>
              <button>
                {program.title.includes("Mentor")
                  ? "View Program"
                  : program.title.includes("Blog")
                  ? "Read the Blog"
                  : "Learn More"}
              </button>
            </div>
            <div className="program-img">
              <img src={program.image} alt={program.title} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
