import React from "react";
import "./Home.css";
import WhereWeWork from "../Components/WhereWeWork";
import NewsletterForm from "../Components/NewsletterForm";

const stats = [
  { title: "Cardio Access", copy: "914K lack preventive screening" },
  { title: "Vision Care", copy: "244K need annual exams" },
  { title: "Chronic Dx", copy: "251K require ongoing labs" },
  { title: "Clinic Reach", copy: "116K outside 30-min radius" },
];

export default function Home() {
  return (
    <main className="page-background">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>FutureVitals</h1>
          <p>The pulse of health equity.</p>
        </div>
        <div className="hero-illustration">
          <img src="/assets/hero-illustration.png" alt="Healthcare illustration" />
        </div>
      </section>

      {/* TAB */}
      <section className="hero-tab-wrap">
        <div className="hero-tab">
          <h2>Whatever you want to say</h2>
          <p>FutureVitals and partners align to support people and ecosystems.</p>
        </div>
      </section>

      {/* STATS / CHALLENGE */}
      <section className="impact">
        <div className="impact-content">
          <h2 className="impact-title">The Challenge</h2>
          <p className="impact-lede">
            <strong className="pill">1 in 5 people</strong> face barriers to
            timely, equitable care. FutureVitals tracks the gaps and moves
            resources where they matter most.
          </p>
          <ul className="impact-stats">
            {stats.map(({ title, copy }) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ul>
          <a className="impact-link" href="#learn">
            Learn more →
          </a>
        </div>

        <figure className="impact-media">
          <img
            src="/assets/Stats.jpg"
            alt="Healthcare statistics and impact data"
          />
        </figure>
      </section>

      {/* WHERE WE WORK */}
      <section className="page-section where-we-work">
        <h2>Where We Work</h2>
        <div className="map-wrap">
          <WhereWeWork />
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="page-section">
        <h2>Stay Updated</h2>
        <p>Sign up for our newsletter to receive updates and news.</p>
        <NewsletterForm />
      </section>
    </main>
  );
};

export { Home };
