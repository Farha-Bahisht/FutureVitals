import React, { useEffect, useState } from "react";
//import axios from "axios";



import "./Team.css";

export default function Team() {
  const [team, setTeam] = useState([]);
  const [advisors, setAdvisors] = useState([]);

  useEffect(() => {
    setTeam([
      { name: "Zaina KHAN", roleTitle: "Founder, Co-President", image: "/images/rania.jpg", bio: "..." },
      { name: "Zaib Zahir", roleTitle: "Co-President", image: "/images/zaib.jpg", bio: "..." },
      { name: "Charlie Roderick", roleTitle: "VP Social Media", image: "/images/charlie.jpg", bio: "..." },
    ]);

    setAdvisors([
      { name: "Dr. Rumana Kazmi", roleTitle: "Advisor", image: "/images/rumana.jpg", bio: "..." },
      { name: "Dr. David Parrish", roleTitle: "Advisor", image: "/images/david.jpg", bio: "..." },
    ]);
  }, []);

  return (
    <div className="team-page">
      {/* ================= PUZZLE ANIMATION SECTION ================= */}
      <section className="puzzle-section">
        <div className="puzzle-title">
          <h2>Behind the Scenes</h2>
          <p> 
            Meet the passionate individuals who make <strong>FutureVitals</strong> what it is — 
            a vibrant community shaping the future of health, advocacy, and youth leadership.
          </p>
        </div>

        <div className="puzzle-animation">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="piece"
              style={{
                "--startX": `${Math.random() * 200 - 100}vw`,
                "--startY": `${Math.random() * 200 - 100}vh`,
                animationDelay: `${i * 0.1}s`,
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="team-section">
        <h2 className="team-title">Meet the Team</h2>
        <div className="team-grid">
          {team.map((member, i) => (
            <div className="team-card" key={i}>
              <img src={member.image} alt={member.name} />
              <div className="team-card-content">
                <p className="team-role">{member.roleTitle}</p>
                <h3>{member.name}</h3>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ADVISORY SECTION ================= */}
      <section className="advisory-section">
        <h2 className="advisory-title">Advisory Board</h2>
        <div className="advisory-scroll">
          {advisors.map((advisor, i) => (
            <div className="advisor-card" key={i}>
              <img src={advisor.image} alt={advisor.name} />
              <div className="advisor-card-content">
                <p className="advisor-role">{advisor.roleTitle}</p>
                <h3>{advisor.name}</h3>
                <p className="advisor-bio">{advisor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
