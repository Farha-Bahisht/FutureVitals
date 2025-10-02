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
      {/* Mission Section */}
      <section className="mission">
        <div className="mission-text">
          <h2>{about.mission.title}</h2>
          <p>{about.mission.text}</p>
          <button>Join Our Mission</button>
        </div>
        <div className="mission-img">
          <img src={about.mission.image} alt="Mission" />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="programs">
        <h2>What We Do</h2>

        {about.programs.map((program, i) => (
          <div
            key={i}
            className={`program ${i % 2 === 1 ? "reverse" : ""}`}
          >
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

      {/* Who We Are Section */}
      <section className="team">
        <h2>Who We Are</h2>
        <p className="team-intro">
          Meet the passionate individuals behind FutureVitals, dedicated to
          advancing STEM, mentorship, and community outreach.
        </p>

        <div className="team-cards">
          {about.team.map((member, i) => (
            <div className="team-card" key={i}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p className="quote">"{member.quote}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
