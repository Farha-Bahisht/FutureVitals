import React from "react";
import "./Aboutus.css";

export default function AboutUs() {
  return (
    <div className="about">
      {/* Mission Section */}
      <section className="mission">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            FV is dedicated to empowering students through mentorship,
            science communication, and community outreach. We provide students
            with the resources and opportunities they need to explore STEM fields
            and share their knowledge with others.
          </p>
          <button>Join Our Mission</button>
        </div>
        <div className="mission-img">
          <img src="/images/mission.jpg" alt="Mission" />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="programs">
        <h2>What We Do</h2>

        <div className="program">
          <div className="program-text">
            <h3>Mentorship Program</h3>
            <p>
              Our mentorship program connects students with STEM professionals,
              offering personalized guidance, resources, and a supportive
              community. Mentees gain access to opportunities to grow academically
              and professionally.
            </p>
            <button>View Program</button>
          </div>
          <div className="program-img">
            <img src="/images/mentorship.jpg" alt="Mentorship Program" />
          </div>
        </div>

        <div className="program reverse">
          <div className="program-text">
            <h3>Science Blog</h3>
            <p>
              At FV, we amplify the voices of students and young
              scientists by publishing articles that highlight STEM advances,
              share research, and explore new discoveries.
            </p>
            <button>Read the Blog</button>
          </div>
          <div className="program-img">
            <img src="/images/science-blog.jpg" alt="Science Blog" />
          </div>
        </div>
        </section>
        
        {/* Who We Are Section */}
<section className="team">
  <h2>Who We Are</h2>
  <p className="team-intro">
    Meet the passionate individuals behind FutureVitals, dedicated to advancing STEM, mentorship, and community outreach.
  </p>

  <div className="team-cards">
    {/* Example team member */}
    <div className="team-card">
      <img src="/images/team1.jpg" alt="Team Member" />
      <h3>Jane Doe</h3>
      <p>Founder & Director</p>
      <p className="quote">"Passionate about empowering youth in STEM."</p>
    </div>

    <div className="team-card">
      <img src="/images/team2.jpg" alt="Team Member" />
      <h3>John Smith</h3>
      <p>Program Coordinator</p>
      <p className="quote">"Creating opportunities through mentorship."</p>
    </div>

    <div className="team-card">
      <img src="/images/team3.jpg" alt="Team Member" />
      <h3>Emily Brown</h3>
      <p>Science Communicator</p>
      <p className="quote">"Making science accessible for all."</p>
    </div>

    {/* Add more cards as needed */}
  </div>
</section>

    </div>
  );
}