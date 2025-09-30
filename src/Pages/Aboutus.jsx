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

        <div className="program">
          <div className="program-text">
            <h3>STEM Spotlight Series</h3>
            <p>
              Discover the world of STEM through inspiring interviews with
              professionals in various fields. Our video series highlights
              pathways, challenges, and career insights for students.
            </p>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              Watch on YouTube
            </a>
          </div>
          <div className="program-img">
            <img src="/images/stem-spotlight.jpg" alt="STEM Spotlight" />
          </div>
        </div>

        <div className="program reverse">
          <div className="program-text">
            <h3>Journal Club</h3>
            <p>
              Our Journal Club empowers students to engage with current
              scientific literature and improve their critical thinking skills.
              Together, members explore and discuss research papers in a
              collaborative setting.
            </p>
          </div>
          <div className="program-img">
            <img src="/images/journal-club.jpg" alt="Journal Club" />
          </div>
        </div>

        <div className="program">
          <div className="program-text">
            <h3>Community Outreach</h3>
            <p>
              Omnisci STEM fosters outreach initiatives that bring STEM
              education into schools and communities, creating access and
              opportunities for the next generation of scientists.
            </p>
          </div>
          <div className="program-img">
            <img src="/images/community-outreach.jpg" alt="Community Outreach" />
          </div>
        </div>
      </section>
    </div>
  );
}